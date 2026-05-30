import s from "./HomePage.module.css"
import { useEffect, useState } from "react"
import WebCard from "../../components/WebCard/WebCard"
import Hej from "../../images/Hej.png"
import { onIntro } from "../../../api"
import ProjectCard from "../../components/ProjectCard/ProjectCard"

const HomePage = () => {
  const [intro, setIntro] = useState(null)

  useEffect(() => {
    const unsubscribeIntro = onIntro(setIntro)
    return () => {
      unsubscribeIntro()
    }
  }, [])

  return (
    <div className={`${s["wrapper"]}`}>
      <img className={s.introImg} src={Hej} alt="Intro image" />
      <h1>{intro?.text} 🎨 💻</h1>
      <div>
        <ProjectCard />
      </div>
      <h2>Mina projekt</h2>
      <h3 className={s.infoDivider}>Webbprogrammering</h3>
      <WebCard />
      <h3 className={s.infoDivider}>Webbutveckling & UX Design</h3>
    </div>
  )
}
export default HomePage
