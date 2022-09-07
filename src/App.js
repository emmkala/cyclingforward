import Landing from './components/Landing'
import Resources from './components/Resources'
import Shop from './components/Shop'
import Request from './components/Request'
import Donate from './components/DonateOne'
import DonateBike from './components/DonateTwo'
import Confirmation from './components/Confirmation'

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/request" element={<Request />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donatebike" element={<DonateBike />} />
            <Route path="/confirmation/:confirmationType" element={<Confirmation />} />
        </Routes>
    )
}

export default App