export interface profile {
  role: "admin" | "user";
  isAuthenticated?: boolean;
}
export interface credentials {
  username: string;
  password: string;
}
export interface login_errors {
  username_error?: string | "";
  password_error?: string | "";
  other_error?: string | "";
}
