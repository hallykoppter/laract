import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const { url } = usePage();

    return (
        <div className="navbar bg-base-100 align-middle my-auto">
            <div className="flex-1">
                <Link
                    href="/"
                    className="hover:bg-inherit flex normal-case text-3xl font-extrabold"
                >
                    <Logo />
                    <p className="inline-block align-middle mx-2 my-auto">
                        HallyKoppter
                    </p>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="mx-1">
                        <Link
                            href="/about"
                            className={url.startsWith("/about") ? "active" : ""}
                        >
                            About
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link
                            href="/contact"
                            className={
                                url.startsWith("/contact") ? "active" : ""
                            }
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link href={route("login")}>
                            <FontAwesomeIcon
                                size="xl"
                                icon={faRightToBracket}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Logo() {
    return (
        <img
            className="my-auto mx-2 w-10 rounded-full"
            src="/img/HALLYKOPPTER - White.png"
            alt="Logo"
        />
    );
}
