import { useState } from 'react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    return (
        <main className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto pb-24">
            {/* Hero Section: Institutional Weight */}
            <section className="px-8 pt-24 pb-16 w-full flex flex-col md:flex-row gap-12 items-end justify-between border-b-[24px] border-surface-container-low">
                <div className="w-full md:w-2/3">
                    <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface leading-none mb-8">
                        Institutional<br />Access
                    </h1>
                    <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                        A space dedicated to the rigor of artistic research. Connect with administration, review residency protocols, or submit formalized inquiries for production observation.
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex justify-end">
                    <div className="text-right border-r-4 border-secondary pr-6 py-2">
                        <span className="block font-body text-sm uppercase tracking-widest text-on-surface-variant mb-1">Current Status</span>
                        <span className="block font-headline text-2xl text-primary font-bold">Accepting Proposals</span>
                    </div>
                </div>
            </section>

            {/* Asymmetrical Grid Layout */}
            <section className="px-8 py-20 w-full flex flex-col lg:flex-row gap-20">
                {/* Left Column: Primary Interaction (Contact Form) - 60% Width */}
                <div className="w-full lg:w-3/5 flex flex-col gap-12">
                    <div className="bg-surface-variant p-8 md:p-12 h-full shadow-[0_10px_40px_rgba(28,28,23,0.03)] border border-outline-variant/30 flex flex-col justify-center relative z-10 overflow-hidden">
                        <div className="absolute -right-24 -top-24 opacity-5 pointer-events-none">
                            <span className="material-symbols-outlined" style={{ fontSize: "300px" }}>mail</span>
                        </div>
                        <h2 className="font-headline text-3xl text-primary font-bold tracking-tight mb-8">Send an Inquiry</h2>
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <span className="material-symbols-outlined text-5xl text-secondary mb-4">mark_email_read</span>
                                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Message Sent</h3>
                                <p className="font-body text-on-surface-variant">We have received your inquiry and will respond within 2 business days.</p>
                                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-primary font-label uppercase text-sm font-bold tracking-widest hover:text-secondary transition-colors">Send Another</button>
                            </div>
                        ) : (
                            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col relative group">
                                        <label className="font-body text-xs font-semibold uppercase tracking-widest text-tertiary mb-2">Full Name</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline px-0 py-2 font-body text-on-surface focus:ring-0 focus:border-secondary focus:border-b-2 focus:bg-surface-container-low transition-all" placeholder="Enter formal name" type="text" required />
                                    </div>
                                    <div className="flex flex-col relative group">
                                        <label className="font-body text-xs font-semibold uppercase tracking-widest text-tertiary mb-2">Institutional Affiliation</label>
                                        <input className="w-full bg-transparent border-0 border-b border-outline px-0 py-2 font-body text-on-surface focus:ring-0 focus:border-secondary focus:border-b-2 focus:bg-surface-container-low transition-all" placeholder="University or Company" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col relative group">
                                    <label className="font-body text-xs font-semibold uppercase tracking-widest text-tertiary mb-2">Official Contact Email</label>
                                    <input className="w-full bg-transparent border-0 border-b border-outline px-0 py-2 font-body text-on-surface focus:ring-0 focus:border-secondary focus:border-b-2 focus:bg-surface-container-low transition-all" placeholder="name@institution.edu" type="email" required />
                                </div>
                                <div className="flex flex-col relative group">
                                    <label className="font-body text-xs font-semibold uppercase tracking-widest text-tertiary mb-2">Nature of Inquiry</label>
                                    <select className="w-full bg-transparent border-0 border-b border-outline px-0 py-2 font-body text-on-surface focus:ring-0 focus:border-secondary focus:border-b-2 focus:bg-surface-container-low transition-all appearance-none cursor-pointer">
                                        <option>Residency Application Support</option>
                                        <option>Archive Access Request</option>
                                        <option>Masterclass Registration Issue</option>
                                        <option>Press & Documentation</option>
                                    </select>
                                </div>
                                <div className="flex flex-col relative group">
                                    <label className="font-body text-xs font-semibold uppercase tracking-widest text-tertiary mb-2">Detailed Proposal / Request</label>
                                    <textarea className="w-full bg-transparent border-0 border-b border-outline px-0 py-2 font-body text-on-surface focus:ring-0 focus:border-secondary focus:border-b-2 focus:bg-surface-container-low transition-all resize-none" placeholder="Provide substantial context..." rows="4" required></textarea>
                                </div>
                                <div className="pt-4 flex justify-end">
                                    <button className="bg-primary text-on-primary font-body uppercase tracking-widest text-sm font-semibold px-10 py-5 hover:bg-primary-container transition-all shadow-[0_10px_30px_rgba(28,28,23,0.08)] hover:-translate-y-1 flex items-center gap-3 w-fit" type="submit">
                                        Send Message
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Right Column: Information & Geography - 40% Width */}
                <div className="w-full lg:w-2/5 flex flex-col gap-10">
                    {/* Laboratory Module: Visit Protocols */}
                    <div className="bg-surface-variant border-l-4 border-secondary p-8 shadow-[0_10px_40px_rgba(28,28,23,0.05)]">
                        <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4">
                            <span className="material-symbols-outlined text-secondary">assignment_ind</span>
                            <h3 className="font-headline text-xl font-bold text-on-surface">Visit Protocols</h3>
                        </div>
                        <ul className="flex flex-col gap-4 font-body text-sm text-on-surface-variant leading-relaxed">
                            <li className="flex gap-4 items-start">
                                <span className="text-secondary font-bold font-headline">01.</span>
                                <span>Unscheduled visits are strictly prohibited. All prospective observers must hold written authorization.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-secondary font-bold font-headline">02.</span>
                                <span>Photography and audio recording within the physical laboratory space require prior administrative clearance.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-secondary font-bold font-headline">03.</span>
                                <span>Observers are expected to maintain silence during active rehearsal phases.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Office Hours & Map Module */}
                    <div className="bg-surface-container p-8 flex flex-col gap-8">
                        <div>
                            <h3 className="font-headline text-lg font-bold text-on-surface mb-4">Administrative Hours</h3>
                            <div className="grid grid-cols-2 gap-y-2 font-body text-sm text-on-surface-variant">
                                <span className="font-semibold text-on-surface">Monday - Thursday</span>
                                <span>09:00 - 17:00</span>
                                <span className="font-semibold text-on-surface">Friday</span>
                                <span>09:00 - 14:00</span>
                                <span className="font-semibold text-on-surface">Sat & Sun</span>
                                <span className="text-tertiary italic">Closed for Research</span>
                            </div>
                        </div>
                        <div className="w-full h-64 bg-surface-container-high relative overflow-hidden group">
                            {/* Abstract minimal map representation using CSS gradient and an image overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant to-surface-container-high opacity-50"></div>
                            <img alt="Map location" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 transition-opacity duration-700 filter contrast-125 sepia-[.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPEmviObOzBTP0BJ3YLVR4Q_ZjtUtMF8Vl4nB7YQUABHjGDQY5Mfkom0SytHpIHe0UW_TG1b-eMGyT4FxKU1ESZdYKDHsgT_RegJpsDYTjc4pBGm6C06y2IoLVad53qTC95lVEo3-b35KrTn8jhhcwd3EfRN6DDBaMg9BT0eFI-cUfssj0XI2nM8qhZMiDmEGift8NZulTl35DY-mhcq4nE9CT3TNiDVUImS9yjTK8UPakcXTc4D50sgTqpSFFcjIUZphdtA" />
                            {/* Pin */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                                <div className="w-4 h-4 bg-primary shadow-[0_0_20px_rgba(130,59,24,0.6)]"></div>
                                <span className="font-body text-xs font-bold uppercase tracking-widest bg-surface px-2 py-1 text-on-surface shadow-md">The Grounded Manuscript</span>
                            </div>
                        </div>
                        <div className="font-body text-sm text-on-surface-variant">
                            <p className="font-semibold text-on-surface mb-1">Physical Location</p>
                            <p className="mb-4">Meri Hil Bharat petrol pump nearby bike studio ballal compound  Airport Road, Yeyyadi<br />Mangalore, Karnataka 575008<br />India</p>
                            
                            <p className="font-semibold text-on-surface mb-1">Contact Information</p>
                            <p>
                                <a href="mailto:bahirangasinikoota@gmail.com" className="hover:text-primary transition-colors block mb-1">bahirangasinikoota@gmail.com</a>
                                <a href="tel:+918073728476" className="hover:text-primary transition-colors block">+91 80737 28476</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
