import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://www.whatdosquirrelseat.org/static/img/squirrel-eating-peanuts.jpg"
          alt="squirrel"
          width={400}
          height={100}
          priority
        />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
