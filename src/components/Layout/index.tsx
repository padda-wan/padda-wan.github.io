import { Bebas_Neue } from "next/font/google";
import Menu from "@/components/Menu"
import "@/styles/globals.css";

const bebasNeu = Bebas_Neue({
  variable: "--bebas-neu",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${bebasNeu.variable}`}>
        <main>
          <Menu>
            {children}
          </Menu>
        </main>
      </body>
    </html >
  );
}
