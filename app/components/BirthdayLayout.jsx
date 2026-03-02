import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";

export default function BirthdayLayout() {
  return (
    <div className="flex min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-indigo-600 text-white">

      <Sidebar />

      <div className="flex-1">
        <HeroSection />
      </div>

    </div>
  );
}