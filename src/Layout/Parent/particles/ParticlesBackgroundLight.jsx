import { useCallback, useContext } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { UIContext } from "../../../contexts/UIProvider/UIProvider";
const ParticlesBackgroundLight = () => {
  const { theme } = useContext(UIContext);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  //   fullScreen: {
  //     enable: true,
  //     zIndex: -1,
  //   },
  //   #E2C08D
  //   #ADC8F6
  const forLight = (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        name: "Bubble",
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#00909E",
          },
          shape: {
            type: "polygon",
            options: {
              polygon: {
                sides: 7,
              },
            },
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.5,
            },
          },
          size: {
            value: {
              min: 15,
              max: 25,
            },
          },
          links: {
            enable: false,
            distance: 200,
            color: "#27496D",
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            onClick: {
              enable: false,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              duration: 2,
              size: 20,
              opacity: 0.8,
              color: "#27496D",
              mix: true,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        background: {
          color: "#d5fbff",
        },
      }}
    />
  );

  //   return theme === "light" && forLight;
  return forLight;
};

export default ParticlesBackgroundLight;

// options={{
//     name: "Bubble",
//     fullScreen: {
//       enable: true,
//       zIndex: -1,
//     },
//     particles: {
//       number: {
//         value: 200,
//         density: {
//           enable: true,
//         },
//       },
//       color: {
//         value: "#fff",
//       },
//       shape: {
//         type: "polygon",
//         options: {
//           polygon: {
//             sides: 50,
//           },
//         },
//       },
//       opacity: {
//         value: {
//           min: 0.3,
//           max: 0.5,
//         },
//       },
//       size: {
//         value: {
//           min: 5,
//           max: 10,
//         },
//       },
//       links: {
//         enable: false,
//         distance: 200,
//         color: "#ffffff",
//         opacity: 1,
//         width: 2,
//       },
//       move: {
//         enable: true,
//         speed: 2,
//       },
//     },
//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: "bubble",
//         },
//         onClick: {
//           enable: false,
//           mode: "push",
//         },
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           links: {
//             opacity: 1,
//           },
//         },
//         bubble: {
//           distance: 400,
//           duration: 2,
//           size: 20,
//           opacity: 0.8,
//           color: "#ff0000",
//           mix: true,
//         },
//         repulse: {
//           distance: 200,
//         },
//         push: {
//           quantity: 4,
//         },
//         remove: {
//           quantity: 2,
//         },
//       },
//     },
//     background: {
//       color: "#E2C08D",
//     },
//   }}
// options={{
//     name: "Text Mask Multiline",
//     fullScreen: {
//       enable: true,
//       zIndex: -1,
//     },
//     smooth: true,
//     interactivity: {
//       events: {
//         onHover: {
//           enable: true,
//           mode: "bubble",
//           parallax: {
//             enable: false,
//             force: 2,
//             smooth: 10,
//           },
//         },
//       },
//       modes: {
//         bubble: {
//           distance: 40,
//           duration: 2,
//           opacity: 8,
//           size: 15,
//         },
//       },
//     },
//     particles: {
//       move: {
//         direction: "none",
//         distance: 2,
//         enable: true,
//         speed: 1,
//       },
//       number: {
//         value: 600,
//       },
//       color: {
//         value: "random",
//       },
//       shape: {
//         type: ["circle", "square", "triangle"],
//       },
//       size: {
//         value: {
//           min: 1,
//           max: 3,
//         },
//       },
//     },
//     canvasMask: {
//       enable: true,
//       override: {
//         color: false,
//       },
//       scale: 1,
//       pixels: {
//         filter: "pixelTextFilter",
//       },
//       position: {
//         x: 50,
//         y: 50,
//       },
//       text: {
//         color: "#ff0000",
//         font: {
//           size: 300,
//         },
//         text: "Hello\nWorld\nHello\nWorld",
//         lines: {
//           spacing: 50,
//         },
//       },
//     },
//     background: {
//       color: "#E2C08D",
//       image: "",
//       position: "50% 50%",
//       repeat: "no-repeat",
//       size: "cover",
//     },
//   }}
