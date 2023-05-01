import Header from "../../components/header/Header.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Canvas from "../../components/canvas/Canvas.jsx";
import "./CanvasPage.css";

const CanasPage = () => {
    return (
        <>
            <Header />
            <div className="canvas-page-section">
                <Sidebar />
                <Canvas />
            </div>
        </>

    )
}

export default CanasPage