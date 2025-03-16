import SixthSection from "@/components/SixthSection/SixthSection";
import styles from "./page.module.css";
import FourthFIfthSection from "@/components/FourthFifthSection/FourthFifthSection";
import ThirdSection from "@/components/ThirdSection/ThirdSection";
import SecondSection from "@/components/SecondSection/SecondSection";
import FirstSection from "@/components/FirstSection/firstSection";
export default function Home() {
  return (
    <div className={styles.page}>
      <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthFIfthSection />
        <SixthSection />
    </div>
  )
}
