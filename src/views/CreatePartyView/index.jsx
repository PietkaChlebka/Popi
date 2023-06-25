import styles from "./style.module.scss";
import Image from "next/image";

import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import group from "@/../public/images/group-gold.svg";
import ActionButton from "@/components/ActionButton";

function CreatePartyView() {
  return (
    <div className={styles.container}>
      <div className={styles.createPartyContainer}>
        <div className={styles.groupImgContainer}>
          <Image src={group} fill />
        </div>
        <form className={styles.nameBox}>
          <label htmlFor="name">Enter Your Party Name:</label>
          <input type="text" name="name" placeholder="XXXXXX" />
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

export default CreatePartyView;
