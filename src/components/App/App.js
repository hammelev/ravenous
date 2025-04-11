// Components imported
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// Mock data
import businessMock from '../../mocks/businessMock';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <BusinessList businesses={businessMock}/>
    </div>
  );
}

export default App;
