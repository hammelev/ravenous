const categories = ['Italian', 'Chinese', 'French', 'Vietnamese'];

let startIdWith = 0;

const generateId = () => {
    return startIdWith++;
}

const getRandomElement = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}

const businessFactory = (name, city, state, zipcode) => {
    return {
        id: generateId(),
        image_url: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name,
        city,
        state,
        zipcode,
        category: getRandomElement(categories),
        rating: (Math.random()*5).toFixed(2),
        review_count: (Math.random()*1000).toFixed(0)
    };
}

const businessMock = [
    businessFactory(
        'Peter Luger Steak House',
        'Brooklyn',
        'NY',
        '11249',
    ),
    businessFactory(
        'Katz\'s Delicatessen',
        'New York',
        'NY',
        '10002',
    ),
    businessFactory(
        'Joe\'s Pizza',
        'New York',
        'NY',
        '10014',
    ),
    businessFactory(
        'The Halal Guys',
        'New York',
        'NY',
        '10019',
    ),
    businessFactory(
        'Di Fara Pizza',
        'Brooklyn',
        'NY',
        '11230',
    ),
    businessFactory(
        'Shake Shack',
        'New York',
        'NY',
        '10010'
    ),
    businessFactory(
        'Lombardi\'s',
        'New York',
        'NY',
        '10012'
    ),
    businessFactory(
        'Grimaldi\'s Pizzeria',
        'Brooklyn',
        'NY',
        '11201'
    ),
    businessFactory(
        'John\'s of Bleecker Street',
        'New York',
        'NY',
        '10014'
    ),
    businessFactory(
        'Totonno\'s Pizzeria Napolitano',
        'Brooklyn',
        'NY',
        '11224'
    ),
    businessFactory(
        'Juliana\'s Pizza',
        'Brooklyn',
        'NY',
        '11201'
    ),
    businessFactory(
        'Artichoke Basille\'s Pizza',
        'New York',
        'NY',
        '10003'
    ),
    businessFactory(
        'Prince Street Pizza',
        'New York',
        'NY',
        '10012'
    ),
    businessFactory(
        'Rubirosa',
        'New York',
        'NY',
        '10012'
    ),
    businessFactory(
        'Lucali',
        'Brooklyn',
        'NY',
        '11231'
    ),
    businessFactory(
        'Paulie Gee\'s',
        'Brooklyn',
        'NY',
        '11222'
    )
];

export default businessMock;
