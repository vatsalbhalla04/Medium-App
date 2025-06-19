// utils/getUserFromToken.ts
import jwtDecode from "jwt-decode";

interface TokenPayload {
  id: string;
  name: string;
  email?: string;
  exp?: number;
}

export function getUserFromToken(): TokenPayload | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = jwtDecode<TokenPayload>(token);
    return payload;
  } catch (e) {
    console.error("Failed to decode token:", e);
    return null;
  }
}
