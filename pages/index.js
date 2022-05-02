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
            <img
              src="https://img.icons8.com/fluency/344/user-male-circle.png"
              alt="acc-img"
              className={styles.accountImg}
            />
            <p className={styles.name}>[account]</p>
          </div>
          <section className={styles.tabs}>
            <section className={styles.tabsTop}>
              <div className={styles.tabButton}>
                <ion-icon name="person-circle" className={styles.tabIcon} />
                <p className={styles.buttonText}>Account Info</p>
              </div>
              <div className={styles.tabButton}>
                <ion-icon name="calendar" className={styles.tabIcon} />
                <p className={styles.buttonText}>Schedule</p>
              </div>
              <div className={styles.tabButton}>
                <ion-icon name="albums" className={styles.tabIcon} />
                <p className={styles.buttonText}>Classes</p>
              </div>
              <div className={styles.tabButton}>
                <ion-icon name="clipboard" className={styles.tabIcon} />
                <p className={styles.buttonText}>Lesson Plans</p>
              </div>
              <div className={styles.tabButton}>
                <ion-icon name="logo-windows" className={styles.tabIcon} />
                <p className={styles.buttonText}>Teams</p>
              </div>
            </section>
            <section className={styles.tabsBottom}>
              <div className={styles.tabButton}>
                <ion-icon name="log-out" className={styles.tabIcon} />
                <p className={styles.buttonText}>Log Out</p>
              </div>
            </section>
          </section>
        </section>

        <section className={styles.mainContent}>
          <section className={styles.mainLeft}>
            <div className={styles.timeContainer}>
              <div className={styles.time}>
                <p id="time-text">TI:ME</p>
              </div>
              <div className={styles.additionalInfo}>
                <p id="period">period</p>
                <p id="date">date</p>
              </div>
            </div>
          </section>
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
          background-color: #121921;
        }

        ion-icon {
          background: transparent;
          font-size: 26px;
          margin-left: 10px;
        }
      `}</style>
      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </div>
  );
}
