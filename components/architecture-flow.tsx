"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type FlowNode = { label: string; description: string };
export type FlowColumn = FlowNode[];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    const frame = window.requestAnimationFrame(() => setIsMobile(mediaQuery.matches));
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      window.cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile;
}

export function ArchitectureFlow({
  columns,
  accent,
}: {
  columns: FlowColumn[];
  accent: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [active, setActive] = useState<FlowNode | null>(null);

  const NodeButton = ({ node }: { node: FlowNode }) => {
    const isActive = active?.label === node.label;

    return (
      <button
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
  };

  return (
    <div>
      {isMobile ? (
        <div className="flex flex-col items-start">
          {columns.map((column, index) => (
            <div key={index} className="flex w-full flex-col">
              <div className="flex flex-col gap-2">
                {column.map((node) => (
                  <NodeButton key={node.label} node={node} />
                ))}
              </div>
              {index < columns.length - 1 && (
                <div className="relative my-1 ml-5 h-6 w-px" style={{ backgroundColor: "var(--border)" }}>
                  {!shouldReduceMotion && (
                    <motion.span
                      className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: accent }}
                      animate={{ top: ["0%", "100%"] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-stretch gap-0 overflow-x-auto px-1 pb-1 -mx-1">
          {columns.map((column, index) => (
            <div key={index} className="flex shrink-0 items-center">
              <div className="flex flex-col justify-center gap-2">
                {column.map((node) => (
                  <NodeButton key={node.label} node={node} />
                ))}
              </div>
              {index < columns.length - 1 && (
                <div className="relative mx-1.5 h-px w-8 shrink-0 md:mx-2 md:w-12" style={{ backgroundColor: "var(--border)" }}>
                  {!shouldReduceMotion && (
                    <motion.span
                      className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
                      style={{ backgroundColor: accent }}
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: index * 0.25 }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
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
