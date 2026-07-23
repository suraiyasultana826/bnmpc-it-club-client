import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

const ITCAdmin = () => {
  const [authed, setAuthed] = useState(!!sessionStorage.getItem("itcadmin"));

  const handleLogout = () => {
    sessionStorage.removeItem("itcadmin");
    setAuthed(false);
  };

  return authed
    ? <AdminDashboard onLogout={handleLogout} />
    : <AdminLogin onLogin={() => setAuthed(true)} />;
};

export default ITCAdmin;
