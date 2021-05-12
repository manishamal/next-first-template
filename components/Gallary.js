const features = [
  {
    title: 'Hello World',
    subtitle:
      'What is up? Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Foo',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Third column',
    subtitle: 'With some content',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.;',
  },
  {
    title: 'Vertical tiles',
    subtitle: 'Top box',
    description:'Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.',
    description2:
    'Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.',
  },
  {
    title: 'Middle box',
    subtitle: 'With an image',
    description:
      'Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.',

    image:
      'https://i.picsum.photos/id/217/640/480.jpg?hmac=20eMiInQcht_hFyMUBRebQ6HOtAB31YKZmufpNyO_nc',
  },
  {
    title: 'Tall column',
    subtitle: 'With even more content',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.',
    description2:
      'Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.',
    description3:
      'Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.',
  },
];

const Gallary = () => {
  return (
    <section className="section is-font-color ">
      <div className="container">
        <div class="columns is-multiline">
          {features.map((item) => (
            <div class="column is-4 is-flex">
              <div class="box p-6">
                <h1 className="title is-3 has-text-black">{item.title}</h1>
                <p className="subtitle is-6 has-text-black">{item.subtitle}</p>
                <p className="subtitle is-6 has-text-black">
                  {item.description}
                </p>
                <p className="subtitle is-6 has-text-black">
                  {item.description2}
                </p>
                <p className="subtitle is-6 has-text-black">
                  {item.description3}
                </p>

                {item.image && <img src={item.image} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallary;
