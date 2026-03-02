"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EntryForm() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/hero");
  };

  return (
    <>
      {/* ENTER BUTTON */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(true)}
        className="mt-10 bg-white text-purple-700 px-8 py-4 rounded-full font-bold shadow-xl"
      >
        Enter Celebration 🎉
      </motion.button>

      {/* MODAL FORM */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              className="bg-white text-black rounded-2xl shadow-2xl w-full max-w-md p-6"
            >
              {/* TITLE */}

              <h2 className="text-2xl font-bold mb-4 text-center">
                Before entering 🎉
              </h2>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* NAME */}

                <input
                  type="text"
                  placeholder="What is your name?"
                  required
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* FAVORITE ANIMAL */}

                <input
                  type="text"
                  placeholder="Favorite Animal?"
                  required
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* FAVORITE FOOD */}

                <input
                  type="text"
                  placeholder="Favorite Food?"
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* MESSAGE */}

                <textarea
                  placeholder="Leave a birthday wish ✨"
                  rows={3}
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                {/* BUTTONS */}

                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3 rounded-lg bg-gray-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-lg bg-purple-600 text-white font-semibold"
                  >
                    Continue 🎉
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}