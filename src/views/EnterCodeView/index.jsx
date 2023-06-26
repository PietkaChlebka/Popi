"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import code from "@/../public/images/code-gold.svg";
import ActionButton from "@/components/ActionButton";

function EnterCodeView() {
  const router = useRouter();
  const inputRef = useRef(null);

  const loginHandler = (event) => {
    if (event) event.preventDefault();
    const inputValue = inputRef.current.value.toUpperCase();
    if (inputValue === null || inputValue === undefined || inputValue === "") {
      //! upon finding more time, change alert to custom dialog screen
      alert(
        "Hey! Looks like you forgot to enter your code, if you don't have one, try Creating a Party :) "
      );
      return;
    } else if (localStorage.getItem(inputValue) === null) {
      //! upon finding more time, change alert to custom dialog screen
      alert(
        "Seems like there is some typo in the code, Sherlock. Could you check it? "
      );
      return;
    }

    localStorage.setItem("currentParty", inputValue);

    router.push("/party");
  };

  return (
    <div className={styles.container}>
      <div className={styles.enterCodeContainer}>
        <div className={styles.codeImgContainer}>
          <Image src={code} alt={"code icon"} fill />
        </div>
        <form className={styles.codeBox} onSubmit={loginHandler}>
          <label htmlFor="code">Your Party Code:</label>
          <input type="text" name="code" placeholder="XXXXXX" ref={inputRef} />
        </form>
      </div>
      <div className={styles.actionBtnContainer}>
        <ActionButton
          className={styles.enterCodeBtn}
          label={"Confirm"}
          image={confirm}
          action={loginHandler}
        />
      </div>
    </div>
  );
}

export default EnterCodeView;
