"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface CardSplitAccordianProps {
  title: string;
  children: React.ReactNode;
}

export function CardSplitAccordian({ title, children }: CardSplitAccordianProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="p-4 rounded-xl bg-muted overflow-hidden cursor-pointer"
    >
      <motion.h3 layout className="text-lg font-medium">
        {title}
      </motion.h3>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-muted-foreground"
        >
          {children}
        </motion.p>
      )}
    </motion.div>
  );
}