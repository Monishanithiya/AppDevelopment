import "./App.css";
import AppFooter from "./Components/AppFooter/footer";
import AppHeader from "./Components/AppHeader/header";
import PageContent from "./Components/PageContent/pagecontent";
import SideMenu from "./Components/SideMenu/sidemenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;
