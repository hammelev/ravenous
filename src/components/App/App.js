// Components imported
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// Mock data
import businessMock from '../../mocks/businessMock';

function App() {
  const searchRestaurants = (searchOptions, sortBy) => {
    console.log(`Searching Yelp with ${JSON.stringify(searchOptions)} and ${sortBy}`);
  }
  return (
    <div className="App">
      <SearchBar onSearchRestaurants={searchRestaurants}/>
      <BusinessList businesses={businessMock}/>
    </div>
  );
}

export default App;
