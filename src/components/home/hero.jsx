import React from 'react'

function Wave() {
  const numberOfCircles = 5; // Number of bulbs
  const colors = ['#FF00FF', '#00FFFF', '#00FF00']; // Neon-like purple, cyan, green colors

  const circles = [];

  for (let i = 0; i < numberOfCircles; i++) {
    circles.push(
      <circle
        key={i}
        fill={colors[i % colors.length]}
        r="12"
        style={{ filter: 'brightness(2) drop-shadow(0px 0px 10px currentColor)' }}
      >
        {/* Animation along the wave path */}
        <animateMotion repeatCount="indefinite" dur={`${10 + i}s`}>
          <mpath href="#wavePath" />
        </animateMotion>
        {/* Brightening effect */}
        <animate
          attributeName="fill-opacity"
          values="0.6; 1; 0.6" // Glow transitions
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    );
  }
  return (
    <>
      {/* Gradient */}
      <div className="w-full h-screen absolute top-0 bg-gradient-to-tr from-blue-800 via-indigo-900 to-purple-900 overflow-hidden -z-10" >
        <img className='w-full h-screen blur-sm' src="/assets/images/iitj-campus-night2.png" alt=""/>
      </div>

      {/* Wave */}
      <svg className="absolute bottom-0 w-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#1f2937" d="M0,96L48,117.3C96,139,192,181,288,213.3C384,245,480,277,576,277.3C672,277,768,245,864,213.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      {/* Motion */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute bottom-3 left-0">

        <path id="wavePath" fill="transparent" d="M0,96L48,117.3C96,139,192,181,288,213.3C384,245,480,277,576,277.3C672,277,768,245,864,213.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        {circles}
      </svg>
    </>
  );
}

const Hero = () => {

  return (
    <>
      <Wave />

      {/* Hero content */}

      <div className="flex flex-col gap-y-1 h-screen text-white w-full justify-center items-center">
        <div className="text-5xl">SWC welcomes you to the</div>
        <div className="text-6xl py-4 font-bold">The family tree</div>
        <div className="text-5xl">IIT Jodhpur</div>
        <a href='#family' className='px-4 py-2 mt-5 border-2 border-transparent hover:border-sky-600 hover:bg-transparent active:bg-purple-950 bg-purple-800 rounded-sm z-20'>Get your family &gt;&gt;</a>
      </div>
    </>
  )
}

export default Hero