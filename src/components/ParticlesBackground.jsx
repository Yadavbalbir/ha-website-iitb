import Particles from "react-tsparticles"
import particlesConfig from "./config/particles-config"
function ParticlesBackground() {
  return (
    <Particles params={particlesConfig}/>
  )
}

export default ParticlesBackground