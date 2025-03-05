import React from "react";
import { jsPDF } from "jspdf";

const generatePDF = (data) => {
  const doc = new jsPDF();
  doc.setFontSize(12);

  // Header
  doc.text(data.name, 10, 10);
  doc.text(`${data.address} | ${data.email} | ${data.phone}`, 10, 20);

  // Profil Singkat
  doc.text(
    "\nSaya adalah lulusan " +
      data.major +
      " dari " +
      data.university +
      " yang memiliki ketertarikan pada " +
      data.interest +
      ". Dengan latar belakang pendidikan ini, saya juga memperkuat keterampilan melalui berbagai pelatihan, termasuk " +
      data.training +
      ", yang membekali saya dengan keahlian dalam " +
      data.skills.join(", ") +
      ". Untuk mendukung kompetensi profesional, saya telah memperoleh sertifikasi " +
      data.certifications.join(", ") +
      " pada tahun " +
      data.certificationYear +
      ". Dengan kombinasi keterampilan teknis dan administrasi, saya siap berkontribusi secara profesional dalam lingkungan kerja yang dinamis dan berkembang.",
    10,
    40,
    { maxWidth: 180 }
  );

  let rowHeight = 80;

  // Education
  doc.text("EDUCATION", 10, rowHeight);
  data.education.forEach((edu, index) => {
    doc.text(
      `${edu.school} | ${edu.city} | ${edu.year}`,
      10,
      rowHeight + 10 * (index + 1)
    );
  });
  rowHeight += 20 + 10 * data.education.length;

  // Internship
  doc.text("MAGANG", 10, rowHeight);
  data.internship.forEach((intern, index) => {
    doc.text(
      `${intern.company} | ${intern.city} | ${intern.task}`,
      10,
      rowHeight + 10 * (index + 1)
    );
  });
  rowHeight += 20 + 10 * data.internship.length;

  // Training
  doc.text("PELATIHAN", 10, rowHeight);
  data.trainingList.forEach((training, index) => {
    doc.text(
      `${training.name} | ${training.city} | ${training.task}`,
      10,
      rowHeight + 10 * (index + 1)
    );
  });
  rowHeight += 20 + 10 * data.trainingList.length;

  // Certification
  doc.text("CERTIFICATION", 10, rowHeight);
  data.certifications.forEach((cert, index) => {
    doc.text(`${cert.name} | ${cert.year}`, 10, rowHeight + 10 * (index + 1));
  });
  rowHeight += 20 + 10 * data.certifications.length;

  // Skills
  doc.text("KEAHLIAN", 10, rowHeight);
  data.skills.forEach((skill, index) => {
    doc.text(`- ${skill}`, 10, rowHeight + 10 * (index + 1));
  });

  // Simpan PDF
  doc.save("cv.pdf");
};

const CVTemplate = ({ data }) => {
  return (
    <div className="mt-6 p-6 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Pratinjau CV</h2>
      <div className="space-y-4 flex flex-row flex-wrap">
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
          <strong>Pendidikan:</strong>{" "}
          {data.education
            .map((edu) => `${edu.school} (${edu.year})`)
            .join(", ")}
        </p>
        <p>
          <strong>Pengalaman Kerja:</strong> {data.experience}
        </p>
        <p>
          <strong>Keterampilan:</strong> {data.skills.join(", ")}
        </p>
      </div>
      <button
        onClick={() => generatePDF(data)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Download CV (PDF)
      </button>
    </div>
  );
};

export default CVTemplate;
