"use client";

import styles from "./style.module.scss";
import Image from "next/image";

import addGold from "@/../public/images/add-gold.png";
import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import code from "@/../public/images/code-gold.svg";
import group from "@/../public/images/group-gold.svg";
import userIcon from "@/../public/images/user.png";
import ActionButton from "@/components/ActionButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function PartyView() {
  const [partyCode, setPartyCode] = useState();
  const [party, setParty] = useState();
  const router = useRouter();
  useEffect(() => {
    const code = localStorage.getItem("currentParty")?.toString();
    if (code) {
      setPartyCode(code);
      setParty(JSON.parse(localStorage.getItem(code)));
    }
  }, []);

  const generateCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const codeLen = 4;
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

  const addNewUser = () => {
    //! change to new view in a free time
    const name = prompt("Provide user name");
    const userCode = "user" + generateCode();

    localStorage.setItem(
      userCode,
      JSON.stringify({
        name,
        films: [],
      })
    );

    localStorage.setItem(
      partyCode,
      JSON.stringify({
        name: party.name,
        users: [
          ...party.users,
          {
            name,
            userCode,
          },
        ],
      })
    );

    setParty(JSON.parse(localStorage.getItem(partyCode)));
  };

  const seeUser = (userCode) => {
    router.push(`/userProfile?userCode=${userCode}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.partyContainer}>
        <div className={styles.partyInfo}>
          <div className={styles.groupImgContainer}>
            <Image src={group} alt="group icon" fill />
          </div>
          <div className={styles.partyData}>
            <p className={styles.partyName}>{party?.name}</p>
            <p className={styles.partyCode}>{partyCode}</p>
          </div>
        </div>
        <p className={styles.usersHeader}>Users</p>
        <ul className={styles.users}>
          {party?.users.map((user, index) => (
            <li
              key={index}
              onClick={() => {
                seeUser(user.userCode);
              }}
            >
              <Image src={userIcon} width={24} height={24} alt="user icon" />
              {user.name}
            </li>
          ))}
          <li onClick={addNewUser}>
            <Image src={addGold} width={24} height={24} alt="add icon" />
            New user
          </li>
        </ul>
      </div>

      <div className={styles.actionBtnContainer}>
        <ActionButton action={""} image={group} imageAlt={""} label={"Draw"} />
      </div>
    </div>
  );
}

export default PartyView;
