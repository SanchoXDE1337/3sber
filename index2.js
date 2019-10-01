const recipes = {
    'банановый латте': ['банановый сироп', 'молоко', 'кофе'],
    'черничный капучино': ['черничный сироп', 'молоко', 'кофе'],
    'баунти раф': ['раф-основа', 'кокосовое молоко', 'розовая соль'],
    'американо': ['кофе']
};

const cookies = ['шоколадное', 'овсяное', 'мятное', 'малиновое']

const box = {
    'банановый сироп': 2,
    'черничный сироп': 0,
    'молоко': 10,
    'кофе': 10,
    'раф-основа': 3,
    'кокосовое молоко': 0,
    'розовая соль': 1
}


function checkOrderItem() {
    let order = prompt('Шо заказываем?', '');
    let ok = true;
    if (Object.keys(recipes).includes(order)) {
        let recipe = recipes[order];
        recipe.map(function(ingredient) {
            if (box[ingredient] === 0) {
                ok = false;
            }
        });
        return ok;
    } else {
        alert('Такого нет');
        return ok = false;
    }

}

const order = () => {
    let ok = checkOrderItem();
    let cookie = true;
    if (confirm('Печеньки будут?')) {
        const order = prompt('Шо заказываем?', '');
        cookie = cookies.indexOf(order);
    }
    if (ok && (cookie !== -1)) {
        alert('Готово');
    } else {
        alert('Наличие отсутствия');
    }
};
/*
function checkIngredients(coffee){

}*/
/*

function order(coffee, cookie) {

    const dictionary = {
        allOk:`Вот ваш заказ: ${coffee} и ${cookie} печенье! Хорошего дня!`,
        allNotOk:`Мы не можем обработать ваш заказ, извините.`,
        noCookie:`К сожалению, у нас нет такого печенья. Вот ваш ${coffee}`,
        noCoffee:`К сожалению, сейчас не можем приготовить ${coffee}. Вот ваше ${cookie} печенье`,
    }

    console.log('-----Следующий заказ-----')
}

order('американо', 'мятное')
order('баунти раф', 'апельсиновое')
order('банановый латте', 'мятное')
order('баунти раф', 'малиновое')*/
let button = document.querySelector('button');
button.addEventListener('click', order);