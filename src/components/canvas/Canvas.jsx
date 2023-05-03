import { useDrop } from "react-dnd";
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { addElement, setActiveElementId } from "../../app/slices/canvasSlice.js";
import renderElement from "../../helpers/renderElement.js";
import SectionEditors from "../editors/section-editor/sectionEditor.jsx";
import "./Canvas.css";

const Canvas = () => {
    const canvasElements = useSelector(state => state.canvasSlice.canvasElements)
    const dispatch = useDispatch()
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'html',
        drop: ((item) => {
            const updatedItem = { id: uuid(), ...item }
            dispatch(addElement(updatedItem))
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    
    return (
        <div className="canvas-section" ref={drop}>
            {canvasElements.map((eachElement) => (
                <div key={eachElement.id}>
                    <SectionEditors element={eachElement} />
                </div>
            ))}
        </div>
    )
}

export default Canvas