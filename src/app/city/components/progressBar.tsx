import { useState } from "react";

export default function ProgressBar() {
  const [progress] = useState(70); // Example progress value

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-black">
      <div
        className="bg-[#FFC654] h-3 rounded-full text-center border-e-2 border-black text-white text-sm font-medium"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
