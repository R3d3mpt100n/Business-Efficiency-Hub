export const USER_CODE = "LEDGELY-PRO1-2026";

const ACCESS_KEY = "access";

export function hasAccess(): boolean {
  try {
    return localStorage.getItem(ACCESS_KEY) === "true";
  } catch {
    return false;
  }
}

export function grantUserAccess() {
  try {
    localStorage.setItem(ACCESS_KEY, "true");
  } catch {
    // ignore
  }
}

export function revokeAccess() {
  try {
    localStorage.removeItem(ACCESS_KEY);
  } catch {
    // ignore
  }
}
