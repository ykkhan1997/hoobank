import Head from "next/head"
import styles from "@/style"
import { Navbar,Hero,Stats, Business, Billing, CardDeal, Testomonials, Clients, CTA, Footer } from "@/components"


export default function Home() {
  return (
    <>
      <Head>
        <title>HooBank</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hoobank.ico"/>
      </Head>
      <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className="bg-primary sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testomonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
    </div>
    </>
  )
}