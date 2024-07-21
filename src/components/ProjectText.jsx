import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function ProjectText() {
  const projectText = useRef(null);

  useEffect(() => {
    const typed = new Typed(projectText.current, {
      strings: [
        "and a lot more to come.",
        "working on new stuff!",
        "learning everyday.",
      ],
      loop: true,
      typeSpeed: 90,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p>
      ...<span ref={projectText}></span>
    </p>
  );
}
