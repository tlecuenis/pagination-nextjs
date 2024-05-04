import Link from "next/link"
export default function Navbar() {
    return(
        <nav className="flex p-5 gap-x-4">
            <Link href="/">
                Home
            </Link>

            <ul>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
};
