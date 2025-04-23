'use client'

import Link from 'next/link'

const links = [
  {
    link: "/about",
    title: "About"
  },
  {
    link: "/experience",
    title: "Experience"
  },
  {
    link: "/projects",
    title: "Projects"
  },
  {
    link: "/contact",
    title: "Contact"
  },
]

export default function Home() {
  return (
    <ol>
      {links.map((link) =>
        <li className='menuLink' key={link.title}>
          <Link
            href={link.link}
            onNavigate={() => {
              // alert('navigating')
            }}
          >
            {link.title}
          </Link>
        </li>
      )}
    </ol>
  );
}
