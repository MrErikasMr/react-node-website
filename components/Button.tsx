import React, { useState } from "react";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
  onHover: () => void;
}

const Button = ({ children, onClick, color = "primary", onHover }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    onHover(); // Call the original onHover callback if needed
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle: React.CSSProperties = {
    transform: isHovered ? "scale(2)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <button
      className={"btn btn-" + color}
      onClick={onClick}
      onMouseOver={handleHover}
      onMouseLeave={handleMouseLeave}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
