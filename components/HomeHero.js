const HomeHero = () => {
  return (
    <section className="hero is-info is-large is-border">
      <div className="hero-head">
        <nav className="navbar ">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span className="navbar-burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Features</a>
                <a className="navbar-item">Team</a>
                <a className="navbar-item">Help</a>

                <span className="navbar-item">
                  <a className="button has-text-white is-link is-outlined">
                    <span className="">
                      <i class="fab fa-github"></i> View saurce
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
