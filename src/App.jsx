import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Masterclasses from './pages/Masterclasses';
import Bridge from './pages/Bridge';
import Registration from './pages/Registration';
import Philosophy from './pages/Philosophy';
import Community from './pages/Community';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="masterclasses" element={<Masterclasses />} />
          <Route path="bridge" element={<Bridge />} />
          <Route path="artist" element={<Registration />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="community" element={<Community />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
