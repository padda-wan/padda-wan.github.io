import Link from 'next/link'
import { MenuContext } from '@/providers/menu';
import { MouseEvent, useContext } from 'react';
import { useRouter } from "next/navigation";

type NavLink = {
  link: string;
  title: string;
}

export default function NavLink({ link, title }: NavLink) {
  const { setNavigating } = useContext(MenuContext)

  const durationSeconds = 0.4
  const router = useRouter();

  const handleNavigate = (link: string, event: MouseEvent<Element, MouseEvent>) => {
    event.preventDefault()
    setNavigating(false)
    setTimeout(() => {
      router.push(link);
    }, durationSeconds * 1000);
  }

  return (
    <Link
      href={link}
      // @ts-expect-error: error seems to happen regardless of a fix
      onNavigate={(event) => { handleNavigate(link, event) }}
    >
      {title}
    </Link>
  );
}
