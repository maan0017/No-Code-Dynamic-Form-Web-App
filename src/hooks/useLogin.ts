import { useState } from "react";
import { credentials, login_errors } from "../utils/interfaces";

const useLogin = () => {
  const [pending, setPending] = useState<boolean>(false);
  const [errors, setErrors] = useState<login_errors>({});

  const login = async (authCredentials: credentials) => {
    setPending(true);
    setErrors({});

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(authCredentials),
    })
      .then((res) => res.json())
      .catch((err) => {
        setPending(false);
        throw new Error(err);
      });

    if (res?.username_error) {
      setErrors({ username_error: res?.username_error });
    } else if (res?.password_error) {
      setErrors({ password_error: res?.password_error });
    } else if (res?.other_error) {
      setErrors({ other_error: res?.other_error });
    }

    setPending(false);
    if (res?.success) return true;
  };

  return { pending, login, errors };
};

export { useLogin };
