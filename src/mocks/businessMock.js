const businessFactory = (image, name, city, state, zipcode, category, rating, reviewCount) => {
    return {
        image,
        name,
        city,
        state,
        zipcode,
        category,
        rating,
        reviewCount
    };
}

const businessMock = [
    businessFactory(
        'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        'Tony\'s pizza',
        'Almont',
        'Michigan',
        '48003',
        'Italian',
        3.5,
        7584
    ),
    businessFactory(
        'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        'Domino',
        'Almont',
        'Michigan',
        '48003',
        'Italian',
        3.3,
        5874
    )
];

export default businessMock;