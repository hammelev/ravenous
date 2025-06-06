// For local builds the base URL is not used as it is set up to be used by the proxy defined in the package.json.
// The proxy is used to get around CORS restrictions
const yelpApiBaseUrl = 'https://api.yelp.com/v3';

// The API key is inserted here as this is a demo/learning project.
// NEVER insert API keys directly in the source code!

// Insert your API key here:
let apiKey = '';

const getBusinesses = async (searchTerm, location, sortBy) => {
    const yelpBusinessEndpoint = '/businesses/search';
    const searchParams = new URLSearchParams();

    searchParams.append('term', searchTerm);
    searchParams.append('location', location);
    searchParams.append('sort_by', sortBy);

    // Uncomment these if the yelpApiBaseUrl const is used
    //const url = new URL(yelpBusinessEndpoint);
    //url.search = searchParams.toString();

    try {
        const response = await fetch(`${yelpBusinessEndpoint}?${searchParams.toString()}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        if(response.ok){
            const data = await response.json();
            console.log(data);
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


    