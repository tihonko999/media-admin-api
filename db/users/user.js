const faker = require('faker')

const roles = [
  {id: 1, title: 'Администратор'},
  {id: 2, title: 'Региональный администратор'},
  {id: 3, title: 'Выпускающий редактор'},
  {id: 4, title: 'Редактор'},
  {id: 5, title: 'Фото-редактор'},
  {id: 6, title: 'Журналист'},
  {id: 7, title: 'Трафик-менеджер'},
  {id: 8, title: 'Корректор'},
]

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const userRole = roles[Math.floor(Math.random() * Math.floor(roles.length))]

module.exports = {
  id: 1,
  name: firstName,
  surname: lastName,
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  active: Boolean(Math.floor(Math.random() * Math.floor(2))),
  subscribed: Boolean(Math.floor(Math.random() * Math.floor(2))),
  created_at: faker.date.past(),
  platform_ids: [39, 19, 22, 12, 26],
  full_name: `${firstName} ${lastName}`,
  role: {
    id: userRole.id,
    name: userRole.title,
    rank: userRole.id,
    resource_id: null,
    resource_type: null,
  },
}
