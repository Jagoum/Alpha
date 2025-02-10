function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header data-name="header" className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div data-name="logo" className="flex items-center">
                        <img src="logo.png" alt="Mountain Tech Africa" className="h-12" />
                    </div>

                    <nav data-name="desktop-nav" className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
                        <a href="#about" className="text-gray-800 hover:text-blue-600">About Us</a>
                        <a href="#fundraise" className="text-gray-800 hover:text-blue-600">Fundraise</a>
                        <a href="#programs" className="text-gray-800 hover:text-blue-600">Tech Programs</a>
                        <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact Us</a>
                    </nav>

                    <button 
                        data-name="mobile-menu-button"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>

                {isMenuOpen && (
                    <div data-name="mobile-menu" className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
                            <a href="#about" className="text-gray-800 hover:text-blue-600">About Us</a>
                            <a href="#fundraise" className="text-gray-800 hover:text-blue-600">Fundraise</a>
                            <a href="#programs" className="text-gray-800 hover:text-blue-600">Tech Programs</a>
                            <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
