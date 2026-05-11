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
                    <ul className=" hidden md:flex items-center gap-4 lg:gap-7">
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/'}>Home</Link></li>
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/destinations'}>Destinations</Link></li>
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/my-bookings'}>My Bookings</Link></li>
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/add-destination'}>Add Destination</Link></li>
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/admin'}>Admin</Link></li>
                    </ul>
                    {/* logo */}
                    <div>
                        <Image
                            src="https://i.ibb.co.com/KcxZ0BQH/Wanderlast.png"
                            alt="Wanderlast Logo"
                            width={160}
                            height={150}
                            priority
                            sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 208px"
                            className="w-36 md:w-40 lg:w-52 h-auto"
                        />
                    </div>
                    <ul className=" hidden md:flex items-center gap-4 lg:gap-7">
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/profile'}>Profile</Link></li>
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/login'}>Login</Link></li>
                        <li><Link className="text-sm lg:text-base hover:text-black/60 transition-all" href={'/signup'}>Signup</Link></li>
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