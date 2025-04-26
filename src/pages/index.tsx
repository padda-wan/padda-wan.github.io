import Layout from "@/components/Layout";
import Link from 'next/link'
import { MenuContext } from '@/providers/menu';
import { useContext } from 'react';
import { useRouter, usePathname } from "next/navigation";

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
  const { navigating, setNavigating } = useContext(MenuContext)
  const durationSeconds = 0.4
  const router = useRouter();
  const navigate = (link) => {
    // debugger
    // event.preventDefault()
    setNavigating(false)
    setTimeout(() => {
      router.push(link);
    }, 5000);
  }

  return (
    <Layout>
      <ol>
        {links.map((link) =>
          <li className='menuLink' key={link.title}>
            <Link
              href={link.link}
              onNavigate={() => { navigate(link.link) }}
            >
              {link.title}
            </Link>
          </li>
        )}
      </ol>
    </Layout>
  );
}
