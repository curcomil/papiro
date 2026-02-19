import { Outlet} from "react-router-dom";

function App_colecciones() {
    return (
        <div className="app_container">
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default App_colecciones