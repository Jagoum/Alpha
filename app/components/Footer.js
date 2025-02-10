function Footer() {
    return (
        <footer data-name="footer" className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div data-name="about" className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400">
                            Mountain Tech Africa empowers African youth through technology education 
                            and innovation support.
                        </p>
                    </div>
                    <div data-name="quick-links">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#programs" className="text-gray-400 hover:text-white">Programs</a></li>
                            <li><a href="#fundraise" className="text-gray-400 hover:text-white">Fundraise</a></li>
                        </ul>
                    </div>
                    <div data-name="legal">
                        <h3 className="text-xl font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div data-name="newsletter">
                        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-3 py-2 bg-gray-800 rounded-lg text-white"
                            />
                            <button type="submit" className="btn btn-primary w-full">
                                Subscribe
                            </button>
                        </form>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Mountain Tech Africa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
