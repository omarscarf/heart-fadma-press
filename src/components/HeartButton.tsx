import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isFalling, setIsFalling] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    setShowSparkles(true);
    
    // Start falling animation after pulse
    setTimeout(() => {
      setIsFalling(true);
    }, 1000);
    
    // Reset all animations
    setTimeout(() => {
      setIsPressed(false);
      setIsFalling(false);
      setShowSparkles(false);
    }, 2500);
  };

  return (
    <button
      onClick={handlePress}
      className={cn(
        "relative group flex flex-col items-center gap-2 p-4 rounded-full transition-all duration-300",
        "hover:bg-love-light/10 active:bg-love-light/20",
        "animate-float"
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
        {showSparkles && (
          <>
            <Sparkles className="absolute -top-4 -right-4 w-6 h-6 stroke-love animate-sparkle" />
            <Sparkles className="absolute -top-4 -left-4 w-6 h-6 stroke-love animate-sparkle [animation-delay:0.2s]" />
            <Sparkles className="absolute -bottom-4 -right-4 w-6 h-6 stroke-love animate-sparkle [animation-delay:0.4s]" />
          </>
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