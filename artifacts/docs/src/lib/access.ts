export const USER_CODE = "LEDGELY-START";
export const ADMIN_CODE = "ADMIN-OVERRIDE-DEV";

const ACCESS_KEY = "access";
const ADMIN_KEY = "admin";

export function hasAccess(): boolean {
  try {
    if (localStorage.getItem(ADMIN_KEY) === "true") return true;
    return localStorage.getItem(ACCESS_KEY) === "granted";
  } catch {
    return false;
  }
}

export function isAdmin(): boolean {
  try {
    return localStorage.getItem(ADMIN_KEY) === "true";
  } catch {
    return false;
  }
}

export function grantUserAccess() {
  try {
    localStorage.setItem(ACCESS_KEY, "granted");
  } catch {
    // ignore
  }
}

export function grantAdminAccess() {
  try {
    localStorage.setItem(ACCESS_KEY, "granted");
    localStorage.setItem(ADMIN_KEY, "true");
  } catch {
    // ignore
  }
}

export function revokeAccess() {
  try {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(ADMIN_KEY);
  } catch {
    // ignore
  }
}
