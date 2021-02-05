import Sidebar from './components/Sidebar.js';

const s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]
});

//using console.log to show HTML
console.log(a.render() );

class Sidebar {

  constructor(menu) {
    this.props = {};
    this.props.menu = menu;
  }

  render() {
    return `<h1>${this.props.menu}</h1>`;
  }
}
