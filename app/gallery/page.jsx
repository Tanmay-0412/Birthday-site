import GalleryCarousel from "../components/GalleryCarousel";
import { AuroraText } from "@/components/ui/aurora-text";
import { SparklesText } from "@/components/ui/sparkles-text"

export default function GalleryPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center 
  bg-gradient-to-bl from-orange-300 via-yellow-500 to-yellow-700 
  text-white"


    >
      <h4 className="text-sm sm:text-xl md:text-xl font-semibold mb-2 text-center tracking-wide text-black">
        <SparklesText> Our Beautiful Memories ❤️ </SparklesText>
      </h4>

      <GalleryCarousel />
    </main>
  );
}
