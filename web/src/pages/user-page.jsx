import PageLayout from "../components/layouts/page-layout";
import NavBar from "../components/ui/navbar/navbar";
import UserMovies from "../components/userMovies/user-movies";

function UserPage() {
  return (
    <>
      <NavBar />
      <PageLayout>
        <div className="d-flex gap-5">
          <div className="mt-3"></div>
          <UserMovies />
        </div>
      </PageLayout>
    </>
  );
}

export default UserPage;
