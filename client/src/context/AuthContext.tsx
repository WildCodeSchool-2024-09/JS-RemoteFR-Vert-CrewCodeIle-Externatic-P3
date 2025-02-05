import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "react-toastify";

type AuthContextType = {
  userId: number | null;
  setUserId: (id: number) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <AuthContext.Provider value={{ userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    toast.success("Vous devez être connecté pour accèder à cette page.");
  }
  return context;
};

export default AuthProvider;
