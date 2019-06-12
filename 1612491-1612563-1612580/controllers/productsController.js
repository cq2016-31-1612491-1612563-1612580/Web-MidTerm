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
  res.render('products/powerbank',
  {
      Power1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 7.500mAh eSaver LA Y323S',
          sales: '240.000đ',
          price:'400.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh eSaver LA Y325S',
          sales: '325.000đ',
          price:'500.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh eSaver LA A35',
          sales: '325.000đ',
          price: '500.000đ',
          uri:'/single'
      }],
      Power2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 15.000mAh XMobile LA Y615N',
          sales: '552.000đ',
          price:'850.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 7.500mAh eSaver Safari 3S',
          sales: '240.000đ',
          price:'400.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh Polymer',
          sales: '422.000đ',
          price: '650.000đ',
          uri:'/single'
      }],
      Power3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh XMobile gram',
          sales: '325.000đ',
          price:'500.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
          name: 'Pin sạc dự phòng 7.500mAh eSaver LA A33',
          sales: '260.000đ',
          price:'400.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
          name: 'Pin sạc dự phòng Polymer 10.000mAh eValu',
          sales: '422.000đ',
          price: '650.000đ',
          uri:'/single'
      }],
      title: 'Sạc dự phòng'});
};

exports.tablets = function(req, res, next){
  res.render('products/tablets',
  {
      Tablet1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          name: 'iPad Wifi 32GB (2018)',
          sales: '7.990.000đ',
          price:'8.990.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          name: 'iPad Wifi 128GB (2018)',
          sales: '10.490.000đ',
          price:'11.490.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
          name: 'Samsung Galaxy Tab A 10.1 (2019)',
          sales: '7.490.000đ',
          price: '',
          uri:'/single'
      }],
      Tablet2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
          name: 'iPad mini 7.9inch Wifi 64GB (2019)',
          sales: '10.990.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
          name: 'iPad Pro 11inch 64GB (2018)',
          sales: '21.490.000đ',
          price:'21.990.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
          name: 'iPad Wifi Cellular 128GB (2018)',
          sales: '13.490.000đ',
          price: '14.490.000đ',
          uri:'/single'
      }],
      Tablet3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
          name: 'Samsung Galaxy Tab A8 Plus',
          sales: '6.990.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
          name: 'iPad Wifi Cellular 32GB (2018)',
          sales: '10.990.000đ',
          price:'11.990.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
          name: 'Lenovo Tab E10',
          sales: '3.590.000đ',
          price: '3.990.000đ',
          uri:'/single'
      }],
      title: 'Tablets'});
};

exports.watch = function(req, res, next){
  res.render('products/watch',
  {
      Watch1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
          name: 'Apple Watch Series 4 40mm viền nhôm màu hồng',
          sales: '11.990.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
          name: 'Samsung Gear S3 Frontier',
          sales: '4.990.000đ',
          price:'6.490.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
          name: 'Samsung Galaxy Watch Active',
          sales: '5.090.000đ',
          price: '5.490.000đ',
          uri:'/single'
      }],
      Watch2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          name: 'Apple Watch Series 3 GPS 42mm viền nhôm đen',
          sales: '40.000đ',
          price:'50.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
          name: 'Samsung Galaxy Watch 46mm',
          sales: '8.990.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
          name: 'Huawei Watch GT xanh lá cây',
          sales: '4.990.000đ',
          price: '',
          uri:'/single'
      }],
      Watch3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          name: 'Apple Watch Series 4 GPS 44mm viền nhôm đen',
          sales: '12.990.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
          name: 'Apple Watch Series 4 GPS 44mm viền nhôm hồng',
          sales: '12.990.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
          name: 'Samsung Galaxy Watch 42mm',
          sales: '5.490.000đ',
          price: '6.990.000đ',
          uri:'/single'
      }],
      title: 'Thiết bị đeo tay'});
};

exports.laptops = function(req, res, next){
  res.render('products/laptops',
  {
      Laptop1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
          name: 'HP 15 da0048TU N5000',
          sales: '7.390.000đ',
          price:'7.690.000đ',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
          name: 'Apple Macbook Air MQD32SA',
          sales: '22.490.000đ',
          price:'23.990.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
          name: 'Dell Inspiron 3576',
          sales: '14.390.000đ',
          price: '',
          uri:'/single'
      }],
      Laptop2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
          name: 'Asus A411UA',
          sales: '11.290.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
          name: 'Acer Aspire E5',
          sales: '9.490.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
          name: 'Dell Inspiron 3576',
          sales: '12.290.000đ',
          price: '',
          uri:'/single'
      }],
      Laptop3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
          name: 'Lenovo ideapad 330S',
          sales: '12.990.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
          name: 'HP 15 da0054TU',
          sales: '10.990.000đ',
          price:'50.000đ',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
          name: 'HP 15 da1023TU',
          sales: '14.890.000đ',
          price: '',
          uri:'/single'
      }],
      title: 'Laptops'});
};

exports.hdd = function(req, res, next){
  res.render('products/hdd',
  {
      Hdd1: [{
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
          name: 'HDD Western Digital Blue 1TB WD10EZEX',
          sales: '1.090.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
          name: 'HDD Western Digital Blue 1TB WD10EZRZ',
          sales: '1.090.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
          name: 'HDD Western Digital Black 1TB WD1003FZEX',
          sales: '1.990.000đ',
          price: '',
          uri:'/single'
      }],
      Hdd2: [{
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
          name: 'HDD Western Digital Black 4TB WD4005FZBX',
          sales: '5.200.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
          name: 'HDD Western Digital 4TB WD4002FYYZ',
          sales: '6.950.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
          name: 'HDD Western Digital Red 8TB WD80EFAX',
          sales: '6.490.000đ',
          price: '',
          uri:'/single'
      }],
      Hdd3: [{
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
          name: 'HDD Western Digital Gold 8TB WD8003FRYZ',
          sales: '11.500.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
          name: 'HDD Seagate 2TB ST2000DM008',
          sales: '1.750.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
          name: 'HDD Seagate Surveilance 6TB ST6000DM003',
          sales: '4.950.000đ',
          price: '',
          uri:'/single'
      }],
      title: 'Ổ cứng'});
};

exports.printer = function(req, res, next){
  res.render('products/printer',
  {
      Printer1: [{
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
          name: 'Máy in HP Laser Jet Pro M15a',
          sales: '1.990.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
          name: 'Máy in HP Laser Jet Pro M15w',
          sales: '2.490.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
          name: 'Máy in laser Brother HL L2321',
          sales: '2.690.000đ',
          price: '',
          uri:'/single'
      }],
      Printer2: [{
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
          name: 'Máy in HP Laser Jet Pro MFA M28A',
          sales: '3.290.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
          name: 'Máy in laser Brother HL L2361DN',
          sales: '3.290.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
          name: 'Máy in laser Brother HL L2366DW',
          sales: '3.290.000đ',
          price: '',
          uri:'/single'
      }],
      Printer3: [{
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
          name: 'Máy in HP Laser Jet Pro MFP M28W',
          sales: '3.690.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
          name: 'Máy in đa chức năng Brother DCP L2520D',
          sales: '4.390.000đ',
          price:'',
          uri:'/single',

      }],
      title: 'Máy in'});
};

exports.laptopaccessories = function(req, res, next){
  res.render('products/laptopaccessories',
  {
      LA1: [{
          image: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
          name: 'Balo The Northface Surge 15.6inch',
          sales: '850.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
          name: 'Ốp vỏ Macbook Air 13.3inch',
          sales: '149.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
          name: 'Cáp chuyển Apple Thunderbolt to LAN',
          sales: '999.000đ',
          price: '',
          uri:'/single'
      }],
      LA2: [{
          image: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
          name: 'Chuột không dây Microsoft Surface Arc Mouse',
          sales: '2.590.000đ',
          price:'',
          uri:'/single'
      }, {
          image: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
          name: 'Chuột không dây Microsoft Surface Wireless',
          sales: '1.990.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
          name: 'Cặp Tucano Minilux',
          sales: '760.000đ',
          price: '',
          uri:'/single'
      }],
      LA3: [{
          image: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
          name: 'Cáp chuyển đổi Apple USB to Lightning',
          sales: '489.000đ',
          price:'599.000đ',
          uri:'/single'
      }, {
          image: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
          name: 'Cáp chuyển Apple USB-C sang AV',
          sales: '2.290.000đ',
          price:'',
          uri:'/single',

      }, {
          image: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
          name: 'Túi Tucano Workout 13inch',
          sales: '1.390.000đ',
          price: '',
          uri:'/single'
      }],
      title: 'Phụ kiện laptop'});
};
