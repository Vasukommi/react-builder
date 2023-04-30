import Elements from "./elements/Elements";
import "./Sidebar.css";

const elementsArray = [
    {
        id: 1,
        type: 'html',
        label: "div"
    },
    {
        id: 2,
        type: 'html',
        label: "h1"
    }
]

const Sidebar = () => {
    return (
        <div>
            {elementsArray.map((eachElement) => (
                <Elements key={eachElement.id} eachElement={eachElement} />
            ))}
        </div>
    )
}

export default Sidebar