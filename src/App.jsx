import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import GenreFilter from './components/GenreFilter';
import FeaturedMovie from './components/FeaturedMovie';
import ShowtimeSelector from './components/ShowtimeSelector';
import MovieSearch from './components/MovieSearch';
import PromoBanner from './components/PromoBanner';
import './index.css';
import './css/modules/utils.css';
import './css/modules/components.css';

const App = () => {
  // Estado de navegación
  const [section, setSection] = useState("movies");

  // Definir imagen placeholder
  const placeholder = "https://via.placeholder.com/300x450/FFFFFF/000000?text=Sin+imagen";

  // Datos de las películas
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 4.5,
      genre: "Sci-Fi",
      duration: "169 min",
      image: "https://irs.www.warnerbroslatino.com/keyart-jpeg/movies/media/browser/interstellar_v_dd_ka_tt_2000x3000_300dpi_mx.jpg", // Cambia esta URL si no hay imagen
      description: "A team of explorers travel through a wormhole in space.",
      showTimes: ["2:30 PM", "5:45 PM", "9:00 PM"]
    },
    {
      id: 2,
      title: "Inception",
      rating: 4.8,
      genre: "Thriller",
      duration: "148 min",
      image: "http://i0.wp.com/i37.photobucket.com/albums/e83/cazador_de_opio/inception-poster.jpg", // Imagen vacía para probar el placeholder
      description: "A skilled thief enters people's dreams to steal secrets.",
      showTimes: ["1:00 PM", "4:15 PM", "7:30 PM", "10:45 PM"]
    },
    {
      id: 3,
      title: "The Matrix",
      rating: 4.7,
      genre: "Action",
      duration: "136 min",
      image: "https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF894,1000_QL80_.jpg", // Cambia esta URL si no hay imagen
      description: "A computer hacker learns about the true nature of reality.",
      showTimes: ["3:00 PM", "6:15 PM", "9:30 PM"]
    }
  ];

  // Estado para filtros
  const [activeGenre, setActiveGenre] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedShowtime, setSelectedShowtime] = useState(""); // Estado para el horario seleccionado

  // Generar lista de géneros
  const genres = ["All", ...new Set(movies.map(movie => movie.genre))];

  // Filtrar por género y búsqueda
  const filteredMovies = movies.filter(movie => {
    const matchesGenre = activeGenre === "All" || movie.genre === activeGenre;
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  // Ejemplo de promo
  const promo = {
    image: "https://via.placeholder.com/120x180/23B5E8/FEFEFE?text=Promo",
    title: "¡Descuento 2x1!",
    description: "Solo este fin de semana en todas las funciones.",
    code: "CINE2X1"
  };

  return (
    <>
      <Header section={section} onNav={setSection} />
      <main className="container">
        {section === "movies" && (
          <>
            <Hero />
            <GenreFilter genres={genres} activeGenre={activeGenre} onGenreChange={setActiveGenre} />
            <MovieSearch onSearch={setSearch} />
            <MovieList 
              movies={filteredMovies} 
              onSelectShowtime={setSelectedShowtime} 
              placeholder={placeholder}
              selectedShowtime={selectedShowtime} // Pasamos el estado para seleccion de horario
            />
          </>
        )}
        {section === "coming-soon" && (
          <section style={{textAlign: "center", margin: "2rem"}}>
            <h2>Próximamente...</h2>
          </section>
        )}
        {section === "promotions" && (
          <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <PromoBanner promo={promo} />
          </div>
        )}
        {section === "contact" && (
          <section style={{textAlign: "center", margin: "2rem"}}>
            <h2>Contacto</h2>
            <p>Escríbenos a contacto@sin-e-spoiler.com</p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
