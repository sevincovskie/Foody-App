import React from "react";

import SideBar from "../../admin/SideBar/SideBar";
import styles from "./AdminLayout.module.css";
import Navbar from "../../admin/Navbar/Navbar";
import Form from "../../admin/Form/Form";





const AdminLayout = ({ children }: any) => {
  return (
    <>
      <main className={styles.main_container}>
        <Navbar />
        <section className={styles.main_section}>
          <SideBar />
          <div className={styles.content_box}>{children}</div>
        </section>
        <Form/>
        

      </main>
    </>
  );
};;

export default AdminLayout;
