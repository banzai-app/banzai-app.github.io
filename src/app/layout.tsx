import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const libreFranklin = Space_Grotesk({ subsets: ["latin"] });

type Props = React.PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en-us" className={libreFranklin.className}>
      <body>
        <main className="max-w-5xl px-10 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Banzai - Your API copilot for financial knowledge",
  description: "Banzai - Your API copilot for financial knowledge",
};
