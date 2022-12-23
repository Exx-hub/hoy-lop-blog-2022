import Head from "next/head";

interface CustomHeadTagsProps {
  title: string;
  description: string;
}

function CustomHeadTags({ title, description }: CustomHeadTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        property="og:description"
        content={description}
      />
    </Head>
  );
}

export default CustomHeadTags;
