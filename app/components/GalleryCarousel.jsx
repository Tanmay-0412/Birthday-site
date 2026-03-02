"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import Image from "next/image";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
];

// const images = [
//   "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
//   "https://images.unsplash.com/photo-1519741497674-611481863552",
//   "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
//   "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2",
//   "https://images.unsplash.com/photo-1513151233558-d860c5398176",
//   "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d",
//   "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
//   "https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
// ];

export default function GalleryCarousel() {
  const router = useRouter();
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="w-[260px] sm:w-[320px] md:w-[380px]"
          >
            <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={img}
                alt={`Gallery ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => router.push("/hero")}
      className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-400 font-semibold shadow-lg text-black cursor-pointer"
    >
      ← Back to Hero
    </motion.button>
    </div>
    
  );
}