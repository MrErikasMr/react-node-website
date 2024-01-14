// FileUpload.tsx

import React, { ChangeEvent } from "react";

interface Props {
  onFileChange: (file: File | null) => void;
}

const FileUpload = ({ onFileChange }: Props) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    onFileChange(selectedFile);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
