"use client";

import { motion } from "framer-motion";
import { NeonGradientCard } from "../../components/ui/neon-gradient-card";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const { width, height } = useWindowSize();

  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen p-6 md:p-16 w-full bg-black text-white overflow-hidden">
      {/* Confetti */}
      {/* <Confetti width={width} height={height} recycle={true} /> */}

      {/* Render only on client */}
      {mounted && (
        <Confetti width={size.width} height={size.height} recycle={true} />
      )}

      {/* Pink Glow */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-30 blur-[200px] -top-20 -left-20"></div>

      {/* Blue Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-30 blur-[200px] bottom-0 right-0"></div>

      {/* LEFT TEXT */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl z-10 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          🎉 Happy Birthday Riddhu !
        </h1>

        <p className="mt-6 text-base md:text-lg opacity-80">
          Celebrations start Today ! May your day be filled with love, joy and
          amazing memories.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 font-semibold shadow-lg"
          onClick={() => router.push("/gallery")}
        >
          Celebrate 🎂
        </motion.button>
      </motion.div>

      {/* RIGHT CARD */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 md:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg z-10"
      >
        <NeonGradientCard>
          <div className="flex flex-col items-center justify-center p-6 md:p-8">
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-6">
              <Image
                src="/profile.jpg"
                alt="Birthday"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <p className="text-xl text-black md:text-2xl font-semibold">
              🌟🎁Many Many Happy returns of the Day Riddhu 🎊🎀
            </p>

            <span className="opacity-70 text-sm text-pink-500 md:text-xl mt-2">
              God Bless you always ✨
            </span>
          </div>
        </NeonGradientCard>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          // always send the user to the homepage instead of relying on history
          router.push("/");
        }}
        className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-400 font-semibold shadow-lg text-black cursor-pointer"
      >
        ← Back
      </motion.button>
    </div>
  );
}
