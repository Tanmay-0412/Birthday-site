import GalleryCarousel from "../components/GalleryCarousel";

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Our Beautiful Memories ❤️
      </h1>

      <GalleryCarousel />

    </main>
  );
}