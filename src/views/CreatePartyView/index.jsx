"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import group from "@/../public/images/group-gold.svg";
import lock from "@/../public/images/lock.png";
import ActionButton from "@/components/ActionButton";

function CreatePartyView() {
  const router = useRouter();
  const inputRef = useRef(null);
  const [partyCreated, setPartyCreated] = useState(null);

  const generateCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const codeLen = 6;
    let code = null;

    do {
      code = "";
      for (let i = 0; i < codeLen; i++) {
        code += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    } while (localStorage.getItem(code) !== null);

    return code;
  };

  const createPartyHandler = (event) => {
    if (event) event.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === null || inputValue === undefined || inputValue === "") {
      //! upon finding more time, change alert to custom dialog screen
      alert("You shall not pass! (Without entering required Party Name :) )");
      return;
    }

    const code = generateCode();
    localStorage.setItem("currentParty", code);

    const party = {
      name: inputValue,
      users: [],
    };

    localStorage.setItem(code, JSON.stringify(party));
    setPartyCreated(code);
  };

  const navigate = () => {
    router.push("/party");
  };

  return (
    <div className={styles.container}>
      <div className={styles.createPartyContainer}>
        <div className={styles.groupImgContainer}>
          <Image src={partyCreated ? lock : group} alt={"group icon"} fill />
        </div>
        {partyCreated ? (
          <>
            <h2 className={styles.infoHeader}>
              Great! Here is your unique Party Code!
            </h2>
            <p className={styles.uniqueCode}>{partyCreated}</p>
            <p className={styles.textInfo}>
              Save it! It will allow you to access your Party anytime! :)
            </p>
          </>
        ) : (
          <form className={styles.nameBox} onSubmit={createPartyHandler}>
            <label htmlFor="name">Enter Your Party Name:</label>
            <input
              type="text"
              name="name"
              placeholder="XXXXXX"
              ref={inputRef}
            />
          </form>
        )}
      </div>
      <div className={styles.actionBtnContainer}>
        <ActionButton
          className={styles.enterCodeBtn}
          label={"Confirm"}
          image={confirm}
          action={partyCreated ? navigate : createPartyHandler}
        />
      </div>
    </div>
  );
}

export default CreatePartyView;
