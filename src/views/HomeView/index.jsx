import WelcomeButtonLink from "./components/WelcomeButtonLink";
import styles from "./style.module.scss";
import Image from "next/image";

import smiley from "/images/smiley.png";
import code from "/images/code.png";
import group from "/images/group.png";

function HomeView() {
  return (
    <div className={styles.container}>
      <div className={styles.smileyPop}>
        <Image src={smiley} fill />
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
        <WelcomeButtonLink image={code} className={styles.codeButton} />
        <WelcomeButtonLink image={group} />
      </div>
    </div>
  );
}

export default HomeView;
