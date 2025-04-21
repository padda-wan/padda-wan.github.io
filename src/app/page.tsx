import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-fit text-8xl border-4 m-20 p-20 pl-30 relative">
      <div className="flex absolute -bottom-20 left-4">
        <Image
          className="flex"
          priority
          width={50}
          height={50}
          src="jk-logo.svg"
          alt="Jason Klaaste"
        />
      </div>
      <ol>
        <li>About</li>
        <li>Experience</li>
        <li>My Work</li>
      </ol>
      <div className="bg-black/20 w-20 absolute bottom-0 left-0 border-r-4 h-full">&nbsp;</div>
    </div>
  );
}
