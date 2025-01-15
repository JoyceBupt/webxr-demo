import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const XrCube = () => {
  const cubeRef = useRef()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
  })
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cubeRef} position-z={-5}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  )
}

export default XrCube
