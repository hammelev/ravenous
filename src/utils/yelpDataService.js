// Configuration
import { RUNTIME_CONFIG } from '../config/runtimeConfig';

// Mock data
import businessMock from '../mocks/businessMock';

// The API key is inserted here as this is a demo/learning project.
// NEVER insert API keys directly in the source code!

// Insert your API key here:
const apiKey = RUNTIME_CONFIG.yelpApiKey;


const getBusinesses = async (searchTerm, location, sortBy) => {
    if(RUNTIME_CONFIG.useMockData) {
        if(sortBy === 'best_match') {
            return businessMock;
        } else {
            // Sort in descending order for rating and number of reviews
            return [...businessMock].sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
        }
    }

    const yelpBusinessEndpoint = '/businesses/search';
    const searchParams = new URLSearchParams();

    searchParams.append('term', searchTerm);
    searchParams.append('location', location);
    searchParams.append('sort_by', sortBy);

    try {
        const response = await fetch(`${yelpBusinessEndpoint}?${searchParams.toString()}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        if(response.ok){
            const data = await response.json();
            return data.businesses;
        }

        // Handle HTTP errors (e.g., 400, 401, 404)
        console.error(`Yelp API request failed: ${response.status} ${response.statusText}`);
        // The function will implicitly return undefined here
    } catch (error) {
        console.log(error);
    }
}

export { getBusinesses };


    