const { dbs } = require('../dbs');
var product = require('../models/product');

exports.single = async(req,res,next) =>{
    console.log('vo page single');
    const data = await product.detailProduct(req.query.id);
    res.render('detailProducts/single', {title: 'Chi tiết sản phẩm', data});
};

exports.dienthoai =async (req,res, next) =>{
    res.render('products/dienthoai',
    {
        PhoneProduct: [{
            id: '1',
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price:'$280.00',
            image1: '/images/si1.jpg',
            image2: '/images/si2.jpg',
            image3: '/images/si3.jpg',
        }, {
            id: '2',
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price:'$250.00',
            image1: '/images/m2.jpg',
            image2: '/images/m2.jpg',
            image3: '/images/m2.jpg',
        }, {
            id: '3',
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            price:'$200.00',
            image1: '/images/m3.jpg',
            image2: '/images/m3.jpg',
            image3: '/images/m3.jpg',
        }],
        PhoneProduct2: [{
            id: '4',
            image: '/images/mk1.jpg',
            name: 'Infinix Hot S3',
            sales: '$300.00',
            price:'$320.00',
            image1: '/images/mk1.jpg',
            image2: '/images/mk1.jpg',
            image3: '/images/mk1.jpg',
        }, {
            id: '5',
            image: '/images/mk2.jpg',
            name: 'Moto X4 (6 GB)',
            sales: '$233.00',
            price:'$240.00',
            image1: '/images/mk2.jpg',
            image2: '/images/mk2.jpg',
            image3: '/images/mk2.jpg',
        }, {
                id: '6',
            image: '/images/mk3.jpg',
            name: 'iVooMi i Series',
            sales: '$249.00',
            price:'$260.00',
            image1: '/images/mk3.jpg',
            image2: '/images/mk3.jpg',
            image3: '/images/mk3.jpg',
        }],
        PhoneProduct3: [ {
            id:'7',
            image: '/images/mk5.jpg',
            name: 'Acer Laptop',
            sales: '$240.00',
            price:'$260.00',
            image1: '/images/mk5.jpg',
        }, {
            id:'8',
            image: '/images/mk6.jpg',
            name: 'Lenovo',
            sales: '$300.00',
            price:'$320.00',
            image1: '/images/mk6.jpg',
        }, {
            id:'9',
            image: '/images/mk7.jpg',
            name: 'Intex Power Bank',
            sales: '$100.00',
            price:'$200.00',
            image1: '/images/mk7.jpg',
        }],
        title: 'Đồ điện tử',
    });

    try{
        const PhoneProduct4 = [{
            id: '1',
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price:'$280.00',
            image1: '/images/si1.jpg',
            image2: '/images/si2.jpg',
            image3: '/images/si3.jpg',
        }, {
            id: '2',
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price:'$250.00',
            image1: '/images/m2.jpg',
            image2: '/images/m2.jpg',
            image3: '/images/m2.jpg',
        }, {
            id: '3',
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            price:'$200.00',
            image1: '/images/m3.jpg',
            image2: '/images/m3.jpg',
            image3: '/images/m3.jpg',
        }, {
            id: '4',
            image: '/images/mk1.jpg',
            name: 'Infinix Hot S3',
            sales: '$300.00',
            price:'$320.00',
            image1: '/images/mk1.jpg',
            image2: '/images/mk1.jpg',
            image3: '/images/mk1.jpg',
        }, {
            id: '5',
            image: '/images/mk2.jpg',
            name: 'Moto X4 (6 GB)',
            sales: '$233.00',
            price:'$240.00',
            image1: '/images/mk2.jpg',
            image2: '/images/mk2.jpg',
            image3: '/images/mk2.jpg',
        }, {
                id: '6',
            image: '/images/mk3.jpg',
            name: 'iVooMi i Series',
            sales: '$249.00',
            price:'$260.00',
            image1: '/images/mk3.jpg',
            image2: '/images/mk3.jpg',
            image3: '/images/mk3.jpg',
        }, {
            id:'7',
            image: '/images/mk5.jpg',
            name: 'Acer Laptop',
            sales: '$240.00',
            price:'$260.00',
            image1: '/images/mk5.jpg',
        }, {
            id:'8',
            image: '/images/mk6.jpg',
            name: 'Lenovo',
            sales: '$300.00',
            price:'$320.00',
            image1: '/images/mk6.jpg',
        }, {
            id:'9',
            image: '/images/mk7.jpg',
            name: 'Intex Power Bank',
            sales: '$100.00',
            price:'$200.00',
            image1: '/images/mk7.jpg',
        }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
    
};

exports.phukien = function(req, res, next){
  res.render('products/phukien',
  {
      Accessories1: [{
          id:'11',
          image: '/images/cap1.jpg',
          name: 'Cáp sạc micro USB',
          sales: '40.000đ',
          price:'80.000đ',
          image1: '/images/cap1.jpg',
          image2: '/images/cap1.jpg',
          image3: '/images/cap1.jpg',
      }, {
        id:'12',
          image: '/images/cap2.jpg',
          name: 'Cáp Type-C',
          sales: '55.000đ',
          price:'100.000đ',
          image1: '/images/cap2.jpg',
          image2: '/images/cap2.jpg',
          image3: '/images/cap2.jpg',
      }, {
        id:'13',
          image: '/images/tainghe1.jpg',
          name: 'Tai nghe Kanen IP-218',
          sales: '90.000đ',
          price: '150.000đ',
          image1: '/images/tainghe1.jpg',
          image2: '/images/tainghe1.jpg',
          image3: '/images/tainghe1.jpg',
      }],
      Accessories2: [{
        id:'14',
          image: '/images/cap3.jpg',
          name: 'Cáp lightning iWalk',
          sales: '175.000đ',
          price:'250.000đ',
          image1: '/images/cap3.jpg',
          image2: '/images/cap3.jpg',
          image3: '/images/cap3.jpg',
      }, {
        id:'15',
          image: '/images/cap4.jpg',
          name: 'Cáp lightning eValu dài 2m',
          sales: '90.000đ',
          price:'150.000đ',
          image1: '/images/cap4.jpg',
          image2: '/images/cap4.jpg',
          image3: '/images/cap4.jpg',
      }, {
        id:'16',
          image: '/images/tainghe3.jpg',
          name: 'Tai nghe Awei Q19Hi',
          sales: '105.000đ',
          price: '150.000đ',
          image1: '/images/tainghe3.jpg',
          image2: '/images/tainghe3.jpg',
          image3: '/images/tainghe3.jpg',
      }],
      
      Accessories3: [{
        id:'17',
          image: '/images/thenho1.jpg',
          name: 'Thẻ nhớ MicroSD 32GB',
          sales: '210.000đ',
          price:'300.000đ',
          image1: '/images/thenho1.jpg',
          image2: '/images/thenho1.jpg',
          image3: '/images/thenho1.jpg',
      }, {
        id:'18',
          image: '/images/thenho2.jpg',
          name: 'Thẻ nhớ MicroSD 16GB',
          sales: '165.000đ',
          price:'220.000đ',
          image1: '/images/thenho2.jpg',
          image2: '/images/thenho2.jpg',
          image3: '/images/thenho2.jpg',
      }, {
        id:'19',
          image: '/images/thenho3.jpg',
          name: 'Thẻ nhớ MicroSD 8GB',
          sales: '105.000đ',
          price: '150.000đ',
          image1: '/images/thenho3.jpg',
          image2: '/images/thenho3.jpg',
          image3: '/images/thenho3.jpg',
      }],
      title: 'Phụ kiện điện thoại'});

      try{
        const PhoneProduct4 = [{
            id:'11',
            image: '/images/cap1.jpg',
            name: 'Cáp sạc micro USB',
            sales: '40.000đ',
            price:'80.000đ',
            image1: '/images/cap1.jpg',
            image2: '/images/cap1.jpg',
            image3: '/images/cap1.jpg',
        }, {
          id:'12',
            image: '/images/cap2.jpg',
            name: 'Cáp Type-C',
            sales: '55.000đ',
            price:'100.000đ',
            image1: '/images/cap2.jpg',
            image2: '/images/cap2.jpg',
            image3: '/images/cap2.jpg',
        }, {
            id:'13',
              image: '/images/tainghe1.jpg',
              name: 'Tai nghe Kanen IP-218',
              sales: '90.000đ',
              price: '150.000đ',
              image1: '/images/tainghe1.jpg',
              image2: '/images/tainghe1.jpg',
              image3: '/images/tainghe1.jpg',
        }, {
            id:'14',
              image: '/images/cap3.jpg',
              name: 'Cáp lightning iWalk',
              sales: '175.000đ',
              price:'250.000đ',
              image1: '/images/cap3.jpg',
              image2: '/images/cap3.jpg',
              image3: '/images/cap3.jpg',
        }, {
            id:'15',
              image: '/images/cap4.jpg',
              name: 'Cáp lightning eValu dài 2m',
              sales: '90.000đ',
              price:'150.000đ',
              image1: '/images/cap4.jpg',
              image2: '/images/cap4.jpg',
              image3: '/images/cap4.jpg',
          }, {
            id:'16',
              image: '/images/tainghe3.jpg',
              name: 'Tai nghe Awei Q19Hi',
              sales: '105.000đ',
              price: '150.000đ',
              image1: '/images/tainghe3.jpg',
              image2: '/images/tainghe3.jpg',
              image3: '/images/tainghe3.jpg',
          }, {
            id:'17',
              image: '/images/thenho1.jpg',
              name: 'Thẻ nhớ MicroSD 32GB',
              sales: '210.000đ',
              price:'300.000đ',
              image1: '/images/thenho1.jpg',
              image2: '/images/thenho1.jpg',
              image3: '/images/thenho1.jpg',
          }, {
            id:'18',
              image: '/images/thenho2.jpg',
              name: 'Thẻ nhớ MicroSD 16GB',
              sales: '165.000đ',
              price:'220.000đ',
              image1: '/images/thenho2.jpg',
              image2: '/images/thenho2.jpg',
              image3: '/images/thenho2.jpg',
          }, {
            id:'19',
              image: '/images/thenho3.jpg',
              name: 'Thẻ nhớ MicroSD 8GB',
              sales: '105.000đ',
              price: '150.000đ',
              image1: '/images/thenho3.jpg',
              image2: '/images/thenho3.jpg',
              image3: '/images/thenho3.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }

};

exports.cases = function(req, res, next){
  res.render('products/cases',
  {
      Op1: [{
        id:'21',
          image: '/images/oplung1.jpg',
          name: 'Ốp lưng Oppo F9 nhựa dẻo',
          sales: '16.000đ',
          price:'20.000đ',
          image1: '/images/oplung1.jpg',
          image2: '/images/oplung1.jpg',
          image3: '/images/oplung1.jpg',
      }, {
        id:'22',
          image: '/images/oplung2.jpg',
          name: 'Ốp lưng iPhone 6/6s nhựa dẻo',
          sales: '16.000đ',
          price:'20.000đ',
          image1: '/images/oplung2.jpg',
          image2: '/images/oplung2.jpg',
          image3: '/images/oplung2.jpg',

      }, {
        id:'23',
          image: '/images/oplung3.jpg',
          name: 'Ốp lưng iPhone XS Max nhựa dẻo',
          sales: '16.000đ',
          price: '20.000đ',
          image1: '/images/oplung3.jpg',
          image2: '/images/oplung3.jpg',
          image3: '/images/oplung3.jpg',
      }],
      Op2: [{
        id:'24',
          image: '/images/oplung4.jpg',
          name: 'Ốp lưng iPhone 6/6s nhựa cứng',
          sales: '16.000đ',
          price:'20.000đ',
          image1: '/images/oplung4.jpg',
          image2: '/images/oplung4.jpg',
          image3: '/images/oplung4.jpg',
      }, {
        id:'25',
          image: '/images/oplung5.jpg',
          name: 'Ốp lưng Galaxy S9 nhựa dẻo',
          sales: '40.000đ',
          price:'50.000đ',
          image1: '/images/oplung5.jpg',
          image2: '/images/oplung5.jpg',
          image3: '/images/oplung5.jpg',
      }, {
        id:'26',
          image: '/images/oplung6.jpg',
          name: 'Ốp lưng iPad 9.7inch nắp gập',
          sales: '125.000đ',
          price: '250.000đ',
          image1: '/images/oplung6.jpg',
          image2: '/images/oplung6.jpg',
          image3: '/images/oplung6.jpg',
      }],
      Op3: [{
        id:'27',
          image: '/images/oplung7.jpg',
          name: 'Ốp lưng Tab A6 7inch nắp gập',
          sales: '125.000đ',
          price:'250.000đ',
          image1: '/images/oplung7.jpg',
          image2: '/images/oplung7.jpg',
          image3: '/images/oplung7.jpg',
      }, {
        id:'28',
          image: '/images/oplung8.jpg',
          name: 'Ốp lưng Tab A6 7inch nắp gập nhiều màu',
          sales: '140.000đ',
          price:'280.000đ',
          image1: '/images/oplung8.jpg',
          image2: '/images/oplung8.jpg',
          image3: '/images/oplung8.jpg',

      }, {
          id:'29',
          image: '/images/oplung9.jpg',
          name: 'Ốp lưng iPad 9.7inch màu GOLD',
          sales: '150.000đ',
          price: '300.000đ',
          image1: '/images/oplung9.jpg',
          image2: '/images/oplung9.jpg',
          image3: '/images/oplung9.jpg',
      }],
      title: 'Ốp lưng'});

      try{
        const PhoneProduct4 = [{
            id:'21',
              image: '/images/oplung1.jpg',
              name: 'Ốp lưng Oppo F9 nhựa dẻo',
              sales: '16.000đ',
              price:'20.000đ',
              image1: '/images/oplung1.jpg',
              image2: '/images/oplung1.jpg',
              image3: '/images/oplung1.jpg',
          }, {
            id:'22',
              image: '/images/oplung2.jpg',
              name: 'Ốp lưng iPhone 6/6s nhựa dẻo',
              sales: '16.000đ',
              price:'20.000đ',
              image1: '/images/oplung2.jpg',
              image2: '/images/oplung2.jpg',
              image3: '/images/oplung2.jpg',
    
          }, {
            id:'23',
              image: '/images/oplung3.jpg',
              name: 'Ốp lưng iPhone XS Max nhựa dẻo',
              sales: '16.000đ',
              price: '20.000đ',
              image1: '/images/oplung3.jpg',
              image2: '/images/oplung3.jpg',
              image3: '/images/oplung3.jpg',
          }, {
            id:'24',
              image: '/images/oplung4.jpg',
              name: 'Ốp lưng iPhone 6/6s nhựa cứng',
              sales: '16.000đ',
              price:'20.000đ',
              image1: '/images/oplung4.jpg',
              image2: '/images/oplung4.jpg',
              image3: '/images/oplung4.jpg',
          }, {
            id:'25',
              image: '/images/oplung5.jpg',
              name: 'Ốp lưng Galaxy S9 nhựa dẻo',
              sales: '40.000đ',
              price:'50.000đ',
              image1: '/images/oplung5.jpg',
              image2: '/images/oplung5.jpg',
              image3: '/images/oplung5.jpg',
          }, {
            id:'26',
              image: '/images/oplung6.jpg',
              name: 'Ốp lưng iPad 9.7inch nắp gập',
              sales: '125.000đ',
              price: '250.000đ',
              image1: '/images/oplung6.jpg',
              image2: '/images/oplung6.jpg',
              image3: '/images/oplung6.jpg',
          }, {
            id:'27',
              image: '/images/oplung7.jpg',
              name: 'Ốp lưng Tab A6 7inch nắp gập',
              sales: '125.000đ',
              price:'250.000đ',
              image1: '/images/oplung7.jpg',
              image2: '/images/oplung7.jpg',
              image3: '/images/oplung7.jpg',
          }, {
            id:'28',
              image: '/images/oplung8.jpg',
              name: 'Ốp lưng Tab A6 7inch nắp gập nhiều màu',
              sales: '140.000đ',
              price:'280.000đ',
              image1: '/images/oplung8.jpg',
              image2: '/images/oplung8.jpg',
              image3: '/images/oplung8.jpg',
    
          }, {
              id:'29',
              image: '/images/oplung9.jpg',
              name: 'Ốp lưng iPad 9.7inch màu GOLD',
              sales: '150.000đ',
              price: '300.000đ',
              image1: '/images/oplung9.jpg',
              image2: '/images/oplung9.jpg',
              image3: '/images/oplung9.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }

};

exports.screenprotector = function(req, res, next){
  res.render('products/screenprotector',
  {
      Screen1: [{
        id:'31',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán iPhone 7Plus/8Plus',
          sales: '40.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
      }, {
        id:'32',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          name: 'Miếng dán màn hình iPhone XS Max',
          sales: '40.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
      }, {
        id:'33',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          name: 'Miếng dán mặt lưng 3M cho điện thoại 5inch',
          sales: '40.000đ',
          price: '50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
      }],
      Screen2: [{
        id:'34',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Oppo F11',
          sales: '40.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
      }, {
        id:'35',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình Galaxy S8 Plus/ S9 Plus',
          sales: '40.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
      }, {
        id:'36',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          name: 'Miếng dán film điện thoại 6inch',
          sales: '40.000đ',
          price: '50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
      }],
      Screen3: [{
        id:'37',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          name: 'Miếng dán màn hình iPhone 6',
          sales: '40.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
      }, {
        id:'38',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          name: 'Miến dán màn hình Galaxy Note 9',
          sales: '40.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
      }, {
          id:'39',
          image: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          name: 'Miếng dán màn hình Nokia 61 Plus',
          sales: '40.000đ',
          price: '50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
      }],
      title: 'Miếng dán màn hình'});

      try{
        const PhoneProduct4 = [{
            id:'31',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
              name: 'Miếng dán iPhone 7Plus/8Plus',
              sales: '40.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/86145/mieng-dan-lung-iphone-7-plus-avatar-1-600x600.jpg',
          }, {
            id:'32',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
              name: 'Miếng dán màn hình iPhone XS Max',
              sales: '40.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/193418/mieng-dan-man-hinh-iphone-xs-max-avatar-600x600.jpg',
          }, {
            id:'33',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
              name: 'Miếng dán mặt lưng 3M cho điện thoại 5inch',
              sales: '40.000đ',
              price: '50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/68268/mieng-dan-film-trong-dien-thoai-3m-avatar-1-600x600.jpg',
          }, {
            id:'34',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
              name: 'Miếng dán màn hình Oppo F11',
              sales: '40.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/202055/mieng-dan-man-hinh-oppo-f11-avatar-1-600x600.jpg',
          }, {
            id:'35',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
              name: 'Miếng dán màn hình Galaxy S8 Plus/ S9 Plus',
              sales: '40.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/99080/mieng-dan-man-hinh-galaxy-s8-plus-avatar-1-600x600.jpg',
          }, {
            id:'36',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
              name: 'Miếng dán film điện thoại 6inch',
              sales: '40.000đ',
              price: '50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/69533/mieng-dan-film-trong-dien-thoai-6-inch-avatar-1-600x600.jpg',
          }, {
            id:'37',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
              name: 'Miếng dán màn hình iPhone 6',
              sales: '40.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/69914/mieng-dan-man-hinh-iphone-6-avatar-1-600x600.jpg',
          }, {
            id:'38',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
              name: 'Miến dán màn hình Galaxy Note 9',
              sales: '40.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/187278/mieng-dan-man-hinh-galaxy-note-9-avatar-600x600.jpg',
          }, {
              id:'39',
              image: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
              name: 'Miếng dán màn hình Nokia 61 Plus',
              sales: '40.000đ',
              price: '50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1363/191768/mieng-dan-man-hinh-nokia-61-plus-gos-avatar-600x600.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }

};

exports.powerbank = function(req, res, next){
  res.render('products/powerbank',
  {
      Power1: [{
        id:'41',
          image: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 7.500mAh eSaver LA Y323S',
          sales: '240.000đ',
          price:'400.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
      }, {
        id:'42',
          image: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh eSaver LA Y325S',
          sales: '325.000đ',
          price:'500.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
      }, {
        id:'43',
          image: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh eSaver LA A35',
          sales: '325.000đ',
          price: '500.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
      }],
      Power2: [{
        id:'44',
          image: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 15.000mAh XMobile LA Y615N',
          sales: '552.000đ',
          price:'850.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
      }, {
        id:'45',
          image: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
          name: 'Pin sạc dự phòng 7.500mAh eSaver Safari 3S',
          sales: '240.000đ',
          price:'400.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
      }, {
        id:'46',
          image: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh Polymer',
          sales: '422.000đ',
          price: '650.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
      }],
      Power3: [{
        id:'47',
          image: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
          name: 'Pin sạc dự phòng 10.000mAh XMobile gram',
          sales: '325.000đ',
          price:'500.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',

      }, {
        id:'48',
          image: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
          name: 'Pin sạc dự phòng 7.500mAh eSaver LA A33',
          sales: '260.000đ',
          price:'400.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
      }, {
          id:'49',
          image: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
          name: 'Pin sạc dự phòng Polymer 10.000mAh eValu',
          sales: '422.000đ',
          price: '650.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
      }],
      title: 'Sạc dự phòng'});

      try{
        const PhoneProduct4 = [{
            id:'41',
              image: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
              name: 'Pin sạc dự phòng 7.500mAh eSaver LA Y323S',
              sales: '240.000đ',
              price:'400.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/145556/pin-sac-du-phong-7500mah-esaver-la-y323s-anh-dai-dien-600x600.jpg',
          }, {
            id:'42',
              image: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
              name: 'Pin sạc dự phòng 10.000mAh eSaver LA Y325S',
              sales: '325.000đ',
              price:'500.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/145557/pin-sac-du-phong-10000mah-esaver-la-y325s-anh-dai-dien-600x600.jpg',
          }, {
            id:'43',
              image: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
              name: 'Pin sạc dự phòng 10.000mAh eSaver LA A35',
              sales: '325.000đ',
              price: '500.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/195151/pin-sac-du-phong-10000mah-esaver-la-a35-den-1-600x600.jpg',
          }, {
            id:'44',
              image: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
              name: 'Pin sạc dự phòng 15.000mAh XMobile LA Y615N',
              sales: '552.000đ',
              price:'850.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/156075/pin-sac-du-phong-15000mah-xmobile-la-y615n-anh-dai-dien-600x600.jpg',
          }, {
            id:'45',
              image: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
              name: 'Pin sạc dự phòng 7.500mAh eSaver Safari 3S',
              sales: '240.000đ',
              price:'400.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/145725/pin-sac-du-phong-7500mah-esaver-safari-3s-anh-dai-dien-600x600.jpg',
          }, {
            id:'46',
              image: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
              name: 'Pin sạc dự phòng 10.000mAh Polymer',
              sales: '422.000đ',
              price: '650.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/197792/pin-sac-du-phong-polymer-10000mah-lightning-esaver-add-1-600x600.jpg',
          }, {
            id:'47',
              image: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
              name: 'Pin sạc dự phòng 10.000mAh XMobile gram',
              sales: '325.000đ',
              price:'500.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/197862/pin-sac-du-phong-10000mah-xmobile-gram-4-xanh-navy-1-600x600.jpg',
    
          }, {
            id:'48',
              image: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
              name: 'Pin sạc dự phòng 7.500mAh eSaver LA A33',
              sales: '260.000đ',
              price:'400.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/195150/pin-sac-du-phong-7500mah-esaver-la-a33-den-1-600x600.jpg',
          }, {
              id:'49',
              image: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
              name: 'Pin sạc dự phòng Polymer 10.000mAh eValu',
              sales: '422.000đ',
              price: '650.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/57/195149/pin-sac-du-phong-polymer-10000mah-evalu-pa-croco-1-600x600.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.tablets = function(req, res, next){
  res.render('products/tablets',
  {
      Tablet1: [{
        id:'51',
          image: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          name: 'iPad Wifi 32GB (2018)',
          sales: '7.990.000đ',
          price:'8.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
      }, {
        id:'52',
          image: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          name: 'iPad Wifi 128GB (2018)',
          sales: '10.490.000đ',
          price:'11.490.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',

      }, {
        id:'53',
          image: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
          name: 'Samsung Galaxy Tab A 10.1 (2019)',
          sales: '7.490.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
      }],
      Tablet2: [{
        id:'54',
          image: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
          name: 'iPad mini 7.9inch Wifi 64GB (2019)',
          sales: '10.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
      }, {
        id:'55',
          image: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
          name: 'iPad Pro 11inch 64GB (2018)',
          sales: '21.490.000đ',
          price:'21.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
      }, {
        id:'56',
          image: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
          name: 'iPad Wifi Cellular 128GB (2018)',
          sales: '13.490.000đ',
          price: '14.490.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
      }],
      Tablet3: [{
        id:'57',
          image: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
          name: 'Samsung Galaxy Tab A8 Plus',
          sales: '6.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
      }, {
        id:'58',
          image: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
          name: 'iPad Wifi Cellular 32GB (2018)',
          sales: '10.990.000đ',
          price:'11.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
      }, {
          id:'59',
          image: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
          name: 'Lenovo Tab E10',
          sales: '3.590.000đ',
          price: '3.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
      }],
      title: 'Tablets'});

      try{
        const PhoneProduct4 = [{
            id:'51',
              image: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
              name: 'iPad Wifi 32GB (2018)',
              sales: '7.990.000đ',
              price:'8.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
          }, {
            id:'52',
              image: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
              name: 'iPad Wifi 128GB (2018)',
              sales: '10.490.000đ',
              price:'11.490.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/163645/ipad-wifi-32gb-2018-thumb-33397-123-123321-600x600-400x400.jpg',
    
          }, {
            id:'53',
              image: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
              name: 'Samsung Galaxy Tab A 10.1 (2019)',
              sales: '7.490.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/200963/samsung-galaxy-tab-a-101-t515-2019-gold-400x400.jpg',
          }, {
            id:'54',
              image: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
              name: 'iPad mini 7.9inch Wifi 64GB (2019)',
              sales: '10.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/202706/ipad-mini-79-inch-wifi-2019-1-400x400.jpg',
          }, {
            id:'55',
              image: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
              name: 'iPad Pro 11inch 64GB (2018)',
              sales: '21.490.000đ',
              price:'21.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/195067/ipad-pro-11-inch-2018-64gb-wifi-33397-thumb-400x400.jpg',
          }, {
            id:'56',
              image: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
              name: 'iPad Wifi Cellular 128GB (2018)',
              sales: '13.490.000đ',
              price: '14.490.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/163813/ipad-wifi-cellular-128gb-2018-thumb-55-400x400.jpg',
          }, {
            id:'57',
              image: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
              name: 'Samsung Galaxy Tab A8 Plus',
              sales: '6.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/200631/samsung-galaxy-tab-a8-plus-p205-black-400x400.jpg',
          }, {
            id:'58',
              image: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
              name: 'iPad Wifi Cellular 32GB (2018)',
              sales: '10.990.000đ',
              price:'11.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/163793/ipad-wifi-cellular-32g-2018-thumb333-400x400.jpg',
          }, {
              id:'59',
              image: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
              name: 'Lenovo Tab E10',
              sales: '3.590.000đ',
              price: '3.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/522/200691/lenovo-tab-e10-tb-x104l-den-1-400x400.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.watch = function(req, res, next){
  res.render('products/watch',
  {
      Watch1: [{
        id:'61',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
          name: 'Apple Watch Series 4 40mm viền nhôm màu hồng',
          sales: '11.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
      }, {
        id:'62',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
          name: 'Samsung Gear S3 Frontier',
          sales: '4.990.000đ',
          price:'6.490.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',

      }, {
        id:'63',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
          name: 'Samsung Galaxy Watch Active',
          sales: '5.090.000đ',
          price: '5.490.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
      }],
      Watch2: [{
        id:'64',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          name: 'Apple Watch Series 3 GPS 42mm viền nhôm đen',
          sales: '40.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
      }, {
        id:'65',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
          name: 'Samsung Galaxy Watch 46mm',
          sales: '8.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
      }, {
        id:'66',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
          name: 'Huawei Watch GT xanh lá cây',
          sales: '4.990.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
      }],
      Watch3: [{
        id:'67',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          name: 'Apple Watch Series 4 GPS 44mm viền nhôm đen',
          sales: '12.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
      }, {
        id:'68',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
          name: 'Apple Watch Series 4 GPS 44mm viền nhôm hồng',
          sales: '12.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
      }, {
          id:'69',
          image: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
          name: 'Samsung Galaxy Watch 42mm',
          sales: '5.490.000đ',
          price: '6.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
      }],
      title: 'Thiết bị đeo tay'});

      try{
        const PhoneProduct4 = [{
            id:'61',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
              name: 'Apple Watch Series 4 40mm viền nhôm màu hồng',
              sales: '11.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/194323/apple-watch-s4-gps-40mm-vien-nhom-mau-hong-nt-400x400.jpg',
          }, {
            id:'62',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
              name: 'Samsung Gear S3 Frontier',
              sales: '4.990.000đ',
              price:'6.490.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-400x400.jpg',
    
          }, {
            id:'63',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
              name: 'Samsung Galaxy Watch Active',
              sales: '5.090.000đ',
              price: '5.490.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/200965/samsung-galaxy-watch-active-r500-10-400x400.jpg',
          },{
            id:'64',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
              name: 'Apple Watch Series 3 GPS 42mm viền nhôm đen',
              sales: '40.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          }, {
            id:'65',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
              name: 'Samsung Galaxy Watch 46mm',
              sales: '8.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/197089/samsung-galaxy-watch-46mm-bac-nt-400x400.jpg',
          }, {
            id:'66',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
              name: 'Huawei Watch GT xanh lá cây',
              sales: '4.990.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/200594/huawei-watch-gt-xanh-la-cay-400x400.jpg',
          },{
            id:'67',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
              name: 'Apple Watch Series 4 GPS 44mm viền nhôm đen',
              sales: '12.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/194392/apple-watch-s4-gps-44mm-vien-nhom-day-cao-su-den-nt-400x400.jpg',
          }, {
            id:'68',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
              name: 'Apple Watch Series 4 GPS 44mm viền nhôm hồng',
              sales: '12.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/194338/apple-watch-s4-gps-44mm-vien-nhom-day-vai-hong-nt-400x400.jpg',
          }, {
              id:'69',
              image: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
              name: 'Samsung Galaxy Watch 42mm',
              sales: '5.490.000đ',
              price: '6.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/7077/197085/samsung-galaxy-watch-42mm-nt-400x400.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.laptops = function(req, res, next){
  res.render('products/laptops',
  {
      Laptop1: [{
        id:'71',
          image: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
          name: 'HP 15 da0048TU N5000',
          sales: '7.390.000đ',
          price:'7.690.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
      }, {
        id:'72',
          image: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
          name: 'Apple Macbook Air MQD32SA',
          sales: '22.490.000đ',
          price:'23.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
      }, {
        id:'73',
          image: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
          name: 'Dell Inspiron 3576',
          sales: '14.390.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
      }],
      Laptop2: [{
        id:'74',
          image: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
          name: 'Asus A411UA',
          sales: '11.290.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
      }, {
        id:'75',
          image: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
          name: 'Acer Aspire E5',
          sales: '9.490.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
      }, {
        id:'76',
          image: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
          name: 'Dell Inspiron 3576',
          sales: '12.290.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
      }],
      Laptop3: [{
        id:'77',
          image: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
          name: 'Lenovo ideapad 330S',
          sales: '12.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
      }, {
        id:'78',
          image: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
          name: 'HP 15 da0054TU',
          sales: '10.990.000đ',
          price:'50.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
      }, {
          id:'79',
          image: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
          name: 'HP 15 da1023TU',
          sales: '14.890.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
      }],
      title: 'Laptops'});

      try{
        const PhoneProduct4 = [{
            id:'71',
              image: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
              name: 'HP 15 da0048TU N5000',
              sales: '7.390.000đ',
              price:'7.690.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/177631/hp-15-da0048tu-4me63pa-33397-ava1-400x400.jpg',
          }, {
            id:'72',
              image: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
              name: 'Apple Macbook Air MQD32SA',
              sales: '22.490.000đ',
              price:'23.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400-1-450x300-400x400.jpg',
          }, {
            id:'73',
              image: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
              name: 'Dell Inspiron 3576',
              sales: '14.390.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/166521/dell-inspiron-3576-p63f002n76f-450-400x400.png',
          },{
            id:'74',
              image: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
              name: 'Asus A411UA',
              sales: '11.290.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/177932/asus-a411ua-i3-8130u-eb688t-ava-400x400.jpg',
          }, {
            id:'75',
              image: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
              name: 'Acer Aspire E5',
              sales: '9.490.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/160296/acer-aspire-e5-476-i3-8130u-nxgwtsv002-ava-400x400.jpg',
          }, {
            id:'76',
              image: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
              name: 'Dell Inspiron 3576',
              sales: '12.290.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/166858/dell-inspiron-3576-p63f002n76b-450-400x400.png',
          },{
            id:'77',
              image: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
              name: 'Lenovo ideapad 330S',
              sales: '12.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/195078/lenovo-ideapad-330s-14ikbr-i5-8250u-4gb-1tb-win10-33397-thumb-400x400.jpg',
          }, {
            id:'78',
              image: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
              name: 'HP 15 da0054TU',
              sales: '10.990.000đ',
              price:'50.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/177770/hp-15-da0054tu-4me68pa-thumbnail-400x400.jpg',
          }, {
              id:'79',
              image: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
              name: 'HP 15 da1023TU',
              sales: '14.890.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/44/195384/hp-15-da1023tu-i5-8265u-4gb-1tb-win10-5nk81pa-33397-thumb-400x400.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.hdd = function(req, res, next){
  res.render('products/hdd',
  {
      Hdd1: [{
        id:'81',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
          name: 'HDD Western Digital Blue 1TB WD10EZEX',
          sales: '1.090.000đ',
          price:'',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
      }, {
        id:'82',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
          name: 'HDD Western Digital Blue 1TB WD10EZRZ',
          sales: '1.090.000đ',
          price:'',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
      }, {
        id:'83',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
          name: 'HDD Western Digital Black 1TB WD1003FZEX',
          sales: '1.990.000đ',
          price: '',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
      }],
      Hdd2: [{
        id:'84',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
          name: 'HDD Western Digital Black 4TB WD4005FZBX',
          sales: '5.200.000đ',
          price:'',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
      }, {
        id:'85',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
          name: 'HDD Western Digital 4TB WD4002FYYZ',
          sales: '6.950.000đ',
          price:'',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
      }, {
        id:'86',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
          name: 'HDD Western Digital Red 8TB WD80EFAX',
          sales: '6.490.000đ',
          price: '',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
      }],
      Hdd3: [{
        id:'87',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
          name: 'HDD Western Digital Gold 8TB WD8003FRYZ',
          sales: '11.500.000đ',
          price:'',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
      }, {
        id:'88',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
          name: 'HDD Seagate 2TB ST2000DM008',
          sales: '1.750.000đ',
          price:'',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
      }, {
          id:'89',
          image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
          name: 'HDD Seagate Surveilance 6TB ST6000DM003',
          sales: '4.950.000đ',
          price: '',
          image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
          image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
          image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
      }],
      title: 'Ổ cứng'});

      
      try{
        const PhoneProduct4 = [{
            id:'81',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
              name: 'HDD Western Digital Blue 1TB WD10EZEX',
              sales: '1.090.000đ',
              price:'',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1201762/052c441782e6449b038e18e5e5fa73be_hdd%20wd%201tb%20wd10ezex%20sata%203_1.jpg',
          }, {
            id:'82',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
              name: 'HDD Western Digital Blue 1TB WD10EZRZ',
              sales: '1.090.000đ',
              price:'',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/o/-/o-cung-hdd-1tb-wd-wd10ezrz-1.jpg',
          }, {
            id:'83',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
              name: 'HDD Western Digital Black 1TB WD1003FZEX',
              sales: '1.990.000đ',
              price: '',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1303536/0c6719b8ee604762ef9ca9c27d8c7d2b_hdd%20wd%201tb%20wd1003fzex%20(%C4%90en)_1.jpg',
          },{
            id:'84',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
              name: 'HDD Western Digital Black 4TB WD4005FZBX',
              sales: '5.200.000đ',
              price:'',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/storage/o_cung/1800967/42fb1b8e22a9da745179b63158d9684a_hdd%20wd%204tb%20wd4005fzbx%20sata%203%20(%C4%90en)_1.jpg',
          }, {
            id:'85',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
              name: 'HDD Western Digital 4TB WD4002FYYZ',
              sales: '6.950.000đ',
              price:'',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/w/d/wd_wd4002fyyz_4tb_re_datacenter_7200_1246225.jpg',
          }, {
            id:'86',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
              name: 'HDD Western Digital Red 8TB WD80EFAX',
              sales: '6.490.000đ',
              price: '',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_wd_red_nas_3.5_8tb_sata_iii_6gbs_5400rpm_256mb_wd80efax__1.jpg',
          },{
            id:'87',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
              name: 'HDD Western Digital Gold 8TB WD8003FRYZ',
              sales: '11.500.000đ',
              price:'',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/1/5/1510265788000_img_899245.jpg',
          }, {
            id:'88',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
              name: 'HDD Seagate 2TB ST2000DM008',
              sales: '1.750.000đ',
              price:'',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/h/d/hdd_seagate_barracuda_2tb_3.5_sata3_st2000dm008__1.jpg',
          }, {
              id:'89',
              image: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
              name: 'HDD Seagate Surveilance 6TB ST6000DM003',
              sales: '4.950.000đ',
              price: '',
              image1: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
              image2: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
              image3: 'https://img1.phongvu.vn/media/catalog/product/cache/23/small_image/300x/9df78eab33525d08d6e5fb8d27136e95/s/e/seagate_barracuda_3.5_6tb_st3_6gbs_5400rpm_256mb_st6000dm003__1.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.printer = function(req, res, next){
  res.render('products/printer',
  {
      Printer1: [{
          id:'91',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
          name: 'Máy in HP Laser Jet Pro M15a',
          sales: '1.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
      }, {
        id:'92',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
          name: 'Máy in HP Laser Jet Pro M15w',
          sales: '2.490.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
      }, {
        id:'93',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
          name: 'Máy in laser Brother HL L2321',
          sales: '2.690.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
      }],
      Printer2: [{
        id:'94',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
          name: 'Máy in HP Laser Jet Pro MFA M28A',
          sales: '3.290.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
      }, {
        id:'95',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
          name: 'Máy in laser Brother HL L2361DN',
          sales: '3.290.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
      }, {
        id:'96',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
          name: 'Máy in laser Brother HL L2366DW',
          sales: '3.290.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
      }],
      Printer3: [{
        id:'97',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
          name: 'Máy in HP Laser Jet Pro MFP M28W',
          sales: '3.690.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
      }, {
        id:'98',
          image: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
          name: 'Máy in đa chức năng Brother DCP L2520D',
          sales: '4.390.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
      },{
        id:'99',
        image: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
        name: 'Máy in HP Laser Jet 1020',
        sales: '1.000.000đ',
        price:'',
        image1: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
        image2: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
        image3: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
    }],
      title: 'Máy in'});

      try{
        const PhoneProduct4 = [{
            id:'91',
            image: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
            name: 'Máy in HP Laser Jet Pro M15a',
            sales: '1.990.000đ',
            price:'',
            image1: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
            image2: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
            image3: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
        }, {
          id:'92',
            image: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
            name: 'Máy in HP Laser Jet Pro M15w',
            sales: '2.490.000đ',
            price:'',
            image1: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
            image2: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
            image3: 'https://cdn.tgdd.vn/Products/Images/5693/195122/may-in-may-in-hp-laserjet-pro-m15w-wi-fi-w2g51a-15-600x600.JPG',
        }, {
          id:'93',
            image: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
            name: 'Máy in laser Brother HL L2321',
            sales: '2.690.000đ',
            price: '',
            image1: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
            image2: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
            image3: 'https://cdn.tgdd.vn/Products/Images/5693/115902/may-in-may-in-laser-brother-hl-l2321d-300x300.jpg',
        },{
            id:'94',
              image: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
              name: 'Máy in HP Laser Jet Pro MFA M28A',
              sales: '3.290.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
              image2: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
              image3: 'https://cdn.tgdd.vn/Products/Images/5693/195659/may-in-may-in-hp-laserjet-pro-mfp-m28a-in-scan-copy-w2g5-16-300x300.JPG',
          }, {
            id:'95',
              image: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
              name: 'Máy in laser Brother HL L2361DN',
              sales: '3.290.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/5693/115900/may-in-may-in-laser-brother-hl-l2361dn-300x300.jpg',
          }, {
            id:'96',
              image: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
              name: 'Máy in laser Brother HL L2366DW',
              sales: '3.290.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/5693/115888/may-in-may-in-laser-brother-hl-l2366dw-300x300.jpg',
          },{
            id:'97',
              image: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
              name: 'Máy in HP Laser Jet Pro MFP M28W',
              sales: '3.690.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
              image2: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
              image3: 'https://cdn.tgdd.vn/Products/Images/5693/195660/may-in-hp-laserjet-pro-mfp-m28w-wi-fi-in-scan-copy-w2g55-11-300x300.JPG',
          }, {
            id:'98',
              image: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
              name: 'Máy in đa chức năng Brother DCP L2520D',
              sales: '4.390.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/5693/115899/may-in-may-in-da-chuc-nang-brother-dcp-l2520d-in-photo-1-300x300.jpg',
          },{
            id:'99',
            image: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
            name: 'Máy in HP Laser Jet 1020',
            sales: '1.000.000đ',
            price:'',
            image1: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
            image2: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
            image3: 'https://cdn.tgdd.vn/Products/Images/5693/195121/may-in-may-in-hp-laserjet-pro-m15a-w2g50a-5-600x600.JPG',
        }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.laptopaccessories = function(req, res, next){
  res.render('products/laptopaccessories',
  {
      LA1: [{
        id:'101',
          image: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
          name: 'Balo The Northface Surge 15.6inch',
          sales: '850.000đ',
          price:'',
          image1: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
          image2: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
          image3: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
      }, {
        id:'102',
          image: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
          name: 'Ốp vỏ Macbook Air 13.3inch',
          sales: '149.000đ',
          price:'',
          image1: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
      }, {
        id:'103',
          image: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
          name: 'Cáp chuyển Apple Thunderbolt to LAN',
          sales: '999.000đ',
          price: '',
          image1: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
      }],
      LA2: [{
        id:'104',
          image: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
          name: 'Chuột không dây Microsoft Surface Arc Mouse',
          sales: '2.590.000đ',
          price:'',
          image1: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
      }, {
        id:'105',
          image: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
          name: 'Chuột không dây Microsoft Surface Wireless',
          sales: '1.990.000đ',
          price:'',
          image1: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
      }, {
        id:'106',
          image: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
          name: 'Cặp Tucano Minilux',
          sales: '760.000đ',
          price: '',
          image1: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
      }],
      LA3: [{
        id:'107',
          image: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
          name: 'Cáp chuyển đổi Apple USB to Lightning',
          sales: '489.000đ',
          price:'599.000đ',
          image1: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
      }, {
        id:'108',
          image: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
          name: 'Cáp chuyển Apple USB-C sang AV',
          sales: '2.290.000đ',
          price:'',
          image1: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
      }, {
          id:'109',
          image: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
          name: 'Túi Tucano Workout 13inch',
          sales: '1.390.000đ',
          price: '',
          image1: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
          image2: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
          image3: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
      }],
      title: 'Phụ kiện laptop'});

      try{
        const PhoneProduct4 = [{
            id:'101',
              image: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
              name: 'Balo The Northface Surge 15.6inch',
              sales: '850.000đ',
              price:'',
              image1: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
              image2: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
              image3: 'https://phucanhcdn.com/media/product/250_25317_ba_l___the_northface_surge_3.png',
          }, {
            id:'102',
              image: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
              name: 'Ốp vỏ Macbook Air 13.3inch',
              sales: '149.000đ',
              price:'',
              image1: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_33033-----p-vo---macbook-air-13-3.jpg',
          }, {
            id:'103',
              image: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
              name: 'Cáp chuyển Apple Thunderbolt to LAN',
              sales: '999.000đ',
              price: '',
              image1: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_22662_apple_thunderbolt_to_lan_md463_01.jpg',
          },{
            id:'104',
              image: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
              name: 'Chuột không dây Microsoft Surface Arc Mouse',
              sales: '2.590.000đ',
              price:'',
              image1: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_32835-chu----t-kh--ng-d--y-microsoft-surface-arc-mouse-light-gray.jpg',
          }, {
            id:'105',
              image: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
              name: 'Chuột không dây Microsoft Surface Wireless',
              sales: '1.990.000đ',
              price:'',
              image1: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_34980_chu____t_kh__ng_d__y_microsoft_surface_wireless_bluetooth_silver_1.jpg',
          }, {
            id:'106',
              image: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
              name: 'Cặp Tucano Minilux',
              sales: '760.000đ',
              price: '',
              image1: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_33085-tucano-minilux-bfml1314.jpg',
          },{
            id:'107',
              image: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
              name: 'Cáp chuyển đổi Apple USB to Lightning',
              sales: '489.000đ',
              price:'599.000đ',
              image1: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_21932_cap_chuyen_doi_apple_usb_to_lightning_01.jpg',
          }, {
            id:'108',
              image: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
              name: 'Cáp chuyển Apple USB-C sang AV',
              sales: '2.290.000đ',
              price:'',
              image1: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_21934_66745_24_06_15_usb_c_digital_av_multiport_adapter.jpg',
          }, {
              id:'109',
              image: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
              name: 'Túi Tucano Workout 13inch',
              sales: '1.390.000đ',
              price: '',
              image1: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
              image2: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
              image3: 'https://phucanhcdn.com/media/product/250_35347_c____p_mtxt_tucano_workout_3_slim_13inch___blue_1.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.camera = function(req, res, next){
  res.render('products/camera',
  {
      Cam1: [{
        id:'141',
          image: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
          name: 'Canon EOS 750D Kit',
          sales: '12.390.000đ',
          price:'22.500.000đ',
          image1: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
      }, {
        id:'142',
          image: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
          name: 'Canon EOS M10 Kit',
          sales: '6.090.000đ',
          price:'8.000.000đ',
          image1: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
      }, {
        id:'143',
          image: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
          name: 'Canon Powershot G7 X Mark II',
          sales: '11.390.000đ',
          price: '16.200.000đ',
          image1: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
      }],
      Cam2: [{
        id:'144',
          image: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
          name: 'Canon EOS M50 Kit',
          sales: '13.590.000đ',
          price:'15.000.000đ',
          image1: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
      }, {
        id:'145',
          image: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
          name: 'Canon Ixus 185',
          sales: '2.350.000đ',
          price:'2.700.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
      }, {
        id:'146',
          image: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
          name: 'Canon EOS 3000D',
          sales: '7.890.000đ',
          price: '9.600.000đ',
          image1: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
      }],
      Cam3: [{
        id:'147',
          image: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
          name: 'Canon EOS M50 Kit',
          sales: '13.590.000đ',
          price:'15.000.000đ',
          image1: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
      }, {
        id:'148',
          image: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
          name: 'Sony Alpha A6000',
          sales: '12.490.000đ',
          price:'15.990.000đ',
          image1: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
      }, {
          id:'149',
          image: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
          name: 'Sony Cybershot DSC H300',
          sales: '3.790.000đ',
          price: '3.990.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
      }],
      title: 'Máy ảnh'});

      try{
        const PhoneProduct4 = [{
            id:'141',
              image: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
              name: 'Canon EOS 750D Kit',
              sales: '12.390.000đ',
              price:'22.500.000đ',
              image1: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/750d-moi-jpg-jpg.jpg',
          }, {
            id:'142',
              image: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
              name: 'Canon EOS M10 Kit',
              sales: '6.090.000đ',
              price:'8.000.000đ',
              image1: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/canon-m10-kit-efm1545mm(2).jpg',
          }, {
            id:'143',
              image: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
              name: 'Canon Powershot G7 X Mark II',
              sales: '11.390.000đ',
              price: '16.200.000đ',
              image1: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/canon-powershot-g7-x-mark-ii(3).jpg',
          },{
            id:'144',
              image: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
              name: 'Canon EOS M50 Kit',
              sales: '13.590.000đ',
              price:'15.000.000đ',
              image1: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/may-anh-canon-eos-m50-kit-1545mm-den(1).jpg',
          }, {
            id:'145',
              image: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
              name: 'Canon Ixus 185',
              sales: '2.350.000đ',
              price:'2.700.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/9820/may-anh-canon-ixus-185--den--jpg.jpg',
          }, {
            id:'146',
              image: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
              name: 'Canon EOS 3000D',
              sales: '7.890.000đ',
              price: '9.600.000đ',
              image1: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/canon-3000d(1).jpg',
          },{
            id:'147',
              image: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
              name: 'Canon EOS M50 Kit',
              sales: '13.590.000đ',
              price:'15.000.000đ',
              image1: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/canon-eos-m50-kit-1545mm-trang(1).jpg',
          }, {
            id:'148',
              image: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
              name: 'Sony Alpha A6000',
              sales: '12.490.000đ',
              price:'15.990.000đ',
              image1: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/sony-alpha-a6000-1650-oss-f3556-lens-kit-den.jpg',
          }, {
              id:'149',
              image: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
              name: 'Sony Cybershot DSC H300',
              sales: '3.790.000đ',
              price: '3.990.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/5283/may-anh-sony-cybershot-dsc-h300--den--jpg-jpg.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.cameraaccessories = function(req, res, next){
  res.render('products/cameraaccessories',
  {
      CA1: [{
        id:'151',
          image: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
          name: 'Thẻ nhớ Sandisk 16GB',
          sales: '200.000đ',
          price:'220.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
      }, {
        id:'152',
          image: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
          name: 'Túi Canon 521',
          sales: '250.000đ',
          price:'',
          image1: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
      }, {
        id:'153',
          image: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
          name: 'Bút lau lens Lenspen',
          sales: '120.000đ',
          price: '130.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
      }],
      CA2: [{
        id:'154',
          image: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
          name: 'Thẻ nhớ Sandisk 16GB ultra 40Mbps',
          sales: '250.000đ',
          price:'',
          image1: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
          image2: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
          image3: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
      }, {
        id:'155',
          image: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',
          name: 'Bao máy Sony A1',
          sales: '350.000đ',
          price:'400.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',

      }, {
        id:'156',
          image: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
          name: 'Bao máy Sony 0391',
          sales: '200.000đ',
          price: '230.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
      }],
      CA3: [{
        id:'157',
          image: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
          name: 'Bao máy Canon 521',
          sales: '150.000đ',
          price:'',
          image1: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
      }, {
        id:'158',
          image: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
          name: 'Thẻ nhớ Sony 16GB 90Mbps',
          sales: '350.000đ',
          price:'490.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
      }, {
          id:'159',
          image: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
          name: 'Chân máy Benro T880EX',
          sales: '600.000đ',
          price: '620.000đ',
          image1: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
          image2: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
          image3: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
      }],
      title: 'Phụ kiện máy ảnh'});

      try{
        const PhoneProduct4 = [{
            id:'151',
              image: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
              name: 'Thẻ nhớ Sandisk 16GB',
              sales: '200.000đ',
              price:'220.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/10802/the-nho-sdhc-sandisk-16gb-class-4-jpg.jpg',
          }, {
            id:'152',
              image: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
              name: 'Túi Canon 521',
              sales: '250.000đ',
              price:'',
              image1: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/dhf.jpg',
          }, {
            id:'153',
              image: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
              name: 'Bút lau lens Lenspen',
              sales: '120.000đ',
              price: '130.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/6784/but-lau-lens-hieu-lenspen-1-jpg.jpg',
          },{
            id:'154',
              image: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
              name: 'Thẻ nhớ Sandisk 16GB ultra 40Mbps',
              sales: '250.000đ',
              price:'',
              image1: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
              image2: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
              image3: 'https://binhminhdigital.com/thumb/images/product/sdhc-sandisk-16gb-ultra-40mbs(1).jpg',
          }, {
            id:'155',
              image: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',
              name: 'Bao máy Sony A1',
              sales: '350.000đ',
              price:'400.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/7760/bao-may-sony-a1-jpg-jpg.jpg',
    
          }, {
            id:'156',
              image: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
              name: 'Bao máy Sony 0391',
              sales: '200.000đ',
              price: '230.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/5970/sony-0391-jpg.jpg',
          },{
            id:'157',
              image: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
              name: 'Bao máy Canon 521',
              sales: '150.000đ',
              price:'',
              image1: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/4895/bao-may2-jpg.jpg',
          }, {
            id:'158',
              image: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
              name: 'Thẻ nhớ Sony 16GB 90Mbps',
              sales: '350.000đ',
              price:'490.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/10743/the-nho-sdhc-sony-16gb-90mbs--sf-16uy3--jpg.jpg',
          }, {
              id:'159',
              image: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
              name: 'Chân máy Benro T880EX',
              sales: '600.000đ',
              price: '620.000đ',
              image1: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
              image2: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
              image3: 'https://binhminhdigital.com/thumb/product/6733/chan-may-benro-t880ex-jpg.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.tv = function(req, res, next){
  res.render('products/tv',
  {
      TV1: [{
        id:'111',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
          name: 'TV Samsung UA55NU7400',
          sales: '21.900.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
      }, {
        id:'112',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
          name: 'TV Asanzo 40AS330',
          sales: '5.590.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
      }, {
        id:'113',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
          name: 'TV Samsung UA49RU7300',
          sales: '17.890.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
      }],
      TV2: [{
        id:'114',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
          name: 'TV LG 32LK5400BPTA',
          sales: '5.690.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
      }, {
        id:'115',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
          name: 'TV LG 43UK6340PTF',
          sales: '8.990.000đ',
          price:'9.790.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
      }, {
        id:'116',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
          name: 'TV LG 43LK5400PTA',
          sales: '8.090.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
      }],
      TV3: [{
        id:'117',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
          name: 'TV Samsung UA32N4300',
          sales: '6.590.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
      }, {
        id:'118',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
          name: 'TV LG 43LK5700PTA',
          sales: '8.400.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
      }, {
          id:'119',
          image: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
          name: 'TV Sony KDL 40W660E',
          sales: '8.990.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
      }],
      title: 'TV'});

      
      try{
        const PhoneProduct4 = [{
            id:'111',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
              name: 'TV Samsung UA55NU7400',
              sales: '21.900.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/162446/tivi-samsung-ua55nu7400-3-550x340.jpg',
          }, {
            id:'112',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
              name: 'TV Asanzo 40AS330',
              sales: '5.590.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/136485/tivi-asanzo-40as330-15-550x340-550x340.jpg',
          }, {
            id:'113',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
              name: 'TV Samsung UA49RU7300',
              sales: '17.890.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/200429/samsung-ua49ru7300-550x340.jpg',
          },{
            id:'114',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
              name: 'TV LG 32LK5400BPTA',
              sales: '5.690.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/167152/tivi-lg-32lk5400bpta-12-550x340-550x340.jpg',
          }, {
            id:'115',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
              name: 'TV LG 43UK6340PTF',
              sales: '8.990.000đ',
              price:'9.790.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/163148/tivi-lg-43uk6340ptf-22-550x340-550x340.jpg',
          }, {
            id:'116',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
              name: 'TV LG 43LK5400PTA',
              sales: '8.090.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/167601/tivi-lg-43lk5400pta-15-550x340.jpg',
          },{
            id:'117',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
              name: 'TV Samsung UA32N4300',
              sales: '6.590.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/171649/TimerThumb/samsung-ua32n4300.jpg',
          }, {
            id:'118',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
              name: 'TV LG 43LK5700PTA',
              sales: '8.400.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/167790/tivi-lg-43lk5700pta-20-550x340.jpg',
          }, {
              id:'119',
              image: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
              name: 'TV Sony KDL 40W660E',
              sales: '8.990.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1942/94290/tivi-sony-kdl-40w660e-13-550x340-550x340.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.headphones = function(req, res, next){
  res.render('products/headphones',
  {
      Headphone1: [{
        id:'121',
        image: '/images/tainghe1.jpg',
        name: 'Tai nghe Kanen IP-218',
        sales: '90.000đ',
        price: '150.000đ',
        image1: '/images/tainghe1.jpg',
        image2: '/images/tainghe1.jpg',
        image3: '/images/tainghe1.jpg',
      }, {
        id:'122',
        image: '/images/tainghe3.jpg',
        name: 'Tai nghe Awei Q19Hi',
        sales: '105.000đ',
        price: '150.000đ',
        image1: '/images/tainghe3.jpg',
        image2: '/images/tainghe3.jpg',
        image3: '/images/tainghe3.jpg',
      }, {
        id:'123',
          image: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
          name: 'Tai nghe Kanen IP350',
          sales: '120.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
      }],
      Headphone2: [{
        id:'124',
          image: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
          name: 'Tai nghe Kanen IP350 hồng',
          sales: '120.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
      }, {
        id:'125',
          image: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
          name: 'Tai nghe Kanen IP892',
          sales: '240.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
      }, {
        id:'126',
          image: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
          name: 'Tai nghe Kanen IP2050',
          sales: '240.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
      }],
      Headphone3: [{
        id:'127',
          image: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
          name: 'Tai nghe Kanen IP2090',
          sales: '210.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
      }, {
        id:'128',
          image: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
          name: 'Tai nghe IP952',
          sales: '10.990.000đ',
          price:'11.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
      }, {
          id:'129',
          image: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
          name: 'Tai nghe Kanen IP9500',
          sales: '3.590.000đ',
          price: '3.990.000đ',
          image1: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
      }],
      title: 'Headphones'});

      try{
        const PhoneProduct4 = [{
            id:'121',
            image: '/images/tainghe1.jpg',
            name: 'Tai nghe Kanen IP-218',
            sales: '90.000đ',
            price: '150.000đ',
            image1: '/images/tainghe1.jpg',
            image2: '/images/tainghe1.jpg',
            image3: '/images/tainghe1.jpg',
          }, {
            id:'122',
            image: '/images/tainghe3.jpg',
            name: 'Tai nghe Awei Q19Hi',
            sales: '105.000đ',
            price: '150.000đ',
            image1: '/images/tainghe3.jpg',
            image2: '/images/tainghe3.jpg',
            image3: '/images/tainghe3.jpg',
          }, {
            id:'123',
              image: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
              name: 'Tai nghe Kanen IP350',
              sales: '120.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/54/74879/tai-nghe-chup-tai-kanen-ip-350-14-600x600-300x300.jpg',
          },{
            id:'124',
              image: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
              name: 'Tai nghe Kanen IP350 hồng',
              sales: '120.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/54/92416/tai-nghe-chup-tai-kanen-ip-350-hong-ava-600x600.jpg',
          }, {
            id:'125',
              image: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
              name: 'Tai nghe Kanen IP892',
              sales: '240.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/54/86504/tai-nghe-chup-tai-kanen-ip-892-2-5-600x600.jpg',
          }, {
            id:'126',
              image: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
              name: 'Tai nghe Kanen IP2050',
              sales: '240.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/68924/tai-nghe-chup-tai-kanen-ip-2050-ava-600x600.jpg',
          },{
            id:'127',
              image: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
              name: 'Tai nghe Kanen IP2090',
              sales: '210.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/74185/tai-nghe-chup-tai-kanen-ip-2090-2-3-600x600.jpg',
          }, {
            id:'128',
              image: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
              name: 'Tai nghe IP952',
              sales: '10.990.000đ',
              price:'11.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/54/70820/tai-nghe-chup-tai-kanen-ip-952-2-7-600x600.jpg',
          }, {
              id:'129',
              image: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
              name: 'Tai nghe Kanen IP9500',
              sales: '3.590.000đ',
              price: '3.990.000đ',
              image1: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/54/69461/tai-nghe-chup-tai-kanen-ip-9500-2-600x600.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.speakers = function(req, res, next){
  res.render('products/speakers',
  {
      Speaker1: [{
        id:'131',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
          name: 'Dàn loa DVD LG PK3',
          sales: '990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
      }, {
        id:'132',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
          name: 'Loa thanh Samsung HW K350',
          sales: '3.290.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
      }, {
        id:'133',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
          name: 'Dàn loa DVD Sony HT S100F',
          sales: '3.490.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
      }],
      Speaker2: [{
        id:'134',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
          name: 'Loa LG RL2',
          sales: '3.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
      }, {
        id:'135',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
          name: 'Loa Samsung HW R450',
          sales: '4.290.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
      }, {
        id:'136',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
          name: 'Loa LG OL45',
          sales: '4.290.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
      }],
      Speaker3: [{
        id:'137',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
          name: 'Loa DVD Samsung HT KW K450',
          sales: '4.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
      }, {
        id:'138',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
          name: 'Dàn loa Sony HT CT290',
          sales: '4.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
      }, {
          id:'139',
          image: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
          name: 'Loa LG PK5',
          sales: '5.000.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
      }],
      title: 'Loa'});


      try{
        const PhoneProduct4 = [{
            id:'131',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
              name: 'Dàn loa DVD LG PK3',
              sales: '990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/187454/dan-loa-dvd-lg-pk3-7-300x300.jpg',
          }, {
            id:'132',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
              name: 'Loa thanh Samsung HW K350',
              sales: '3.290.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/111617/loa-thanh-samsung-hw-k350-daidien-300x300.jpg',
          }, {
            id:'133',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
              name: 'Dàn loa DVD Sony HT S100F',
              sales: '3.490.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/162920/dan-loa-dvd-dan-loa-sony-ht-s100f-10-300x300.jpg',
          },{
            id:'134',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
              name: 'Loa LG RL2',
              sales: '3.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/202728/lg-rl2-4-300x300.jpg',
          }, {
            id:'135',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
              name: 'Loa Samsung HW R450',
              sales: '4.290.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/202261/samsung-hw-r450-300x300.jpg',
          }, {
            id:'136',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
              name: 'Loa LG OL45',
              sales: '4.290.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/202724/lg-ol45-1-300x300.jpg',
          },{
            id:'137',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
              name: 'Loa DVD Samsung HT KW K450',
              sales: '4.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/76033/dan-loa-dvd-samsung-ht-hw-k450-xv-300x300.jpg',
          }, {
            id:'138',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
              name: 'Dàn loa Sony HT CT290',
              sales: '4.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/104531/dan-may-sony-ht-ct290-bm-daidien-300x300.jpg',
          }, {
              id:'139',
              image: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
              name: 'Loa LG PK5',
              sales: '5.000.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2162/193422/lg-pk5-300x300.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.consoles = function(req, res, next){
  res.render('products/consoles',
  {
      Console1: [{
        id:'161',
          image: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
          name: 'PS4 Slim 1TB Days of Play Xám',
          sales: '8.990.000đ',
          price:'',
          image1: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
          image2: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
          image3: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
      }, {
        id:'162',
          image: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',
          name: 'PS4 Slim 500GB',
          sales: '6.990.000đ',
          price:'',
          image1: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',
          image2: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',
          image3: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',

      }, {
        id:'163',
          image: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
          name: 'PS4 Slim 500GB Days of Play Xanh',
          sales: '8.990.000đ',
          price: '',
          image1: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
          image2: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
          image3: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
      }],
      Console2: [{
        id:'164',
          image: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
          name: 'The Legend of Heroes: Trails of Cold Steel II - Relentless Edition',
          sales: '1.200.000đ',
          price:'',
          image1: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
          image2: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
          image3: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
      }, {
        id:'165',
          image: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
          name: 'Rage 2',
          sales: '1.200.000đ',
          price:'',
          image1: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
          image2: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
          image3: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
      }, {
          id:'166',
          image: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
          name: 'Team Sonic Racing',
          sales: '1.200.000đ',
          price: '',
          image1: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
          image2: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
          image3: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
      }],
      title: 'Consoles'});

      
      try{
        const PhoneProduct4 = [{
            id:'161',
              image: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
              name: 'PS4 Slim 1TB Days of Play Xám',
              sales: '8.990.000đ',
              price:'',
              image1: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
              image2: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
              image3: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1tb-days-of-play-2019-00-250x250.jpg',
          }, {
            id:'162',
              image: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',
              name: 'PS4 Slim 500GB',
              sales: '6.990.000đ',
              price:'',
              image1: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',
              image2: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',
              image3: 'https://haloshop.vn/image/cache/data/may-game/sony-playstation/ps4-slim-1-3-00-700x700.jpg',
    
          }, {
            id:'163',
              image: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
              name: 'PS4 Slim 500GB Days of Play Xanh',
              sales: '8.990.000đ',
              price: '',
              image1: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
              image2: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
              image3: 'https://product.hstatic.net/1000190106/product/dayofplayxanh_fa73b215df07495594a8ddb2f4e5245f_master.png',
          },{
            id:'164',
              image: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
              name: 'The Legend of Heroes: Trails of Cold Steel II - Relentless Edition',
              sales: '1.200.000đ',
              price:'',
              image1: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
              image2: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
              image3: 'https://product.hstatic.net/1000190106/product/81ehwubjmwl._ac_sl1500__b25d54a6aca44e6b98a60f99a9f2a2a2_master.jpg',
          }, {
            id:'165',
              image: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
              name: 'Rage 2',
              sales: '1.200.000đ',
              price:'',
              image1: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
              image2: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
              image3: 'https://product.hstatic.net/1000190106/product/1_2248030e5ff844b3897ea542b0acceb4_master.jpg',
          }, {
              id:'166',
              image: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
              name: 'Team Sonic Racing',
              sales: '1.200.000đ',
              price: '',
              image1: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
              image2: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
              image3: 'https://product.hstatic.net/1000190106/product/51mu9-4w7kl_d6b27e8407aa413c8f6baa4517225e65_master.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};

exports.maylanh = function(req, res, next){
  res.render('products/maylanh',
  {
      Aircon1: [{
        id:'171',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
          name: 'Máy lạnh Samsung AR10RYFTAURNSV',
          sales: '8.790.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
      }, {
        id:'172',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
          name: 'Máy lạnh Beko RSVC09VS',
          sales: '7.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
      }, {
        id:'173',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
          name: 'Máy lạnh Samsung AR13RYFTAURNSV',
          sales: '9.790.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
      }],
      Aircon2: [{
        id:'174',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
          name: 'Máy lạnh Beko RSVC12VS',
          sales: '9.490.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
      }, {
        id:'175',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',
          name: 'Máy lạnh LG V10ENH',
          sales: '4.290.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',

      }, {
        id:'176',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
          name: 'Máy lạnh Midea MSAF 10CRN8',
          sales: '8.790.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
      }],
      Aircon3: [{
        id:'177',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
          name: 'Máy lạnh Daikin ATKQ25TAVMV',
          sales: '6.090.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
      }, {
        id:'178',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
          name: 'Máy lạnh Panasonic CU CS PU9UKH',
          sales: '8.790.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
      }, {
          id:'179',
          image: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
          name: 'Máy lạnh Sharp AH X9VEW',
          sales: '7.990.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
      }],
      title: 'Máy lạnh'});

      try{
        const PhoneProduct4 = [{
            id:'171',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
              name: 'Máy lạnh Samsung AR10RYFTAURNSV',
              sales: '8.790.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/198945/samsung-ar10ryftaurnsv-550x160.jpg',
          }, {
            id:'172',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
              name: 'Máy lạnh Beko RSVC09VS',
              sales: '7.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/198109/may-lanh-beko-rsvc09vs-5-550x160.jpg',
          }, {
            id:'173',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
              name: 'Máy lạnh Samsung AR13RYFTAURNSV',
              sales: '9.790.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/198946/may-lanh-samsung-ar13ryftaurnsv-8-550x160.jpg',
          },{
            id:'174',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
              name: 'Máy lạnh Beko RSVC12VS',
              sales: '9.490.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/198110/beko-rsvc12vs-550x160.jpg',
          }, {
            id:'175',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',
              name: 'Máy lạnh LG V10ENH',
              sales: '4.290.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/198373/may-lanh-lg-v10enh-1-550x160.jpg',
    
          }, {
            id:'176',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
              name: 'Máy lạnh Midea MSAF 10CRN8',
              sales: '8.790.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/198832/midea-msaf-10crn8-550x160.JPG',
          },{
            id:'177',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
              name: 'Máy lạnh Daikin ATKQ25TAVMV',
              sales: '6.090.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/200017/daikin-atkq25tavmv-1-550x160.jpg',
          }, {
            id:'178',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
              name: 'Máy lạnh Panasonic CU CS PU9UKH',
              sales: '8.790.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/153850/may-lanh-panasonic-cu-cs-pu9ukh-8-dd-550x160.jpg',
          }, {
              id:'179',
              image: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
              name: 'Máy lạnh Sharp AH X9VEW',
              sales: '7.990.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/2002/154262/may-lanh-sharp-ah-x9vew-dd-1-550x160.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }

};

exports.tulanh = function(req, res, next){
  res.render('products/tulanh',
  {
      Tulanh1: [{
        id:'181',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
          name: 'Tủ lạnh Samsung RT32K5930DX',
          sales: '11.720.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
      }, {
        id:'182',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
          name: 'Tủ lạnh Samsung RT29K5012S8',
          sales: '8.720.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
      }, {
        id:'183',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
          name: 'Tủ lạnh Sharp SJ FX630V',
          sales: '18.990.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
      }],
      Tulanh2: [{
        id:'184',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
          name: 'Tủ lạnh Beko RCNT 375E50VZX',
          sales: '11.890.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
      }, {
        id:'185',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          name: 'Tủ lạnh Samsung RT19M300BGS',
          sales: '5.790.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
      }, {
        id:'186',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
          name: 'Tủ lạnh Panasonic NR BA228PKV1',
          sales: '6.090.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
      }],
      Tulanh3: [{
        id:'187',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
          name: 'Tủ lạnh Samsung RT22M4032DX',
          sales: '7.070.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
      }, {
        id:'188',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
          name: 'Tủ lạnh Panasonic NR BL267PKV1',
          sales: '7.890.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
      }, {
          id:'189',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          name: 'Tủ lạnh Samsung RT19M300BGS',
          sales: '5.790.000đ',
          price: '',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
      }],
      title: 'Tủ lạnh'});

      try{
        const PhoneProduct4 = [{
            id:'181',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
              name: 'Tủ lạnh Samsung RT32K5930DX',
              sales: '11.720.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/156182/tu-lanh-samsung-rt32k5930dx-sv-dd-2-300x300.jpg',
          }, {
            id:'182',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
              name: 'Tủ lạnh Samsung RT29K5012S8',
              sales: '8.720.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/88627/samsung-rt29k5012s8-sv-daidien-1-300x300.jpg',
          }, {
            id:'183',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
              name: 'Tủ lạnh Sharp SJ FX630V',
              sales: '18.990.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/74706/sharp-sj-fx630v-st--300x300.jpg',
          },{
            id:'184',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
              name: 'Tủ lạnh Beko RCNT 375E50VZX',
              sales: '11.890.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/140013/beko-rcnt-375e50vzx-300x300.png',
          }, {
            id:'185',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
              name: 'Tủ lạnh Samsung RT19M300BGS',
              sales: '5.790.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          }, {
            id:'186',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
              name: 'Tủ lạnh Panasonic NR BA228PKV1',
              sales: '6.090.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/97813/panasonic-nr-ba228pkv1--300x300.jpg',
          },{
            id:'187',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
              name: 'Tủ lạnh Samsung RT22M4032DX',
              sales: '7.070.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/156181/samsung-rt22m4032dx-sv-14-300x300.jpg',
          }, {
            id:'188',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
              name: 'Tủ lạnh Panasonic NR BL267PKV1',
              sales: '7.890.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1943/179592/tu-lanh-panasonic-nr-bl267pkv1-15-300x300.jpg',
          }, {
              id:'189',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
              name: 'Tủ lạnh Samsung RT19M300BGS',
              sales: '5.790.000đ',
              price: '',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
              image: 'https://cdn.tgdd.vn/Products/Images/1943/108366/tu-lanh-samsung-rt19m300bgs-sv-1-300x300.png',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }

};

exports.maygiat = function(req, res, next){
  res.render('products/maygiat',
  {
      Maygiat1: [{
        id:'191',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
          name: 'Máy giặt Samsung WW90K52E0WW',
          sales: '12.600.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
      }, {
        id:'192',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
          name: 'Máy giặt Electrolux EWF8025CQWA',
          sales: '8.990.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
      }, {
        id:'193',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
          name: 'Máy giặt Beko WTE 7512',
          sales: '7.290.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
      }],
      Maygiat2: [{
        id:'194',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
          name: 'Máy giặt Electrolux EWF9024BDWA',
          sales: '12.390.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
      }, {
        id:'195',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
          name: 'Máy giặt Panasonic NA F90A4GRV',
          sales: '6.690.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
      }, {
        id:'196',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
          name: 'Máy giặt Panasonic NA F85A4HRV',
          sales: '6.090.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
      }],
      Maygiat3: [{
        id:'197',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
          name: 'Máy giặt Toshiba AW A800SV',
          sales: '4.190.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
      }, {
        id:'198',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',
          name: 'Máy giặt Toshiba AW F920LV',
          sales: '5.190.000đ',
          price:'',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',

      }, {
          id:'199',
          image: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
          name: 'Máy giặt LG FC1408S4W2',
          sales: '10.490.000đ',
          price: '',
          image1: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
          image2: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
          image3: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
      }],
      title: 'Máy giặt'});

      try{
        const PhoneProduct4 = [{
            id:'191',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
              name: 'Máy giặt Samsung WW90K52E0WW',
              sales: '12.600.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/155202/may-giat-samsung-ww90k52e0ww-sv-dd-300x300.jpg',
          }, {
            id:'192',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
              name: 'Máy giặt Electrolux EWF8025CQWA',
              sales: '8.990.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/193540/may-giat-electrolux-ewf8025cqwa-7-300x300.jpg',
          }, {
            id:'193',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
              name: 'Máy giặt Beko WTE 7512',
              sales: '7.290.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/151640/beko-wte-7512-xs0-9-300x300.jpg',
          },{
            id:'194',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
              name: 'Máy giặt Electrolux EWF9024BDWA',
              sales: '12.390.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/201176/electrolux-ewf9024bdwa-10-300x300.jpg',
          }, {
            id:'195',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
              name: 'Máy giặt Panasonic NA F90A4GRV',
              sales: '6.690.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/104228/may-giat-panasonic-na-f90a4grv-daidien-300x300.jpg',
          }, {
            id:'196',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
              name: 'Máy giặt Panasonic NA F85A4HRV',
              sales: '6.090.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/103391/may-giat-panasonic-na-f85a4hrv-1-300x300.png',
          },{
            id:'197',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
              name: 'Máy giặt Toshiba AW A800SV',
              sales: '4.190.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/79323/may-giat-toshiba-aw-a800sv-wb-6-300x300.jpg',
          }, {
            id:'198',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',
              name: 'Máy giặt Toshiba AW F920LV',
              sales: '5.190.000đ',
              price:'',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/74103/may-giat-toshiba-aw-f920lv-wb-daidien-300x300.jpg',
    
          }, {
              id:'199',
              image: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
              name: 'Máy giặt LG FC1408S4W2',
              sales: '10.490.000đ',
              price: '',
              image1: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
              image2: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
              image3: 'https://cdn.tgdd.vn/Products/Images/1944/103903/may-giat-lg-fc1408s4w2-daidien-300x300.jpg',
          }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }
};
