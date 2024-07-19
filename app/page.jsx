import styles from "@/app/styles/home.module.scss";
import Header from "./components/home/Header";
import Specials from "./components/home/Specials";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Cta from "./components/home/Cta";
import Queries from "./components/home/Queries";

export default function Home() {
  return (
    <div>
      <Header />
      <Specials />
      <FeaturedProducts />
      <Cta />
      <Queries />
    </div>
  );
}
