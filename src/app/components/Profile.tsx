import React from 'react'
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GlowingEffect } from './ui/glowing-effect';

function Profile({
  image,
  name,
  title,
  hoverText,
  className,
}: {
  image: React.ReactNode;
  name: string;
  title: string;
  hoverText: string;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setHovered(prev => !prev); // toggle visibility on click
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className={cn(
        "relative rounded-2xl border-2 bg-white p-6 text-center transition-all duration-300",
        hovered && "shadow-2xl -translate-y-1",
        className
      )}
    >
      <GlowingEffect
          spread={100}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

      <div className="space-y-3">
        {image}
        <div className="font-semibold text-lg text-black mt-3">{name}</div>
        <div className="text-sm text-neutral-600">{title}</div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute inset-0 rounded-2xl bg-white/95 p-6"
      >
        <div className="h-full max-h-[65vh] md:max-h-full overflow-y-auto pr-2">
          <p className="type-body text-sm text-neutral-700 leading-relaxed whitespace-pre-line">
            {hoverText}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default Profile