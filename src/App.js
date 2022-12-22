import './App.css';
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './components/Model';
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Stage,
} from '@react-three/drei';
import { Suspense } from 'react';
import Particles from './components/Particles';

function App() {
  const mouse = useRef([0, 0]);
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 50, -350], fov: 55 }}>
        <color attach="background" args={['#0e1111']} />
        <Stage
          preset="rembrandt"
          intensity={4}
          environment="city"
          adjustCamera={2}
        >
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, -15, 10]}>
              <Model scale={[0.1, 0.1, 0.1]} />
            </group>

            <Environment preset="city" />
          </Suspense>

          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />
          <Particles count={5000} mouse={mouse} />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Stage>
      </Canvas>
    </div>
  );
}

export default App;
