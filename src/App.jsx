import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Home from './Pages/Home.jsx';   // Check the casing here
import About from './Pages/About.jsx'; // Check the casing here
import Services from './Pages/Services.jsx'; // Check the casing here
import Contact from './Pages/Contact.jsx';   // Check the casing here
import GetStarted from './Pages/GetStarted.jsx'; // Check the casing here
import LearnMore from './Pages/LearnMore.jsx';   // Check the casing here
import SignUp from './Pages/Signup.jsx';   // Check the casing here
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
