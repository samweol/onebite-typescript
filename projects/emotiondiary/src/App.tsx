import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Header />
      <Input labelText="email" alert="ddd" placeholder="lll" />
      <Button>
        <>회원가입</>
      </Button>
    </div>
  );
}

export default App;
