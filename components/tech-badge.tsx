export default function TechBadge({ children }: { children: React.ReactNode }) {
  const label = typeof children === 'string' ? children : String(children);
  return (
    <div className="relative group inline-block">
      <span
        style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))' }}
        className="inline-flex items-center text-sm px-3 py-1 rounded-full text-white font-semibold shadow-sm border border-transparent transition-transform transform hover:-translate-y-0.5"
      >
        {children}
      </span>
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gray-900 text-xs text-white px-2 py-1 rounded-md whitespace-nowrap shadow-md">
        {label}
      </div>
    </div>
  );
}
