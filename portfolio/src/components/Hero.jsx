import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { BsChevronDoubleDown } from 'react-icons/bs'

const Hero = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <>
      <div className='hero fixed'>
        <div className='text-5xl font-extrabold text-white mt-32 ml-32 mb-10 space-y-6 heading'>
          <div className='text-7xl'>Hi,</div>   
          My name is Lakshya <br />
          I am a web developer <br />
        </div>
        <div className='text-slate-300 text-xl ml-32 handWriting'>
            Full Stack Developer / Javascript Developer
        </div>
        <div className='mt-24 ml-40 text-[#08fdd8] text-md tracking-[.4em] btn'>
            <a href='/resume'>
                My Resume
            </a>
        </div>
        <div className='w-full text-white text-xl animate-bounce'>
            <a href='/about'> <BsChevronDoubleDown className=' text-[#08fdd8] mt-10 ml-[40rem]' /></a>
        </div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
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
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.3,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 900,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      </div>
    </>
  )
}

export default Hero