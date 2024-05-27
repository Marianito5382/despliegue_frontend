'use client';
import Head from 'next/head';
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import "../../../styles/navstyle.css";

export default function Navbar() {
    return (
        <div>
            <Head>
                <title>GLMD</title>
                <meta property="og:title" content="My page title" key="title" />
                <meta property="og:title" content="My new title" key="title" />
            </Head>

            <nav className="navbar">
                <div className="logo">
                    <Image src="/logo.svg" alt="GLMD Logo" width={150} height={50} />
                </div>
                <div className="links">
                    <Link href="/" className="nav-link">Inicio</Link>
                    <Link href="/pages/proyectos" className="nav-link">Proyectos</Link>
                    <Link href="/pages/experiencia" className="nav-link">Experiencia</Link>
                    <Link href="/pages/blog" className="nav-link">Blog</Link>
                </div>
            </nav>
        </div>
    );
}
