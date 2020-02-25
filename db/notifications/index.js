const notification = require('./item')

const list = []
for (let i = 1; i < 100; i++) {
  const item = Object.assign({}, notification)
  item.id = i
  list.push(item)
}

module.exports = list
