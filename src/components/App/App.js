import {useState} from 'react';

// Components imported
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// Service to import fetch data from the Yelp API
import {getBusinesses} from '../../utils/yelpDataService';

// Configuration
import { SORT_SEARCH_BY_OPTION } from '../../config/sortSearchByOptions';

function App() {
  const [businesses, setBusinesses] = useState({});
  const [selectedSortOption, setSelectedSortOption] = useState('best_match');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchRestaurants = async (searchOptions) => {
    try {
      // 1. Clear data to show loading indicator
      setBusinesses({});
      if (error) setError(false);
      setLoading(true);

      // 2. Fetch primary data for the selected sort option
      const businessesToDisplay = await getBusinesses(searchOptions.searchTerm, searchOptions.location, selectedSortOption);

      if (businessesToDisplay) {
        // 3. Update state with primary data for immediate display
        setBusinesses({[selectedSortOption]: businessesToDisplay});
      } else {
        // Handle cases where primary data fetch might fail or return no results
        setBusinesses(prev => ({ ...prev, [selectedSortOption]: [] }));
        setError(true);
        return;
      }

      // 4. Fetch data for other sort options in the background (fire-and-forget)
      const sortOptionsToPreload = SORT_SEARCH_BY_OPTION.filter(sortBy => sortBy.value !== selectedSortOption);

      sortOptionsToPreload.forEach(sortByOption => {
        getBusinesses(searchOptions.searchTerm, searchOptions.location, sortByOption.value)
          .then(data => {
            if (data) {
              setBusinesses(prev => ({ ...prev, [sortByOption.value]: data }));
              console.log(`Background data for ${sortByOption.label}:`, data);
            } else {
              setError(true);
              setBusinesses(prev => ({ ...prev, [sortByOption.value]: [] }));
            }
          })
          .catch(error => {
            console.error(`Error fetching background data for ${sortByOption.label}:`, error);
            setError(true);
            setBusinesses(prev => ({ ...prev, [sortByOption.value]: [] })); // Handle error by setting empty array
          });
      });
    } catch (error) {
      console.error("Error in searchRestaurants (primary fetch or initiating background fetches):", error);
      setError(true);
      setBusinesses({}); // Clear businesses on a major error
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <SearchBar onSearchRestaurants={searchRestaurants} onUpdateSortOption={setSelectedSortOption} selectedSortOption={selectedSortOption}/>
      <BusinessList businesses={businesses} selectedSortOption={selectedSortOption} errorLoadingData={error} isLoading={loading}/>
    </div>
  );
}

export default App;
