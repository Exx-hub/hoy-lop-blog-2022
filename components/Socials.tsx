import styles from "../styles/Socials.module.css";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedin,
  GrMail,
} from "react-icons/gr";
import Footer from "./Footer";

interface SocialsProps {
  isFooter: boolean;
}

function Socials({ isFooter }: SocialsProps) {
  return (
    <section>
      <div className={styles.socials}>
        <GrInstagram className={styles.icon} />
        <GrFacebookOption className={styles.icon} />
        <GrLinkedin className={styles.icon} />
        <GrMail className={styles.icon} />
      </div>
      {isFooter && <Footer />}
    </section>
  );
}

export default Socials;
