import { useDrop } from "react-dnd";
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { addElement } from "../../app/slices/canvasSlice.js";
import renderElement from "../../helpers/renderElement.js";
import "./Canvas.css";

const Canvas = () => {
    const canvasElements = useSelector(state => state.canvasSlice.canvasElements)
    const dispatch = useDispatch()
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'html',
        drop: ((item) => {
            const updatedItem = { id: uuid(), ...item }
            debugger
            dispatch(addElement(updatedItem))
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))

    const onFocusElement = () => {
        debugger
    }

    const renderHtml = (element) => {
        const html = renderElement(element, (id) => onFocusElement(element.id))
        return html
    }
    return (
        <div className="canvas-section" ref={drop}>
            {canvasElements.map((eachElement) => (
                <div>
                    {renderHtml(eachElement)}
                </div>
            ))}
        </div>
    )
}

export default Canvas