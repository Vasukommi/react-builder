class Element {
    constructor(type, content, styles, children = []) {
      this.type = type;
      this.content = content;
      this.styles = styles;
      this.children = children;
    }
  }
  
  const parentElement = new Element('div', '', { backgroundColor: 'white' }, [
    new Element('h1', 'Hello', { color: 'red' }),
    new Element('p', 'Lorem ipsum', { fontStyle: 'italic' }),
    new Element('img', '', { width: '100px', height: '100px' }, [])
  ]);
  
  const childElement = new Element('span', 'world', { color: 'green' });
  
  parentElement.children.push(childElement);
  