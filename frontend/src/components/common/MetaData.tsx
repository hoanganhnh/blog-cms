import React from "react";
import Head from "next/head";

interface MetaDataProps {
  title: string;
  description: string;
}

const MetaData = ({ title, description }: MetaDataProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
    </div>
  );
};

export default MetaData;
