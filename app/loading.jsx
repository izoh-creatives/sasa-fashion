"use client";
import { Loader } from "lucide-react";

import styles from "@/app/styles/common.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingPage}>
      <Loader size={50} className={styles.loaderIcon} />
    </div>
  );
};

export default Loading;
