"use client";

import styles from "./style.module.scss";
import Image from "next/image";

import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import code from "@/../public/images/code-gold.svg";
import group from "@/../public/images/group-gold.svg";
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
      <div className={styles.groupImgContainer}>
        <Image src={group} alt="group icon" />
      </div>
      <p>{party?.name}</p>
      <p>{partyCode}</p>
      <p className={styles.usersHeader}>Users</p>
      <ul className={styles.users}>
        {party?.users.map((user, index) => (
          <li
            key={index}
            onClick={() => {
              seeUser(user.userCode);
            }}
          >
            {user.name}
          </li>
        ))}
        <li onClick={addNewUser}>New user</li>
      </ul>

      <div className={styles.actionBtnContainer}>
        <ActionButton action={""} image={group} imageAlt={""} label={"Draw"} />
      </div>
    </div>
  );
}

export default PartyView;
