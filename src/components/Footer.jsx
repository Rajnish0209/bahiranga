import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#ebe8df] dark:bg-stone-900 w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t-0">
        <div className="font-serif text-lg font-black text-[#1c1c17] dark:text-[#fcf9f0]">
            Bahiranga Sini Koota
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-sans tracking-widest uppercase">
            <Link to="/contact" className="text-stone-600 dark:text-stone-400 hover:text-[#823b18] transition-colors">Anti-Fraud Policy</Link>
            <Link to="/contact" className="text-stone-600 dark:text-stone-400 hover:text-[#823b18] transition-colors">Legal Mediation</Link>
            <Link to="/contact" className="text-stone-600 dark:text-stone-400 hover:text-[#823b18] transition-colors">Privacy Protocol</Link>
            <Link to="/contact" className="text-stone-600 dark:text-stone-400 hover:text-[#823b18] transition-colors">Terms of Residency</Link>
        </div>
        <div className="text-[#823b18] dark:text-[#a0522d] font-sans text-xs tracking-widest uppercase text-center md:text-right">
            © 2024 Bahiranga Sini Koota. All Rights Reserved. Institutional Craft & Discipline.
        </div>
    </footer>
  );
};

export default Footer;
