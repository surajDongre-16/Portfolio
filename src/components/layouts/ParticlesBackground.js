import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="particle">
      <Particles
        //id="tsparticles"
        height="100vh"
        width="100%"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#fff",
          //   },
          // },
          //fpsLimit: 120,
          fullScreen:{
            enable:false
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 0.3,
                size: 4,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            line_linked: {
              enable: false,
            },
            collisions: {
              enable: true,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              direction: "bottom",
              enable: true,
              outMode: "out",
              random: false,
              size: true,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: false,
              },
              value: 75,
            },
            opacity: {
              random: true,
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 10,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
