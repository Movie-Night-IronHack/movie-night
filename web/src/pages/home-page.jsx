import { useState } from "react";
import PageLayout from "../components/layouts/page-layout";
import RenderCards from "../components/listCards/list-cards";
import SideBar from "../components/sideBar/side-bar";
import NavBar from "../components/ui/navbar/navbar";
import NowPlaying from "../components/nowPlaying/now-playing";
import Trailers from "../components/trailer/trailers";


function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);


  const handleCategorySelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <>
      <NavBar />
      <PageLayout>
        <div className="d-flex gap-5">
          <SideBar />
          <div className="flex-grow-1">
            <RenderCards
              selectedGenre={selectedGenre}
              onCategorySelect={handleCategorySelect}
              nowPlayingMovies={nowPlayingMovies}
              showFavoriteButton={false} // Hide Favorite button
              showWatchButton={true}
            />
            <NowPlaying onFetchMovies={setNowPlayingMovies} />
            <Trailers movies={nowPlayingMovies} />
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default HomePage;
