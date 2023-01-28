import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/BlogItemCard.module.css";

interface BlogItemCardProps {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
}

function BlogItemCard(props: BlogItemCardProps) {
  const imagePath = `/blogImages/${props.slug}/${props.image}`;

  return (
    <figure className={styles.cardContainer}>
      <Link href={`/blog/${props.slug}`}>
        <Image
          src={imagePath}
          width={518}
          height={345}
          placeholder="blur"
          blurDataURL={imagePath}
        />
        <figcaption className={styles.textDiv}>
          <h3>{props.title}</h3>
          <p>{props.subtitle}</p>
        </figcaption>
      </Link>
    </figure>
  );
}

export default BlogItemCard;
