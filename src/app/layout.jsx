import "@/styles/reset.scss";
import styles from "./layout.module.scss";
import Image from "next/image";

import logo from "@/../public/images/logo.png";

export const metadata = {
  title: "Popi",
  description: "Best app for movie selection!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.pageBody}>
        <header className={styles.header}>
          <div className={styles.logoImage}>
            <Image src={logo} alt={"logo"} fill />
          </div>
          <h1>Popi.com</h1>
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
