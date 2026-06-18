import s from "./HomePage.module.css"
import { useEffect, useState } from "react"
import introImg from "../../assets/images/intro.png"

import { onIntro, onSocials } from "../../../api"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { FaLinkedin } from "react-icons/fa6"

const HomePage = () => {
  const [intro, setIntro] = useState(null)
  const [socials, setSocials] = useState(null)

  useEffect(() => {
    const unsubscribeIntro = onIntro(setIntro)
    const unsubscribeSocials = onSocials(setSocials)
    return () => {
      unsubscribeIntro()
      unsubscribeSocials()
    }
  }, [])

  return (
    <div className={`${s["wrapper"]}`}>
      <div className={`${s.introductionContainer}`}>
        <div className={`${s.introImgContainer} flex`}>
          <img
            className={s.introImg}
            src={introImg}
            alt="Ordet hej i vit text framför en blandning av färger och former"
          />
        </div>
        <h1 className={`flex`}>{intro?.text}🎨</h1>
      </div>
      <h2 className={`${s.projectsHeader}`}>Mina projekt</h2>

      <h3 className={`${s.infoDivider} flex`}>Webbprogrammering</h3>
      <ProjectCard />

      <h3 className={`${s.infoDivider} flex`}></h3>

      <div className={`${s.socialsContainer} flex`}>
        <a
          className={`${s.linkedIn} flex`}
          target="_blank"
          href={socials?.linkedin}
        >
          kontakta mig på{" "}
          <FaLinkedin className={`${s.linkedInIcon}`} size={20} />
        </a>
      </div>

      <footer className={`flex`}>2026</footer>
    </div>
  )
}
export default HomePage
