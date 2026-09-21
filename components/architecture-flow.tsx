"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type FlowNode = { label: string; description: string };
export type FlowColumn = FlowNode[];

export function ArchitectureFlow({
  columns,
  accent,
}: {
  columns: FlowColumn[];
  accent: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState<FlowNode | null>(null);

  return (
    <div>
      <div className="flex items-stretch gap-0 overflow-x-auto pb-1 -mx-1 px-1">
        {columns.map((column, index) => (
          <div key={index} className="flex items-center shrink-0">
            <div className="flex flex-col gap-2 justify-center">
              {column.map((node) => {
                const isActive = active?.label === node.label;

                return (
                  <button
                    key={node.label}
                    type="button"
                    onMouseEnter={() => setActive(node)}
                    onFocus={() => setActive(node)}
                    onMouseLeave={() => setActive((current) => (current === node ? null : current))}
                    onClick={() => setActive((current) => (current === node ? null : node))}
                    className="rounded-full border px-3.5 py-1.5 text-xs md:text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    style={{
                      borderColor: isActive ? accent : "var(--border)",
                      color: isActive ? accent : "var(--foreground)",
                      backgroundColor: isActive ? `${accent}1a` : "var(--secondary)",
                    }}
                  >
                    {node.label}
                  </button>
                );
              })}
            </div>
            {index < columns.length - 1 && (
              <div
                className="relative w-8 md:w-12 h-px mx-1.5 md:mx-2 shrink-0"
                style={{ backgroundColor: "var(--border)" }}
              >
                {!shouldReduceMotion && (
                  <motion.span
                    className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: accent }}
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.25,
                    }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="h-5 mt-2">
        <AnimatePresence mode="wait">
          {active && (
            <motion.p
              key={active.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-xs md:text-sm text-muted-foreground"
            >
              {active.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
