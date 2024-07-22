
import Image from "next/image";
import React from "react";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <Image
        src="/images/png/404.png"
        alt="404 Not Found"
        width={1373} 
        height={727} 
        className="mb-8"
      />
     
    </div>
  );
};

export default Custom404;

