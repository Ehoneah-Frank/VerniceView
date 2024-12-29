import { Link } from "react-router-dom";
import backdrop from "../images/backdrop.jpg";
import entrance from "../images/entrance.jpg";
import venice_view_black_star from "../images/venice_view_black_star.jpg";
import twilight from "../images/twilight.jpg";
import ocean from "../images/ocean.jpg";
import serv2 from "../images/serv2.jpg";
import d95e1feb from "../images/d95e1feb.avif";
import backdrop1 from "../images/backdrop1.jpg";
import pool_side from "../images/pool_side.jpg";
import pool from "../images/pool.jpg";
import archery from "../images/archery.jpg";
import backview from "../images/backview.jpg";
import house from "../images/house.jpg";
import JACUZI from "../images/JACUZI.jpg";
import Beach_shot from "../images/Beach_shot.jpg";
import kidsplay from "../images/kidsplay.jpg";
import LOC from "../images/LOC.jpg";
import night from "../images/night.jpg";
import ROOM from "../images/ROOM.jpg";
import photoshoot from "../images/photoshoot.jpg";
import PoolBlackStar from "../images/PoolBlackStar.jpg";
import roomNinght from "../images/roomNinght.jpg";
import snack from "../images/snack.jpg";
import sunset from "../images/sunset.jpg";
import TOP from "../images/TOP.jpg";
// import volley from "../images/volley.jpg";
import wedding from "../images/wedding.jpg";
import bed from "../images/bed.jpg";


const GalleryPage = () => {
  const images = [
    { url: backdrop, title: "Pool Side Bliss" },
    { url: entrance, title: "Entrance View" },
    { url: venice_view_black_star, title: "Venice View Black Star" },
    { url: twilight, title: "Twilight Ambiance" },
    { url: ocean, title: "Sunset View" },
    { url: serv2, title: "Premium Service" },
    { url: d95e1feb, title: "Relaxation" },
    { url: backdrop1, title: "Iconic Print" },
    { url: pool_side, title: "Pool Side" },
    { url: pool, title: "Area view" },
    { url: archery, title: "Archery" },
    { url: backview, title: "Beach" },
    { url: house, title: "Outside view of the Building" },
    { url: JACUZI, title: "Jacuzzi" },
    { url: Beach_shot, title: "Beach view" },
    { url: kidsplay, title: "Activities for Kids" },
    { url: LOC, title: "Navigation" },
    { url: night, title: "Night View" },
    { url: ROOM, title: "Welcoming Room" },
    { url: photoshoot, title: "Premium Service" },
    { url: PoolBlackStar, title: "Sun Basking" },
    { url: roomNinght, title: "Comfortable room" },
    { url: snack, title: "Brunch in the Pool" },
    { url: sunset, title: "Summer Hut" },
    { url: TOP, title: "Enjoyment" },
    // { url: volley, title: "Premium Service" },
    { url: wedding, title: "Honeymoon" },
    { url: bed, title: "Comfortable Bed" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Explore Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A complete showcase of Venice View Hotel's unparalleled beauty and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm md:text-base font-medium text-center">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <button className="bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
