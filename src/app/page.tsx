import Link from 'next/link'

export default function Home() {
  return (
    <ol>
      <li>
        <Link href={'/about'}>About</Link>
      </li>
      <li>
        <Link href={'/experience'}>Experience</Link>
      </li>
      <li>
        <Link href={'/projects'}>Projects</Link>
      </li>
      <li>
        <Link href={'/contact'}>Contact</Link>
      </li>
    </ol>
  );
}
