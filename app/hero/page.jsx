import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";

export default function HeroPage() {
  return (
    // <div className="flex min-h-screen bg-gradient-to-br from-cyan-500 via-blue-600 to-green-700">
    <div className="flex min-h-screen bg-gradient-to-br from-cyan-500 via-black-600 to-green-700">

      <Sidebar />

      <div className="flex-1">
        <HeroSection />
      </div>

    </div>
  );
}