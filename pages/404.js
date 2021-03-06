import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1>
        <p>You came too far!</p>
      </article>
    </Layout>
  );
}
