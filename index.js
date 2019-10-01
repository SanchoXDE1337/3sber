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
        let price = menu[coffee] + parseInt(charity);
        console.log(`Вы заказали ${coffee} и сделали пожертвование, с вас ${price}`)
    } else {
        console.log('Хуй');
    }

};

const order = () => {
    const donation = '10';
    let coffee = baristaAsk();
    baristaSay(coffee, donation);
};

order();