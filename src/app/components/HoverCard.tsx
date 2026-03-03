import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function HoverCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative rounded-2xl transition-shadow duration-300 hover:bg-[#FDE8E2]",
        hovered && "shadow-2xl",
        className
      )}
    >
      {/* Hover background */}
      <motion.span
        layoutId="hoverBackground"
        className="absolute inset-0 rounded-2xl  dark:bg-slate-800/80"
        initial={false}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}