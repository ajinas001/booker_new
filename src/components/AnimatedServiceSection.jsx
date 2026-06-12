// // components/AnimatedServicesSection.jsx

// import React, { useEffect, useRef } from 'react';
// import { Application } from '@splinetool/runtime';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP plugins when the module is loaded
// gsap.registerPlugin(ScrollTrigger);

// const SPLINE_URL = "https://prod.spline.design/ZZOWNi4tS7p8xxOs/scene.splinecode";

// const AnimatedServicesSection = () => {
//     // Refs for the canvas and the main container for GSAP triggers
//     const canvasRef = useRef(null);
//     const containerRef = useRef(null);

//     // This useEffect hook runs once after the component mounts to set up the animations
//     useEffect(() => {
//         if (!canvasRef.current || !containerRef.current) return;

//         let app;
//         let rotateKeyboard;
//         let interval;
//         let keyboard;

//         const setupSplineAndGSAP = async () => {
//             // 1. Initialize Spline Application
//             app = new Application(canvasRef.current);
//             await app.load(SPLINE_URL);

//             // 2. Find the object in the Spline scene
//             keyboard = app.findObjectByName("keyboard");

//             if (!keyboard) {
//                 console.error("Spline object 'keyboard' not found.");
//                 return;
//             }

//             // Set initial GSAP styles (equivalent to original setup)
//             gsap.set(keyboard.scale, { x: 1, y: 1, z: 1 });
//             gsap.set(keyboard.position, { x: 110, y: 50 });

//             // 3. Initial Keyboard Rotation (Continuous Spin)
//             rotateKeyboard = gsap.to(keyboard.rotation, {
//                 y: Math.PI * 2 + keyboard.rotation.y,
//                 x: 0,
//                 z: 0,
//                 duration: 10,
//                 repeat: -1,
//                 ease: "none"
//             });

//             // 4. Scroll Animation for Part 1 (PLAY LIKE A PRO)
//             const part1Trigger = containerRef.current.querySelector('#part1');
//             const part2Trigger = containerRef.current.querySelector('#part2');
//             const part3Trigger = containerRef.current.querySelector('#part3');

//             gsap.timeline({
//                 scrollTrigger: {
//                     trigger: part1Trigger,
//                     start: "top 60%",
//                     end: "bottom bottom",
//                     scrub: true,
//                     onEnter: () => {
//                         // Pause continuous spin and set new rotation
//                         rotateKeyboard.pause();
//                         gsap.to(keyboard.rotation, {
//                             y: Math.PI / 12,
//                             duration: 1
//                         });

//                         // Start the click interval animation
//                         interval = setInterval(() => {
//                             app.emitEvent("keyDown", "keyboard");
//                         }, 1500);
//                     },
//                     onLeaveBack: () => {
//                         // Resume continuous spin
//                         const newProgress = keyboard.rotation.y / (Math.PI * 2);
//                         rotateKeyboard.progress(newProgress).resume();
//                         clearInterval(interval);
//                     }
//                 }
//             })
//             .to(keyboard.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0)
//             .to(keyboard.position, { x: -500, y: -200 }, 0)
//             .to(keyboard.scale, { x: 3, y: 3, z: 3 }, 0);


//             // 5. Scroll Animation for Part 2 (CUSTOMIZE ALL THE WAY)
//             gsap.timeline({
//                 onComplete: () => {
//                     clearInterval(interval);
//                     app.emitEvent("mouseDown", "keyboard"); // Stop the keyDown animation
//                 },
//                 scrollTrigger: {
//                     trigger: part2Trigger,
//                     start: "top bottom",
//                     end: "center bottom",
//                     scrub: true
//                 }
//             })
//             .to(keyboard.rotation, { x: Math.PI / 36, y: -Math.PI / 10 }, 0)
//             .to(keyboard.position, { x: 150, y: 50 }, 0)
//             .to(keyboard.scale, { x: 0.8, y: 0.8, z: 0.8 }, 0);

//             // 6. Scroll Animation for Part 3 (#Spline3D...)
//             gsap.timeline({
//                 scrollTrigger: {
//                     trigger: part3Trigger,
//                     start: "top bottom",
//                     end: "bottom bottom",
//                     scrub: true
//                 }
//             })
//             .to(keyboard.position, { x: 0, y: 0 }, 0);

//             // 7. Background Progress Bar Animation (using Tailwind's w- and bg- classes)
//             // Note: Replaced the original bar with Tailwind for a more native solution
//             // I'll keep the bar logic as a simple example to show how the original logic translates.
//             // For a Tailwind-native approach, one would use class toggling, but I'll stick to the GSAP prop animation for fidelity.
//             const barElement = containerRef.current.querySelector('.bar');
            
//             const animateBar = (triggerElement, onEnterWidth, onLeaveBackWidth) => {
//                 gsap.to(barElement, {
//                     scrollTrigger: {
//                         trigger: triggerElement,
//                         start: "top center",
//                         end: "bottom bottom",
//                         scrub: true,
//                         onEnter: () => {
//                             gsap.to(barElement, {
//                                 width: onEnterWidth,
//                                 duration: 0.2,
//                                 ease: "none"
//                             });
//                         },
//                         onLeaveBack: () => {
//                             gsap.to(barElement, {
//                                 width: onLeaveBackWidth,
//                                 duration: 0.2,
//                                 ease: "none"
//                             });
//                         }
//                     }
//                 });
//             };

//             animateBar(part1Trigger, "35%", "0%");
//             animateBar(part2Trigger, "65%", "35%");
//             animateBar(part3Trigger, "100%", "65%");
//         };
        
//         // 8. Keyboard Text Effect
//         const keys = containerRef.current.querySelectorAll(".key");
//         function pressRandomKey() {
//             if (keys.length === 0) return;
//             const randomKey = keys[Math.floor(Math.random() * keys.length)];
//             // Use GSAP for animation instead of plain CSS animation for better integration
//             gsap.to(randomKey, {
//                 y: '10px',
//                 duration: 0.1,
//                 ease: 'power1.out',
//                 yoyo: true,
//                 repeat: 1,
//                 onComplete: () => {
//                     // Schedule the next key press
//                     if (containerRef.current) { // Check if the component is still mounted
//                         setTimeout(pressRandomKey, 100 + Math.random() * 300);
//                     }
//                 }
//             });
//         }
//         pressRandomKey();


//         setupSplineAndGSAP();

//         // 9. Cleanup function for React (Runs on component unmount)
//         return () => {
//             clearInterval(interval);
//             // Revert all ScrollTriggers created
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//             // Kill GSAP tweens if necessary (though ScrollTrigger kill often handles this)
//             if (rotateKeyboard) rotateKeyboard.kill();
//             // The Spline App doesn't have a simple kill/destroy method, 
//             // but cleaning up GSAP and intervals is crucial for performance.
//         };
//     }, []); // Empty dependency array ensures this runs only once

//     // --- Component Rendering ---

//     return (
//         <div 
//             ref={containerRef} 
//             className="bg-[#4e17cf] min-h-screen flex flex-col items-center justify-start relative overflow-x-hidden p-5"
//         >
//             {/* Canvas Container: Fixed position, full screen, pointer-events-none is crucial */}
//             <div className="fixed z-30 top-0 left-0 w-screen h-screen pointer-events-none">
//                 <canvas id="canvas3d" ref={canvasRef} className="w-full h-full"></canvas>
//             </div>

//             {/* Navigation Bar (Tailwind equivalent of the original) */}
//             <nav className="flex w-full justify-between items-center z-10">
//                 {/* Logo and watch on youtube link */}
//                 <span className="text-white text-2xl font-bold">BAC</span>
//                 <a href="https://youtu.be/x3m1PGEfG5c" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
//                     Watch on Youtube
//                 </a>
//             </nav>

//             {/* Background Bar (Initial state: width-0, absolute, right-0, top-0) */}
//             <div className="bar h-full w-0 absolute right-0 top-0 bg-black z-[-5]"></div>

//             {/* Hero Section */}
//             <div id="hero" className="flex flex-row items-center justify-between h-screen w-full">
//                 <h1 className="text-[10vw] absolute top-[calc(100vh-50vw)] font-extrabold left-5 leading-none tracking-[-5px] text-white z-10 md:top-[20vw] md:text-[15vw]">
//                     YOUR<br/>SERVICES.<br/>YOUR<br/>
//                     {/* The keyboard text effect implementation */}
//                     <div className="inline-block">
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">S</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">T</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">R</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">A</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">T</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">E</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">G</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">Y</span>
//                         <span className="key inline-block tracking-[-2vw] transition-transform duration-200">.</span>
//                     </div>
//                 </h1>
//             </div>

//             {/* --- Service Section 1: Audit & Assurance (Placeholder for Part 1) --- */}
//             <div id="part1" className="flex flex-row w-full h-[150vh] z-10">
//                 {/* Empty div for spacing on large screens */}
//                 <div className="hidden lg:block w-[70%]"></div> 
//                 <div className="part1-info flex flex-col w-full lg:w-[30%] gap-10 p-1">
//                     <h2 className="text-4xl leading-none text-white md:text-[5vw]">AUDIT & ASSURANCE.</h2>
//                     <p className="m-0 text-lg font-light text-white">
//                         [cite_start]{/* Information about BAC's Audit services [cite: 66, 67] */}
//                         [cite_start]Our audits go beyond a checklist, delivering a **risk-based, systematic examination** of your financial statements and internal controls[cite: 66]. [cite_start]We provide **actionable insights** to enhance your financial foundation and build trust with investors, regulators, and partners[cite: 67].
//                     </p>
//                     <button className="border border-white/40 bg-transparent text-lg font-light w-full rounded-xl py-5 cursor-pointer text-white hover:border-white transition-all duration-300">
//                         Explore Audit Services
//                     </button>
//                 </div>
//             </div>

//             {/* --- Service Section 2: Taxation (Placeholder for Part 2) --- */}
//             <div id="part2" className="flex flex-row w-full h-[150vh] z-10">
//                 <div className="part2-info flex flex-col w-full lg:w-[30%] gap-10 p-1">
//                     <h2 className="text-4xl leading-none text-white md:text-[5vw]">TAXATION.</h2>
//                     <p className="m-0 text-lg font-light text-white">
//                         [cite_start]{/* Information about BAC's Taxation services [cite: 94, 95] */}
//                         [cite_start]Managing tax obligations is about **adding value, minimizing risk, and supporting sustainable growth**[cite: 94]. [cite_start]We offer expert corporate tax advisory and comprehensive compliance services designed to help you navigate the complexities of the UAE tax framework with confidence[cite: 95].
//                     </p>
//                     <button className="border border-white/40 bg-transparent text-lg font-light w-full rounded-xl py-5 cursor-pointer text-white hover:border-white transition-all duration-300">
//                         View Tax Solutions
//                     </button>
//                 </div>
//                 {/* Empty div for spacing on large screens */}
//                 <div className="hidden lg:block w-[70%]"></div>
//             </div>

//             {/* --- Final Section: Advisory (Placeholder for Part 3) --- */}
//             <div id="part3" className="flex flex-col h-[120vh] justify-end items-center mb-12 z-10 w-full">
//                 <h2 className="text-4xl leading-none text-white md:text-[5vw]">BUSINESS ADVISORY.</h2>
//                 <a href="https://bookeraccounting.com" target="_blank" rel="noopener noreferrer" className="text-white mt-4 hover:underline">
//                     bookeraccounting.com
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default AnimatedServicesSection;