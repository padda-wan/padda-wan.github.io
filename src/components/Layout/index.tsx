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
        <main className='col-start-2 col-end-5 row-start-2 row-end-5 border-t-4 border-r-4 overflow-y-auto'>
          <Menu>
            {children}
          </Menu>
        </main>
      </body>
    </html >
  );
}
