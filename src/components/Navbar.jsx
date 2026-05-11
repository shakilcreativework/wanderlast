import Image from "next/image";
import Link from "next/link";
import Container from "./shared/Container";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="py-3 bg-white/80 sticky top-0 backdrop-blur-md">
            <Container>
                <nav className="flex justify-between items-center">
                    {/* desktop nav start */}
                    {/* items link */}
                    <ul className=" hidden md:flex items-center gap-7">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/destinations'}>Destinations</Link></li>
                        <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                        <li><Link href={'/admin'}></Link>Admin</li>
                    </ul>
                    {/* logo */}
                    <div>
                        <Image
                            src="/assets/wanderlast.png"
                            alt="Wanderlast Logo"
                            width={160}
                            height={150}
                            priority
                            sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 208px"
                            className="w-36 md:w-40 lg:w-52 h-auto"
                        />
                    </div>
                    <ul className=" hidden md:flex items-center gap-4 md:gap-5 lg:gap-7">
                        <li><Link href={'/profile'}>Profile</Link></li>
                        <li><Link href={'/login'}>Login</Link></li>
                        <li><Link href={'/signup'}>Signup</Link></li>
                    </ul>
                    {/* mobile nav start */}
                    <div className="flex md:hidden">
                        <IoMenu className="text-3xl" />
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;