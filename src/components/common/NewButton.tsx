import React from "react";

type NewButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const NewButton: React.FC<NewButtonProps> = ({ type = "button", text, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#41246D] text-white hover:brightness-70 duration-150 hover:shadow-inner 
                  transform transition-all px-5 py-2 rounded-4xl ${className || ""}`}
    >
      {text}
    </button>
  );
};

export default NewButton;
