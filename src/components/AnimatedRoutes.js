
import Home from './Home';

import Header from './Header';

import { Routes, Route, useLocation } from 'react-router-dom';
import Utility from './Utility';
import RoadMap from './RoadMap';
import Team from './Team';
import About from './About';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path='utility' element={<Utility />} />
                    <Route path='roadmap' element={<RoadMap />} />
                    <Route path='team' element={<Team />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
