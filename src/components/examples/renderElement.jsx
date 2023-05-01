function renderElement(element) {
    let html = '';
  
    try {
      switch (element.type) {
        case 'text':
          html = `<div style="${getStyleString(element.styles)}">${element.content}</div>`;
          break;
        case 'image':
          html = `<img src="${element.src}" alt="${element.alt}" style="${getStyleString(element.styles)}">`;
          break;
        case 'video':
          html = `<video src="${element.src}" style="${getStyleString(element.styles)}"></video>`;
          break;
        default:
          throw new Error(`Unknown element type: ${element.type}`);
      }
    } catch (error) {
      console.error(`Error rendering element: ${error.message}`);
    }
  
    return html;
  }
  
  function getStyleString(styles) {
    return Object.entries(styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ');
  }
  