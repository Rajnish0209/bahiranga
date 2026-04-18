import { Link } from 'react-router-dom';

const Bridge = () => {
  return (
    <main className="flex-1 w-full pt-12 pb-24 px-6 lg:px-16 flex flex-col gap-24">
        {/* Hero Header */}
        <header className="flex flex-col gap-6 max-w-4xl mx-auto md:mx-0">
            <div className="flex items-center gap-3 text-secondary uppercase tracking-[0.05em] font-label text-sm">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>movie</span>
                <span>Casting & Legal Mediation</span>
            </div>
            <h1 className="font-headline text-5xl lg:text-7xl tracking-[-0.02em] text-primary leading-tight">
                The Professional Bridge
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mt-4 border-l-4 border-outline-variant pl-6">
                A structured conduit between artistic discipline and the professional industry. We establish transparent frameworks for casting, ensuring meritocracy and legal protection for every artist in our registry.
            </p>
        </header>

        {/* Anti-Fraud Notice (Prominent) */}
        <section className="bg-surface-variant p-8 lg:p-12 border-l-4 border-error relative shadow-[0_10px_60px_-15px_rgba(28,28,23,0.05)] max-w-7xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-surface-container-lowest p-4 rounded-none">
                    <span className="material-symbols-outlined text-error text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                </div>
                <div>
                    <h2 className="font-headline text-2xl lg:text-3xl text-on-surface mb-4">Strict Anti-Fraud Policy</h2>
                    <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                        Bahiranga Sini Koota operates under a mandate of institutional integrity. <strong className="font-bold text-primary">We never charge artists for acting opportunities, auditions, or casting mediation.</strong> Any request for payment in exchange for a role is fraudulent and must be reported immediately to our legal department.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="bg-transparent border border-outline/20 text-primary px-8 py-3 font-body font-medium hover:bg-surface-container-low transition-colors shadow-[0_10px_40px_-10px_rgba(28,28,23,0.05)] uppercase tracking-wider text-sm flex items-center justify-center">
                            Read Full Policy
                        </Link>
                        <Link to="/contact" className="bg-transparent text-error px-6 py-3 font-body font-medium hover:bg-error-container/20 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">report</span>
                            Report Incident
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Frameworks Bento Grid */}
        <section className="flex flex-col gap-12 max-w-7xl">
            <h2 className="font-headline text-3xl lg:text-4xl text-primary border-b border-surface-container-highest pb-4 inline-block max-w-fit">Institutional Frameworks</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Meritocracy Card (Large) */}
                <div className="md:col-span-8 bg-surface-container-low p-10 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="mb-6 inline-block bg-surface p-3 border border-outline/10">
                            <span className="material-symbols-outlined text-primary text-3xl">balance</span>
                        </div>
                        <h3 className="font-headline text-3xl text-on-surface mb-4">Transparent Meritocracy</h3>
                        <p className="font-body text-on-surface-variant leading-relaxed text-lg max-w-xl">
                            Our casting process removes subjective bias through structured evaluations. Selections are based strictly on documented artistic capability, alignment with the script's psychological demands, and continuous professional development within the academy.
                        </p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-outline/10 flex items-center justify-between">
                        <span className="font-label uppercase tracking-widest text-xs text-secondary">Evaluation Criteria</span>
                        <span className="material-symbols-outlined text-outline">arrow_forward</span>
                    </div>
                </div>

                {/* Legal Card (Vertical) */}
                <div className="md:col-span-4 bg-primary text-on-primary p-10 flex flex-col justify-between bg-gradient-to-b from-primary to-primary-container">
                    <div>
                        <div className="mb-6 inline-block bg-on-primary/10 p-3">
                            <span className="material-symbols-outlined text-on-primary text-3xl">gavel</span>
                        </div>
                        <h3 className="font-headline text-2xl mb-4">Formal Agreements</h3>
                        <p className="font-body text-on-primary/80 leading-relaxed">
                            Every engagement mediated by the Koota is bound by formal legal contracts drafted by our retained counsel. We ensure fair compensation, protected working hours, and defined usage rights.
                        </p>
                    </div>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3 text-sm font-body text-on-primary/90 border-b border-on-primary/20 pb-2">
                            <span className="material-symbols-outlined text-sm">check</span>
                            Standardized Union Contracts
                        </div>
                        <div className="flex items-center gap-3 text-sm font-body text-on-primary/90 border-b border-on-primary/20 pb-2">
                            <span className="material-symbols-outlined text-sm">check</span>
                            Intellectual Property Rights
                        </div>
                        <div className="flex items-center gap-3 text-sm font-body text-on-primary/90 pb-2">
                            <span className="material-symbols-outlined text-sm">check</span>
                            On-Set Mediation Support
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Bridge;
