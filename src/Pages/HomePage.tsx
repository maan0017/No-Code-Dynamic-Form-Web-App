import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">
        Welcome to NO-Code Dynamic Form Generation Web App.
      </h1>
      <Link
        to={"/createForm"}
        className="hover:underline hover:text-blue-500 m-2 p-2"
      >
        Create New Form
      </Link>
      <Link
        to={"/existingForms"}
        className="hover:underline hover:text-blue-500 m-2"
      >
        See Existing Forms
      </Link>
    </div>
  );
}
