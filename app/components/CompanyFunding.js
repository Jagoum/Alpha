function CompanyFunding() {
    return (
        <section data-name="company-funding" className="section bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Corporate Partnerships</h2>
                <p className="section-subtitle">
                    Invest in Africa's Tech Future - Partner with Mountain Tech Africa
                </p>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div data-name="content" className="space-y-6">
                        <p className="text-lg">
                            Join leading companies in supporting tech education and innovation across Africa. 
                            Your partnership can make a significant impact in shaping the future of technology 
                            on the continent.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <p>Support tech education initiatives across Africa</p>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <p>Connect with emerging tech talent</p>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                <p>Contribute to sustainable development goals</p>
                            </div>
                        </div>
                        <button 
                            data-name="partner-button"
                            className="btn btn-primary"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Partner with Us
                        </button>
                    </div>
                    <div data-name="partners" className="grid grid-cols-2 gap-8">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img src="partner1.png" alt="Partner 1" className="w-full" />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img src="partner2.png" alt="Partner 2" className="w-full" />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img src="partner3.png" alt="Partner 3" className="w-full" />
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <img src="partner4.png" alt="Partner 4" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
