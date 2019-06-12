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

exports.dienthoai = function (req,res, next) {
    res.render('products/dienthoai',
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

exports.phukien = function(req, res, next){
  res.render('products/phukien',
  {
      Accessories1: [{
          image: '/images/cap1.jpg',
          name: 'Cáp sạc micro USB',
          sales: '40.000đ',
          price:'80.000đ',
          uri:'/single'
      }, {
          image: '/images/cap2.jpg',
          name: 'Cáp Type-C',
          sales: '55.000đ',
          price:'100.000đ',
          uri:'/single',

      }, {
          image: '/images/tainghe1.jpg',
          name: 'Tai nghe Kanen IP-218',
          sales: '90.000đ',
          price: '150.000đ',
          uri:'/single'
      }],
      Accessories2: [{
          image: '/images/cap3.jpg',
          name: 'Cáp lightning iWalk',
          sales: '175.000đ',
          price:'250.000đ',
          uri:'/single'
      }, {
          image: '/images/cap4.jpg',
          name: 'Cáp lightning eValu dài 2m',
          sales: '90.000đ',
          price:'150.000đ',
          uri:'/single',

      }, {
          image: '/images/tainghe3.jpg',
          name: 'Tai nghe Awei Q19Hi',
          sales: '105.000đ',
          price: '150.000đ',
          uri:'/single'
      }],
      Accessories3: [{
          image: '/images/thenho1.jpg',
          name: 'Thẻ nhớ MicroSD 32GB',
          sales: '210.000đ',
          price:'300.000đ',
          uri:'/single'
      }, {
          image: '/images/thenho2.jpg',
          name: 'Thẻ nhớ MicroSD 16GB',
          sales: '165.000đ',
          price:'220.000đ',
          uri:'/single',

      }, {
          image: '/images/thenho3.jpg',
          name: 'Thẻ nhớ MicroSD 8GB',
          sales: '105.000đ',
          price: '150.000đ',
          uri:'/single'
      }],
      title: 'Phụ kiện điện thoại'});
};

exports.cases = function(req, res, next){
  res.render('products/cases',
  {
      Op1: [{
          image: '/images/oplung1.jpg',
          name: 'Ốp lưng Oppo F9 nhựa dẻo',
          sales: '16.000đ',
          price:'20.000đ',
          uri:'/single'
      }, {
          image: '/images/oplung2.jpg',
          name: 'Ốp lưng iPhone 6/6s nhựa dẻo',
          sales: '16.000đ',
          price:'20.000đ',
          uri:'/single',

      }, {
          image: '/images/oplung3.jpg',
          name: 'Ốp lưng iPhone XS Max nhựa dẻo',
          sales: '16.000đ',
          price: '20.000đ',
          uri:'/single'
      }],
      Op2: [{
          image: '/images/oplung4.jpg',
          name: 'Ốp lưng iPhone 6/6s nhựa cứng',
          sales: '16.000đ',
          price:'20.000đ',
          uri:'/single'
      }, {
          image: '/images/oplung5.jpg',
          name: 'Ốp lưng Galaxy S9 nhựa dẻo',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: '/images/oplung6.jpg',
          name: 'Ốp lưng iPad 9.7inch nắp gập',
          sales: '125.000đ',
          price: '250.000đ',
          uri:'/single'
      }],
      Op3: [{
          image: '/images/oplung7.jpg',
          name: 'Ốp lưng Tab A6 7inch nắp gập',
          sales: '125.000đ',
          price:'250.000đ',
          uri:'/single'
      }, {
          image: '/images/oplung8.jpg',
          name: 'Ốp lưng Tab A6 7inch nắp gập nhiều màu',
          sales: '140.000đ',
          price:'280.000đ',
          uri:'/single',

      }, {
          image: '/images/oplung9.jpg',
          name: 'Ốp lưng iPad 9.7inch màu GOLD',
          sales: '150.000đ',
          price: '300.000đ',
          uri:'/single'
      }],
      title: 'Ốp lưng'});
};

exports.screenprotector = function(req, res, next){
  res.render('products/screenprotector',
  {
      Screen1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán iPhone 7Plus/8Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          name: 'Miếng dán màn hình iPhone XS Max',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          name: 'Miếng dán mặt lưng 3M cho điện thoại 5inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Oppo F11',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Galaxy S8 Plus/ S9 Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          name: 'Miếng dán film điện thoại 6inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình iPhone 6',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          name: 'Miến dán màn hình Galaxy Note 9',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          name: 'Miếng dán màn hình Nokia 61 Plus',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      title: 'Miếng dán màn hình'});
};

exports.powerbank = function(req, res, next){
  res.render('products/screenprotector',
  {
      Screen1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán iPhone 7Plus/8Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          name: 'Miếng dán màn hình iPhone XS Max',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          name: 'Miếng dán mặt lưng 3M cho điện thoại 5inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Oppo F11',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Galaxy S8 Plus/ S9 Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          name: 'Miếng dán film điện thoại 6inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình iPhone 6',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          name: 'Miến dán màn hình Galaxy Note 9',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          name: 'Miếng dán màn hình Nokia 61 Plus',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      title: 'Miếng dán màn hình'});
};

exports.tablets = function(req, res, next){
  res.render('products/screenprotector',
  {
      Screen1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán iPhone 7Plus/8Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          name: 'Miếng dán màn hình iPhone XS Max',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          name: 'Miếng dán mặt lưng 3M cho điện thoại 5inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Oppo F11',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Galaxy S8 Plus/ S9 Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          name: 'Miếng dán film điện thoại 6inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình iPhone 6',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          name: 'Miến dán màn hình Galaxy Note 9',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          name: 'Miếng dán màn hình Nokia 61 Plus',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      title: 'Miếng dán màn hình'});
};

exports.watch = function(req, res, next){
  res.render('products/screenprotector',
  {
      Screen1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán iPhone 7Plus/8Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          name: 'Miếng dán màn hình iPhone XS Max',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          name: 'Miếng dán mặt lưng 3M cho điện thoại 5inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Oppo F11',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Galaxy S8 Plus/ S9 Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          name: 'Miếng dán film điện thoại 6inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình iPhone 6',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          name: 'Miến dán màn hình Galaxy Note 9',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          name: 'Miếng dán màn hình Nokia 61 Plus',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      title: 'Miếng dán màn hình'});
};

exports.smarthome = function(req, res, next){
  res.render('products/screenprotector',
  {
      Screen1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán iPhone 7Plus/8Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          name: 'Miếng dán màn hình iPhone XS Max',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          name: 'Miếng dán mặt lưng 3M cho điện thoại 5inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Oppo F11',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Galaxy S8 Plus/ S9 Plus',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          name: 'Miếng dán film điện thoại 6inch',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      Screen3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình iPhone 6',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          name: 'Miến dán màn hình Galaxy Note 9',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          name: 'Miếng dán màn hình Nokia 61 Plus',
          sales: '40.000đ',
          price: '50.000đ',
          uri:'/single'
      }],
      title: 'Miếng dán màn hình'});
};
