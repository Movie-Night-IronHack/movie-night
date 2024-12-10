import PageLayout from "../components/layouts/page-layout";
import NavBar from "../components/layouts/ui/navbar/navbar";

function HomePage() {
  return (
    <>
      <NavBar />
      <PageLayout>
        <h3>Hola Mundo</h3>
      </PageLayout>
    </>
  );
}
export default HomePage;
