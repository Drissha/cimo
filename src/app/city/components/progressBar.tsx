import { useState } from "react";

interface ProgressBarProps {
  progress: number;
  color: string;
  size: number;
}

export default function ProgressBar({
  progress,
  color,
  size,
}: ProgressBarProps) {
  return (
    <div
      className="bg-gray-200 rounded-full h-4 border-2 border-black"
      style={{ width: `${size}%` }}
    >
      <div
        className=" h-3 rounded-full text-center border-e-2 border-black text-white text-sm font-medium"
        style={{ width: `${progress}%`, backgroundColor: `${color}` }}
      ></div>
    </div>
  );
}
