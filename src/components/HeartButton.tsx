import { useState } from "react";
import { Heart, Hand } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [showHand, setShowHand] = useState(false);
  const [isFalling, setIsFalling] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    // Start falling animation after pulse
    setTimeout(() => {
      setIsFalling(true);
      setShowHand(true);
    }, 1000);
    
    // Reset all animations
    setTimeout(() => {
      setIsPressed(false);
      setIsFalling(false);
      setShowHand(false);
    }, 2500);
  };

  return (
    <button
      onClick={handlePress}
      className={cn(
        "relative group flex flex-col items-center gap-2 p-4 rounded-full transition-all duration-300",
        "hover:bg-love-light/10 active:bg-love-light/20"
      )}
    >
      <div className="relative">
        <Heart
          className={cn(
            "w-12 h-12 transition-all duration-300",
            "group-hover:fill-love group-hover:stroke-love",
            "group-active:scale-90",
            isPressed && "animate-heart-pulse fill-love stroke-love",
            isFalling && "animate-heart-fall fill-love stroke-love"
          )}
        />
        {showHand && (
          <Hand
            className={cn(
              "absolute -bottom-4 -right-4 w-8 h-8",
              "stroke-love animate-hand-appear"
            )}
          />
        )}
      </div>
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