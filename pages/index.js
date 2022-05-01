import Head from "next/head";

import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.screen}>
        <section className={styles.sidebar}>
          <div className={styles.accountInfo}>
            <div className={styles.imgContainer}>
              <img
                src="https://img.icons8.com/fluency/344/user-male-circle.png"
                alt="acc-img"
                className={styles.accountImg}
              />
            </div>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tabsTop}>Hi</div>
            <div className={styles.tabsBottom}>Hey</div>
          </div>
        </section>

        <section className={styles.mainContent}>
          <section className={styles.mainLeft}>Hello</section>
          <section className={styles.mainRight}>Hallo</section>
        </section>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          color: white;
          background-color: black;
        }
      `}</style>
    </div>
  );
}
