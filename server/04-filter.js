const fruits = ['apple', 'banana', 'pear', 'kiwi'];

let newArray = [];
for(let index = 0; index < fruits.length; index++) {
  const item = fruits[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}

// for vs filter

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta2 = orders.filter(item => item.delivered && item.total >= 100)

const search = query => {
  return orders.filter(item => {
    return item.customerName.toLowerCase().includes(query.toLowerCase())  
  })
}