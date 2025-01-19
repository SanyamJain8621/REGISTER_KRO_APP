// import logo from "./logo.svg";
import CompanyNames from "./Company Names";
import "./App.css";
import Blogs from "./Cards";
import Company from "./company";
import MAIN from "./main";
import TeaM from "./AboutSection";
import FOOTER from "./footer";
import TOP from "./top";
import Youtube from "./Youtube";
import Search from "./Search";
import Number from "./Numbers";
import Header from "./header";

function App() {
  return (
    <div className="App">
        <TOP />
        <Header />
        <MAIN />
        <CompanyNames />
        <TeaM />
        <Blogs />
        <Youtube />
        <Number />
        <Search />
        <Company />
        <FOOTER />
    </div>
  );
}

export default App;
