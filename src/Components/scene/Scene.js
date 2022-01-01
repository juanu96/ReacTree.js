import React, { Suspense, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Shoes from '../shoe/Shoes'
// import Picker from '../picker/Picker'
import { Store } from '../App/App'

export default function Scene () {
  const store = useContext(Store)
  console.log(store)
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Shoes data={store} setHovered={(a) => store.setHovered(a)} setCurrent={(a) => store.setCurrent(a)} />
          <Environment preset='city' />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan />
      </Canvas>
      {/* <Picker /> */}
    </>
  )
}
