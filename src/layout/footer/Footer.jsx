import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5 ">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">
                        More ways to development:{" "}
                        <span className="underline text-blue">
                            nhoangkiet35@gmail.com{" "}
                        </span>
                        or{" "}
                        <span className="underline text-blue">other dev</span>{" "}
                        near you.
                    </p>
                    <p className="font-semibold text-gray text-xs">
                        Or call (84+) 0914-162-505
                    </p>
                </div>

                <div className="bg-neutral-700 my-5 h-[1px] w-full" />

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray text-xs">
                        Copyright @ 2024 Qliphort Shell Inc. All rights
                        reserved.
                    </p>
                    <div className="flex flex-wrap">
                        {footerLinks.map((link, i) => (
                            <p
                                key={link}
                                className="font-semibold text-gray text-xs whitespace-nowrap"
                            >
                                {link}{" "}
                                {i !== footerLinks.length - 1 && (
                                    <span className="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
