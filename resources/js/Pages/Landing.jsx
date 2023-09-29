import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Landing() {
    return (
        <>
            <Head title="OSIS" />
            <Navbar />
            <div className="flex content-center text-2xl justify-center">
                Selamat Datang!
            </div>
        </>
    );
}
