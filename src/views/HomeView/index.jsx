import WelcomeButtonLink from "./components/WelcomeButtonLink";
import styles from "./style.module.scss";
import Image from "next/image";

import smiley from "@/../public/images/smiley.png";
import code from "@/../public/images/code-white.svg";
import group from "@/../public/images/group-white.svg";

function HomeView() {
  return (
    <div className={styles.container}>
      <div className={styles.smileyPop}>
        <Image src={smiley} alt={"smiley popcorn"} fill />
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
          image={code}
          imageAlt="code icon"
          className={styles.codeButton}
          link="/enterCode"
        />
        <WelcomeButtonLink
          image={group}
          imageAlt="group icon"
          className={styles.partyButton}
          link="/createParty"
        />
      </div>
    </div>
  );
}

export default HomeView;
