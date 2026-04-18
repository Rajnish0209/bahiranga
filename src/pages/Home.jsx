import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full min-h-[921px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img alt="Actors in script reading" className="w-full h-full object-cover object-center opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjBtwlFqcAb9Kft8ZtZ3UX3PjOG5YalApGLQ1v1MM4qpdVSdzutZpRfnGKbG95hGgW9nL_WRlPosaXVM-HPO-33_lpopptGudmvy9EfMzbIoxOhhdzlducSUHinRO5N-4kTi-2cK9WFBJZVBlxFc_DNYrSWd0psDALzifTEfkApMY-NdRpDi3HYPLyRBr9yxUtd5pZxEc_iIrzt-146qxq7hyeOsLH0Po8MgWTLl5zl8JI1oUDEeIlFlz2GQ2CXfDgibGKdQ"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-start justify-between gap-16">
                <div className="max-w-3xl">
                    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-[1.1] mb-8">
                        Transforming Aspiring Talent into <span className="text-primary">Complete Artists</span>
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl mb-12">
                        A professional laboratory for screen acting and a trusted casting bridge in the Sandalwood industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link to="/masterclasses" className="bg-primary text-center text-on-primary font-body font-bold text-lg py-4 px-10 hover:bg-primary-container transition-all hover:-translate-y-1 hover:shadow-xl shadow-surface-tint/20">
                            Join Our Training
                        </Link>
                        <Link to="/bridge" className="bg-transparent text-center border border-outline/30 text-primary font-body font-bold text-lg py-4 px-10 hover:bg-surface-container transition-colors">
                            Casting Opportunities
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Philosophy Section */}
        <section className="w-full py-32 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-5 relative">
                    <div className="absolute -inset-4 bg-surface-variant/50 -z-10 translate-x-4 translate-y-4"></div>
                    <img alt="Acting theory book" className="w-full h-auto grayscale-[30%] contrast-125 object-cover aspect-[4/5]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSjyc-eBwmE5x-ZfYRvsbvgrx1Yzx-si7g99GOp6VIgrNBEqbGlYMwFlgUVYnT6MVBm-njc_QTsbsGCaHlFOMzjO0MKt0mZ69ll10bCSD04spOUF5_TcHFNE-MIcrYzCRvxdpUDMhxwT524c9e5k7aABmmLkvWHqyrvs1s8vGvyRC0ImoFuUJPecqV90DjTpp5dskJLPXMbbrtnTv-PGyBq5fm_Ta66bK9H-8CJ9eq8F25E1jU6x17C_bDS0yPVe9kczYpLw"/>
                </div>
                <div className="md:col-span-7 flex flex-col">
                    <span className="font-body text-sm font-bold tracking-widest text-secondary uppercase mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">psychology</span>
                        Institutional Core
                    </span>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight mb-8">
                        The Authentic Expression of Emotion.
                    </h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed pl-8 border-l-4 border-secondary bg-surface-variant/20 py-6 px-4">
                        <p>
                            We function as a dual-entity: a rigorous training ground demanding absolute discipline, and a professional mediator ensuring artist dignity.
                        </p>
                        <p>
                            Our philosophy rejects superficial performance. We excavate the truth within the artist, preparing them not just for the camera, but for the complex legal and ethical realities of the industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Masterclasses Preview */}
        <section className="w-full py-32 bg-surface">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">Academic Modules</h2>
                        <p className="font-body text-lg text-on-surface-variant">Structured curriculum designed for profound artistic growth.</p>
                    </div>
                    <Link to="/masterclasses" className="group flex items-center gap-3 text-primary font-bold hover:text-primary-container transition-colors">
                        View All Modules
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Module 1 */}
                    <article className="bg-surface-container group relative overflow-hidden">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                            <img alt="Actor preparation" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyl_UdbOwlo7EvgFLREWeZuuOHtTr_hmm_jGLXVLrVmpEvTxibfqyAsGriIxtPHJY_Ka6p5u9DMzvoWbzrafShXeUlh9Z4mFxtx9JTbwmw6Hy-w2jeuf7v9xj8-9PJi5ZRKPyB-5dq1Ql1HA3JztQHH9_o9YNyKGhg_L1_lw1FEWk75qNK6DjOdfmR_E55lwu0QHjhWdXM_7k4eZe7vLjT383Nr46af3frWPFy3qKqng1nXkZrLEPy_YHv4VGQEI_4Al1C3Q"/>
                        </div>
                        <div className="p-8">
                            <span className="font-body text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">Module I</span>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Actor's Preparation</h3>
                            <p className="font-body text-on-surface-variant mb-6">Physical and vocal grounding techniques before approaching the text.</p>
                            <span className="text-primary border-b border-primary/30 pb-1 font-semibold text-sm hover:border-primary transition-colors">Explore Syllabus</span>
                        </div>
                    </article>
                    {/* Module 2 */}
                    <article className="bg-surface-container group relative overflow-hidden">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                            <img alt="Character study" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsTaEc2OZaa0Pwi7mCDhdjbkU7Q2l5-ScxAANRJuMOHoEa0rz27zA5vSqScTfO5jq13Km-aGAJMj5nQ3aZLA2gfEg3qFO7YRbgKzy-sHCrX85w22nyFbjBBSsD0Nws4Zrt6EVuzQ7GaN5S4tyJz7eY5BidyGZ3SaNWXKTdrZYpLaPRoj8ZRDqKgRTmkRAFqtOk5w-yLtsQ_Cfx8uWt776PYfKeaIWtP6MAOpSzcZu3KbZ-0cpHpygp3umwcF0bqnavVoxhLA"/>
                        </div>
                        <div className="p-8 bg-surface-variant/40">
                            <span className="font-body text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">Module II</span>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">In-Depth Character Study</h3>
                            <p className="font-body text-on-surface-variant mb-6">Psychological mapping and internal monologue construction.</p>
                            <span className="text-primary border-b border-primary/30 pb-1 font-semibold text-sm hover:border-primary transition-colors">Explore Syllabus</span>
                        </div>
                    </article>
                    {/* Module 3 */}
                    <article className="bg-surface-container group relative overflow-hidden">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-tertiary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                            <img alt="Screen craft" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzIwq6YtCM_ntssh0Siokmr4D7m06d-k-pPLzi7Q-CzTCWkMszsgp9yAFgPw0pgl0D1yDaSgBJNW-pcVVuOqHJowHxMeBRq9Rg00xbpqvMv3KvbuumJA9o6BWlzMc8b4SlezDxBQXgIVxHuYHh2cef3V0FKFdrS5_x-xNriPVP0vs8doS1ct5qtF7Pay7rngeQGGeR08LMzLxXWzoXG8ezSr0mHOHLDZEqFZA4yAIq9tYjE7sgefVtsE_G9AUJqLeDAuY2tA"/>
                        </div>
                        <div className="p-8">
                            <span className="font-body text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">Module III</span>
                            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Technical Screen Craft</h3>
                            <p className="font-body text-on-surface-variant mb-6">Mastering eyelines, hitting marks, and subtle on-camera presence.</p>
                            <span className="text-primary border-b border-primary/30 pb-1 font-semibold text-sm hover:border-primary transition-colors">Explore Syllabus</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
  );
};

export default Home;
