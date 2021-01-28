// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (props) {
    //Super invokes parent class
    super(title, author, text);
    
  }

  render () {
    //Render to grab the title
    return `
      <Article>
        <Title>this.props.title</Title>
        ${this.props.title.render()}
        <span>${this.props.author}</span>
        <div>${this.props.text}</div>
      </Article>';
    `

    
  }

}

module.exports = Article;
