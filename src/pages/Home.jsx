import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CVForm from "../components/CVForm";
import CVTemplate from "../components/CVTemplate";

const Home = () => {
  const [cvData, setCvData] = useState(null);

  const handleSubmit = (data) => {
    setCvData(data);
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Buat CV ATS Anda</h1>
        <CVForm onSubmit={handleSubmit} />
        {cvData && <CVTemplate data={cvData} />}
      </div>
    </>
  );
};

export default Home;
