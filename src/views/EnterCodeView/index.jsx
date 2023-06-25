import styles from "./style.module.scss";
import Image from "next/image";

import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import code from "@/../public/images/code-gold.svg";
import ActionButton from "@/components/ActionButton";

function EnterCodeView() {
  return (
    <div className={styles.container}>
      <div className={styles.enterCodeContainer}>
        <div className={styles.codeImgContainer}>
          <Image src={code} fill />
        </div>
        <form className={styles.codeBox}>
          <label htmlFor="code">Your Party Code:</label>
          <input type="text" name="code" placeholder="XXXXXX" />
        </form>
      </div>
      <div className={styles.actionBtnContainer}>
        <ActionButton
          className={styles.enterCodeBtn}
          label={"Confirm"}
          image={confirm}
        />
      </div>
    </div>
  );
}

export default EnterCodeView;
