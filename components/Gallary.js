const features = [
  {
    subtitle: 'Hello World',
    description: 'What is up?',
  },
  {
    subtitle: 'dharmveer',
    description: 'jkqhcuhvehvn',
  },
  {
    subtitle: 'cbsdjhsh',
    description: 'jkqhcuhvehvn',
  },
  {
    subtitle: 'cbsdjhsh',
    description: 'jkqhcuhvehvn',
  },
];

const Gallary = () => {
  return (
    <section className="section">
      <div className="container">
        <div class="columns is-multiline">
          {features.map((item) => (
            <div class="column is-4">
              <div class="box">
                {item.subtitle}
                <p className="subtitle  is-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallary;
