// ImageViewer.tsx

import React from "react";

interface Props {
  imageUrl: string;
  alt: string;
}

const ImageViewer: React.FC<Props> = ({ imageUrl, alt }) => {
  return (
    <div>
      <img src={imageUrl} alt={alt} style={{ maxWidth: "100%", height: "auto" }} />
    </div>
  );
};

export default ImageViewer;
