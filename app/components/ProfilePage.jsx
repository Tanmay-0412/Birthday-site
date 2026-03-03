"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {NumberTicker} from "../../components/ui/number-ticker";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Dr Riddhi"; // Your Name

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);
  const router = useRouter();
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* 🌈 Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[150px] rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-30 blur-[150px] rounded-full bottom-[-200px] right-[-200px] animate-pulse" />
      </div>

      {/* 🌟 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20">
        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/profile.jpg"
          alt="Profile"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-purple-500 shadow-lg object-cover"
        />

        {/* Typing Name */}
        <h1 className="mt-6 text-3xl md:text-5xl font-bold text-center">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="mt-3 text-gray-300 text-center max-w-md">
          Ex- TCS | Assistant Professor | Tech Enthusiast | Always eager to
          learn and grow in the world of technology.
        </p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl max-w-2xl text-center border border-white/20"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Accomplished JRF with the designation of Assistant Professor with
            skills in Accounts, Finance & Tech. Proven ability to drive research
            excellence and Passionate about contributing to the advancement of
            knowledge in the Education field.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div
            className="relative w-full max-w-xl p-10 rounded-3xl 
                  bg-white/10 backdrop-blur-2xl 
                  border border-white/20 
                  shadow-[0_0_40px_rgba(168,85,247,0.3)]
                  text-center overflow-hidden"
          >
            {/* Glow Background Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-br 
                    from-purple-500/20 via-pink-500/10 to-transparent 
                    opacity-60 blur-2xl pointer-events-none"
            />

            <div className="relative z-10">
              <h2 className="text-lg md:text-xl font-medium text-gray-300 mb-4">
                NET Exam Achievement
              </h2>

              <div className="flex items-end justify-center gap-2">
                {/* Animated 100 */}
                <NumberTicker
                  value={100}
                  className="text-6xl md:text-8xl font-bold 
                     bg-gradient-to-r from-purple-400 to-pink-400 
                     bg-clip-text text-transparent"
                />

                <span className="text-2xl md:text-3xl font-semibold text-purple-300 mb-2">
                  Percentile
                </span>
              </div>

              <p className="mt-4 text-gray-400 text-sm md:text-base">
                Secured top percentile nationwide with outstanding performance.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.push("/hero")}
      className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-400 font-semibold shadow-lg text-black cursor-pointer"
    >
      ← Back
    </motion.button>
      </div>

      
    </div>
  );
}
