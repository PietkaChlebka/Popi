import WelcomeButtonLink from "./components/WelcomeButtonLink";
import styles from "./style.module.scss";
import Image from "next/image";

function HomeView() {
  return (
    <div className={styles.container}>
      <div className={styles.smileyPop}>
        <Image src="/images/smiley.png" fill />
      </div>
      <div className={styles.welcome}>
        <h2 className={styles.welcomeHeader}>
          No Ideas For Tonight’s <span>Movie</span> Night?
        </h2>
        <p className={styles.welcomeText}>
          Let Popi decide for you! Just sit back, relax and have fun with the
          best movie selector!
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <WelcomeButtonLink
          image="/images/code.png"
          className={styles.codeButton}
        />
        <WelcomeButtonLink image="/images/group.png" />
      </div>
    </div>
  );
}

export default HomeView;
