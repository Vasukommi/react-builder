import { useDrag } from "react-dnd";
import "./Elements.css";

const Elements = ({ eachElement }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'html',
        item: eachElement,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    return (
        <div className="html-elemets" ref={drag} id={eachElement.id}>
            {eachElement.component.type}
        </div>
    )
}

export default Elements;