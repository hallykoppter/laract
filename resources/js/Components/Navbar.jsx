import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const { url } = usePage();

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    Hally<mark>Koppter</mark>
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
