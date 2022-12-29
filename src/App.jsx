import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Layout from "./layout/Layout";
function App() {
  return (
    <div className='App'>
      <Header />
      <Wrapper>
        <Layout />
      </Wrapper>
    </div>
  );
}

export default App;
