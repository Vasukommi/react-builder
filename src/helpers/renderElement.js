import "../components/canvas/Canvas.css";

function renderElement({ element }, onFocusElement, isActive) {
    debugger
    let html = '';
    // style="${getStyleString(element.styles)}
    const style = {
        height: '100px',
        width: '100%',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const focusedElement = (event) => {
        onFocusElement(element)
    }

    try {
        switch (element.component.type) {
            case 'div':
                html = <div className={`active-canvas ${isActive ? " active-canvas-element" : ""}`} onClick={focusedElement}>{element.component.content}</div>;
                break;
            case 'h1':
                html = <h1>{element.component.content}</h1>;
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

export default renderElement