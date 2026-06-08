import { useFidelity } from "../contexts/FidelityContext";
import { ReactNode } from "react";

interface MidFiPlaceholderProps {
  children: ReactNode;
  height?: number | string;
  width?: number | string;
  className?: string;
}

export default function MidFiPlaceholder({
  children,
  height = 40,
  width = "100%",
  className = ""
}: MidFiPlaceholderProps) {
  const { mode } = useFidelity();

  if (mode === "high") {
    return <>{children}</>;
  }

  return (
    <div
      className={`rounded border ${className}`}
      style={{
        background: "#f3f4f6",
        borderColor: "#d1d5db",
        height: typeof height === "number" ? `${height}px` : height,
        width: typeof width === "number" ? `${width}px` : width,
        minHeight: typeof height === "number" ? `${height}px` : height,
      }}
    />
  );
}

interface MidFiTextProps {
  children: ReactNode;
  lines?: number;
  className?: string;
  showText?: boolean;
}

export function MidFiText({ children, lines = 1, className = "", showText = false }: MidFiTextProps) {
  const { mode } = useFidelity();

  if (mode === "high") {
    return <>{children}</>;
  }

  if (showText) {
    return <div className={className} style={{ color: "#6b7280" }}>{children}</div>;
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="rounded"
          style={{
            background: "#d1d5db",
            height: "12px",
            width: i === lines - 1 ? "70%" : "100%",
          }}
        />
      ))}
    </div>
  );
}

interface MidFiButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  showLabel?: boolean;
}

export function MidFiButton({ children, className = "", onClick, style, showLabel = false }: MidFiButtonProps) {
  const { mode } = useFidelity();

  if (mode === "high") {
    return (
      <button className={className} onClick={onClick} style={style}>
        {children}
      </button>
    );
  }

  return (
    <button
      className={`rounded border ${className}`}
      onClick={onClick}
      style={{
        background: "#e5e7eb",
        borderColor: "#9ca3af",
        color: "#4b5563",
        height: "40px",
        minWidth: "100px",
        ...style,
      }}
    >
      {showLabel ? children : null}
    </button>
  );
}

interface MidFiTableProps {
  children: ReactNode;
  rows?: number;
  cols?: number;
  headers?: string[];
  showHeaders?: boolean;
}

export function MidFiTable({ children, rows = 5, cols = 4, headers = [], showHeaders = true }: MidFiTableProps) {
  const { mode } = useFidelity();

  if (mode === "high") {
    return <>{children}</>;
  }

  const displayHeaders = showHeaders && headers.length > 0 ? headers : Array.from({ length: cols }, (_, i) => `Col ${i + 1}`);

  return (
    <div className="border rounded-lg overflow-hidden" style={{ borderColor: "#d1d5db" }}>
      {/* Header */}
      <div className="flex border-b" style={{ borderColor: "#d1d5db", background: "#f9fafb" }}>
        {displayHeaders.map((header, i) => (
          <div
            key={`header-${i}`}
            className="flex-1 p-3"
            style={{
              borderRight: i < cols - 1 ? "1px solid #d1d5db" : "none",
              fontSize: "12px",
              fontWeight: 600,
              color: "#6b7280"
            }}
          >
            {showHeaders && headers.length > 0 ? header : (
              <div
                className="rounded"
                style={{
                  background: "#9ca3af",
                  height: "12px",
                  width: "80%",
                }}
              />
            )}
          </div>
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div
          key={`row-${rowIdx}`}
          className="flex border-b"
          style={{
            borderColor: "#d1d5db",
            background: rowIdx % 2 === 0 ? "#ffffff" : "#f9fafb",
          }}
        >
          {Array.from({ length: cols }).map((_, colIdx) => (
            <div
              key={`cell-${rowIdx}-${colIdx}`}
              className="flex-1 p-3"
              style={{ borderRight: colIdx < cols - 1 ? "1px solid #d1d5db" : "none" }}
            >
              <div
                className="rounded"
                style={{
                  background: "#d1d5db",
                  height: "12px",
                  width: colIdx === 0 ? "60%" : "90%",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

interface MidFiStatCardProps {
  label: string;
  value: string | number;
  className?: string;
}

export function MidFiStatCard({ label, value, className = "" }: MidFiStatCardProps) {
  const { mode } = useFidelity();

  if (mode === "high") {
    return null;
  }

  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded-xl border ${className}`}
      style={{ background: "#f9fafb", borderColor: "#d1d5db" }}
    >
      <p className="text-xs" style={{ color: "#9ca3af" }}>{label}</p>
      <p className="text-2xl font-bold" style={{ color: "#4b5563" }}>{value}</p>
    </div>
  );
}

interface MidFiInputProps {
  placeholder?: string;
  className?: string;
}

export function MidFiInput({ placeholder, className = "" }: MidFiInputProps) {
  const { mode } = useFidelity();

  if (mode === "high") {
    return null;
  }

  return (
    <div
      className={`px-3 py-2 rounded-lg border ${className}`}
      style={{
        background: "#ffffff",
        borderColor: "#d1d5db",
        color: "#9ca3af",
        fontSize: "14px",
      }}
    >
      {placeholder || "Input field"}
    </div>
  );
}
