import styles from "../styles/Socials.module.css";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedin,
  GrMail,
} from "react-icons/gr";
import Footer from "./Footer";
import Link from "next/link";

interface SocialsProps {
  isFooter: boolean;
}

function Socials({ isFooter }: SocialsProps) {
  return (
    <section>
      <div className={styles.socials}>
        <Link href="https://www.instagram.com/lopofbread/" target="_blank">
          <GrInstagram
            className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
          />
        </Link>
        <Link
          href="https://www.facebook.com/homemadebytitalopp"
          target="_blank"
        >
          <GrFacebookOption
            className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/PaulinePonciano/"
          target="_blank"
        >
          <GrLinkedin
            className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
          />
        </Link>
        <Link href={"mailto:loppypop2@gmail.com"}>
          <GrMail
            className={!isFooter ? `${styles.icon}` : `${styles.footerIcon}`}
          />
        </Link>
      </div>
      {isFooter && <Footer />}
    </section>
  );
}

export default Socials;
