import { Link } from 'react-router-dom';

const Masterclasses = () => {
  return (
    <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-surface-container-low py-24 px-8 md:px-16 lg:px-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                <div className="w-full md:w-1/2 z-10 relative">
                    <span className="font-label text-sm text-secondary mb-4 block">Institutional Training</span>
                    <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
                        The Craft of Presence
                    </h1>
                    <p className="font-body text-lg text-on-surface-variant max-w-lg mb-12 leading-relaxed">
                        A rigorous academic immersion into the actor's instrument. We strip away artifice to uncover profound, grounded performance through intensive scene study and camera synergy.
                    </p>
                    <Link to="/artist" className="bg-primary text-on-primary px-8 py-4 font-body font-medium hover:bg-primary-container transition-colors shadow-sun-casted inline-flex items-center gap-2 w-fit">
                        View Residency Schedule <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
                {/* "Frosted" Hero Image Container */}
                <div className="w-full md:w-1/2 relative bg-surface-container-high p-4 shadow-sun-casted">
                    <img alt="Actors deep in concentration during a workshop reading, candid, natural lighting, high contrast" className="w-full h-auto grayscale opacity-90 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOJhhVqpzJJEuIMtTwz0S8Y2IW8ytm6mMFoKmDJAEudwFkZut-RxXrb_6RSOonUGLrGDwl-L2FEhqty1QiXQeYACnuVYp8_sSUUSttMLsiiWNd5ozEo93Rvhpd8eC-1ec4zYALwc4ZxeWJEZ4l0NqKqBXTkKQf6P0FbQK9EiGpvcu4pUSMO2HUhFzcEbEmUyVzlfGpKJteUNDtOkoxG2Eb2oFHzXuVLBJ-5sySCZR1RvCg8eFvD6TCEoYHDJzG9q-nP61TDg"/>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent backdrop-blur-[2px] pointer-events-none"></div>
                </div>
            </div>
        </section>

        {/* Academic Modules Section */}
        <section className="w-full py-32 px-8 md:px-16 lg:px-32 bg-surface relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:w-2/3">
                    <span className="font-label text-sm text-secondary mb-4 block">Core Curriculum</span>
                    <h2 className="font-headline text-4xl md:text-5xl text-on-surface mb-6">Academic Modules</h2>
                    <div className="h-1 w-24 bg-primary mb-8"></div>
                    <p className="font-body text-lg text-on-surface-variant">Our residencies are structured as intensive, focused modules. Each designed to isolate and strengthen a specific facet of screen performance.</p>
                </div>

                {/* Module 1 & 2: Asymmetric Layout */}
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-24">
                    {/* Module 1: Actor's Preparation (Laboratory Style) */}
                    <article className="bg-surface-variant laboratory-edge p-8 md:p-12 relative flex flex-col justify-between shadow-sun-casted border-l-4 border-secondary">
                        <div>
                            <span className="font-label text-xs text-secondary mb-2 block">Module 01</span>
                            <h3 className="font-headline text-3xl text-primary mb-6">Actor's Preparation</h3>
                            <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                                Cultivating camera-facing confidence. This module focuses on the psychological readiness required before the lens. Exercises in vulnerability, stillness, and removing the 'performance mask' to reveal genuine presence.
                            </p>
                        </div>
                        <img alt="Close up portrait of an actor breathing deeply before a take, intense focus, studio lighting" className="w-full h-64 object-cover filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVErgPzhmDgtPf6qWjPMZEMitIRaEo4imIDJh2Yz6rmTzoQSlXjWeTftAfyylkwUs1hDXaZ-8faMZUmJ3o0jSq8P9eBsZWz25k54BT2KM3_rCvAS1IMsuQaWzdzlOY8wF-6nO0iUPw2u_A7xqAjaFoFiKM34ELCWJjLumB49yF2SSaci5t0u9u2y9pE2lNIJOstx-8WhGHr65eXt3tbtnQlu9KRV2CdGcSLYPhHivSoej-pCkdqEd_CXXU0wI6tHEk7tWLPA"/>
                    </article>

                    {/* Module 2: In-Depth Character Study */}
                    <article className="bg-surface-container-low p-8 md:p-12 flex flex-col justify-center">
                        <span className="font-label text-xs text-secondary mb-2 block">Module 02</span>
                        <h3 className="font-headline text-3xl text-on-surface mb-6">In-Depth Character Study</h3>
                        <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                            Rigorous script analysis using institutional methodologies. We approach the text as an architectural blueprint, decoding subtext, objectives, and historical context to build a robust, grounded character framework.
                        </p>
                        <Link to="/artist" className="font-label text-sm text-primary hover:text-primary-container border-b border-outline pb-1 inline-block w-max transition-colors">Review Syllabus</Link>
                    </article>
                </div>

                {/* Module 3 & 4: Asymmetric Layout 2 */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                    {/* Module 3: Technical Screen Craft */}
                    <article className="bg-surface-container-high p-8 flex flex-col justify-center border border-outline-variant/15">
                        <span className="font-label text-xs text-secondary mb-2 block">Module 03</span>
                        <h3 className="font-headline text-2xl text-on-surface mb-4">Technical Screen Craft</h3>
                        <p className="font-body text-sm text-on-surface-variant mb-6">
                            Mastering the mechanics. Voice modulation for boom mics, hitting marks precisely, and understanding lens focal lengths to scale performance appropriately for the shot size.
                        </p>
                        <div className="mt-auto">
                            <span className="material-symbols-outlined text-primary text-3xl">videocam</span>
                        </div>
                    </article>

                    {/* Module 4: Set Discipline & Etiquette (Hero Card) */}
                    <article className="bg-surface p-8 md:p-12 relative border border-outline-variant/15 shadow-sun-casted">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/2">
                                <img alt="Film slate clapperboard in focus with blurred crew in background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSE9V3ENDIqpQT2AJOD9t62twm-O-0F7N0Gqdzv3rwJegqWJayXlwNtuxDCfin5Ra61wNuMcPzRTMhCakWfjTwSsMRQIepwA_2I6TdJfpNyn4qB_VZk_XqjPdFXo5m5voP9PXSe-f5-BNYG4c5CNRG907qf0BMJNqE97CeVFvuSEEsVshvrZz_pwfSO7aDH1Mjg9MUEXzc6xaAbuk9qIRxqm7l7_lO53ZVQkXMyXUpM_NLVvOfa4UG6BltnX_uBZThqSyirA"/>
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="font-label text-xs text-secondary mb-2 block">Module 04</span>
                                <h3 className="font-headline text-3xl text-on-surface mb-4">Set Discipline & Etiquette</h3>
                                <p className="font-body text-on-surface-variant leading-relaxed">
                                    Professionalism as a craft. Understanding the hierarchy of a set, effective collaboration with directors and crew, and maintaining energy and focus through grueling schedules. The foundation of a sustainable career.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Masterclasses;
