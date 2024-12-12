import PageLayout from "../components/layouts/page-layout";
import RenderCards from "../components/renderCards/render-cards";
import SideBar from "../components/sideBar/side-bar";
import NavBar from "../components/ui/navbar/navbar";

function HomePage() {
  return (
    <>
      <NavBar />
      <PageLayout>
        <div className="d-flex gap-5">
          <SideBar />
          <RenderCards />
        </div>
        <h3>Hola Mundo</h3>
      </PageLayout>
    </>
  );
}
export default HomePage;
