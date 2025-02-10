function IndividualFunding() {
  return (
    <section data-name="individual-funding" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Be the Change</h2>
        <p className="section-subtitle">Support a Tech Program Today</p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-name="image" className="rounded-lg overflow-hidden">
            <a
              href="https://images.app.goo.gl/DTtikmUw9h1Jr8Sq5"
              className="block w-full"
            >
              <img
                src="individual-funding.jpg"
                alt="Support African Tech"
                className="w-full"
              />
            </a>
          </div>
          <div data-name="content" className="space-y-6">
            <p className="text-lg">
              Your contribution can help transform the lives of young Africans
              through technology education. Choose to support existing programs
              or create your own campaign to make a difference.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <button
                  data-name="fund-program-button"
                  className="btn btn-primary flex-1"
                  onClick={() => (window.location.href = "#programs")}
                >
                  Fund a Program
                </button>
                <button
                  data-name="start-campaign-button"
                  className="btn btn-secondary flex-1"
                  onClick={() => (window.location.href = "#fundraise")}
                >
                  Start Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
