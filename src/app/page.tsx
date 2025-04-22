import Image from "next/image";

export default function Home() {
  return (
    <div className="h-200 text-8xl m-20 p-20 pl-30 relative border-t-4 border-r-4">
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
      <div className="bg-black/20 w-20 absolute bottom-0 left-0 border-r-4 h-full ledger">&nbsp;</div>
      <div className="absolute w-2000 bottom-0 -left-200 border-b-4"></div>
      <div className="absolute h-2000 -bottom-200 left-0 border-l-4">here</div>
    </div>
  );
}
