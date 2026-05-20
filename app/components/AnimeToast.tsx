"use client";
import { useEffect  } from "react";

type Props = {
  title: string;
  msg: string;
  onDone: () => void;
};

export function AnimeToast({ title, msg, onDone }: Props) {
  useEffect(() => {
    const t = setTimeout(onDone, 4400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-end pointer-events-none animate-anime-slide">
    <img src="/anime-anime-girl-Photoroom.png" alt="" className="h-52 w-auto object-contain animate-bobble"/>

      <div className="mb-28 ml-2 animate-bubble-pop">
        <div className="relative bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-xl max-w-[200px]">
          <p className="text-[11px] font-semibold text-gray-400 mb-0.5">{title}</p>
          <p className="text-[13px] font-medium text-gray-800 leading-snug">{msg}</p>
          <span className="absolute -bottom-2 left-2 w-0 h-0 border-l-8 border-r-0 border-t-8 border-l-transparent border-t-white" />
        </div>
      </div>
    </div>
  );
}
