const CardData = () => {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-128x128">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <h1 class="title is-size-6 has-text-weight-bold">
              Tristique senectus et netus et.
            </h1>
          </div>
        </div>

        <div class="content">
          Purus semper eget duis at tellus at urna condimentum mattis. Non
          blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae
          semper quis. Accumsan tortor posuere ac ut consequat semper viverra
          nam.
        </div>
        <a>Learn more</a>
      </div>
    </div>
  );
};
export default CardData;
