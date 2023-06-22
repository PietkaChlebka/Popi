import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import classNames from "classnames";

function WelcomeButtonLink({
  image,
  imageAlt,
  className,
  tooltipClassName,
  tooltip,
  tooltipDirection,
  link,
}) {
  return (
    <button className={classNames([styles.button, className])}>
      <Link href={link ? link : ""}>
        <div className={styles.buttonImgContainer}>
          <Image src={image} alt={imageAlt} fill />
        </div>
      </Link>
    </button>
  );
}

export default WelcomeButtonLink;
