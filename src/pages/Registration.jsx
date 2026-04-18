import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="w-full flex-1 pb-24">
        {/* Hero Section / Context Header */}
        <header className="pt-24 pb-16 px-8 md:px-16 bg-gradient-to-b from-surface-container-low to-surface border-b-0 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMFyC6Uh0JaGEoWxkTATSh0EadR1veVoE4MUvizoVQ-yg6G6JueRlPJ5IlE-JZULCAIZR3No--QVUvKn8TOpZ4fItucmKU5RwKrrrG3mAonlygYRj7hWpY1Tfp-DtoO1oOLEzTItZpnK32PTNCMsM6RQowuKg59FZ9gpDINqVSLRtLULVisYCOCgmGXkrW91noz87Unl8TSufj7xdj8aXWTg_xW-a5JM7sw8kH6xDtXCCEzzIC-NtzX3wHoTZTenvfXT8Njw')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="max-w-4xl relative z-10">
                <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold tracking-tighter mb-6 leading-tight">Artist Registration & Audition Board</h1>
                <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed border-l-4 border-secondary pl-6">
                    A formal repository for active practitioners. Submit your portfolio for consideration in upcoming academic and professional productions. Discipline and punctuality are strictly enforced.
                </p>
            </div>
        </header>

        <div className="px-8 md:px-16 py-12 max-w-7xl mx-auto flex flex-col xl:flex-row gap-16">
            {/* Left Column: Registration Form (The Laboratory Module) */}
            <section className="xl:w-2/5 order-2 xl:order-1 relative">
                {/* The Laboratory Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary -ml-8 hidden md:block"></div>
                <div className="bg-surface-variant p-8 md:p-12 shadow-[0_10px_40px_rgba(28,28,23,0.03)] border border-outline-variant/30">
                    <div className="mb-10 flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_ind</span>
                        <h2 className="font-headline text-3xl text-primary font-bold tracking-tight">Registry Submission</h2>
                    </div>
                    {isSubmitted ? (
                        <div className="bg-surface-container-low p-8 text-center border border-secondary/30 rounded-sm">
                            <span className="material-symbols-outlined text-5xl text-secondary mb-4">check_circle</span>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Profile Submitted</h3>
                            <p className="font-body text-on-surface-variant">Your portfolio has been securely transmitted to the directors. You will be contacted via email if selected for an audition.</p>
                            <button onClick={() => setIsSubmitted(false)} className="mt-6 text-primary font-label uppercase text-sm font-bold tracking-widest hover:text-secondary transition-colors">Submit Another</button>
                        </div>
                    ) : (
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="font-label text-sm uppercase tracking-widest text-secondary font-semibold">Personal Details</h3>
                            <div className="relative">
                                <input className="peer w-full bg-transparent border-0 border-b border-outline py-3 px-0 text-on-surface focus:ring-0 focus:border-b-2 focus:border-secondary focus:bg-surface-container-low/30 transition-all placeholder-transparent" id="fullName" placeholder="Full Legal Name" type="text"/>
                                <label className="absolute left-0 -top-3.5 text-sm text-outline transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary" htmlFor="fullName">Full Legal Name</label>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input className="peer w-full bg-transparent border-0 border-b border-outline py-3 px-0 text-on-surface focus:ring-0 focus:border-b-2 focus:border-secondary focus:bg-surface-container-low/30 transition-all placeholder-transparent" id="email" placeholder="Primary Contact Email" type="email"/>
                                    <label className="absolute left-0 -top-3.5 text-sm text-outline transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary" htmlFor="email">Primary Contact Email</label>
                                </div>
                                <div className="relative">
                                    <input className="peer w-full bg-transparent border-0 border-b border-outline py-3 px-0 text-on-surface focus:ring-0 focus:border-b-2 focus:border-secondary focus:bg-surface-container-low/30 transition-all placeholder-transparent" id="phone" placeholder="Contact Number" type="tel"/>
                                    <label className="absolute left-0 -top-3.5 text-sm text-outline transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary" htmlFor="phone">Contact Number</label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-outline-variant/30">
                            <h3 className="font-label text-sm uppercase tracking-widest text-secondary font-semibold">Portfolio & Experience</h3>
                            <div className="relative">
                                <select className="w-full bg-transparent border-0 border-b border-outline py-3 px-0 text-on-surface focus:ring-0 focus:border-b-2 focus:border-secondary focus:bg-surface-container-low/30 transition-all appearance-none cursor-pointer" id="role" defaultValue="">
                                    <option className="text-on-surface-variant" disabled value="">Select Primary Discipline</option>
                                    <option value="actor">Actor / Performer</option>
                                    <option value="director">Director</option>
                                    <option value="writer">Playwright / Screenwriter</option>
                                    <option value="tech">Technical Craft (Lighting/Sound)</option>
                                </select>
                                <div className="absolute right-0 top-3 pointer-events-none">
                                    <span className="material-symbols-outlined text-outline">arrow_drop_down</span>
                                </div>
                            </div>
                            <div className="relative">
                                <textarea className="peer w-full bg-transparent border-0 border-b border-outline py-3 px-0 text-on-surface focus:ring-0 focus:border-b-2 focus:border-secondary focus:bg-surface-container-low/30 transition-all placeholder-transparent resize-none" id="experience" placeholder="Brief Summary of Professional Experience" rows="4"></textarea>
                                <label className="absolute left-0 -top-3.5 text-sm text-outline transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary" htmlFor="experience">Brief Summary of Professional Experience</label>
                            </div>
                            <div className="flex items-center gap-4 bg-surface p-4 border border-outline-variant/50 cursor-pointer hover:bg-surface-container-lowest transition-colors">
                                <span className="material-symbols-outlined text-secondary text-2xl">upload_file</span>
                                <div className="flex-1">
                                    <p className="font-body text-sm font-semibold text-on-surface">Upload Headshot & Resume</p>
                                    <p className="font-body text-xs text-on-surface-variant">PDF, JPEG, or PNG (Max 5MB)</p>
                                </div>
                                <span className="text-xs uppercase tracking-widest font-semibold text-primary">Browse</span>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="w-full bg-primary text-on-primary font-body font-bold py-4 px-8 uppercase tracking-widest hover:bg-primary-container hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(28,28,23,0.15)] transition-all duration-300 flex justify-center items-center gap-3" type="submit">
                                Submit Profile
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                            <p className="text-center text-xs text-on-surface-variant mt-4 font-label uppercase tracking-wider">Submissions are reviewed bi-weekly.</p>
                        </div>
                    </form>
                    )}
                </div>
            </section>

            {/* Right Column: Audition Board (Bento Grid) */}
            <section className="xl:w-3/5 order-1 xl:order-2">
                <div className="mb-10 flex justify-between items-end border-b border-outline-variant/30 pb-4">
                    <div>
                        <h2 className="font-headline text-4xl text-on-surface font-bold tracking-tight">Active Casting & Workshops</h2>
                        <p className="font-body text-sm text-on-surface-variant mt-2">Current requirements for institutional productions.</p>
                    </div>
                    <div className="hidden sm:flex gap-2">
                        <span className="material-symbols-outlined text-secondary bg-surface-container-low p-2 cursor-pointer hover:bg-surface-container-high">grid_view</span>
                        <span className="material-symbols-outlined text-outline p-2 cursor-pointer hover:bg-surface-container-low">view_list</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Featured Audition Card */}
                    <article className="md:col-span-2 bg-surface-container-highest relative overflow-hidden group cursor-pointer hover:shadow-[0_20px_60px_rgba(28,28,23,0.08)] transition-all duration-500">
                        <div className="absolute right-0 top-0 w-1/2 h-full">
                            <div className="w-full h-full bg-surface-variant" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPPNId_Ad07BoOHgFSUrejpJv2NzTMlvwtU7gauV2R14_AdwdUEWW0tSS-gsy8qu_ZAeUjByXMTcNNpBIJXHyhjNJKhXI--MlSkQGigoejQBa0lXH2WPJ6r-aT8-76jFQuJ3ZddwZrPi9aKhwo48bjdb-II_rp1sFMCjXo5L4dWoGLV0y5lavVGwk5l4sH0UN3XfnTB6MpqvUWeHofaJpxRAahmDHA6yQdBo3LP25a1fPQTJJVMUULA1j5EHz4M3II-dTxPQ')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-highest via-surface-container-highest/80 to-transparent"></div>
                        </div>
                        <div className="relative z-10 p-8 md:p-12 w-full md:w-2/3">
                            <span className="inline-block bg-secondary text-on-secondary font-label text-xs uppercase tracking-widest px-3 py-1 mb-6 font-bold">Featured Production</span>
                            <h3 className="font-headline text-3xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">The Glass Menagerie Revision</h3>
                            <p className="font-body text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                                Seeking strong dramatic actors for a deconstructed interpretation of the classic text. Heavy emphasis on physical theater and spatial relationship research.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 mb-8 border-l-2 border-outline-variant pl-4">
                                <div>
                                    <p className="font-label text-xs text-outline uppercase tracking-wider mb-1">Roles Available</p>
                                    <p className="font-body text-sm font-semibold text-on-surface">Tom Wingfield, Laura (Alt)</p>
                                </div>
                                <div>
                                    <p className="font-label text-xs text-outline uppercase tracking-wider mb-1">Audition Dates</p>
                                    <p className="font-body text-sm font-semibold text-secondary">Oct 12 - 15, 2024</p>
                                </div>
                            </div>
                            <Link to="/contact" className="inline-flex text-primary font-label text-sm uppercase tracking-widest font-bold items-center gap-2 group-hover:gap-4 transition-all">
                                View Requirements <span className="material-symbols-outlined text-base">arrow_right_alt</span>
                            </Link>
                        </div>
                    </article>

                    {/* Standard Card 1 */}
                    <article className="bg-surface-container-lowest p-8 border border-outline-variant/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(28,28,23,0.05)] transition-all duration-300 flex flex-col justify-between h-full">
                        <div>
                            <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold block mb-3">Technical Craft</span>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Lighting Designer Workshop</h3>
                            <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                                A practical workshop focusing on non-traditional illumination sources for intimate performance spaces.
                            </p>
                        </div>
                        <div className="mt-auto border-t border-outline-variant/20 pt-4 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-outline">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                <span className="font-body text-xs">Nov 02, 2024</span>
                            </div>
                            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform cursor-pointer">arrow_forward</span>
                        </div>
                    </article>

                    {/* Standard Card 2 */}
                    <article className="bg-surface-container-low p-8 border border-outline-variant/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(28,28,23,0.05)] transition-all duration-300 flex flex-col justify-between h-full">
                        <div>
                            <span className="font-label text-xs text-primary uppercase tracking-widest font-semibold block mb-3">Open Call</span>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Chorus Ensemble</h3>
                            <p className="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                                Seeking 12 performers for an upcoming greek tragedy adaptation. Strong vocal projection and movement skills required.
                            </p>
                        </div>
                        <div className="mt-auto border-t border-outline-variant/20 pt-4 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-outline">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                                <span className="font-body text-xs">Main Amphitheater</span>
                            </div>
                            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform cursor-pointer">arrow_forward</span>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </main>
  );
};

export default Registration;
