import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Shoes (props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('http://findmyquote.local/wp-content/uploads/2021/08/shoe-draco.glb')
  console.log(materials)

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  // Cursor showing current color
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${props.data.Hovered}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${props.data.Hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = '<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>'
    document.body.style.cursor = `url('data:image/svg+xml;base64,${window.btoa(props.data.Hovered ? cursor : auto)}'), auto`
  }, [props.data.Hovered])

  const textureMesh = useTexture(props.data.TextureMesh)

  return (
    <>
      <group
        ref={ref}
        dispose={null}
        onPointerOver={(e) => (e.stopPropagation(), props.setHovered(e.object.material.name))}
        onPointerOut={(e) => e.intersections.length === 0 && props.setHovered(null)}
        onPointerMissed={() => (props.data.Current = null)}
        onPointerDown={(e) => (e.stopPropagation(), (props.setCurrent(e.object.material.name)))}
      >
        <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.data.Laces} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.data.Mesh}>
          {
          props.data.TextureMesh
            ? <meshStandardMaterial name='mesh' map={textureMesh} bumpScale={0.05} />
            : null
          }
        </mesh>
        <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.data.Caps} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.data.Inner} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.data.Sole} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.data.Stripes} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.data.Band} />
        <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.data.Patch} />
      </group>
    </>
  )
}
