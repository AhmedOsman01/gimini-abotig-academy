import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiRuby,
  SiGo,
  SiSwift,
  SiKotlin,
  SiRust,
  SiScala,
  SiDart,
  SiPerl,
  SiR,
} from "react-icons/si";

const techs = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={100} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={100} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={100} /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={100} />,
  },
  { name: "React.js", icon: <FaReact className="text-cyan-400" size={130} /> },
  { name: "Python", icon: <FaPython className="text-blue-700" size={130} /> },
  { name: "Java", icon: <FaJava className="text-red-700" size={130} /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-800" size={130} /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-700" size={130} /> },
  { name: "Ruby", icon: <SiRuby className="text-red-500" size={130} /> },
  { name: "Go", icon: <SiGo className="text-cyan-700" size={130} /> },
  { name: "Swift", icon: <SiSwift className="text-orange-400" size={130} /> },
  // Use SiCsharp if available, otherwise use FaNodeJs as a fallback for C#

  { name: "Kotlin", icon: <SiKotlin className="text-purple-600" size={130} /> },
  { name: "Rust", icon: <SiRust className="text-orange-500" size={130} /> },
  { name: "Scala", icon: <SiScala className="text-red-400" size={130} /> },
  { name: "Dart", icon: <SiDart className="text-blue-400" size={130} /> },
  { name: "Perl", icon: <SiPerl className="text-pink-600" size={130} /> },
  { name: "R", icon: <SiR className="text-blue-600" size={130} /> },

  { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={130} /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" size={130} /> },
  { name: "Linux", icon: <FaLinux className="text-black" size={130} /> },
];

const SLIDE_WIDTH = 130 + 25; // icon size + gap

const TechSlider = () => {
  const trackRef = useRef(null);

  // Duplicate the techs to make the loop seamless
  const techsLoop = [...techs, ...techs];

  useEffect(() => {
    const track = trackRef.current;
    let animationId;
    let pos = 0;

    function animate() {
      pos += 1;
      if (pos >= SLIDE_WIDTH * techs.length) {
        pos = 0;
      }
      if (track) {
        track.style.transform = `translateX(-${pos}px)`;
      }
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center my-12 mx-auto h-60 bg-white rounded-lg shadow-md overflow-hidden">
      <div
        ref={trackRef}
        className="flex items-center h-full"
        style={{
          width: `${techsLoop.length * SLIDE_WIDTH}px`,
          transition: "none",
        }}
      >
        {techsLoop.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center"
            style={{ width: 130, minWidth: 130, marginRight: 25 }}
          >
            {tech.icon}
            <div className="mt-2 text-xs font-semibold">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSlider;
