import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar