import Image from "next/image";
import BannerHome from "./components/banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BannerHome />
    </main>
  );
}
