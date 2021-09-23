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

const newArray = orders.map(item => item.total)

console.log('original', orders)
console.log('newArray', newArray)

const newArray2 = orders.map(item => ( {...item, tax: .19} ))
console.log('newArray2', newArray2)
