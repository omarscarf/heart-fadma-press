import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    // Reset after animation
    setTimeout(() => setIsPressed(false), 1000);
  };

  return (
    <button
      onClick={handlePress}
      className={cn(
        "relative group flex flex-col items-center gap-2 p-4 rounded-full transition-all duration-300",
        "hover:bg-love-light/10 active:bg-love-light/20",
        isPressed && "animate-heart-pulse"
      )}
    >
      <Heart
        className={cn(
          "w-12 h-12 transition-all duration-300",
          "group-hover:fill-love group-hover:stroke-love",
          "group-active:scale-90",
          isPressed && "fill-love stroke-love"
        )}
      />
      <span
        className={cn(
          "font-semibold text-lg text-love-dark",
          "opacity-0 group-hover:opacity-100 group-hover:animate-fade-in"
        )}
      >
        Fadma
      </span>
    </button>
  );
};