import React from "react";

const Button = ({ children, size, color = "#a05b5d", className, onClick }) => {
    return (
        <button
            className={`${className} px-6 py-3 m-0 my-1 border-0 rounded text-white text-base fw-bolder cursor-pointer`}
            style={{ background: color }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
