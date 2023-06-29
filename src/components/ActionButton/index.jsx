import styles from "./style.module.scss";
import Image from "next/image";
import classNames from "classnames";

function ActionButton({ image, imageAlt, label, className, action }) {
  return (
    <button className={classNames([styles.button, className])} onClick={action}>
      {label ? <div className={styles.label}>{label}</div> : null}
      <div className={styles.buttonImgContainer}>
        <Image src={image} alt={imageAlt || ""} fill />
      </div>
    </button>
  );
}

export default ActionButton;
