import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="">
        <ul className="flex flex-row justify-center font-Roboto uppercase">
            <li className="mr-4 hover:underline"><Link href="/" className=''>Home</Link></li>
            <li className="mr-4 hover:underline"><Link href="/contact">Contact</Link></li>
            <li className="hover:underline"><Link href="/gallery">Gallery</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar