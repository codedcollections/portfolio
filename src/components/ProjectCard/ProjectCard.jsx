import { useEffect, useState } from "react"
import { onCards } from "../../../api"
import s from "./ProjectCard.module.css"
import { FaGithub } from "react-icons/fa"
import plottwist from "../../assets/videos/plottwist.mp4"
import productivity from "../../assets/videos/productivity.mp4"
import pokemon from "../../assets/videos/pokemon.mp4"
import blog from "../../assets/videos/blog.mp4"
const ProjectCard = () => {
  const [cards, setCards] = useState([])
  const thumbnailVideos = {
    plottwist,
    productivity,
    pokemon,
    blog,
  }

  useEffect(() => {
    const unsubscribeCards = onCards(setCards)
    return () => {
      unsubscribeCards()
    }
  }, [])

  return (
    <div className={`${s.cardGrid}`}>
      {cards?.map((card) => (
        <div className={s.cardContainer} key={card.id}>
          <div className={s.titleAndContent}>
            <div className={`${s.headerContainer} blueBackground flex`}>
              <div className={`${s.titleAndTags} flex flex-left flex-down`}>
                <h2 className={s.cardTitle}>{card.title}</h2>
                <div className={`${s.allTags} flex`}>
                  {card.tags?.map((tag, index) => (
                    <p className="greyBackground" key={index}>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className={s.videoContainer}>
                <video className={s.cardVideo} autoPlay muted loop>
                  <source
                    src={thumbnailVideos[card.project]}
                    type="video/mp4"
                  />
                  Your browser does not support video.
                </video>
              </div>
            </div>
            <div className={s.contentContainer}>
              {card.content?.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </div>
          </div>
          <div className={`${s.btnContainer} flex flex-right`}>
            <a
              className={`${s.cardLink} darkBackground`}
              href={card.repository}
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className={`${s.cardLink} darkBackground`}
              href={card.website}
              target="_blank"
            >
              Besök hemsida
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ProjectCard
