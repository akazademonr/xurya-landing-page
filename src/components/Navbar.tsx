import Button from "./Button";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="bg-white-800 text-black p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="space-x-8 text-[17px] font-semibold font-mono" style={{ fontFamily: "Manrope, sans-serif" }}>
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Features</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
          <div className="gap-3 flex" style={{ fontFamily: "Manrope, sans-serif" }}>
            <Button label="Log in" variant="outline" className="border-gray-300 cursor-pointer" />
            <Button label="Get in touch" className="bg-green-500 border-green-500 text-white hover:bg-green-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  )
}