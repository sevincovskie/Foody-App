import type { NextPage } from "next";
import Head from "next/head";
import AdminLayout from "../../shared/components/layout/AdminLayout";

const AdminDashboard: NextPage = () => {
  return (
    <>
      {/* The head section of the page, containing the title, description and favicon */}
      <Head>
        <title>Foody | Admin</title>
        <meta name="description" content="foody" />
        <link rel="icon" href="/images/png/admin.png" />
      </Head>

      {/* The main content of the page, containing the admin layout component */}
      <AdminLayout>
        {/* The admin content will be rendered here */}
        admin
      </AdminLayout>
    </>
  );
};

export default AdminDashboard;
