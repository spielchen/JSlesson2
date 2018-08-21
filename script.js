var budget = prompt("Ваш бюджет на месяц?");
var nameShop = prompt("Название вашего магазина?");

var mainList = {
		budget,
		nameShop, 
		shopGoods: [],
		employers:{},
		openShop: true
};

		for (var i = 0; i < 3; i++) {
			var a = prompt("Какой тип товаров будем продавать?");
			
			if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
				console.log('Все верно!');
				
			} else if(a === '') {
				alert("Введите товар!");
				var a = prompt("Какой тип товаров будем продавать?");
				}
			mainList.shopGoods[i] = a;
	}

// Второй способ

	/*var i = 0;
		while (i<3){
			var a = prompt("Какой тип товаров будем продавать?");
			mainList.shopGoods[i] = a;
			i++;
		}*/

// Третий способ

/*var i = 0;
do{
	var a = prompt("Какой тип товаров будем продавать?");
			mainList.shopGoods[i] = a;
			i++;
}
while(i<3);*/

console.log('Бюджет за 1 день: '+Math.floor(budget/30));
console.log(mainList);