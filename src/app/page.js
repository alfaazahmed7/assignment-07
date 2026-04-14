import Banner from "@/components/homepage/Banner";
import Friends from "@/components/homepage/Friends";
import Stats from "@/components/homepage/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <Friends />
    </div>
  );
}
