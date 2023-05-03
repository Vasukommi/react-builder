import { useDispatch, useSelector } from "react-redux";
import { setActiveElementId } from "../../../app/slices/canvasSlice";
import renderElement from "../../../helpers/renderElement.js";
import "./sectionEditor.css"

const SectionEditors = (element) => {
    const dispatch = useDispatch()
    const activeElementId = useSelector(
        (state) => state.canvasSlice.activeElementId
    );
    const renderHtml = (element) => {
        const isActive = element.id === activeElementId;
        const html = renderElement(element, (id) => onFocusElement(element.id), isActive)
        return html
    }
    const onFocusElement = (element) => {
        dispatch(setActiveElementId(element))
    }
    return (
        <div>
            <div>
                {renderHtml(element)}
            </div>
        </div>
    )
}

export default SectionEditors