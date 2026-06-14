import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold">404</h1>

      <h2 className="text-4xl font-semibold mt-4">
        Property Not Found
      </h2>

      <p className="mt-3 text-gray-300 text-center">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-6 bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Back To Home
      </Link>
    </div>
  );
}