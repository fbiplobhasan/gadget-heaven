import React, { useEffect } from "react";
import "./Heading.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Heading = ({ title, subTitle }) => {

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    gsap.fromTo(
      ["h1", "p", "button"],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".text-section",
          start: "top 80%",
          end: "top 30%", 
          scrub: false,
          toggleActions: "play none none none",
          // markers:true,          
        },
      }
    );
  }, []);

  return (
    <div className="my-10 container">
      <h1 className="text-center text-4xl heading">{title}</h1>
      <p className="text-center sub-title">{subTitle}</p>
    </div>
  );
};

export default Heading;
