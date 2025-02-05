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
            bottom: '0%',
            right: '14%',
            width: '20%',
            height: 'auto',
            zIndex: 10,
          }}
        >
          <img
            src="https://sef-protfolio.my.canva.site/media/6c47d7dbed51a49960e75559a86847bb.png"
            alt="Headshot"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter:
                'drop-shadow(8px -2px 5px rgba(0, 0, 0, 0.5)) brightness(1.1) contrast(1.1)',
              pointerEvents: 'none'
              }}
          />
        </div>
      </div>
    </>
  );
}