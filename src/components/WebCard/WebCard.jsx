import s from "./WebCard.module.css"
import img from "../../assets/react.svg"
import { GiPencilBrush } from "react-icons/gi"
import { FaGithub } from "react-icons/fa"
import { FaExternalLinkAlt } from "react-icons/fa"

const WebCard = () => {
  return (
    <>
      <div className={s.scrollWrapper}>
        <h2>Title</h2>
        <div className={s.scrollBox}>
          <GiPencilBrush size={30} />
          <img src={img} alt="react logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At labore
            odit accusantium! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Delectus laudantium officiis ad labore ab, quam ex minus quis
            repudiandae debitis harum vero soluta corporis suscipit repellendus
            quos voluptatum quasi iure voluptatem deleniti autem. Placeat ipsum
            libero laboriosam harum omnis doloribus eos dolores cupiditate, quas
            facere nesciunt minus repellendus? Neque nulla, vero cupiditate sit
            tenetur corrupti ratione impedit minus veniam distinctio praesentium
            tempore dignissimos dolores fuga quas magnam consectetur? Libero,
            fuga quam! Voluptatum odit accusantium veniam, atque fugiat harum
            voluptatibus nesciunt modi, quasi assumenda eveniet odio laboriosam
            placeat excepturi temporibus rerum dolores quaerat eos distinctio,
            impedit nostrum omnis eaque fuga dignissimos! Veritatis quisquam
            exercitationem quidem, asperiores, impedit laborum hic ab aliquam
            minus quis porro quos repudiandae accusantium deserunt doloribus id,
            velit corporis nostrum recusandae?
          </p>
        </div>

        <div className={s.fadeBottom} />
        <div className={s.infoAndBtns}>
          <div className={s.infoTags}>
            <div className={s.tagContainer}>
              <p className={s.tagInfo}>fullstack</p>
            </div>
            <div className={s.tagContainer}>
              <p className={s.tagInfo}>ux</p>
            </div>
          </div>
          <div className={s.cardBtns}>
            <button className={`${s.btnLink} ${s.gitHub}`}>
              <FaGithub size={15} />
            </button>
            <button className={`${s.btnLink} ${s.web}`}>
              hemsida <FaExternalLinkAlt size={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default WebCard
