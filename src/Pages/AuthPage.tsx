import { useState, FormEvent, MouseEvent, useEffect } from "react";
import { Eye, EyeClosed, ArrowRightToLine } from "lucide-react";
import { credentials } from "../utils/interfaces";
import { useLogin } from "../hooks/useLogin";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.role === "admin" && auth.isAuthenticated) navigate("/create-form");
  }, [auth.isAuthenticated, auth.role, navigate]);

  // chagne title to login
  document.title = "Administrator Login";
  // defining user auth

  const [showPass, setShowPass] = useState<boolean>(false);
  const [authCredentials, setAuthCredentials] = useState<credentials>({
    username: "",
    password: "",
  });

  const { pending, login, errors } = useLogin();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const res = await login(authCredentials);
    if (!res) {
      // handle error
      return;
    }

    // change user role to admin
    auth.role = "admin";
    auth.isAuthenticated = true;
    console.log(auth);
  };
  return (
    <div className="bg-gray-300 w-full h-screen flex justify-center items-center">
      <div className="w-96 h-96 p-4 bg-white shadow-xl shadow-black border-0 border-black rounded-sm">
        <h1 className="w-full text-center font-serif text-2xl font-bold">
          {"admin authentication!"}
        </h1>
        <div className="my-10 p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col m-2">
              <label className="">username</label>
              <input
                name="username"
                type="text"
                placeholder="enter username..."
                value={authCredentials.username}
                onChange={(e) =>
                  setAuthCredentials((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                className="text-black p-2 bg-gray-100 rounded-sm font-mono"
              />
              {/* {username error} */}
              {errors.username_error && (
                <p className="w-full text-red-500">{errors.username_error}</p>
              )}
            </div>
            <div className="flex flex-col m-2">
              <label>password</label>
              <div className="w-full flex">
                <input
                  name="password"
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="enter password..."
                  value={authCredentials.password}
                  onChange={(e) =>
                    setAuthCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="w-full text-black p-2 bg-gray-100 rounded-l-sm font-mono"
                />
                <div className="flex justify-center items-center">
                  {showPass ? (
                    <Eye
                      size={40}
                      onClick={() => setShowPass(false)}
                      className="cursor-pointer p-1 rounded-r-sm bg-gray-100"
                    />
                  ) : (
                    <EyeClosed
                      size={40}
                      onClick={() => setShowPass(true)}
                      className="cursor-pointer p-1 rounded-r-sm bg-gray-100"
                    />
                  )}
                </div>
              </div>
              {/* password error */}
              {errors.password_error && (
                <p className="w-full text-red-500">{errors.password_error}</p>
              )}
            </div>
            {/* other error */}
            {errors.other_error && (
              <p className="w-full text-red-500 text-center">
                {errors.other_error}
              </p>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={
                authCredentials.username === "" ||
                authCredentials.password === "" ||
                pending
              }
              className={`w-36 mx-2 my-8 px-4 py-2 text-white rounded-sm flex justify-between 
                ${
                  authCredentials.username === "" ||
                  authCredentials.password === ""
                    ? "cursor-not-allowed bg-blue-300"
                    : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                }`}
            >
              {pending ? "wait..." : "Login"}
              {!pending && <ArrowRightToLine />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
