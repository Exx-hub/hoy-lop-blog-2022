import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../styles/Home.module.css";
import Typed from "react-typed";
import Tabs from "../components/Tabs";
import Featured from "../components/Featured";
import Socials from "../components/Socials";
import CustomHeadTags from "../components/CustomHeadTags";

export default function Home() {
  return (
    <>
      <CustomHeadTags title="Hoy Lop!" description="Blog Home Page" />
      <main className="container home">
        <article className={styles.main}>
          <section className={styles.left}>
            <h1>
              <Typed
                strings={["hoy Lop!"]}
                loop
                typeSpeed={100}
                backSpeed={180}
              />
            </h1>
            <figure>
              <section className={styles.imageContainer}>
                <Image
                  src={"/lop.jpg"}
                  alt=""
                  width={562}
                  height={750}
                  layout="intrinsic"
                  placeholder="blur"
                  blurDataURL="/lop.jpg"
                />
                <h2>all about me</h2>
              </section>
            </figure>
          </section>
          <section className={styles.right}>
            <Socials isFooter={false} />

            <Tabs />

            <Featured />
          </section>
        </article>
      </main>
    </>
  );
}
