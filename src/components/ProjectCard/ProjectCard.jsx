import { useEffect, useState } from "react"
import { onCards, onIntro } from "../../../api"

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
      <h1>ProjectCard</h1>

      {cards?.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  )
}
export default ProjectCard
