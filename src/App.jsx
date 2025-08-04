import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Society from './pages/Society';
import Conferences from './pages/Conferences';
import NationalGroups from './pages/NationalGroups';
import Information from './pages/Information';
import Products from './pages/Products';
import Contact from './pages/Contact';
import CorporateMembers from './pages/CorporateMembers';
import Awards from './pages/Awards';

function App() {
  return (
    <Router>
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/society" element={<Society />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/national-groups" element={<NationalGroups />} />
            <Route path="/information" element={<Information />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/corporate-members" element={<CorporateMembers />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
