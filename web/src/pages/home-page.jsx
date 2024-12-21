import { useState } from "react";
import PageLayout from "../components/layouts/page-layout";
import RenderCards from "../components/listCards/list-cards";
import SideBar from "../components/sideBar/side-bar";
import NavBar from "../components/ui/navbar/navbar";

function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleCategorySelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <>
      <NavBar />
      <PageLayout>
        <div className="d-flex gap-5">
          <SideBar onCategorySelect={handleCategorySelect} />
          <RenderCards selectedGenre={selectedGenre} />
        </div>
      </PageLayout>
    </>
  );
}

export default HomePage;
