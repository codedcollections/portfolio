import { db } from "./firebase"
import { ref, onValue } from "firebase/database"

export function onCards(setter) {
  const cardsRef = ref(db, "cards")

  return onValue(cardsRef, (snapshot) => {
    const cards = snapshot.val()

    if (!cards) {
      setter([])
      return
    }

    const cardsArray = Object.entries(cards).map(([id, data]) => ({
      id,
      ...data,
    }))

    setter(cardsArray)
  })
}

export function onIntro(setter) {
  const introRef = ref(db, "intro")

  return onValue(introRef, (snapshot) => {
    const intro = snapshot.val()

    if (!intro) {
      setter(null)
      return
    }

    setter(intro)
  })
}
