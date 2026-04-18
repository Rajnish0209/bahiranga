import { Link } from 'react-router-dom';

const Philosophy = () => {
  return (
    <main className="flex-grow w-full max-w-screen-2xl mx-auto flex flex-col">
        {/* Hero: Featured Essay (Asymmetrical Layout) */}
        <section className="w-full flex flex-col lg:flex-row min-h-[716px] bg-surface relative z-10">
            {/* Left Content Block */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 lg:px-24 py-20 lg:py-0 bg-surface z-20 relative">
                {/* Signature Gradient Accent Block */}
                <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-b from-primary to-primary-container"></div>
                <span className="font-body text-label-md uppercase tracking-[0.05em] text-secondary mb-6 block">Featured Essay</span>
                <h1 className="font-headline text-5xl lg:text-7xl leading-[0.95] tracking-[-0.02em] text-on-surface mb-8">
                    The Silence of the<br/>Sandalwood Screen.
                </h1>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-xl mb-12 border-l border-outline-variant/30 pl-6">
                    An examination of subtextual pauses in early South Indian cinema, tracing the evolution of the unsaid word into a physical vocabulary for the modern actor. Notes transcribed from the 1978 symposium.
                </p>
                <div>
                    <Link to="/contact" className="bg-primary text-on-primary font-body text-sm tracking-widest uppercase px-8 py-4 hover:bg-primary-container transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_60px_-15px_rgba(28,28,23,0.15)] flex items-center gap-3 w-fit">
                        Read Manuscript
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
            </div>
            {/* Right Image Block */}
            <div className="w-full lg:w-[45%] bg-surface-container-low relative overflow-hidden group">
                <img alt="Archival notes and old camera" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv_wrj8UGPNm6yocyahNMYsuXjmBfvPZyykJWH6IUoCYHlkKgu8UhqMSIasjbn35fKJQ4PUJvsI4GKRKd0bJITuPSRbjMP5AkWLBHUI1XWrgCVLr5cEIUj7innSnvu3_5V8p4efw9vlTNnc0FDbwkwGj32TP78X2CuffsrRa692WSjdI5z7bOtpcwzSwh-HUCRkdOyB4e2V-0z8uciCOFuYPmZcpIhxab7zvwlQsqxDl30KZ4ksZsbM1ljZl51t0a6_HqtPg"/>
                {/* Overlay Texture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-transparent opacity-60"></div>
            </div>
        </section>

        {/* Divider Space */}
        <div className="h-32 w-full bg-surface"></div>

        {/* Research Papers Grid (Bento Style) */}
        <section className="w-full px-8 lg:px-24 py-16 bg-surface-container-low">
            <div className="mb-16 max-w-2xl">
                <h2 className="font-headline text-4xl lg:text-5xl tracking-tight text-on-surface mb-4">Performance Methodology</h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                    Peer-reviewed treatises and raw field notes cataloging the physical and psychological disciplines of the craft.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(300px,auto)]">
                {/* Laboratory Module (Large Focus Card) - Spans 8 cols */}
                <article className="col-span-1 md:col-span-2 lg:col-span-8 bg-surface-variant border-l-4 border-secondary p-8 lg:p-12 flex flex-col justify-between hover:bg-surface-container-highest transition-colors duration-500 cursor-pointer group">
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <span className="font-body text-xs font-bold uppercase tracking-widest text-secondary">The Laboratory Module</span>
                            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">history_edu</span>
                        </div>
                        <h3 className="font-headline text-3xl lg:text-4xl leading-tight text-on-surface mb-6 w-4/5">Breath as Architecture: Structuring Emotional Space</h3>
                        <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
                            A comparative study of rhythmic breathing techniques in classical Indian theater versus contemporary Western realism, isolating breath not merely as sustenance, but as the foundational brickwork of a scene's invisible geography.
                        </p>
                    </div>
                    <div className="mt-12 flex items-center gap-4 text-sm text-tertiary font-body">
                        <span>Dr. V. Ramanathan</span>
                        <span className="w-1 h-1 bg-tertiary rounded-none"></span>
                        <span>Vol. IV, 1982</span>
                    </div>
                </article>

                {/* Vertical Archival Card - Spans 4 cols */}
                <article className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface-container-highest flex flex-col relative overflow-hidden group border border-outline-variant/15">
                    <div className="h-48 w-full relative overflow-hidden bg-surface-dim">
                        <img alt="Sketching hands" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwyqqgL1lgw9B1kLPEads0H8tvhKh9_4WTAahk5feGfk12Vji056zHCG7fASWVpqwqlzHCeHOQBZBdt3Fz9fDQQP67DIrpIpzJ_q033RqnYAiACjUCGeR_9oKXzNVsCPcbrG9A0vFfwj_IxuHb0QJ0In4AYy84-vIX9LoxOxA5bOBbUxnhgHe4e0mHkeZwJJMNQQP338wNJcwpC7GqAiyTz-WhVvLyXslwPFzq08-WwB4GtqC5WDKWHbBwWWF_5ql_5ARdJA"/>
                    </div>
                    <div className="p-8 flex-grow flex flex-col justify-between">
                        <div>
                            <h3 className="font-headline text-xl leading-snug text-on-surface mb-3">Charcoal & Movement</h3>
                            <p className="font-body text-sm text-on-surface-variant line-clamp-3">
                                Translating kinetic energy into static lines to map character blocking across an empty stage.
                            </p>
                        </div>
                        <span className="font-body text-xs uppercase tracking-widest text-primary mt-6 block group-hover:underline">View Sketches</span>
                    </div>
                </article>

                {/* Standard Academic Paper - Spans 4 cols */}
                <article className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface p-8 border border-outline-variant/20 hover:border-outline-variant/60 transition-colors duration-300 flex flex-col justify-between shadow-[0_10px_40px_-20px_rgba(28,28,23,0.05)]">
                    <div>
                        <span className="font-body text-xs uppercase tracking-widest text-outline mb-4 block">Thesis Extract</span>
                        <h3 className="font-headline text-xl leading-snug text-on-surface mb-4">The Myth of Neutrality</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                            Challenging the concept of the 'blank slate' actor. Every body carries the sediment of its history; true performance lies in excavation, not erasure.
                        </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-outline-variant/20">
                        <span className="font-body text-xs text-tertiary">M. K. Subrahmanya — 1995</span>
                    </div>
                </article>

                {/* Standard Academic Paper - Spans 4 cols */}
                <article className="col-span-1 md:col-span-1 lg:col-span-4 bg-surface p-8 border border-outline-variant/20 hover:border-outline-variant/60 transition-colors duration-300 flex flex-col justify-between shadow-[0_10px_40px_-20px_rgba(28,28,23,0.05)]">
                    <div>
                        <span className="font-body text-xs uppercase tracking-widest text-outline mb-4 block">Field Notes</span>
                        <h3 className="font-headline text-xl leading-snug text-on-surface mb-4">Gravity and Grief</h3>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                            Observations on the physical weight of sorrow. How actors anchor their center of mass to project internal collapse without physical injury.
                        </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-outline-variant/20">
                        <span className="font-body text-xs text-tertiary">S. N. Pillai — 2001</span>
                    </div>
                </article>

                {/* Text-heavy Callout - Spans 4 cols */}
                <article className="col-span-1 md:col-span-2 lg:col-span-4 bg-primary text-on-primary p-8 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute -right-12 -top-12 text-on-primary-fixed-variant opacity-10">
                        <span className="material-symbols-outlined text-9xl">menu_book</span>
                    </div>
                    <div className="relative z-10">
                        <h3 className="font-headline text-2xl leading-snug mb-4">Access the Full Repository</h3>
                        <p className="font-body text-sm text-on-primary/80 mb-8 max-w-sm">
                            The complete collection of dissertations, prompt books, and audio recordings is restricted to registered scholars.
                        </p>
                        <Link to="/contact" className="inline-block border border-on-primary/30 bg-transparent text-on-primary font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-on-primary hover:text-primary transition-colors duration-300 w-fit">
                            Request Clearance
                        </Link>
                    </div>
                </article>
            </div>
        </section>

        {/* Divider Space */}
        <div className="h-32 w-full bg-surface"></div>

        {/* Institutional Roots Section */}
        <section className="w-full bg-surface py-16 lg:py-24 px-8 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative">
                {/* Tonal layering block behind image */}
                <div className="absolute -top-8 -left-8 w-3/4 h-full bg-surface-container-high z-0"></div>
                <img alt="Old architecture, pillars" className="w-full aspect-[4/5] object-cover relative z-10 shadow-[0_20px_50px_-20px_rgba(28,28,23,0.2)] grayscale contrast-125 sepia-[.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdSbvWzrYtBJbyMqAmI6hZJ-wfP7Jz_bJj73bh6eJqr9nJA7TLvnLTHHB5yhrxmPhvczrGvn9OehtWUXFkJupAcBuzSuNrzRWlvTgGLAX3L_ssp48Or7wCOvv0BQVWSN_r3_JeHATRMeLLD3FVBhNRX08aqOOJfj-tKJbHFWtTcYwIgAojtferg5GuPqzSisGbFPM2tccwdZhbbFjH2dtSy3iy7F4s1GgdIGnEFgeyrn12Gg1FnwI3VH-CxKMTKfPIwQ5myA"/>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
                <span className="font-body text-xs uppercase tracking-[0.1em] text-secondary mb-4 block">Foundation</span>
                <h2 className="font-headline text-4xl lg:text-6xl text-on-surface mb-8 tracking-tight leading-[1.1]">The Pedagogy of Stone.</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-6">
                    Bahiranga Sini Koota was not founded in a classroom, but on the sun-baked steps of an abandoned amphitheater. The architecture dictated the voice; the stone demanded discipline.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-80 pl-6 border-l border-primary/20">
                    "We do not teach acting as an ephemeral trick of emotion. We teach it as masonry. Emotion is weather; technique is the house that withstands it."<br/>
                    <span className="block mt-2 text-sm text-tertiary">— Founding Manifesto, 1964</span>
                </p>
            </div>
        </section>
    </main>
  );
};

export default Philosophy;
