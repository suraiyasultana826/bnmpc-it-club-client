import { useState } from "react";
import { motion } from "motion/react";
import { Lock, User, Eye, EyeOff, LogIn } from "lucide-react";
import logo from "../../assets/ITC LOGO.png";

const SERVER = "https://bnmpc-itc-server.vercel.app";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${SERVER}/admin/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem("itcadmin", "1");
        onLogin();
      } else {
        setError(data.error || "Invalid credentials.");
      }
    } catch {
      setError("Could not reach the server. Please try again.");
    }
    setLoading(false);
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-400/40 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(56,189,248,0.08)]";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080d1a] px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="mb-7 flex flex-col items-center gap-3">
            <img src={logo} alt="BNMPC IT Club" className="h-14 w-14 opacity-90" />
            <div>
              <h1 className="text-center text-lg font-semibold text-white">Admin Panel</h1>
              <p className="text-center text-xs text-slate-500">BNMPC IT Club · Restricted Access</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-mono uppercase tracking-widest text-slate-500">Username</span>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <User className="h-4 w-4" />
                </span>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  autoComplete="username"
                  className={inputCls}
                  required
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[10px] font-mono uppercase tracking-widest text-slate-500">Password</span>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="current-password"
                  className={inputCls + " pr-10"}
                  required
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </label>

            {error && (
              <p className="rounded-lg border border-rose-400/20 bg-rose-500/8 px-3 py-2 text-xs text-rose-300">
                {error}
              </p>
            )}

            <button type="submit" disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 py-3 text-sm font-semibold text-cyan-200 transition-all hover:bg-cyan-500/15 hover:border-cyan-400/35 disabled:opacity-50">
              {loading ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" /> Verifying...</>
                : <><LogIn className="h-4 w-4" /> Sign In</>}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
