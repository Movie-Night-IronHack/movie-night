import { useState } from "react";
import PageLayout from "../components/layouts/page-layout";
import ListCards from "../components/listCards/list-cards";
import SideBar from "../components/sidebar/side-bar";
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
    <div id="list-cards">
      <NavBar />
      <SideBar />
      <PageLayout>
        <div>
                    
          <div style={{ marginLeft: "20%", marginTop:"8vh", marginRight:"26%"}}>
         
            <ListCards
              selectedGenre={selectedGenre}
              onCategorySelect={handleCategorySelect}
              nowPlayingMovies={nowPlayingMovies}
              topRatedMovies={topRatedMovies}
              upcomingMovies={upcomingMovies}
              showFavoriteButton={false} // Hide Favorite button
              showWatchButton={true}
            />
            <hr
              id="now-playing"
              style={{
                marginBottom: "50px",
                height: "5px", // Adjust thickness
                backgroundColor: "#FFFFFF", // Ensure color matches
                opacity: "1",
                border: "none",
              }}
            />

            <NowPlaying onFetchMovies={setNowPlayingMovies} />
            <hr
              style={{
                marginBottom: "50px",
                height: "5px", // Adjust thickness
                backgroundColor: "#FFFFFF", // Ensure color matches
                opacity: "1",
                border: "none",
              }}
            />
            <Trailers movies={nowPlayingMovies} />
            <hr
              id="top-rated"
              style={{
                marginBottom: "50px",
                height: "5px", // Adjust thickness
                backgroundColor: "#FFFFFF", // Ensure color matches
                opacity: "1",
                border: "none",
              }}
            />
            <TopRated onFetchMovies={setTopRatedMovies} />
            <hr
              style={{
                marginBottom: "50px",
                height: "5px", // Adjust thickness
                backgroundColor: "#FFFFFF", // Ensure color matches
                opacity: "1",
                border: "none",
              }}
            />
            <Upcoming onFetchMovies={setUpcomingMovies} />
          </div>
        </div>
      </PageLayout>
    </div>
  );
}

export default HomePage;
