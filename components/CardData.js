const CardData = ({ icon, title, subtitle }) => {
  return (
    <div class="card">
      <div class="card-image">
        <i class={icon}></i>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <h1 class="title is-size-6 has-text-weight-bold">{title}</h1>
          </div>
        </div>

        <div class="content">{subtitle}</div>
        <a>Learn more</a>
      </div>
    </div>
  );
};
export default CardData;
