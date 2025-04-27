import Link from 'next/link'
import { MenuContext } from '@/providers/menu';
import { useContext } from 'react';
import { useRouter } from "next/navigation";

type NavLink = {
  link: string;
  title: string;
}

export default function NavLink({ link, title }: NavLink) {
  const { setNavigating } = useContext(MenuContext)

  const durationSeconds = 0.4
  const router = useRouter();

  const navigate = (link: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setNavigating(false)
    setTimeout(() => {
      router.push(link);
    }, durationSeconds * 1000);
  }

  return (
    <Link
      href={link}
      onNavigate={(event) => { navigate(link, event) }}
    >
      {title}
    </Link>
  );
}
