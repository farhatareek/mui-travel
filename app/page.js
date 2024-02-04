import Image from "next/image";
import styles from "./page.module.css";
import FirstComponents from "@/components/firstComponents";
import Carosel from "@/components/carosle";
import Pathcomp from "@/components/pathcomp";
import DownloadApp from "@/components/downloadApp";
import Features from "@/components/fetures";

export default function Home() {
  return (
    <>
    <FirstComponents/>
    <Carosel/>
    <Pathcomp/>
    <Features/>
    <DownloadApp/>
    </>
  );
}
