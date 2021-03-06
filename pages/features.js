const data1 = [
  {
    icon: 'fas fa-pager',
    title: 'Landing pages',
    para1: ' Create free web pages to share your projects and ideas.',
  },
  {
    icon: 'fas fa-envelope-open-text',
    title: 'Email sign up forms',
    para2: 'collect email list subscribers on your website.',
  },
  {
    icon: 'fas fa-envelope-square',
    title: 'Email designer',
    para3: 'Write simple, beautiful email.',
  },
  {
    icon: 'fas fa-pager',
    title: 'Email automation',
    para4: 'Build a path for your subscribers & Send content automatically.',
  },
  {
    icon: 'fas fa-cog',
    title: 'Integration',
    para5: 'connect to your favorite tools.',
  },
];

const features = () => {
  return (
    <section className="section">
      <div className="container">
        <div class="columns is-vcentered">
          <div class="column is-8">
            <p class="bd-notification is-primary has-text-weight-bold">
              {' '}
              <i class="fab fa-foursquare is-icon-color "></i>eature list
            </p>
            <p>Charli Prangley for ConvertKit • Follow</p>
          </div>
          <div class="column">
            <button class="button is-light">save</button>
            <button class="button is-light">
              {' '}
              <i class="fas fa-heart"></i> Like
            </button>
          </div>
        </div>
        <div class="columns is-multiline">
          {data1.map((item) => (
            <div class="column is-4">
              <div class="card">
                <div class="card-image"></div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <i class={item.icon}></i>
                      <p class="title is-4">{item.title}</p>
                    </div>
                  </div>

                  <div class="content">
                    <p className="subtitle is-6 has-text-black">{item.para1}</p>

                    <p className="subtitle is-6 has-text-black">{item.para2}</p>

                    <p className="subtitle is-6 has-text-black">
                      {item.para3}

                      <p className="subtitle is-6 has-text-black">
                        {item.para4}
                      </p>

                      <p className="subtitle is-6 has-text-black">
                        {item.para5}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default features;
