const moment =  require('moment/moment')
// const moment = require('moment-timezone')


module.exports = [
    {
        title: 'Maratha Contribution in Trupati Mandir',
        data: moment().calendar(),
        categories: ['Tirupati', 'Raghujiraje'],
        link: '#',
        image: 'raghujiraje-tirupati.jpg',
    },
    {
        title: 'Panipat War casualty Part 1',
        data: moment().format('MMMM DD, YYYY'),
        categories: ['Panipat', 'Mahratta'],
        link: '#',
        image: 'panipat-casualty-1.jpg',
    },
    {
        title: 'Panipat War casualty Part 2',
        data: moment().format('MMMM DD, YYYY'),
        categories: ['Panipat', 'Mahratta'],
        link: '#',
        image: 'panipat-casualty-2.jpg',
    },
    {
        title: 'German book on mahrattas and shivaji maharaj',
        data: moment().format('MMMM DD, YYYY'),
        categories: ['German Book', 'ShivajiMaharaj'],
        link: '#',
        image: 'shivajimaharaj.jpg',
    },
    {
        title: '18_British scholar villam vincent on marathas and maharashtra',
        data: moment().format('MMMM DD, YYYY'),
        categories: ['British', 'Mahratta'],
        link: '#',
        image: 'mahratta_cavalry.jpg',
    }
    
]