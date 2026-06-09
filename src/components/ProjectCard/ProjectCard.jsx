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
                <video
                  alt="En kort inspelning som visar hur hemsidan ser ut"
                  className={s.cardVideo}
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
