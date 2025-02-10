function FundraiseForm() {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        goal: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Handle form submission
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                organization: '',
                goal: '',
                description: ''
            });
        } catch (error) {
            reportError(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section data-name="fundraise-form" id="fundraise" className="section">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Start Your Campaign</h2>
                <p className="section-subtitle">
                    Create your own fundraising campaign to support tech education in Africa
                </p>
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Organization Name (optional)
                            </label>
                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Fundraising Goal Amount *
                            </label>
                            <input
                                type="number"
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Description of Your Campaign *
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg h-32"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Submit Campaign
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
