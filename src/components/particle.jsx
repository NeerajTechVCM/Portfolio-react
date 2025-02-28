import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particle({ isDark }) {
  const [init, setInit] = useState(false);


  const color = isDark ? "#2c2828" : "#d9d5dc";

  useEffect(() => {
    // Initialize particles engine once
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 6,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#b164fa", 
        },
        shape: {
          type: "polygon",
          stroke: {
            width: 0,
            color: "#000",
          },
          polygon: {
            nb_sides: 6,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 160,
          random: false,
          anim: {
            enable: true,
            speed: 10,
            size_min: 40,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 200,
          color: "#ffffff",
          opacity: 1,
          width: 2,
        },
        move: {
          enable: true,
          speed: 8,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "grab",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      background: {
        color,
        
      },
    }),
    [color] 
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={() => console.log("Particles Loaded!")}
      />
    );
  }

  return null;
}
