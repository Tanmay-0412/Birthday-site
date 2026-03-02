import Image from "next/image";
import BirthdayCountdown from './components/BirthdayCountdown'
import BirthdayLayout from './components/BirthdayLayout'

export default function Home() {
  return (
   <main>
      {/* <BirthdayLayout/> */}
      <BirthdayCountdown/>
    </main>
  );
}
