import React from "react";

const Card = ({ children, frame, className }) => {
    return (
        <div
            className={className}
            style={{ width: frame !== 0 ? "20rem" : "12rem" }}
        >
            {children}
        </div>
    );
};

export default Card;
