import Image, { StaticImageData } from "next/image";
import styles from "../styles/FeaturedCard.module.css";

interface FeaturedCardProps {
  img: StaticImageData;
  title: string;
}

function FeaturedCard({ img, title }: FeaturedCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={img}
          alt=""
          className={styles.image}
          width={326}
          height={456}
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default FeaturedCard;
