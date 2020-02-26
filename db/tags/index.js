const faker = require('faker')

const tags = []

for (let i = 1; i < 100; i++) {
  const firstName = faker.name.firstName()

  const tag = {
    id: i,
    text: firstName,
    platform_id: 12,
    matters_total: Math.floor(Math.random() * Math.floor(10)),
  }
  const item = Object.assign({}, tag)
  item.id = i
  tags.push(item)
}

module.exports = tags
