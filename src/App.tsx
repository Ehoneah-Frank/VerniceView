import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
// import Dining from "./components/Dining";
// import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RoomsPage from "./pages/RoomsPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar will always be displayed */}
        <Navbar />

        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Rooms />
                  <Amenities />
                  {/* <Dining /> */}
                  {/* <Gallery /> */}
                  <Contact />
                </>
              }
            />

            {/* Gallery Page */}
            <Route path="/gallery" element={<GalleryPage />} />

            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* Contact Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Rooms Page */}
            <Route path="/rooms" element={<RoomsPage />} />

            {/* Booking Page */}
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </div>

        {/* Footer will always be displayed */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
