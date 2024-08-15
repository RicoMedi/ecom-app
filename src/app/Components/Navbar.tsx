import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; // Make sure to install react-icons if you haven't already

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 h-[8rem] p-4 shadow-lg">
      <div className="max-w-7xl mx-auto h-full flex items-end justify-between">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="text-white hover:text-gray-300">Shop</Link>
          </li>
        </ul>
        <div className="flex items-end">
          <Link href="/cart" className="flex items-center text-white hover:text-gray-300">
            <FaShoppingCart className="mr-2" /> View Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};
