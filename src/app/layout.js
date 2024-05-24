import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Single Price Grid Component",
  description: "Created by Anass GOUZGAR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
