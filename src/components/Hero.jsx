import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      stringsElement: "#typed-strings",
      loop: true,
      smartBackspace: true,
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 40,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div>
        <h2 className="text-lg lg:text-4xl font-semibold">Hey there! 👋</h2>
        <h1 className="text-xl lg:text-5xl font-bold lg:mt-2 lg:mb-4">
          I am Krishnanand Yadav
        </h1>

        <div id="typed-strings" className="hidden">
          <p>A Software Engineer</p>
          <p>A Full Stack Developer</p>
          <p>A Game Developer</p>
        </div>
        <span ref={el} className="lg:text-lg"></span>
      </div>

      <button
        onClick={scrollToContent}
        className="mx-auto mt-8 lg:mt-12 flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-all duration-500 cursor-pointer group opacity-60 hover:opacity-100"
        aria-label="Scroll down"
      >
        <div className="relative w-5 h-8 lg:w-6 lg:h-9 border border-gray-500 rounded-full p-1 group-hover:border-gray-700 transition-colors">
          <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gray-500 rounded-full mx-auto animate-scroll"></div>
        </div>
      </button>

      <style>{`
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          40% {
            opacity: 1;
          }
          80% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
