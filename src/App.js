import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Question></Question>
    </div>
  );
}

export default App;
