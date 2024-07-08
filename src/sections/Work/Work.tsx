import Image from "next/image";
import s from "./Work.module.css";
import Tile from "@/components/Tile/Tile";
import { FaGithub } from "react-icons/fa";
import { CgBrowser } from "react-icons/cg";

const workItems = [
  {
    id: 0,
    title: "Express",
    img: "/express-home-page.jpg",
    description:
      "I spent two years at Express where I focused on developing an ecommerce website using React, GraphQL/Apollo, and Jest/React Testing Library. During this time, I collaborated closely with diverse, agile teams comprising Product, UX, QA, Backend, iOS, Android, and Web professionals.",
    demo: "https://express.com/",
  },
  {
    id: 1,
    title: "Wordle Clone",
    description:
      "This is just a wordle clone I made for fun. It's mostly done, but still some needed additions.",
    demo: "https://wordle-bice-three.vercel.app/",
    github: "https://github.com/GarrettArhSmith/wordle",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    img: "/tic-tac-toe.jpg",
    description:
      "This is a project I'm working on using NextJS and Supabase. It's a realtime, online-multiplayer game. Work in progress.",
    github: "https://github.com/GarrettArhSmith/tic-tac-toe",
  },
  {
    id: 3,
    title: "This Portfolio",
    description:
      "I've undergone numerous iterations and redesigns for my portfolio. The version you're currently viewing represents my current focus, although it remains a work in progress. While it continues to evolve, I'm using Next.js for its development. Previous iterations can be explored via the links below.",
    github: "https://github.com/GarrettArhSmith/portfolio",
    links: [
      "https://garrettsmith.vercel.app/",
      "https://portfolio-attempted-redesign.vercel.app/work",
    ],
  },
  {
    id: 4,
    title: "V School Projects",
    description:
      "These projects were made during my time as a bootcamp student. Some of them may be a little rough or unfinished, but they showcase the use of APIs, MongoDB, ExpressJS, Mongoose, and React of course. Most of them don't have live examples anymore, but here are some links to github repos.",
    links: [
      "https://github.com/GarrettArhSmith/food-ordering",
      "https://github.com/GarrettArhSmith/rock-the-vote",
      "https://github.com/GarrettArhSmith/assignments/tree/master/mod4/react/weather",
      "https://github.com/GarrettArhSmith/react-fire-chat",
      "https://github.com/GarrettArhSmith/group-forum",
    ],
  },
];

export default function Work() {
  return (
    <section id="work">
      <h1 className="sectionTitle">Work</h1>
      <div className={s.workItems}>
        {workItems.map((item) => (
          <Tile key={item.id}>
            {item.img && (
              <Image
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
              />
            )}
            <div className={s.content}>
              <div className={s.head}>
                <h3 className={s.title}>{item.title}</h3>
                {item.demo && (
                  <a href={item.demo} target="_blank">
                    <button>
                      <CgBrowser /> View Demo
                    </button>
                  </a>
                )}
                {item.github && (
                  <a href={item.github} target="_blank">
                    <button>
                      <FaGithub /> Github
                    </button>
                  </a>
                )}
              </div>
              <p>{item.description}</p>
              {item.links?.map((link) => (
                <a key={link} href={link} style={{ display: "block" }}>
                  {link}
                </a>
              ))}
            </div>
          </Tile>
        ))}
      </div>
    </section>
  );
}
