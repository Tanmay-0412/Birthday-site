"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Home", icon: "home", href: "/" },
    { name: "Profile", icon: "person", href: "/profile" },
    { name: "Gallery", icon: "photo_library", href: "/gallery" },
    { name: "Wishes", icon: "favorite", href: "/wishes" },
  ];

  return (
    <motion.div
      animate={{ width: open ? 220 : 70 }}
      className="h-screen bg-white/10 backdrop-blur-lg border-r border-white/20 text-white flex flex-col"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 text-xl hover:bg-white/10"
      >
        ☰
      </button>

      {/* Menu */}
      <nav className="flex flex-col gap-6 mt-10 px-3">
        {menu.map((item) => (
          <Link key={item.name} href={item.href} className="no-underline">
            <div className="flex items-center gap-4 cursor-pointer hover:text-pink-300 transition">
              <span className="material-icons">{item.icon}</span>
              {open && <span>{item.name}</span>}
            </div>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}