
import { RiSearchLine } from "react-icons/ri"; 
import { FiSearch } from "react-icons/fi"; 
import { CiSearch } from "react-icons/ci"; 
import { BsSearch } from "react-icons/bs"; 
import { FiUser } from "react-icons/fi"; 

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 px-16 flex items-center justify-between bg-neutral-950 text-neutral-300 text-sm font-semibold z-20">
      <div className="h-16 flex items-center justify-center">
        <img src="./logo.png" alt="" className="h-7" />
      </div>
      <div className="flex gap-8">
        <p>Home</p>
        <p>About us</p>
        <p>Product</p>
        <p>Contacts</p>
      </div>
      <div className="flex gap-6 items-center">
        <RiSearchLine className="w-6 h-6" />
        <FiUser className="w-6 h-6" />
        <button className="px-4 py-2 rounded-full bg-blue-500">Buy</button>
      </div>
    </div>
  );
}
 
export default Navbar;