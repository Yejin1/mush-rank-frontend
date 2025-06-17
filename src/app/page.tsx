
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, use } from 'react'
import Navbar from "./components/Navbar";
import MainRank from "./ranks/MainRank";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainRank />
    </div>
  );
}
