import logo from './logo.svg';
import './App.css';

// Components imported
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <BusinessList/>
    </div>
  );
}

export default App;
