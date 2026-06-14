export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
      
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="mt-6 text-3xl font-bold">
        Loading Properties...
      </h1>

      <p className="mt-2 text-gray-400">
        Finding your dream home
      </p>

      <div className="flex gap-2 mt-6">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div
          className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}