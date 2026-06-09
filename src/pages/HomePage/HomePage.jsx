import s from "./HomePage.module.css"
import { useEffect, useState } from "react"
import introImg from "../../images/intro.png"

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
      <div className={`${s.introImgContainer} flex`}>
        <img
          className={s.introImg}
          src={introImg}
          alt="Ordet hej i vit text framför en blandning av färger och former"
        />
      </div>
      <h1>{intro?.text} 🎨 💻</h1>

      <h2>Mina projekt</h2>

      <h3 className={s.infoDivider}>Webbprogrammering</h3>
      <ProjectCard />
      <h3 className={s.infoDivider}>Webbutveckling & UX Design</h3>
    </div>
  )
}
export default HomePage
