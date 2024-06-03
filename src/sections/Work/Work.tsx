import Image from 'next/image'
import s from "./Work.module.css";
import Tile from "@/components/Tile/Tile"

const workItems = [
  {
    id: 0,
    title: "Express",
    img: "https://www.express.com/content/dam/logos-fonts/logos/express/express-logo.svg",
  },
  {
    id: 1,
    title: "Tic-Tac-Toe"
  },
  {
    id: 1,
    title: "V School Projects"
  },
]

export default function Work() {
  return (
    <section id="work">
      <h1>Work</h1>
      <div className={s.workItems}>
        {workItems.map(item => (
          <Tile key={item.id}>
            <h3>{item.title}</h3>
            {item.img && <Image
              src={item.img}
              alt={item.title}
              width={328}
              height={54}
            />}
          </Tile>
        ))}
      </div>
      {/* <Image
        src="https://www.the-winston-project.imgix.net/610beec5aea874132acbafda/146_VSchool.png"
        alt="VSchool Logo"
        width={281}
        height={70}
      /> */}
    </section>
  );
}
