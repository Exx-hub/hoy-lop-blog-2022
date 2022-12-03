import Image from "next/legacy/image";
import { useRouter } from "next/router";
import styles from "../styles/BlogItemCard.module.css";

interface BlogItemCardProps {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
}

function BlogItemCard(props: BlogItemCardProps) {
  const router = useRouter();

  const imagePath = `/blogImages/${props.slug}/${props.image}`;

  return (
    <figure className={styles.cardContainer}>
      <figcaption
        className={styles.figCaption}
        onClick={() => router.push(`/blog/${props.slug}`)}
      >
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </figcaption>
      <div className={styles.imageContainer}>
        <Image src={imagePath} width={518} height={345} />
      </div>
    </figure>
  );
}

export default BlogItemCard;
