import Header from "@/components/Header";
import "../app/index.css";
import Maestro from "@/components/Maestro";
import ImageCard from "@/components/ImageCard";
import Cocktails from "@/components/Cocktails";
export default function Home() {
  return (
    <div>
      <Header />
      <Maestro />
      <ImageCard />
      {/* <Cocktails /> */}
    </div>
  );
}
