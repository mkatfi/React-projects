import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaFilePdf } from "react-icons/fa";

const DownloadPDFButton = () => {
  const handleDownload = async () => {
    const element = document.getElementById("page");

    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale = better quality
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv-preview.pdf");
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      <FaFilePdf />
      Download
    </button>
  );
};

export default DownloadPDFButton;
