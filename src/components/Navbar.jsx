import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#fcf9f0] dark:bg-stone-950 docked full-width top-0 border-none sticky z-50">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-full">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tighter text-[#823b18] dark:text-[#a0522d] uppercase">
            Bahiranga Sini Koota
        </Link>
        <div className="hidden md:flex gap-8 items-center bg-[#f6f3ea] dark:bg-stone-900 px-6 py-2">
            <Link to="/masterclasses" className="font-serif text-lg tracking-tight text-stone-600 dark:text-stone-400 hover:text-[#823b18] hover:bg-[#ebe8df] dark:hover:bg-stone-800 transition-colors duration-300">Masterclasses</Link>
            <Link to="/bridge" className="font-serif text-lg tracking-tight text-stone-600 dark:text-stone-400 hover:text-[#823b18] hover:bg-[#ebe8df] dark:hover:bg-stone-800 transition-colors duration-300">The Bridge</Link>
            <Link to="/philosophy" className="font-serif text-lg tracking-tight text-stone-600 dark:text-stone-400 hover:text-[#823b18] hover:bg-[#ebe8df] dark:hover:bg-stone-800 transition-colors duration-300">Philosophy</Link>
            <Link to="/community" className="font-serif text-lg tracking-tight text-stone-600 dark:text-stone-400 hover:text-[#823b18] hover:bg-[#ebe8df] dark:hover:bg-stone-800 transition-colors duration-300">Community</Link>
            <Link to="/artist" className="font-serif text-lg tracking-tight text-[#823b18] dark:text-[#a0522d] border-b-2 border-[#7b5800] font-bold px-3 py-1 opacity-80 transition-opacity">Registration</Link>
        </div>
        <Link to="/contact" className="bg-primary text-on-primary font-body font-semibold py-3 px-8 hover:bg-primary-container transition-colors duration-300">
            Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
