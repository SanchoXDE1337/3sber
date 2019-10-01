const menu = {
    'ЛАТТЕ': 100,
    'БАНАНОВЫЙ КАПУЧИНО': 120,
    'ВАНИЛЬНЫЙ РАФ': 110,
    'АМЕРИКАНО': 90
};

const baristaAsk = () => prompt('Что желаете?', '');


const baristaSay = (coffee, charity) => {
    coffee = coffee.toUpperCase();
    if (Object.keys(menu).includes(coffee)) {
        let price = menu[coffee];
        if (confirm("Пожертвавать бедным неграм?")) {
            price += parseInt(charity);
            return alert(`Вы заказали ${coffee} и сделали пожертвование, с вас ${price}`);
        }
        return alert(`Вы заказали ${coffee}, WHITE POWER, с вас ${price}`);
    } else {
        alert('Хуй');
    }
};

const order = () => {
    const donation = '10';
    let coffee = baristaAsk();
    baristaSay(coffee, donation);
};
let button = document.querySelector('button');
button.addEventListener('click', order);