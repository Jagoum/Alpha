function App() {
    return (
        <div data-name="app">
            <Header />
            <Hero />
            <TechPrograms />
            <FundraiseForm />
            <CompanyFunding />
            <IndividualFunding />
            <Testimonials />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


