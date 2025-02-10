function Hero() {
    return (
        <section data-name="hero" className="pt-20 bg-gradient-to-r from-blue-100 to-green-100">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div data-name="hero-content" className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            MOUNTAIN TECH AFRICA
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Empowering the Next Generation of Tech Leaders!
                        </h2>
                        <p className="text-lg mb-8">
                            Support African youths in mastering technology and driving innovation across the continent.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <button 
                                data-name="fund-program-button"
                                className="btn btn-primary"
                                onClick={() => window.location.href = '#programs'}
                            >
                                Fund a Program
                            </button>
                            <button 
                                data-name="start-campaign-button"
                                className="btn btn-secondary"
                                onClick={() => window.location.href = '#fundraise'}
                            >
                                
                                Start Your Own Campaign
                                
                            </button>
                        </div>
                    </div>
                    <div data-name="hero-image" className="hidden md:block">
                        <img 
                            src="hero-image.jpg" 
                            alt="African youth working on technology" 
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
