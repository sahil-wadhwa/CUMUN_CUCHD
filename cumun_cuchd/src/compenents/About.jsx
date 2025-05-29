import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const About = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Only import on client side
    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.globe.min");
      if (!vantaEffect) {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        color2: 0x7,
        size: 1.30,
        backgroundColor: 0xe35151
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-full h-screen flex text-white p-10 flex-col">
        <div className="text-4xl font-extrabold text-white mb-5">About CUMUN</div>
      <h1 className="text-lg font-bold z-10 w-[60vw] text-justify">The Chandigarh University Model United Nations (CUMUN) Conference is a premier platform for young leaders to engage in diplomatic simulations, addressing global challenges 
        through debate, research, and collaboration. Established in 2015, CU MUN has grown into on
        e of India’s most prestigious MUN conferences, attracting diverse talent from across the nation.</h1>
        <div className="text-2xl mt-[8vh] font-extrabold text-center uppercase w-[50vw]">Our Previous Edition</div>
        <video className="w-full h-[60vh] mt-5 object-cover rounded-lg shadow-lg"
        style={{width:'50vw', height:'50vh'}}
        autoPlay
        muted
        loop
        >
            <source src="/assets/clip1.MOV" type="video/mp4" />
        </video>
    </div>
  );
};

export default About;
