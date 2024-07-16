"use strict";
function makeTextGlow(text, className) {
  const glowInText = document.createElement("p");
  const textnode = document.createTextNode(text);
  glowInText.classList.add("glowIn");
  if(className) glowInText.classList.add(className);
  glowInText.appendChild(textnode);
  document.body.appendChild(glowInText);
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.03}s`;
      glowInText.append(span);
  });
}

function loadTsParticles() {
    tsParticles.load("tsparticles", {
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          color: {
            value: "#000000",
            animation: {
              enable: true,
              speed: 30
            }
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out"
            },
            size: true,
            speed: {
              min: 1,
              max: 3
            }
          },
          number: {
            value: 500,
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            value: 1,
            animation: {
              enable: false,
              startValue: "max",
              destroy: "min",
              speed: 0.3,
              sync: true
            }
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            direction: "random",
            move: true,
            animation: {
              enable: true,
              speed: 60
            }
          },
          tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 60
            }
          },
          shape: {
            type: ["triangle", "circle", "square"]
          },
          size: {
            value: {
              min: 3,
              max: 5
            }
          },
          roll: {
            darken: {
              enable: true,
              value: 30
            },
            enlighten: {
              enable: true,
              value: 30
            },
            enable: true,
            speed: {
              min: 15,
              max: 25
            }
          },
          wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
              min: -15,
              max: 15
            }
          }
        }
      });
}