"use client";

import { useRouter } from "next/navigation";

import styles from "@/app/styles/common.module.scss";
import RoundBtn from "./components/common/RoundBtn";

const NotFound = () => {
  const router = useRouter();

  //Go back
  const goBack = () => {
    router.back();
  };

  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <p className={styles.text}>Page not found</p>
        <RoundBtn text="Go back" onClick={goBack} />
      </div>
    </div>
  );
};

export default NotFound;
