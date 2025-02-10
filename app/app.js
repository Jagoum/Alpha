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

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechPrograms from "./components/TechPrograms";
import Testimonials from "./components/Testimonials";
import CompanyFunding from "./components/CompanyFunding";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />           {/* Navigation bar */}
      <Hero />             {/* Hero section */}
      <TechPrograms />     {/* Programs section */}
      <CompanyFunding />   {/* Funding section */}
      <Testimonials />     {/* Testimonials section */}
      <Footer />           {/* Footer */}
    </div>
  );
}

export default App;
