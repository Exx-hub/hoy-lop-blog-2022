import Image, { StaticImageData } from "next/legacy/image";
import coding from "../assets/coding.jpg";
import styles from "../styles/BlogItemCard.module.css";

interface BlogItemCardProps {
  title: string;
  subtitle: string;
  src: StaticImageData;
}

function BlogItemCard(props: BlogItemCardProps) {
  return (
    <figure className={styles.cardContainer}>
      <figcaption className={styles.figCaption}>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </figcaption>
      <div className={styles.imageContainer}>
        <Image src={props.src} width={518} height={345} />
      </div>
    </figure>
  );
}

export default BlogItemCard;
