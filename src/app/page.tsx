import s from "./page.module.css";
import About from '@/sections/About/About';
import Contact from '@/sections/Contact/Contact';
import Work from '@/sections/Work/Work';
import Resume from '@/components/Resume/Resume';

export default function Home() {
  return (
    <main className={s.main}>
      {/* <Home /> */}
      <About />
      <Work />
      <Contact />
      <Resume />
    </main>
  );
}
