import { createContext, useContext, useState, ReactNode } from "react";

type FidelityMode = "high" | "mid";

interface FidelityContextType {
  mode: FidelityMode;
  toggleMode: () => void;
}

const FidelityContext = createContext<FidelityContextType | undefined>(undefined);

export function FidelityProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<FidelityMode>("high");

  const toggleMode = () => {
    setMode((prev) => (prev === "high" ? "mid" : "high"));
  };

  return (
    <FidelityContext.Provider value={{ mode, toggleMode }}>
      {children}
    </FidelityContext.Provider>
  );
}

export function useFidelity() {
  const context = useContext(FidelityContext);
  if (!context) {
    throw new Error("useFidelity must be used within FidelityProvider");
  }
  return context;
}
