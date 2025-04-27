import Layout from "@/components/Layout";
import NavLink from "@/components/Navlink";

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
    <Layout>
      <ol>
        {links.map((link) =>
          <li className='menuLink' key={link.title}>
            <NavLink title={link.title} link={link.link} />
          </li>
        )}
      </ol>
    </Layout>
  );
}
