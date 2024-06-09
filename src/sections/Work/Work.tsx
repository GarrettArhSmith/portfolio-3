import Image from 'next/image'
import s from "./Work.module.css";
import Tile from "@/components/Tile/Tile"
import { FaGithub } from "react-icons/fa";

const workItems = [
  {
    id: 0,
    title: "Express",
    img: "/express-home-page.jpg",
    description: "I worked at express for 2 years working on the ecommerce website using React, GraphQL, and Jest/React Testing Library. I worked on some diverse, agile teams that included members of the Product, UX, QA, Backend, IOS, Android, and Web teams."
  },
  {
    id: 1,
    title: "Tic-Tac-Toe",
    img: "/tic-tac-toe.jpg",
    description: "This is a project I'm working on using NextJS and Supabase. It's a realtime, online-multiplayer game.",
    github: "https://github.com/GarrettArhSmith/tic-tac-toe"
  },
  {
    id: 2,
    title: "This Portfolio",
    description: "I have gone through many iterations and redesigns for my portfolio. What I am currently set on is this, the one you're looking at. Very minimalist. It's a work in progress, but it's getting there. I am using NextJS.",
    github: "https://github.com/GarrettArhSmith/portfolio",
  },
  {
    id: 3,
    title: "V School Projects",
    description: "These projects were made during my time as a bootcamp student. Some of them may be a little rough or unfinished, but they showcase the use of APIs, MongoDB, ExpressJS, Mongoose, and React of course."
  },
]

export default function Work() {
  return (
    <section id="work">
      <h1 className="sectionTitle">Work</h1>
      <div className={s.workItems}>
        {workItems.map(item => (
          <Tile key={item.id}>
            {item.img && <Image
              src={item.img}
              alt={item.title}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                maskImage: "linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0))",
                width: "100%",
                height: "auto",
                marginBottom: "-5rem",
                position: "relative",
                zIndex: -999,
              }}
              width={500}
              height={300}
              priority
            />}
            <div className={s.content}>
              <div className={s.head}>
                <h3 className={s.title}>{item.title}</h3>
                {item.github && (
                  <a href={item.github} target="_blank"><button><FaGithub /></button></a>
                )}
              </div>
              <p>{item.description}</p>
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}
