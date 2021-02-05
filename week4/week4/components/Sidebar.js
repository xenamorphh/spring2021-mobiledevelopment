import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach(function(item) {
      console.log(item);
      //setting up the HTML string
      responseHTML =+ '<li>' + item + '</li>';
    });

    //wrapping in unordered list

    responseHTML = '<ul>' + responseHTML + '</ul>';

    return responseHTML;
  }
}

export default Sidebar;
