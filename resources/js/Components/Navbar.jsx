import React from "react";
import { Link } from "@inertiajs/react";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                    <li>
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
