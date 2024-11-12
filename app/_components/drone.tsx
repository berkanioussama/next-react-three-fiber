'use client';

import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import gsap from "gsap";

const Drone = () => {

  const droneRef = useRef<THREE.Group>(null);
  const drone = useLoader(GLTFLoader, '/a_drone.glb')
  const mixer = useRef<THREE.AnimationMixer>(null);
  // State for the model's position and rotation based on scroll
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);
  const [modelRotation, setModelRotation] = useState([0, 0, 0]);

  // Initialize the mixer and start the animation
  useEffect(() => {
    if (drone.animations.length) {
      mixer.current = new THREE.AnimationMixer(drone.scene);
      // Play the first animation (usually animations[0])
      const action = mixer.current.clipAction(drone.animations[0]);
      action.play();
    }
  }, [drone]);

  // Update the mixer on every frame
  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  // Scroll handler to update the model position and rotation based on scroll
  useEffect(() => {
    const sections = [
      { id: 'hero', position: { x: 0, y: -0.15, z: -0.40 }, rotation: { x: 0, y: 0, z: 0 } },
      { id: 'features', position: { x: 0, y: 0.1, z: 0.1 }, rotation: { x: -1, y: 0, z: 0 } },
      { id: 'projects', position: { x: 0, y: -0.07, z: -0.7 }, rotation: { x: 0, y: 0, z: 0 } }
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(sec => sec.id === entry.target.id);
            if (section) {
              // Smoothly animate to the target position and rotation
              gsap.to(droneRef.current.position, {
                ...section.position,
                duration: 1.5
              });
              gsap.to(droneRef.current.rotation, {
                ...section.rotation,
                duration: 1.5
              });
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    // Observe each section element
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
    /*const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 800) {
        // Set to initial position
        gsap.to(droneRef.current.position, { x: 0, y: 0, z: 0, duration: 2 });
        gsap.to(droneRef.current.rotation, { x: 0, y: 0, z: 0, duration: 2 });
      } else if (scrollY < 2400) {
        // Move to the "features" position
        gsap.to(droneRef.current.position, { x: 20, y: 1, z: -5, duration: 2 });
        gsap.to(droneRef.current.rotation, { x: 0, y: -1, z: 0, duration: 2 });
      } else {
        // Move to the "projects" position
        gsap.to(droneRef.current.position, { x: -20, y: 0, z: -5, duration: 2 });
        gsap.to(droneRef.current.rotation, { x: 0, y: 1, z: 0, duration: 2 });
        
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);*/
  }, []);

  return (
    <primitive
      ref={droneRef} // Set the ref for GSAP
      object={drone.scene}
      position={modelPosition}
      scale={1}
      rotation={modelRotation}
    />
  );
}

const modelPosition = [
  {
    id: 'hero',
    position: { x: 0, y: 0, z: 0 },
    rotation: {x: 0, y: 0, z: 0}
  },
  {
    id: 'features',
    position: { x: 1, y: 0, z: 0 },
    rotation: {x: 0, y: -1, z: 0}
  },
]
 
export default Drone;