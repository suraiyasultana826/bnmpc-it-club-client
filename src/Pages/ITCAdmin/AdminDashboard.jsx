import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { Users, Link2, ToggleLeft, LogOut, Download, RefreshCw, Save, ChevronDown, Trash2 } from "lucide-react";
import logo from "../../assets/ITC LOGO.png";

const SERVER = "https://bnmpc-it-club-server.vercel.app";

const TABS = [
  { id: "registrations", label: "Registrations", icon: Users },
  { id: "gclinks",       label: "GC Links",       icon: Link2 },
  { id: "recruitment",   label: "Recruitment",    icon: ToggleLeft },
];

export default function AdminDashboard({ onLogout }) {
  const [tab, setTab] = useState("registrations");

  return (
    <div className="flex min-h-screen w-full bg-[#080d1a] text-white">
      {/* Sidebar */}
      <aside className="flex w-52 shrink-0 flex-col border-r border-white/6 bg-[#080d1a] px-4 py-6">
        <div className="mb-8 flex items-center gap-3 px-2">
          <img src={logo} alt="ITC" className="h-8 w-8" />
          <div>
            <p className="text-xs font-semibold text-white">ITC Admin</p>
            <p className="text-[10px] text-slate-500">BNMPC IT Club</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                tab === id
                  ? "bg-cyan-500/12 text-cyan-300 border border-cyan-400/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}>
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        <button onClick={onLogout}
          className="mt-auto flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-500 hover:bg-white/5 hover:text-rose-300 transition-all">
          <LogOut className="h-4 w-4" /> Sign Out
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto bg-[#080d1a] p-8">
        {tab === "registrations" && <RegistrationsTab />}
        {tab === "gclinks"       && <GcLinksTab />}
        {tab === "recruitment"   && <RecruitmentTab />}
      </main>
    </div>
  );
}

// ── Registrations ─────────────────────────────────────────────────────────────
const classGroupFor = (className) => {
  const value = String(className || "").trim().toUpperCase();
  if (!value) return "Unknown";

  if (["VI", "VII", "VIII", "IX", "X", "6", "7", "8", "9", "10", "CLASS VI", "CLASS VII", "CLASS VIII", "CLASS IX", "CLASS X"].includes(value) || value.startsWith("CLASS ") && ["VI", "VII", "VIII", "IX", "X"].includes(value.replace("CLASS ", ""))) {
    return "School";
  }

  if (["XI", "11", "CLASS XI"].includes(value)) {
    return "College";
  }

  return "Unknown";
};

function RegistrationsTab() {
  const [data, setData]               = useState([]);
  const [loading, setLoading]         = useState(true);
  const [years, setYears]             = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");
  const [deleting, setDeleting]       = useState(null);

  const load = (year) => {
    setLoading(true);
    const url = year && year !== "all"
      ? `${SERVER}/register?year=${year}`
      : `${SERVER}/register`;
    fetch(url)
      .then((r) => r.json())
      .then((rows) => {
        if (!Array.isArray(rows)) { setLoading(false); return; }
        setData(rows);
        const unique = [...new Set(rows.map((r) => r.year).filter(Boolean))].sort().reverse();
        setYears(unique);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => { load("all"); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this registration? This cannot be undone.")) return;
    setDeleting(id);
    await fetch(`${SERVER}/register/${id}`, { method: "DELETE" });
    setData((prev) => prev.filter((r) => r._id !== id));
    setDeleting(null);
  };

  const filteredData = groupFilter === "all"
    ? data
    : data.filter((row) => classGroupFor(row.className) === groupFilter);

  const downloadExcel = (group = groupFilter) => {
    const rows = (group === "all" ? data : data.filter((r) => classGroupFor(r.className) === group)).map((r) => ({
      "Name":      r.fullName,
      "Class":     r.className,
      "Group":     classGroupFor(r.className),
      "Roll":      r.roll,
      "Section":   r.section,
      "Email":     r.email,
      "Contact":   r.contact,
      "Facebook":  r.facebook,
      "Submitted": r.submittedAt ? new Date(r.submittedAt).toLocaleString() : "",
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, group === "all" ? "Registrations" : group);
    XLSX.writeFile(wb, `ITC_Registrations_${selectedYear === "all" ? "All" : selectedYear}_${group === "all" ? "All" : group}.xlsx`);
  };

  const COLS = ["Name", "Class", "Group", "Roll", "Section", "Email", "Contact", "Facebook", "Submitted", ""];

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Registrations</h2>
          <p className="text-xs text-slate-500">{data.length} record{data.length !== 1 ? "s" : ""} found</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => { setSelectedYear(e.target.value); load(e.target.value); }}
              className="appearance-none rounded-xl border border-white/10 bg-white/5 py-2 pl-3 pr-8 text-sm text-white outline-none focus:border-cyan-400/30"
            >
              <option value="all">All Years</option>
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>

          <div className="relative">
            <select
              value={groupFilter}
              onChange={(e) => setGroupFilter(e.target.value)}
              className="appearance-none rounded-xl border border-white/10 bg-white/5 py-2 pl-3 pr-8 text-sm text-white outline-none focus:border-cyan-400/30"
            >
              <option value="all">All groups</option>
              <option value="School">School GC</option>
              <option value="College">College GC</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>

          <button onClick={() => load(selectedYear)}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:bg-white/8 transition-all">
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
          <button onClick={() => downloadExcel("School")} disabled={!data.some((r) => classGroupFor(r.className) === "School")}
            className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300 hover:bg-cyan-500/15 transition-all disabled:opacity-40">
            <Download className="h-4 w-4" /> School Excel
          </button>
          <button onClick={() => downloadExcel("College")} disabled={!data.some((r) => classGroupFor(r.className) === "College")}
            className="flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-sm text-violet-300 hover:bg-violet-500/15 transition-all disabled:opacity-40">
            <Download className="h-4 w-4" /> College Excel
          </button>
        </div>
      </div>

      <div className="mb-4 text-xs text-slate-400">
        Showing: <span className="font-medium text-white">{groupFilter === "all" ? "All registrations" : `${groupFilter} registrations`}</span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/6 bg-white/[0.02]">
              {COLS.map((c, i) => (
                <th key={i} className="px-4 py-3 text-left text-[10px] font-mono uppercase tracking-widest text-slate-500 whitespace-nowrap">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={COLS.length} className="py-12 text-center text-slate-500">Loading...</td></tr>
            ) : filteredData.length === 0 ? (
              <tr><td colSpan={COLS.length} className="py-12 text-center text-slate-500">No registrations found for this group.</td></tr>
            ) : filteredData.map((row, i) => (
              <tr key={row._id || i} className="border-b border-white/4 hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-3 text-white whitespace-nowrap">{row.fullName}</td>
                <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{row.className}</td>
                <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{classGroupFor(row.className)}</td>
                <td className="px-4 py-3 text-slate-300">{row.roll}</td>
                <td className="px-4 py-3 text-slate-300">{row.section}</td>
                <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{row.email}</td>
                <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{row.contact}</td>
                <td className="px-4 py-3 max-w-[180px] truncate">
                  <a href={row.facebook} target="_blank" rel="noopener noreferrer"
                    className="text-cyan-400/80 hover:text-cyan-300 transition-colors underline underline-offset-2 text-xs">
                    {row.facebook}
                  </a>
                </td>
                <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">
                  {row.submittedAt ? new Date(row.submittedAt).toLocaleString() : "—"}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(row._id)}
                    disabled={deleting === row._id}
                    className="flex items-center justify-center rounded-lg border border-rose-400/20 bg-rose-500/8 p-1.5 text-rose-400 hover:bg-rose-500/15 transition-all disabled:opacity-40"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── GC Links ──────────────────────────────────────────────────────────────────
function GcLinksTab() {
  const [links, setLinks] = useState([
    { id: "gca",    label: "Join College GC-A", url: "" },
    { id: "gcb",    label: "Join College GC-B", url: "" },
    { id: "school", label: "Join School GC",    url: "" },
  ]);
  const [saving, setSaving] = useState(false);
  const [saved,  setSaved]  = useState(false);

  useEffect(() => {
    fetch(`${SERVER}/settings/gclinks`)
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data) && data.length) setLinks(data); })
      .catch(() => {});
  }, []);

  const update = (id, url) => setLinks((prev) => prev.map((l) => l.id === id ? { ...l, url } : l));

  const save = async () => {
    setSaving(true);
    await fetch(`${SERVER}/settings/gclinks`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ links }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-lg">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">GC Link Control</h2>
        <p className="text-xs text-slate-500">Update the Messenger group links shown to applicants after registration.</p>
      </div>
      <div className="space-y-4">
        {links.map((link) => (
          <label key={link.id} className="block">
            <span className="mb-1.5 block text-[10px] font-mono uppercase tracking-widest text-slate-500">{link.label}</span>
            <input
              value={link.url}
              onChange={(e) => update(link.id, e.target.value)}
              placeholder="https://m.me/j/..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-cyan-400/30 focus:bg-white/8"
            />
          </label>
        ))}
      </div>
      <button onClick={save} disabled={saving}
        className="mt-6 flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/15 transition-all disabled:opacity-50">
        {saving
          ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" /> Saving...</>
          : <><Save className="h-4 w-4" /> {saved ? "Saved!" : "Save Changes"}</>
        }
      </button>
    </div>
  );
}

// ── Recruitment Control ───────────────────────────────────────────────────────
function RecruitmentTab() {
  const [isOpen,  setIsOpen]  = useState(true);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);

  useEffect(() => {
    fetch(`${SERVER}/settings/recruitment`)
      .then((r) => r.json())
      .then((d) => { setIsOpen(d.isOpen); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const toggle = async (val) => {
    setSaving(true);
    await fetch(`${SERVER}/settings/recruitment`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ isOpen: val }),
    });
    setIsOpen(val);
    setSaving(false);
  };

  return (
    <div className="max-w-md">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">Recruitment Control</h2>
        <p className="text-xs text-slate-500">Toggle whether the registration form is open or closed to applicants.</p>
      </div>
      <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-6">
        {loading ? (
          <p className="text-sm text-slate-500">Loading status...</p>
        ) : (
          <>
            <div className="mb-5 flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${isOpen ? "bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" : "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]"}`} />
              <span className="text-sm font-medium text-white">
                Recruitment is currently{" "}
                <span className={isOpen ? "text-cyan-300" : "text-rose-300"}>
                  {isOpen ? "Open" : "Closed"}
                </span>
              </span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => toggle(true)} disabled={isOpen || saving}
                className="flex-1 rounded-xl border border-cyan-400/20 bg-cyan-500/10 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-500/18 transition-all disabled:opacity-40">
                Open Recruitment
              </button>
              <button onClick={() => toggle(false)} disabled={!isOpen || saving}
                className="flex-1 rounded-xl border border-rose-400/20 bg-rose-500/10 py-2.5 text-sm font-semibold text-rose-300 hover:bg-rose-500/15 transition-all disabled:opacity-40">
                Close Recruitment
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              When closed, the registration form will be hidden and applicants will see a notice directing them to the official Facebook page.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
