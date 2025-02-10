function Testimonial({ testimonial }) {
    return (
        <div data-name="testimonial" className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
            </div>
            <p className="text-gray-700">{testimonial.quote}</p>
        </div>
    );
}

function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Mutua",
            role: "Program Graduate",
            image: "testimonial1.jpg",
            quote: "The coding bootcamp changed my life. I now work as a software developer and mentor other young women in tech."
        },
        {
            name: "John Okonjo",
            role: "Tech Hub Member",
            image: "testimonial2.jpg",
            quote: "The innovation center provided me with the resources and network I needed to launch my startup."
        },
        {
            name: "Grace Afolabi",
            role: "Corporate Partner",
            image: "testimonial3.jpg",
            quote: "Working with Mountain Tech Africa has helped us identify and nurture outstanding tech talent."
        }
    ];

    return (
        <section data-name="testimonials" className="section bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Success Stories</h2>
                <p className="section-subtitle">
                    Hear from our community members and partners
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
