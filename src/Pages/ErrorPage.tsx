import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-5xl font-bold font-serif text-center">
          {"Error 404 :: Page Not Found"}
        </h1>
        <p className="text-2xl text-gray-400 m-5 text-center">
          {"this url does not exist's, please return to 'Home' page !!!"}
        </p>
      </div>
      <Link
        to={"/"}
        className="hover:underline hover:text-blue-700 m-2 text-blue-400 cursor-pointer"
      >
        Go to Home page
      </Link>
    </div>
  );
}
