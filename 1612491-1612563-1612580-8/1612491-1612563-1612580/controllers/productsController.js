exports.index2 = function (req,res,next) {
    res.render('products/index2',
    {
        TVProduct:[{
            name: 'Sony 80 cm (32 inches)',
            image: '/images/m4.jpg',
            sales: '$320.00 ',
            price:'$340.00',

            }, {
            name: 'Loa Artis',
            image: '/images/m5.jpg',
            sales: '$349.00 ',
            price:'$399.00',

            }, {
            name: 'Loa Philips',
            image: '/images/m6.jpg',
            sales: '$249.00 ',
            price:'$300.00',

            }],
        Houseware:[{
            name: 'Whirlpool 245',
            image: '/images/m7.jpg',
            sales: '$230.00 ',
            price:'$280.00',
            uri: '/single'
            }, {
            name: 'Máy Giặt BPL',
            image: '/images/m8.jpg',
            sales: '$180.00 ',
            price:'$200.00',
            uri: '/single'
            }, {
            name: 'Microwave Oven',
            image: '/images/m9.jpg',
            sales: '$199.00 ',
            price:'$299.00',
            uri: '/single'
            }],
        Houseware2:[{
            name: 'Boat Rockerz Headset',
            image: '/images/mm1.jpg',
            sales: '$320.00',
            price: '$350.00',
            uri: '/single'
            }, {
            name: 'Boom Blast Speaker',
            image: '/images/mm2.jpg',
            sales: '$180.00',
            price: '$200.00',
            uri: '/single'
            }, {
            name: 'Nikon Camera',
            image: '/images/mm3.jpg',
            sales: '$250.00',
            price: '$350.00',
            uri: '/single'
        }],
        title: 'Đồ gia dụng'
    });
};

exports.index1 = function (req,res, next) {
    res.render('products/index1',
    {
        PhoneProduct: [{
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price:'$280.00',
            uri:'/single'
        }, {
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price:'$250.00',
            uri:'/singlephone2',

        }, {
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            uri:'/single'
        }],
        PhoneProduct2: [{
            image: '/images/mk1.jpg',
            name: 'Infinix Hot S3',
            sales: '$300.00',
            price:'$320.00',
            uri:'/single'
            }, {
            image: '/images/mk2.jpg',
            name: 'Moto X4 (6 GB)',
            sales: '$233.00',
            price:'$240.00',
            uri:'/single'
            }, {
            image: '/images/mk3.jpg',
            name: 'iVooMi i Series',
            sales: '$249.00',
            price:'$260.00',
            uri:'/single'
        }],
        PhoneProduct3: [{
            image: '/images/mk5.jpg',
            name: 'Acer Laptop',
            sales: '$240.00',
            price:'$260.00',
            uri:'/single'
            }, {
            image: '/images/mk6.jpg',
            name: 'Lenovo',
            sales: '$300.00',
            price:'$320.00',
            uri:'/single'
            }, {
            image: '/images/mk7.jpg',
            name: 'Intex Power Bank',
            sales: '$100.00',
            price:'$200.00',
            uri:'/single'
        }],
        title: 'Đồ điện tử'
    });
};
