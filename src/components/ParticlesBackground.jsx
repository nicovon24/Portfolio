import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import particlesConfig from "../config/particlesjs-config"

const ParticlesBackground = () => {
  const particlesInit = useCallback((engine)=>{
    loadFull(engine)
  })

  return(
    <div>
      <Particles
      id="tsparticles"
      options={particlesConfig}
      init={particlesInit}
      />
    </div>
  )
}

export default ParticlesBackground