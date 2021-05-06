const features = [
  {
    title: 'Hello World',
    subtitle: 'What is up?',
  },
  {
    title: 'dharmveer',
    subtitle: 'jkqhcuhvehvn',
  },
  {
    title: 'cbsdjhsh',
    subtitle: 'jkqhcuhvehvn',
  },
  {
    title: 'cbsdjhsh',
    subtitle: 'jkqhcuhvehvn',
  },
];

const Gallary = () => {
  return (
    <section className="section">
      <div className="container">
        <div class="columns is-multiline">
          {features.map((title) => (
            <div class="column is-4">
              <div class="box">
                {title.subtitle}
                <p className="title is-1">{title.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallary;
