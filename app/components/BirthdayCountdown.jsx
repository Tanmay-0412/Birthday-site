"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BirthdayCountdown() {
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [wish, setWish] = useState("");
  const router = useRouter();
  const targetDate = new Date("2026-03-04T00:00:00");
  const [formData, setFormData] = useState({
    name: "",
    animal: "",
    food: "",
  });
  const correctAnswers = {
    name: "Riddhu",
    animal: "Rabbit",
    food: "Lips",
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("birthdayWish", wish);
    const newErrors = {};

    if (
      formData.name.trim().toLowerCase() !== correctAnswers.name.toLowerCase()
    ) {
      newErrors.name = "❌ Hmm… that’s not the name I was expecting!";
    }

    if (
      formData.animal.trim().toLowerCase() !==
      correctAnswers.animal.toLowerCase()
    ) {
      newErrors.animal = "Wrong! Try guessing your favorite animal.";
    }

    if (
      formData.food.trim().toLowerCase() !== correctAnswers.food.toLowerCase()
    ) {
      newErrors.food = "Think like a Bad Boy, Riddhu !!.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/hero");
    }
  };
  const [errors, setErrors] = useState({
    name: "",
    animal: "",
    food: "",
  });
  const calculateTimeLeft = () => {
    const diff = targetDate.getTime() - new Date().getTime();

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-4xl font-bold">
        🎉 It's Birthday Time!
      </div>
    );
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
      {/* Floating balloons */}
      <FloatingBalloon left="10%" delay={0} />
      <FloatingBalloon left="25%" delay={2} />
      <FloatingBalloon left="50%" delay={4} />
      <FloatingBalloon left="75%" delay={1} />
      <FloatingBalloon left="90%" delay={3} />

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-10 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎂 Birthday Unlocking In
      </motion.h1>

      {/* Countdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <TimerBox label="Days" value={timeLeft.days} />
        <TimerBox label="Hours" value={timeLeft.hours} />
        <TimerBox label="Minutes" value={timeLeft.minutes} />
        <TimerBox label="Seconds" value={timeLeft.seconds} />
      </div>

      {/* Subtitle */}
      <motion.p
        className="mt-10 text-lg md:text-xl opacity-90 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Something magical is coming 🎁
      </motion.p>

      {/* ENTER BUTTON */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // onClick={() => router.push("/hero")}
        onClick={() => setShowForm(true)}
        className="mt-10 bg-white text-purple-700 px-8 py-4 rounded-full font-bold shadow-xl"
      >
        Enter Celebration 🎉
      </motion.button>
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white text-black rounded-2xl shadow-2xl w-full max-w-md p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Before entering 🎉
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="What is your name?"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
              <input
                type="text"
                name="animal"
                placeholder="Your Favorite Animal?"
                value={formData.animal}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              {errors.animal && (
                <p className="text-red-500 text-sm">{errors.animal}</p>
              )}

              <input
                type="text"
                name="food"
                placeholder="My Favorite Food?"
                value={formData.food}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              {errors.food && (
                <p className="text-red-500 text-sm">{errors.food}</p>
              )}
              <select
                className="border p-3 rounded-lg"
                onChange={(e) => {
                  if (e.target.value === "Tanmay") {
                    alert("😂 You have NO option other than me!");
                  }
                }}
                required
              >
                <option value="">Who is your favorite person?</option>
                <option value="Tanmay">Tanmay</option>
                <option value="Tanmay">Tanmay</option>
                <option value="Tanmay">Tanmay</option>
                <option value="Tanmay">Tanmay</option>
              </select>
              <textarea
                placeholder="Leave a birthday wish 🎂"
                rows={3}
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-200 py-3 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold"
                >
                  Continue 🎉
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function TimerBox({ label, value }) {
  return (
    <motion.div
      className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 w-28 md:w-36 text-center shadow-xl"
      whileHover={{ scale: 1.08 }}
    >
      <p className="text-3xl md:text-5xl font-bold">{value}</p>
      <p className="uppercase text-sm mt-2">{label}</p>
    </motion.div>
  );
}

function FloatingBalloon({ left, delay }) {
  return (
    <motion.div
      className="absolute text-4xl"
      style={{ left }}
      initial={{ y: "100vh" }}
      animate={{ y: "-20vh" }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      🎈
    </motion.div>
  );
}
