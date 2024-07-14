import type { NextPage } from "next";
import AdminHeader from "../shared/components/admin/AdminHeader";





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
    <AdminHeader/>
    </>
 
   
  )
}

export default Home;
