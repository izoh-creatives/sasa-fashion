"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

import styles from "@/app/styles/common.module.scss";

const SearchInput = () => {
  //Variables
  const router = useRouter();
  const [title, setTitle] = useState("");

  //Search by title
  const searchByTitle = () => {
    router.push("/shop/search?title=" + title.toLowerCase());
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <Search onClick={searchByTitle} className={styles.btn} />
    </div>
  );
};

export default SearchInput;
