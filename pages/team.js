const team1 = [
  {
    title: 'Phill Carpenter',
    subtitle: 'principle and creative director',
    paragraph1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image:
      'https://med.uth.edu/oep/wp-content/uploads/sites/70/2016/10/carpenter1.jpg',
  },

  {
    title: 'Phill Carpenter',
    subtitle: 'principle and managing partner',
    paragraph1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLPiC4L5EK8Ck9gRpuLIutvQi-zseRVcs74A&usqp=CAU',
  },

  {
    title: 'Amanda Hampel',
    subtitle: 'Digital project manager',
    paragraph1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image:
      'https://pbs.twimg.com/profile_images/503322138649300993/yEQKV99_.jpeg',
  },
];

const team = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="team-info">
          <h2 class="title is-2 is-font-color-pink">Redonk Marketing 2</h2>
          <p className="is-size-5">
            Redonk Marketing is a digital agency focused on creating user
            experiences that build brands, deepen customer relationships and
            grow businesses.
          </p>

          <p className="is-size-5 is-multiline">
            The Texas-based agency opted for a simple and friendly meet the team
            page titled “who we are”. Firstly, we see some paragraphs on
            Redonk’s culture agency. They tell their business approach before
            showcasing the people.
          </p>

          <div class="columns is-multiline section">
            {team1.map((item) => (
              <div class="column is-4 ">
                <div class="card">
                  <div className="section">
                    <div class="card-image">
                      <figure class="image is-5by4">
                        {item.image && <img src={item.image} />}
                      </figure>
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class=""></div>
                      <div class="media-content">
                        <p class="title is-5 is-font-color-green">
                          {item.title}
                        </p>
                        <p className="subtitle is-6 has-text-black">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <p className="subtitle is-6 has-text-black">
                        {item.paragraph1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default team;
