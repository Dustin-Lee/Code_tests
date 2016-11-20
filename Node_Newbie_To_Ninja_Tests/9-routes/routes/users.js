const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    res.send(users);
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    if(user) {
      res.send(user);
    } else {
      res.status(404).send(`User ${id} does not exist!`);
    }
  })
  .delete('/:id', (req, res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id == id);
    if(index > -1) {
      users.splice(index, 1);
      res.sendStatus(200);
    } else {
      res.status(404).send(`User ${id} does not exist`);
    }
  })

module.exports = router;

var users = [{
  "id": 1,
  "first_name": "Johnny",
  "last_name": "Wheeler",
  "email": "jwheeler0@statcounter.com",
  "gender": "Male",
  "ip_address": "96.47.219.22"
}, {
  "id": 2,
  "first_name": "Wanda",
  "last_name": "Smith",
  "email": "wsmith1@technorati.com",
  "gender": "Female",
  "ip_address": "117.110.100.203"
}, {
  "id": 3,
  "first_name": "Ryan",
  "last_name": "Bishop",
  "email": "rbishop2@statcounter.com",
  "gender": "Male",
  "ip_address": "172.92.245.53"
}, {
  "id": 4,
  "first_name": "Henry",
  "last_name": "Larson",
  "email": "hlarson3@godaddy.com",
  "gender": "Male",
  "ip_address": "143.50.219.97"
}, {
  "id": 5,
  "first_name": "Matthew",
  "last_name": "Hamilton",
  "email": "mhamilton4@i2i.jp",
  "gender": "Male",
  "ip_address": "20.147.47.164"
}, {
  "id": 6,
  "first_name": "Melissa",
  "last_name": "Patterson",
  "email": "mpatterson5@miitbeian.gov.cn",
  "gender": "Female",
  "ip_address": "203.242.71.213"
}, {
  "id": 7,
  "first_name": "Alan",
  "last_name": "Bennett",
  "email": "abennett6@themeforest.net",
  "gender": "Male",
  "ip_address": "242.48.30.211"
}, {
  "id": 8,
  "first_name": "Steven",
  "last_name": "Rose",
  "email": "srose7@deviantart.com",
  "gender": "Male",
  "ip_address": "156.179.102.115"
}, {
  "id": 9,
  "first_name": "Earl",
  "last_name": "Wilson",
  "email": "ewilson8@blog.com",
  "gender": "Male",
  "ip_address": "222.253.238.197"
}, {
  "id": 10,
  "first_name": "Linda",
  "last_name": "Fields",
  "email": "lfields9@goo.gl",
  "gender": "Female",
  "ip_address": "93.61.87.23"
}, {
  "id": 11,
  "first_name": "Rachel",
  "last_name": "Mitchell",
  "email": "rmitchella@comsenz.com",
  "gender": "Female",
  "ip_address": "159.249.180.254"
}, {
  "id": 12,
  "first_name": "Michelle",
  "last_name": "Tucker",
  "email": "mtuckerb@list-manage.com",
  "gender": "Female",
  "ip_address": "121.110.100.220"
}, {
  "id": 13,
  "first_name": "Rose",
  "last_name": "Harper",
  "email": "rharperc@comcast.net",
  "gender": "Female",
  "ip_address": "158.135.59.143"
}, {
  "id": 14,
  "first_name": "Charles",
  "last_name": "Long",
  "email": "clongd@jalbum.net",
  "gender": "Male",
  "ip_address": "95.227.187.244"
}, {
  "id": 15,
  "first_name": "Charles",
  "last_name": "Bailey",
  "email": "cbaileye@noaa.gov",
  "gender": "Male",
  "ip_address": "138.195.171.120"
}, {
  "id": 16,
  "first_name": "Steven",
  "last_name": "Cooper",
  "email": "scooperf@whitehouse.gov",
  "gender": "Male",
  "ip_address": "16.55.74.153"
}, {
  "id": 17,
  "first_name": "Gerald",
  "last_name": "Long",
  "email": "glongg@posterous.com",
  "gender": "Male",
  "ip_address": "216.208.202.84"
}, {
  "id": 18,
  "first_name": "Christopher",
  "last_name": "James",
  "email": "cjamesh@aol.com",
  "gender": "Male",
  "ip_address": "116.70.141.181"
}, {
  "id": 19,
  "first_name": "Robert",
  "last_name": "Martinez",
  "email": "rmartinezi@homestead.com",
  "gender": "Male",
  "ip_address": "153.29.131.72"
}, {
  "id": 20,
  "first_name": "Victor",
  "last_name": "Rice",
  "email": "vricej@squidoo.com",
  "gender": "Male",
  "ip_address": "65.164.201.93"
}]
