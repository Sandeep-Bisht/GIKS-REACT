import { async } from 'q';
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleComponent = () => {
  async function loadParticles(main){
    await loadFull(main)

  }

   return(
      <Particles
      className='particle-component'
      id='tsparticles'
      init={loadParticles}
      options={
        {
          "fullScreen":{
            "enable" :false,
            "zIndex":-1
          },

         background: {
                color: {
                    value: "#01162a",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 2,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.80,
                    },
                },
            },
            particles: {
                color: {
                    value: "#2e6baa",
                },
                links: {
                    color: "#2e6baa",
                    distance: 150,
                    enable: true,
                    opacity: 0.34,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }
      }
      
      
      />

     
   )
};

export default ParticleComponent;
