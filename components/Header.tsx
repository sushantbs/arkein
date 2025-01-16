import Link from "next/link";
import { BatteryCharging } from "lucide-react";

export default function Header() {
  return (
    <header className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border/40">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <BatteryCharging className="h-6 w-6" />
          <span className="font-bold text-xl">ArkeinElectric</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
        </nav>
      </div>
    </header>
  );
}
