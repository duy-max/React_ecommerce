
var initialState = [
    {
        id: 1,
        name: 'Iphone 13',
        img: 'https://photo2.tinhte.vn/data/attachment-files/2021/09/5640025_iphone-13-family-select-2021.jpg',
        price: 500,     //   500$
        description: 'Iphone 13 from Apple',
        inventory: 3,    //quantity = 3
        rating: 4        //1-5

    },
    {
        id: 2,
        name: 'Iphone 12',
        img: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2020/11/06/apple-iphone-12-mini-5.png',
        price: 400,     //   500$
        description: 'Iphone 12 from Apple',
        inventory: 2,    //quantity = 3
        rating: 2
    },
    {
        id: 3,
        name: 'SamSung galaxy',
        img: 'https://product.hstatic.net/1000309862/product/samsung-galaxy-s9-mbw-tim_c556dc836c994a75853d1c9d0663cd44_master.png',
        price: 700,     //   500$
        description: 'SamSung galaxy from korea',
        inventory: 2,    //quantity = 3
        rating: 5
    }
]

const products = (state = initialState, action) => {

    switch (action.type) {

        default:
            return [...state];

    }
}



export default products;