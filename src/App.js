import './App.css';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Model from './components/Model';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
} from '@react-three/drei';
import { Suspense } from 'react';
import Experience from './components/Experience';

function App() {
  // const gltf = useLoader(GLTFLoader, '/scene.gltf');
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 150, -20], fov: 55 }}>
        <color attach="background" args={['#0e1111']} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} position={[0, -5, 0]}>
            <Model />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}

export default App;
