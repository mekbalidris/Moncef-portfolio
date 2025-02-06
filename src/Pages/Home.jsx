import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import Blender from '../assets/Blender.glb';
import Blender2 from '../assets/Blender2.glb';
import Blender3 from '../assets/Blender3.glb';
import Blender4 from '../assets/Blender4.glb';
import Blender5 from '../assets/Blender5.glb';

// Component to render a single model
function Model({ modelPath, position, scale }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  //return <primitive ref={modelRef} object={scene} position={position} scale={scale} />;
}

export default function Home() {
  const models = [
    { modelPath: Blender, scale: 1 },
    { modelPath: Blender5, scale: 1 },
    { modelPath: Blender2, scale: 1 },
    { modelPath: Blender3, scale: 1 },
    { modelPath: Blender4, scale: 1 },
  ];

  const spacing = 14;
  const startX = -(models.length - 1) * (spacing / 2);

  return (
    <>
      <div className="flex flex-row justify-center items-center text-center z-0 absolute h-full w-full  top-0">

        {/* Main Content */}
        <div className="Software flex-col text-white mr-140 mb-10 w-100">
          <div className="mr-150 w-full">
            <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[10, 10, 4]} />
              {models.map((model, index) => (
                <Model
                  key={index}
                  modelPath={model.modelPath}
                  position={[startX + index * spacing, 0, 0]}
                  scale={model.scale}
                />
              ))}
            </Canvas>
          </div>
          <div className="text-left flex flex-col gap-10 p-10 rounded-3xl">
            <p className="text-3xl z-10">Moncef Deghdach</p>
            <div className="text text-white text-xl w-105">
              Hey! I’m Sef, and I create videos that make your brand shine. Whether it’s animations or 3D visuals, my team and I are here to bring your ideas to life.
            </div>
          </div>
        </div>

        {/* Headshot Image */}
        <div
          style={{
            position: 'absolute',
            bottom: '50%',
            right: '25%',
            width: '20%',
            height: "auto",
            zIndex: 10,
          }}
        >
        <div className="blob-container">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob">
          <defs>
            <clipPath id="blobClip">
              <path d="M45.5,-76.3C59.4,-70.8,71.5,-59.5,78.8,-45.8C86,-32.2,88.5,-16.1,86.7,-1C85,14.1,79,28.1,71.9,42C64.7,55.9,56.4,69.6,44.2,79.1C32.1,88.6,16,93.9,0.1,93.6C-15.7,93.4,-31.5,87.6,-45.7,79.3C-60,71,-72.7,60.1,-77.5,46.5C-82.4,32.9,-79.3,16.4,-78.7,0.4C-78,-15.7,-79.8,-31.4,-73.7,-42.8C-67.6,-54.2,-53.5,-61.3,-39.9,-66.9C-26.3,-72.6,-13.2,-76.9,1.3,-79.2C15.8,-81.5,31.6,-81.8,45.5,-76.3Z"
               transform="translate(100 100)" />
            </clipPath>
          </defs>
          <path fill="black" d="M45.5,-76.3C59.4,-70.8,71.5,-59.5,78.8,-45.8C86,-32.2,88.5,-16.1,86.7,-1C85,14.1,79,28.1,71.9,42C64.7,55.9,56.4,69.6,44.2,79.1C32.1,88.6,16,93.9,0.1,93.6C-15.7,93.4,-31.5,87.6,-45.7,79.3C-60,71,-72.7,60.1,-77.5,46.5C-82.4,32.9,-79.3,16.4,-78.7,0.4C-78,-15.7,-79.8,-31.4,-73.7,-42.8C-67.6,-54.2,-53.5,-61.3,-39.9,-66.9C-26.3,-72.6,-13.2,-76.9,1.3,-79.2C15.8,-81.5,31.6,-81.8,45.5,-76.3Z"
          transform="translate(100 100)" />
          
          <image
            x="10"
            y="20"
            width="100%"
            height="100%"
            href="https://sef-protfolio.my.canva.site/media/6c47d7dbed51a49960e75559a86847bb.png"
            clipPath="url(#blobClip)"
          />
          </svg>
        </div>
      
        </div>
      </div>
    </>
  );
}