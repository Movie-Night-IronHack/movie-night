import PageLayout from "../components/layouts/page-layout";
import RenderCards from "../components/listCards/list-cards";
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

      </PageLayout>
    </>
  );
}
export default HomePage;
