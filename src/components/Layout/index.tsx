import { Bebas_Neue } from "next/font/google";
import Menu from "@/components/Menu"
import "@/styles/globals.css";

const bebasNeu = Bebas_Neue({
  variable: "--bebas-neu",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  props,
  children,
}: Readonly<{
  props: any;
  children: React.ReactNode;
}>) {

  return (
    <div className={`${bebasNeu.variable} text-8xl`} {...props}>
      <Menu>
        {children}
      </Menu>
    </div>
  );
}
