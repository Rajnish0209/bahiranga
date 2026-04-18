const Community = () => {
  return (
    <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8 z-10">
                    <span className="font-label text-sm uppercase tracking-[0.05em] text-secondary">The Ecosystem</span>
                    <h1 className="text-5xl md:text-7xl font-medium leading-tight text-on-surface">The Collaborative Spirit</h1>
                    <p className="text-lg md:text-xl text-on-surface-variant max-w-md font-light leading-relaxed">
                        A laboratory is not defined by its walls, but by the resonance of the voices within it. Here, craft intersects with profound generosity.
                    </p>
                </div>
                <div className="lg:col-span-7 relative h-[600px] w-full">
                    <div className="absolute inset-0 bg-surface-container-low transform translate-x-4 translate-y-4 mix-blend-multiply"></div>
                    <img alt="A candid, warm-toned photograph of a group of actors intensely discussing a script around a large wooden table in an airy, sunlit room, embodying collaborative spirit." className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl0fsh1uC3GknpWs1oHKjNWemKs1MQAxNM62Q8veeMb7Cg7MJMAIm4xftYkOFk2tdEIGbpLx7OXq4EPWh_mXm-Vo17ugVNwjf_qeglBhnCNNqOAr0rm8DO0bQEIfIHMb-Vwj_P2gyaUn-e4xgkt7vG0Jx6gIYkwEzzCfUUTxHWxzX9Bdopd7EqKSziYB_kJqsQhIddUkFdZtHt-voDUgKp_jUwFYRwP4waG0S5f5UW1OBE29rRdLpt9M5RyV-5allzNEcGlQ"/>
                </div>
            </div>
        </section>

        {/* Testimonials (Laboratory Module Style) */}
        <section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl text-on-surface font-medium">Echoes from the Floor</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Featured Large Quote */}
                    <div className="md:col-span-2 bg-surface-variant p-8 md:p-16 border-l-4 border-secondary relative overflow-hidden">
                        <span className="material-symbols-outlined absolute top-8 right-8 text-6xl text-surface-dim opacity-30 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                        <blockquote className="text-3xl md:text-5xl font-headline text-on-surface-variant leading-tight max-w-4xl italic">
                            "The rigor demanded here is matched only by the profound generosity of the ensemble. It is not just a residency; it is a crucible for truth in performance."
                        </blockquote>
                        <div className="mt-12 flex flex-col">
                            <span className="font-body text-xl font-semibold text-on-surface">Elena Rostova</span>
                            <span className="font-label text-sm uppercase tracking-widest text-secondary mt-1">Director, Avant-Garde Syndicate</span>
                        </div>
                    </div>
                    {/* Secondary Quotes */}
                    <div className="bg-surface-variant p-8 border-l-4 border-outline-variant flex flex-col justify-between h-full">
                        <blockquote className="text-xl font-headline text-on-surface-variant leading-relaxed mb-8">
                            "I arrived with a set of reliable techniques and left with none. Instead, I found a deeper, more terrifying authenticity. The manuscript grounds you, then breaks you open."
                        </blockquote>
                        <div>
                            <span className="font-body text-lg font-semibold text-on-surface block">Marcus Thorne</span>
                            <span className="font-label text-xs uppercase tracking-widest text-outline mt-1">Lead Actor, The Foundry</span>
                        </div>
                    </div>
                    <div className="bg-surface-variant p-8 border-l-4 border-outline-variant flex flex-col justify-between h-full">
                        <blockquote className="text-xl font-headline text-on-surface-variant leading-relaxed mb-8">
                            "It is a sanctuary for the disciplined mind. The absence of digital noise forces you back to the earth, back to the breath, back to the text."
                        </blockquote>
                        <div>
                            <span className="font-body text-lg font-semibold text-on-surface block">Sarah Jenkins</span>
                            <span className="font-label text-xs uppercase tracking-widest text-outline mt-1">Movement Coach</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Collaborators Wall */}
        <section className="py-32 px-8 md:px-16 lg:px-24 bg-surface">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <h2 className="text-3xl font-medium text-on-surface sticky top-32">Institutional Partners & Artistic Ensembles</h2>
                    <p className="mt-6 text-on-surface-variant text-lg">
                        The integrity of our research is sustained by these alliances. We do not seek sponsors; we seek co-conspirators in the craft.
                    </p>
                </div>
                <div className="md:w-2/3">
                    {/* Typographic Wall instead of generic logos to fit the 'Institutional' brief */}
                    <div className="flex flex-wrap gap-x-12 gap-y-16 items-baseline">
                        <div className="font-headline text-2xl text-on-surface-variant hover:text-primary transition-colors cursor-default">The Royal Dramatic Theatre</div>
                        <div className="font-body text-xl font-bold text-on-surface hover:text-primary transition-colors cursor-default">SITI Company</div>
                        <div className="font-headline text-3xl text-secondary hover:text-primary transition-colors cursor-default">Odin Teatret</div>
                        <div className="font-label text-lg uppercase tracking-widest text-outline hover:text-primary transition-colors cursor-default">The Wooster Group</div>
                        <div className="font-headline text-2xl text-on-surface-variant hover:text-primary transition-colors cursor-default">Chekhov International</div>
                        <div className="font-body text-xl font-medium text-on-surface hover:text-primary transition-colors cursor-default">Complicité</div>
                        <div className="font-headline text-xl text-secondary hover:text-primary transition-colors cursor-default">Moscow Art Theatre Archives</div>
                    </div>
                </div>
            </div>
        </section>

        {/* The Residency Life (Gallery) */}
        <section className="py-32 px-8 md:px-16 lg:px-24 bg-surface-container">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="font-label text-sm uppercase tracking-[0.05em] text-secondary mb-4 block">Archival Glimpses</span>
                        <h2 className="text-4xl md:text-5xl font-medium text-on-surface">The Residency Life</h2>
                    </div>
                    <p className="text-on-surface-variant max-w-sm text-right hidden md:block">
                        Discipline is not only found in the studio. It is in the communal breaking of bread and the quiet study of text.
                    </p>
                </div>
                {/* Asymmetrical Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
                    {/* Large Horizontal */}
                    <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-surface-variant">
                        <img alt="Long rustic dining table under warm string lights, filled with diverse artists laughing and sharing a meal, candid style, earthy tones." className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhA_Q5hs5phGWv5-X-p33pmaJbvWIzRogL14jvpGHoqGyDlv-q42Ug5ETIcjzt96u2ANtFBlJEUd9fSR-a7bC4nogb7jfcc-BojRLV7f7aDQ0LyXvBNC9hJyn7H0s1ypyfqwja4JDcnLtZNbSURJ7FolrvpaC9Ez7fgc4I-ubi0cVukKQGkXblO63ftyeNghQEU5nTHMHV4mCLNJkNRVV0AboAmsFLUw-RBk58YXgVRjMyIA06SCosOgFGpGq1QsF_waVtdQ"/>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-white font-label text-xs uppercase tracking-widest">Communal Meal, Autumn Cohort</span>
                        </div>
                    </div>
                    {/* Small Square 1 */}
                    <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-variant">
                        <img alt="Close-up of hands holding a heavily annotated script with charcoal and pen marks, resting on an unvarnished wooden desk." className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ywbI2nzJFxAewSzr-NRZ1JRYgUIdCRcVodA0tkjQJZA9INlYK-V6f1j2P_FGHLhgf4xVxg4USpXuH1jsh3bA0zF1n3EYtWoHUGGWiIe-LBgm3Z0U9ndtMj7aDFH4VIU6d72c8ZErKMcIiFRINaqimNMxNKAIxzdqzyfq_AVa727rHqaJ4_dbthqZmxgfTvvMHvR2TGt-3Ut8QlQaxds4wHtczBQPWdKiOeOXEpTQN3R1tqhUCMWieq_2LwtPT8tNrspUVw"/>
                    </div>
                    {/* Small Square 2 */}
                    <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-surface-variant">
                        <img alt="Actor in motion during a physical theater rehearsal in an open studio with hardwood floors, warm natural light streaming through large windows." className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4-PDXE4OI0nPz01ZF9IIq7zRbT1e2eWXhZKU3F0hif12npYvBp65Wg8p2ZaVfimc0QnJJKhnfbQOEfurn5zEbvavTsLfoacK2GOsbrB8eQ4fmU3mJ1Dnq7_z1sR7WGVWKtubS1yDPbInXRrqLf3nrm1LygIAq6MkXva3S676LSRtrvjtAaZmwPURtLl3U8Z1dSOzkAHAh2JqPn9JVxutJUgTwifzqSRChVyT6buBd7d9Zliq2b6iWVr4LRDHp30w3sIQ"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Community;
