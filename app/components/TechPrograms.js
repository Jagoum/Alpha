function TechProgram({ program }) {
    return (
        <div data-name="tech-program" className="bg-white rounded-lg shadow-lg p-6">
            <img 
                src={program.image} 
                alt={program.name} 
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{program.name}</h3>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">
                    {program.currentFunding} / {program.goalFunding} raised
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-green-500 rounded-full h-2" 
                        style={{width: `${(program.currentFunding / program.goalFunding) * 100}%`}}
                    ></div>
                </div>
            </div>
            <button 
                data-name="fund-button"
                className="btn btn-primary w-full"
                onClick={() => window.location.href = `#fund/${program.id}`}
            >
                Fund This Program
            </button>
        </div>
    );
}

function TechPrograms() {
    const programs = [
        {
            id: 1,
            name: "Coding Bootcamp for Girls in Nairobi",
            description: "Empowering young women with coding skills to build the future of Africa",
            image: "program1.jpg",
            currentFunding: 15000,
            goalFunding: 50000,
            location: "Nairobi, Kenya"
        },
        {
            id: 2,
            name: "Tech Hub Innovation Center",
            description: "Creating a space for young entrepreneurs to collaborate and innovate",
            image: "program2.jpg",
            currentFunding: 25000,
            goalFunding: 100000,
            location: "Lagos, Nigeria"
        },
        {
            id: 3,
            name: "Rural Digital Literacy Program",
            description: "Bringing technology education to remote communities",
            image: "program3.jpg",
            currentFunding: 10000,
            goalFunding: 30000,
            location: "Various locations"
        }
    ];

    return (
        <section data-name="tech-programs" id="programs" className="section bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Our Tech Programs</h2>
                <p className="section-subtitle">
                    Support these initiatives to empower African youth through technology
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map(program => (
                        <TechProgram key={program.id} program={program} />
                    ))}
                </div>
            </div>
        </section>
    );
}
