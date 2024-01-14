// PdfViewer.tsx

import React from "react";

interface Props {
  pdfUrl: string;
}

const PdfViewer: React.FC<Props> = ({ pdfUrl }) => {
  return (
    <div>
      <iframe
        src={pdfUrl}
        title="PDF Viewer"
        width="100%"
        height="600"
        frameBorder="0"
      />
    </div>
  );
};

export default PdfViewer;
