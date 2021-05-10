const data1 = [
  { icon: 'fas fa-cube', list: 'Lorem ipsum dolor sit amet' },
  { icon: 'fas fa-cube', list: 'Vestibulum errato isse' },
  { icon: 'fas fa-cube', list: 'Lorem ipsum dolor sit amet' },
  { icon: 'fas fa-cube', list: 'Aisia caisia' },
  { icon: 'fas fa-cube', list: 'Murphys law' },
  { icon: 'fas fa-cube', list: 'Flimsy Lavenrock' },
  { icon: 'fas fa-cube', list: 'Maven Mousie Lavender' },
];

const data2 = [
  { icon: 'fas fa-cube', list: 'Labore et dolore magna aliqua' },
  { icon: 'fas fa-cube', list: 'Kanban airis sum eschelor' },
  { icon: 'fas fa-cube', list: 'Modular modern free' },
  { icon: 'fas fa-cube', list: 'The king of clubs' },
  { icon: 'fas fa-cube', list: 'The Discovery Dissipation' },
  { icon: 'fas fa-cube', list: 'Course Correction' },
  { icon: 'fas fa-cube', list: 'Better Angels' },
];
const data3 = [
  { icon: 'fas fa-cube', list: 'Objects in space' },
  { icon: 'fas fa-cube', list: 'Playing cards with coyote' },
  { icon: 'fas fa-cube', list: 'Goodbye Yellow Brick Road' },
  { icon: 'fas fa-cube', list: 'The Garden of Forking Paths' },
  { icon: 'fas fa-cube', list: 'Future Shock' },
];

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h1 className="title is-4 has-text-weight-semibold ">Category</h1>
            <ul>
              {data1.map((item) => (
                <li>
                  <i class={item.icon}></i> {item.list}
                </li>
              ))}
            </ul>
          </div>

          <div className="column is-4">
          <h1 className="title is-4 has-text-weight-semibold has-text-black">Category</h1>
            <ul>
              {data2.map((item) => (
                <li>
                  <i class={item.icon}></i> {item.list}
                </li>
              ))}
            </ul>
          </div>

          <div className="column is-4">
          <h1 className="title is-4 has-text-weight-semibold has-text-black">Category</h1>
            <ul>
              {data3.map((item) => (
                <li>
                  <i class={item.icon}></i> {item.list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
