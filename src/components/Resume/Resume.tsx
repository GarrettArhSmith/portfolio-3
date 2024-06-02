import Image from "next/image";
import s from "./Resume.module.css";

export default function Nav() {
  return (
    <div id="resume" className={s.resume}>
        <h1>Garrett Smith</h1>
        <div className={s.contactInfo}>
          <p>Columbus, OH</p>
          <a href="https://garrettsmith.me/">garrettsmith.me</a>
          <a href="https://www.linkedin.com/in/garrettarhsmith">linkedin.com/in/garrettarhsmith</a>
          <a href="mailto:garrettarhsmith@gmail.com">garrettarhsmith@gmail.com</a>
          <a href="tel:+17406014739">+1(740)601-4739</a>
        </div>
        <h2>Software Engineer</h2>
        <p>React Engineer with 3+ years of software development expertise, dedicated to delivering high-quality, scalable, production code. Proficient in a wide array of web technologies, but always hungry to learn new programming languages and emerging technologies. Eager to join a dynamic team with diverse talent.</p>
        <p>WORK EXPERIENCE</p>
        <h3>Express</h3>
        <p>Columbus, OH</p>
        <p>08/2021 - 08/2023</p>
        <h4>Associate ECommerce Engineer</h4>
        <ul>
          <li>Contributed to the successful integration of the 'Save for Later' feature for the bag page, increasing conversion rates.</li>
          <li>Successfully implemented a redesign of Bag and Checkout pages, resulting in enhanced user experience and increased conversion rates.</li>
          <li>Revamped Product List & Search pages, expanding the grid & introducing new components for improved user experience, engagement, and control.</li>
          <li>Enhanced checkout with 'Tender Type Promotions' feature, allowing for PLCC and other tender type specific discounts, boosting conversions and retention rates.</li>
        </ul>
        <h4>Contract - ReactJS Engineer</h4>
        <ul>
          <li>Identified & resolved critical site issues, troubleshooting and debugging for a seamless user experience. Maintaining code hygiene, enhancing functionality and performance.</li>
          <li>Contributed to the company's proprietary, reusable front-end UI component library.</li>
          <li>Perform daily code reviews for peers to ensure we correctly implement business objectives without sacrificing code quality.</li>
          <li>Develop new features, convert mock-ups in Figma and InVision to code, and write unit tests with Jest, Enzyme, and React Testing Library.</li>
        </ul>
        <h3>V School</h3>
        <p>01/2021 - 04/2021</p>
        <h4>Teaching Assistant</h4>
        <ul>
          <li>Conducted bi-weekly coding workshops, consistently delivering engaging lessons for three consecutive months.</li>
          <li>Provided daily assistance to bootcamp students, ensuring their understanding of coding concepts and assignments in a 3-month period.</li>
          <li>Practice agile methodologies with students, such as conducting daily stand-up meetings, to prepare them for working on an agile team.</li>
        </ul>
        <h3>Amazon</h3>
        <p>Wilmington, OH</p>
        <p>09/2019 - 06/2020</p>
        <h4>Sort Associate</h4>
        <ul>
          <li>Sorted packages, loaded/unloaded trucks and ULDs</li>
        </ul>
        <p>EDUCATION</p>
        <h4>Web Development Bootcamp</h4>
        <p>V School</p>
        <p>Remote</p>
        <p>06/2020 - 12/2020</p>
        <p>SKILLS</p>
        <ul className={s.skillsList}>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Jest</li>
          <li>React Testing Library</li>
          <li>Enzyme (deprecated)</li>
          <li>GraphQL / Apollo</li>
          <li>No-SQL / Non-relational Databases</li>
          <li>MongoDB</li>
          <li>APIs / REST</li>
          <li>Git / Github</li>
          <li>ExpressJS</li>
          <li>Mongoose</li>
          <li>NodeJS / NPM</li>
        </ul>
      </div>
  );
}
