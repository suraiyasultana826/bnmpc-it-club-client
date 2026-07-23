import { useState } from "react";
import { motion } from "motion/react";
import { Toaster } from "sonner";
import ShaderBackground from "./ShaderBackground";
import IntroAnimation from "./IntroAnimation";
import RecruitmentForm from "./RecruitmentForm";

const Register = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ShaderBackground />

      {!introDone && <IntroAnimation onDone={() => setIntroDone(true)} />}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:py-20"
      >
        <RecruitmentForm />
        <footer className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400/70">
          © BNMPC IT Club · Birshreshtha Noor Mohammad Public College
        </footer>
      </motion.main>

      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
};

export default Register;
