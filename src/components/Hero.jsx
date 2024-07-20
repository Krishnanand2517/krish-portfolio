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

  return (
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
  );
}
