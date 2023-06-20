import "@/styles/reset.scss";
import styles from "./layout.module.scss";
import Image from "next/image";

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
            <Image src="/images/logo.png" fill />
          </div>
          <h1>Popi.com</h1>
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
