import { useEffect, useState } from "react"
import { onCards } from "../../../api"
import s from "./ProjectCard.module.css"
import { FaGithub } from "react-icons/fa"

const ProjectCard = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const unsubscribeCards = onCards(setCards)
    return () => {
      unsubscribeCards()
    }
  }, [])

  return (
    <div>
      {cards?.map((card) => (
        <div className={s.cardContainer} key={card.id}>
          <div className={s.headerContainer}>
            <div className={s.titleAndTags}>
              <h2>{card.title}</h2>
              <div className={s.allTags}>
                {card.tags?.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
            <div className={s.videoContainer}>
              <video
                style={{ width: "30%", height: "auto" }}
                autoPlay
                muted
                loop
              >
                <source src={card.video} type="video/mp4" />
                Your browser does not support video.
              </video>
            </div>
          </div>
          <div className={s.contentContainer}>
            <p>{card.content}</p>
          </div>
          <div className={s.btnContainer}>
            <a href={card.repository} target="_blank">
              <FaGithub />
            </a>
            <a href={card.website} target="_blank">
              Besök hemsida
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ProjectCard
