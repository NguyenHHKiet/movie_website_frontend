import React from "react";

const Banner = ({ children, className, url }) => {
    return (
        <div
            className={className}
            style={{
                background: `url(${url}) no-repeat center center/cover`,
            }}>
            {children}
        </div>
    );
};

export default Banner;
