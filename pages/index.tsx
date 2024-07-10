import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

const Home: NextPage = () => {
  // const handleUpload = (e: any) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   axios({
  //     method: "POST",
  //     url: "/api/uploads",
  //     headers: {
  //       "Content-Type": "multi-part",
  //     },
  //     data: formData,
  //   });
  // };

  return (
    <>
    Hello
    </>
  )
}

export default Home;
