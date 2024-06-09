import s from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact">
      <h1 className="sectionTitle">Contact</h1>
      <address className={s.contactInfo}>
        <a href="https://garrettsmith.me/" target="_blank">garrettsmith.me</a>
        <a href="https://www.linkedin.com/in/garrettarhsmith" target="_blank">linkedin.com/in/garrettarhsmith</a>
        <a href="mailto:garrettarhsmith@gmail.com" target="_blank">garrettarhsmith@gmail.com</a>
        <a href="tel:+17406014739" target="_blank">+1(740)601-4739</a>
      </address>
    </section>
  );
}
