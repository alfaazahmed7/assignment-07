import Banner from "@/components/homepage/Banner";
import Friends from "@/components/homepage/Friends";
import Stats from "@/components/homepage/Stats";
import { Suspense } from "react";

export const metadata = {
  title: "KeenKeeper",
  description:
    "To stay connect with your friends, KeenKeeper is the best solution.",
}

const SectionLoader = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-black rounded-full"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Banner />
      <Stats />
      <Suspense fallback={<SectionLoader />}>
        <Friends />
      </Suspense>
    </div>
  );
}
