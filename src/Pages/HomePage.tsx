import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">
        Welcome to NO-Code Dynamic Form Generation Web App.
      </h1>
      <div className="my-10">
        <Link
          to={"/create-form"}
          className="hover:underline hover:text-blue-700 m-10 text-blue-400 cursor-pointer"
        >
          Create New Form
        </Link>
        <Link
          to={"/existing-forms"}
          className="hover:underline hover:text-blue-700 m-10 text-blue-400 cursor-pointer"
        >
          See Existing Forms
        </Link>
      </div>
    </div>
  );
}
