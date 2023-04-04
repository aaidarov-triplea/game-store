import { BrowserRouter, Routes, Route} from "react-router-dom"

import { HomePage } from './pages/home-page'
import { Gamepage } from "./pages/game-page"
import { OrderPage } from "./pages/order-page"
import { Header } from "./components/header"

function App() {

return (
    <BrowserRouter>
        <div className="App">
        <Header />

        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/app/:title" element={<Gamepage />}/>
            <Route path="/order" element={<OrderPage />}/>
        </Routes>
        </div>
    </BrowserRouter>
    )
}

export default App
