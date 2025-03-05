// src/components/CVTemplate.jsx
import React from "react";
import { jsPDF } from "jspdf";

const CVTemplate = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Judul CV
    doc.setFontSize(22);
    doc.text("Curriculum Vitae", 10, 10);

    // Informasi Pribadi
    doc.setFontSize(12);
    doc.text(`Nama: ${data.name}`, 10, 20);
    doc.text(`Email: ${data.email}`, 10, 30);
    doc.text(`Telepon: ${data.phone}`, 10, 40);
    doc.text(`Alamat: ${data.address}`, 10, 50);

    // Pendidikan
    doc.text("Pendidikan:", 10, 70);
    doc.text(data.education, 10, 80);

    // Pengalaman Kerja
    doc.text("Pengalaman Kerja:", 10, 100);
    doc.text(data.experience, 10, 110);

    // Keterampilan
    doc.text("Keterampilan:", 10, 130);
    doc.text(data.skills, 10, 140);

    // Simpan PDF
    doc.save("cv.pdf");
  };

  return (
    <div className="mt-6 p-6 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Pratinjau CV</h2>
      <div className="space-y-4">
        <p>
          <strong>Nama:</strong> {data.name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Telepon:</strong> {data.phone}
        </p>
        <p>
          <strong>Alamat:</strong> {data.address}
        </p>
        <p>
          <strong>Pendidikan:</strong> {data.education}
        </p>
        <p>
          <strong>Pengalaman Kerja:</strong> {data.experience}
        </p>
        <p>
          <strong>Keterampilan:</strong> {data.skills}
        </p>
      </div>
      <button
        onClick={generatePDF}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Download CV (PDF)
      </button>
    </div>
  );
};

export default CVTemplate;
