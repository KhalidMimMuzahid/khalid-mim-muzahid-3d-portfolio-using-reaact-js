import React, { Suspense, useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
// import { UIContext } from "../../contexts/UIProvider/UIProvider";

const Computers = ({ isMobile }) => {
  // const { theme } = useContext(UIContext);
  const computerForDarkMode = useGLTF("./desktop_pc_for_dark_mode/scene.gltf");
  // const computerForLightMode = useGLTF(
  //   "./desktop_pc_for_light_mode/scene.gltf"
  // );

  return (
    <mesh>

      {/* removing light mood */}
      {/* {theme === "light" && (
        <hemisphereLight intensity={0.15} groundColor="black" />
      )} */}

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        /* removing light mood */
        // penumbra={theme === "light" ? 1 : 2}
        penumbra={2}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
        /* removing light mood */
      {/* {theme === "light" && <pointLight intensity={1} />} */}

      <primitive
        /* removing light mood */
        // object={
        //   theme === "dark"
        //     ? computerForDarkMode.scene
        //     : computerForLightMode.scene
        // }
        object={computerForDarkMode.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
