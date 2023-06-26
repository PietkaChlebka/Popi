"use client";

import styles from "./style.module.scss";
import Image from "next/image";

import confirm from "@/../public/images/confirm.png";
import smiley from "@/../public/images/smiley.png";
import code from "@/../public/images/code-gold.svg";
import ActionButton from "@/components/ActionButton";
import { useEffect, useState } from "react";

function PartyView() {
  const [partyCode, setPartyCode] = useState();
  const [party, setParty] = useState();
  useEffect(() => {
    const code = localStorage.getItem("currentParty")?.toString();
    if (code) {
      setPartyCode(code);
      setParty(JSON.parse(localStorage.getItem(code)));
    }
  }, []);

  return (
    <div>
      <p>{partyCode}</p>
      <p>{party?.name}</p>
    </div>
  );
}

export default PartyView;
