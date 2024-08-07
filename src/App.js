
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Main from "./components/main";
function App() {
  return (
    <div className="App">
      <div className="d-flex" id="wrapper">
        <Sidebar/>
        <div id="page-content-wrapper">
          <Header/>
          <div className="container-fluid" id="main">
            <Main/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
