const input =
{
    Items:
        [
            {
                name: 'oval hat', // product name
                type: 'hats', // product type
                prices: [
                    {
                        priceFor: 'regular', // price is valid for
                        price: 20000, // the price
                    },
                    {
                        priceFor: 'VIP', // price is valid for
                        price: 15000, // the price
                    },
                ]
            }, {
                name: 'square hat', // product name
                type: 'hats', // product type
                prices: [
                    {
                        priceFor: 'regular', // price is valid for
                        price: 30000, // the price
                    },
                    {
                        priceFor: 'VIP', // price is valid for
                        price: 20000, // the price
                    },
                    {
                        priceFor: 'wholesale', // price is valid for
                        price: 15000, // the price					
                    }
                ]
            }, {
                name: 'magic shirt', // product name
                type: 'tops', // product type
                prices: [
                    {
                        priceFor: 'regular', // price is valid for
                        price: 50000, // the price
                    }
                ]
            }
        ],
    Buyers:
        [
            {
                name: 'Ani', // buyer name
                type: 'regular', // buyer type - VIP, regular, wholesale
            }, {
                name: 'Budi', // buyer name
                type: 'VIP', // buyer type - VIP, regular, wholesale
            }, {
                name: 'Charlie',
                type: 'regular'
            }, {
                name: 'Dipta',
                type: 'wholesale'
            }
        ],
    Transaction:
        [
            {
                item: 'magic shirt', // product name
                qty: 1, // buying quantity
                buyer: 'Ani' // buyer name
            }, {
                item: 'square hat', // product name
                qty: 2, // buying quantity
                buyer: 'Budi' // buyer name
            }, {
                item: 'magic shirt', // product name
                qty: 1, // buying quantity
                buyer: 'Ani' // buyer name
            }, {
                item: 'oval hat', // product name
                qty: 1, // buying quantity
                buyer: 'Ani' // buyer name
            }, {
                item: 'square hat',
                qty: 100,
                buyer: 'Dipta'
            },
        ]
}

const totalNumberTransaction = (data) => {
    return data.Transaction.length;
};
console.log('totalTransactions: ', totalNumberTransaction(input), 'transactions');

var bestSellingItemName = '';
const bestSellingItems = (array) => {
    let newArray = [];
    array.Transaction.forEach(item => {
        if (!isExist(newArray, item.item, null).found) {
            newArray.push({
                item: item.item,
                qty: item.qty
            });
        } else {
            const index = isExist(newArray, item.item, null).index;
            newArray[index].qty = newArray[index].qty + item.qty;
        }
    });
    const sortedArray = newArray.sort((a, b) => (a.qty < b.qty) ? 1 : -1);
    const bestSellingItem = sortedArray[0].item;
    bestSellingItemName = sortedArray[0].item;
    return bestSellingItem;
};
console.log('bestSellingItem: ', bestSellingItems(input));


const bestSellingCategory = (array, bestSellingItemsName) => {
    if (isExist(array, null, bestSellingItemsName).found) {
        const index = isExist(array, null, bestSellingItemsName).index;
        const data = array[index].type;
        return data;
    }
};

console.log('bestSellingCategory: ', bestSellingCategory(input.Items, bestSellingItemName));

function isExist(arr, item, name) {
    if (item) {
        const found = arr.some(el => el.item === item);
        const index = arr.findIndex(el => el.item === item);
        return {
            found: found,
            index: index
        };
    } else if (name) {
        const found = arr.some(el => el.name === name);
        const index = arr.findIndex(el => el.name === name);
        return {
            found: found,
            index: index
        };
    }
}

const revenuePerCategory = (price, Items) => {
    let rpc = [];

}

const revenue = (data) => {
    return data.Transaction.length;
};
console.log('revenue: ', revenue(input));