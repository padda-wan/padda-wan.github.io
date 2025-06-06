import { Bebas_Neue } from "next/font/google";
import Menu from "@/components/Menu"

const bebasNeu = Bebas_Neue({
  variable: "--bebas-neu",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  props,
  children,
}: Readonly<{
  // eslint-disable-next-line
  props?: React.ComponentProps<any>;
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
