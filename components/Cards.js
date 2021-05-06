import CardData from './CardData';

const Cards = () => {
  return (
    <div className="section is-font-color ">
      <div className="container">
        <div class="columns">
          <div class="column">
            <CardData icon="fas fa-paw is-icon "  title="Tristique senectus et netus et."
              subtitle="Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam."
            />
          </div>
          <div class="column">
            <CardData icon="fab fa-empire is-icon"  title="Tempor orci dapibus ultrices in.."
              subtitle="Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem sed risus.." />
          </div>
          <div class="column">
            <CardData icon="fab fa-apple is-icon"  title="Leo integer malesuada nunc vel risus.."
              subtitle="Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.." />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
