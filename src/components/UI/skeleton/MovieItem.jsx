import React from "react";

function MovieItem() {
    return (
        <div className="grid sm:grid-cols-4 lg:grid-cols-6 gap-4 my-4 ">
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    className="h-64 animate-pulse bg-slate-900"
                ></div>
            ))}
        </div>
    );
}

export default MovieItem;
