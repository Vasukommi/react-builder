import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd"

const draggableLabels = [
    {
        id: 1,
        label: 'test1'
    },
    {
        id: 2,
        label: 'test2'
    },
    {
        id: 3,
        label: 'test3'
    }
]

const DragndDrop = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: ((item) => console.log('item')),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    return (
        <div>
            <div>
                {draggableLabels.map((eachElement) => (
                    <div
                        ref={drag}
                        id={eachElement.id}
                        key={eachElement.key}
                        style={{
                            border: isDragging ? '5px solid black' : '0px',
                            height: '100px',
                            widows: '100px',
                            margin: '20px'
                        }}>
                        {eachElement.label}
                    </div>
                ))}
            </div>
            <div style={{ height: '200px', width: '200px', border: '2px solid black' }} ref={drop}>

            </div>
        </div >
    )
}

export default DragndDrop