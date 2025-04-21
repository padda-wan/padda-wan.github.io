import styles from "./page.module.css";
import Image from "next/image";
import logo from "nextjs-github-pages/jk-logo.svg";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="flex">
        <Image
          className="flex"
          priority
          width={50}
          src={logo}
          alt="Jason Klaaste"
        />
      </div>
      <ol>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ol>
    </div>
  );
}
