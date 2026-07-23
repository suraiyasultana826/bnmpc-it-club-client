import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Phone, GraduationCap, Hash, Users, Send, CheckCircle2, ExternalLink, Loader2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { toast } from "sonner";

const SERVER = "https://bnmpc-itc-server.vercel.app";

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(80),
  className: z.string().trim().min(1, "Enter your class").max(40),
  roll: z.string().trim().min(1, "Enter your roll number").max(10).regex(/^[0-9]+$/, "Digits only"),
  section: z.string().trim().min(1, "Select your section").max(2),
  email: z.string().trim().email("Enter a valid email address").max(120),
  contact: z.string().trim().min(6, "Enter a valid phone number").max(20),
  facebook: z.string().trim().url("Enter a valid Facebook profile URL").max(200)
    .refine((v) => /facebook\.com|fb\.com|fb\.me/i.test(v), { message: "Must be a Facebook profile URL" }),
});

const SECTIONS = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const DEFAULT_GC_LINKS = [
  { id: "gca",    label: "Join College GC-A", url: "https://m.me/j/AbYourCollegeGCA/" },
  { id: "gcb",    label: "Join College GC-B", url: "https://m.me/j/AbYourCollegeGCB/" },
  { id: "school", label: "Join School GC",    url: "https://m.me/j/AbYourSchoolGC/"   },
];

function FieldIcon({ children }) {
  return (
    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-cyan-300/70">
      {children}
    </span>
  );
}

const inputBase =
  "w-full rounded-xl border border-cyan-400/20 bg-white/[0.04] py-3 pl-10 pr-3 text-sm text-white placeholder:text-slate-400/50 outline-none backdrop-blur-sm transition-all focus:border-cyan-300/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(56,189,248,0.10)]";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-200/70">
        {label}
      </span>
      <div className="relative">{children}</div>
      {error && <span className="mt-1 block text-xs text-rose-300/90">{error}</span>}
    </label>
  );
}

export default function RecruitmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [gcLinks, setGcLinks] = useState(DEFAULT_GC_LINKS);
  const [statusLoading, setStatusLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${SERVER}/settings/recruitment`).then(r => r.json()).catch(() => ({ isOpen: true })),
      fetch(`${SERVER}/settings/gclinks`).then(r => r.json()).catch(() => DEFAULT_GC_LINKS),
    ]).then(([status, links]) => {
      setIsOpen(status.isOpen);
      if (Array.isArray(links) && links.length) setGcLinks(links);
      setStatusLoading(false);
    });
  }, []);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${SERVER}/register`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.insertedId) {
        toast.success("Application received. Welcome to the club!");
        setSubmitted(true);
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Could not reach the server. Please try again later.");
    }
  };

  // ── Closed state ─────────────────────────────────────────────────
  if (!statusLoading && !isOpen) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto w-full max-w-lg"
      >
        <div className="glass-card p-8 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-rose-300">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              Recruitment · Closed
            </div>
            <div className="mt-1 rounded-xl border border-rose-400/25 bg-rose-500/8 px-5 py-4">
              <p className="text-sm text-rose-200/80 leading-relaxed">
                Recruitment is currently closed. To join the BNMPC IT Club, please send a message to the{" "}
                <a
                  href="https://www.facebook.com/bnmpcitclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-rose-300 underline underline-offset-2 hover:text-rose-200 transition-colors"
                >
                  official BNMPC IT Club Facebook Page
                </a>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // ── Success state ─────────────────────────────────────────────────
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-lg"
      >
        <div className="glass-card p-8 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 ring-1 ring-cyan-400/30">
              <CheckCircle2 className="h-8 w-8 text-cyan-300" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">You&apos;re in.</h2>
            <p className="mt-2 text-sm text-slate-300/70">
              Your application has been recorded. Join your official Messenger group below.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3">
            {gcLinks.map((gc) => (
              <a key={gc.id} href={gc.url} target="_blank" rel="noopener noreferrer"
                className="smoke-btn flex items-center justify-between gap-2">
                <span>{gc.label}</span>
                <ExternalLink className="h-4 w-4 shrink-0 opacity-70" />
              </a>
            ))}
          </div>

          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/50">
            Please join only one group
          </p>

          <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3">
            <p className="text-xs text-amber-200/80 leading-relaxed">
              <span className="font-semibold text-amber-300">NB:</span> If you have any trouble joining the Messenger group, please send a message to the{" "}
              <a
                href="https://www.facebook.com/bnmpcitclub"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-amber-300 hover:text-amber-200 transition-colors"
              >
                BNMPC IT Club Facebook Page
              </a>.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="glass-card p-6 sm:p-9">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </span>
            Recruitment · Open
          </div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Join the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              BNMPC IT Club
            </span>
          </h1>
          <p className="max-w-sm text-xs text-slate-400/80">
            An Empirical Deep Dive Into The Tech Realm.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-4">
          <Field label="Full name" error={errors.fullName?.message}>
            <FieldIcon><User className="h-4 w-4" /></FieldIcon>
            <input {...register("fullName")} placeholder="Your full name" className={inputBase} />
          </Field>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Class" error={errors.className?.message}>
              <FieldIcon><GraduationCap className="h-4 w-4" /></FieldIcon>
              <input {...register("className")} placeholder="e.g. Class 10" className={inputBase} />
            </Field>
            <Field label="Roll" error={errors.roll?.message}>
              <FieldIcon><Hash className="h-4 w-4" /></FieldIcon>
              <input {...register("roll")} inputMode="numeric" placeholder="e.g. 123" className={inputBase} />
            </Field>
            <Field label="Section" error={errors.section?.message}>
              <FieldIcon><Users className="h-4 w-4" /></FieldIcon>
              <select {...register("section")} defaultValue="" className={inputBase + " appearance-none"}>
                <option value="" disabled>Select section</option>
                {SECTIONS.map((s) => <option key={s} value={s} className="bg-[#0a1224]">{s}</option>)}
              </select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <FieldIcon><Mail className="h-4 w-4" /></FieldIcon>
              <input {...register("email")} type="email" placeholder="you@example.com" className={inputBase} />
            </Field>
            <Field label="Contact no." error={errors.contact?.message}>
              <FieldIcon><Phone className="h-4 w-4" /></FieldIcon>
              <input {...register("contact")} placeholder="+880 1XXX-XXXXXX" className={inputBase} />
            </Field>
          </div>

          <Field label="Facebook profile URL" error={errors.facebook?.message}>
            <FieldIcon><FaFacebook className="h-4 w-4" /></FieldIcon>
            <input {...register("facebook")} placeholder="https://facebook.com/your.profile" className={inputBase} />
          </Field>

          <button type="submit" disabled={isSubmitting}
            className="smoke-btn group relative mt-2 flex w-full items-center justify-center gap-2 disabled:opacity-60">
            {isSubmitting
              ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
              : <>Submit Application <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>
            }
          </button>

          <p className="pt-1 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500/70">
            You will receive the Messenger group link after submitting
          </p>
        </form>
      </div>
    </motion.div>
  );
}
