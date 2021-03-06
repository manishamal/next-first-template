import Link from 'next/link';

const HomeHero = () => {
  return (
    <section className="hero is-info is-medium is-border">
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
                <Link href="/">
                  <a className="navbar-item">Home</a>
                </Link>
                <Link href="/examples">
                  <a className="navbar-item">Examples</a>
                </Link>
                <Link href="/features">
                  <a className="navbar-item">Features</a>
                </Link>
                <Link href="/team">
                  <a className="navbar-item">Team</a>
                </Link>
                <Link href="/help">
                <a className="navbar-item">Help</a>
                </Link>

                <span className="navbar-item">
                  <a className="button has-text-white is-link is-outlined">
                    <span>
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
          <h1 className="is-size-3 has-text-weight-semibold">
            The new standard in insert industry here
          </h1>

          <div class="column is-three-fifths is-offset-one-fifth">
            <p class=" is-primary is-size-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeHero;
