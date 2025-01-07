import { useState } from "react";
import PageLayout from "../components/layouts/page-layout";
import RenderCards from "../components/listCards/list-cards";
import SideBar from "../components/sideBar/side-bar";
import NavBar from "../components/ui/navbar/navbar";
import NowPlaying from "../components/nowPlaying/now-playing";
import Trailers from "../components/trailer/trailers";
import TopRated from "../components/topRated/top-rated";
import Upcoming from "../components/upcoming/upcoming";
// import Popular from "../components/popular/popular";

function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const handleCategorySelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <>
      <NavBar />
      <PageLayout>
        <div className=" d-flex gap-5">
          <SideBar />
          <div className="flex-grow-1">
            <RenderCards
              selectedGenre={selectedGenre}
              onCategorySelect={handleCategorySelect}
              nowPlayingMovies={nowPlayingMovies}
              topRatedMovies={topRatedMovies}
              upcomingMovies={upcomingMovies}
              showFavoriteButton={false} // Hide Favorite button
              showWatchButton={true}
            />
            <hr
              style={{
                height: "10px", // Adjust thickness
                backgroundColor: "white", // Ensure color matches
              }}
            />

            <NowPlaying onFetchMovies={setNowPlayingMovies} />
            <hr
              style={{
                height: "10px", // Adjust thickness
                backgroundColor: "white", // Ensure color matches
              }}
            />
            <Trailers movies={nowPlayingMovies} />
            <hr
              style={{
                height: "10px", // Adjust thickness
                backgroundColor: "white", // Ensure color matches
              }}
            />
            <TopRated onFetchMovies={setTopRatedMovies} />
            <hr
              style={{
                height: "10px", // Adjust thickness
                backgroundColor: "white", // Ensure color matches
              }}
            />
            <Upcoming onFetchMovies={setUpcomingMovies} />
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default HomePage;
