import CardData from './CardData';

const Cards = () => {
  return (
    <div className="section">
      <div className="container">
        <div class="columns">
          <div class="column">
            <CardData />
          </div>
          <div class="column">
          <CardData />
          </div>
          <div class="column">
          <CardData />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
