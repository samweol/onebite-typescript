import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Header />
      <Input labelText="email" alert="ddd" placeholder="lll" />
    </div>
  );
}

export default App;
