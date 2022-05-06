import TopNav from './components/TopNav'
import Landing from './components/Landing'
import LearnMore from './components/LearnMore'
import Shop from './components/Shop'
import Request from './components/Request'
import Donate from './components/Donate'

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/learnmore" element={<LearnMore />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/request" element={<Request />} />
            <Route path='/donate' element={<Donate />} />
        </Routes>
    )
}

export default App