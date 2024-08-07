import "./App.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import AddTranscations from "./components/AddTranscations";
import BankList from "./components/BankList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="Search">
        <SearchBar />
      </div>

      <div className="InputContainer">
        <UserInput />
      </div>
      <div>
        <AddTranscations />
      </div>
      <div>
        <BankList />
      </div>
    </div>
  );
}

export default App;
