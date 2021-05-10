const data1 = [
  { icon: 'fas fa-home', list: 'tdyxetygrghh' },
  { icon: 'fas fa-home', list: 'tdyxetygrghh' },
  { icon: 'fas fa-home', list: 'tdyxetygrghh' },
];

const data2 = [
  { icon: '', list: 'tdyxetygrghh' },
  { icon: '', list: 'tdyxetygrghh' },
  { icon: '', list: 'tdyxetygrghh' },
  { icon: '', list: 'tdyxetygrghh' },
];

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <h1 className="title is-4 has-text-weight-semibold">Category</h1>
            <ul>
              {data1.map((item) => (
                <li>
                  <i class={item.icon}></i> {item.list}
                </li>
              ))}
            </ul>
          </div>
          <div className="column is-6">
            <ul>
              {data2.map((item) => (
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
