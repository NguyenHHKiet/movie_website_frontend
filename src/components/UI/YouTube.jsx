import React from "react";

const YouTube = ({ videoId }) => {
    return (
        <iframe
            width="100%"
            height="400"
            loading="lazy"
            src={`https://www.youtube.com/embed/${videoId}`}></iframe>
    );
};

export default YouTube;
