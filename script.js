/* задание 1 */
function getNum( num ) {
    var obj = {};
    if ( num < 1 || num > 999 || isNaN( num )) {
        console.log( 'Ошибка. Введите число от 1 до 999' );
        return obj;
    }
    else {
        obj[ 'едининцы' ] = num % 10;
        obj[ 'десятки' ] = ( num - obj[ 'едининцы' ]) % 100 / 10;
        obj[ 'сотни' ] = ( num - obj[ 'едининцы' ] - obj[ 'десятки' ] * 10 ) % 1000 / 100;
        return obj;
    }
}
var a = prompt('Введите число от 0 до 999');
console.log( getNum(a));

/* задание 3*/
function chessboard() {
    var newTable = document.createElement( 'table' ),
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigs1 = [ '8','','','','','','','','','8' ],
        whiteFigs1 = [ '1','','','','','','','','','1' ],
        blackFigs2 = [ '7','','','','','','','','','7' ],
        whiteFigs2 = [ '2','','','','','','','','','2' ];
    for ( var i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        var newTr = newTable.insertRow(i);
        for ( var j = 0; j < 10; j++ ) {
            var newTd = newTr.insertCell( j );
                        switch (i) {
                case 0:
                    newTd.innerText = lets[ j ];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    newTd.innerText = lets[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    var elem = document.getElementsByClassName( 'chess' );
    document.body.appendChild( newTable );
};
chessboard();


/* Задание 2*/
let basket = {
    goodList: [],
    countTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < products.length; i++) {
            let goodsItem = this.goodList[i]; 
            totalPrice += goodsItem.price * goodsItem.count;
        }
        return totalPrice;
    },
    countTotalNumber() {
        let totalCount = 0;
        for (let i = 0; i < products.length; i++) {
            let goodsItem = this.goodList[i]; 
            totalCount += goodsItem.count;
        }
        return totalCount;
    },
    putProduct(product, count) {
        let goodsItem = { 
            product,
            price: product.price,
            count
        }; 
        this.goodList.push(goodsItem);
    }
};
 
let products = [];
for (let i = 1; i < (parseInt(Math.random() * 10) + 2); i++) {
    let product = {
        name: 'name' + i,
        price: parseInt(Math.random() * 10000) / 100
    };
    products.push(product);
}
console.log(products);
 
for (let i = 1; i <= products.length; i++) {
    // положить в корзину по одному товару на четной позиции и по 2 товара на нечетной позиции
    let count = i % 2 ? 2 : 1;
    basket.putProduct(products[i - 1], count);
}
console.log(basket);
console.log('Общая цена: ' + basket.countTotalPrice().toFixed(2));
console.log('Общее количество: ' + basket.countTotalNumber());

/*-----------------------------*/
/*let NewProduct = {
        name: 'Наименование',
        price: 0,
        count: 0
    };
	
let tovar = [];

    for (let i = 1; i < 4; i++) {
        let obj = {};
        Object.assign(obj, NewProduct);
        obj.name = 'name' + i;
        obj.price = parseInt(Math.random() * 10000) / 100;
        obj.count = parseInt(Math.random() * 10) + 1;
        tovar.push(obj);
    }

console.log(tovar);	

	
const basket = {
  goodList: []/*,
  price() {																							
    return this.goodList.reduce((sum, item) => sum + item.price * item.count, 0);
  }*/
/*};

/*for (let i = 0; i < (parseInt(Math.random() * 10) + 2); i++) {
  basket.goodList.push({
    name: 'name' + i,
    price: parseInt(Math.random() * 10000) / 100,
    count: parseInt(Math.random() * 10) + 1
  });
}*/
/*basket.putProduct=function(tovar,basket){
	for (let j = 0; j < tovar.length; j++){
	if (j%2==0) {
		basket.goodList.push(tovar[j]);	
	} else {
		basket.goodList.push(tovar[j]);	
	}
}	
}

basket.countTotalPrice=function(basket){
	  let totalPrice = 0;
    basket.goodList.forEach(function (item) {
        totalPrice += item.count * item.price;
    });
    return totalPrice;
	}
basket.countTotalNumber=function(basket){
		let totalNumber = 0;
	 basket.goodList.forEach(function (item) {
        totalNumber += item.count;
    });
    return totalNumber;
	}	


	//return basket.goodList.length;
console.log(' ' + basket.putProduct(tovar,basket));	
console.log(basket);	
console.log('Общая цена: ' + basket.countTotalPrice(basket).toFixed(2)); 
console.log('Общее количество: ' + basket.countTotalNumber(basket));


*/
/*--------------------------------*/
