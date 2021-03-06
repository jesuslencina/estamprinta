const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyDhcqswyx-pc1lx2NXsq5feefXJ-tCkEqM',
  authDomain: 'estamprintas.firebaseapp.com',
  projectId: 'estamprintas',
});

var db = firebase.firestore();
var stamps = [
  {
    id: 0,
    category: 'paisajes',
    origin: 'arg',
    title: 'Agricultura',
    img: 'https://i.imgur.com/ulqQGI3.jpg',
    price: 40,
    stock: 27,
  },
  {
    id: 1,
    category: 'otros',
    origin: 'arg',
    title: 'Argentina en mapamundi',
    img: 'https://i.imgur.com/Q0xX8yw.jpg',
    price: 70,
    stock: 4,
  },

  {
    id: 2,
    category: 'flores',
    origin: 'arg',
    title: 'Begonia',
    img: 'https://i.imgur.com/nu9VuOp.jpg',
    price: 15,
    stock: 50,
  },
  {
    id: 3,
    category: 'animales',
    origin: 'pkr',
    title: 'Brontosaurio',
    img: 'https://i.imgur.com/iGwz1nP.jpg',
    price: 120,
    stock: 4,
  },
  {
    id: 4,
    category: 'flores',
    origin: 'arg',
    title: 'Campanilla',
    img: 'https://i.imgur.com/qxdeyOZ.jpg',
    price: 24,
    stock: 36,
  },
  {
    id: 5,
    category: 'paisajes',
    origin: 'arg',
    title: 'Cañas de azúcar',
    img: 'https://i.imgur.com/xGuhZYh.jpg',
    price: 25,
    stock: 14,
  },
  {
    id: 6,
    category: 'flores',
    origin: 'arg',
    title: 'Carnaval',
    img: 'https://i.imgur.com/d4hLdSM.jpg',
    price: 17,
    stock: 14,
  },
  {
    id: 7,
    category: 'flores',
    origin: 'arg',
    title: 'Chinita del campo',
    img: 'https://i.imgur.com/H5jRGiu.jpg',
    price: 22,
    stock: 27,
  },

  {
    id: 8,
    category: 'otros',
    origin: 'arg',
    title: 'Coloque sus estampillas',
    img: 'https://i.imgur.com/rpLPRvs.jpg',
    price: 2,
    stock: 14,
  },
  {
    id: 9,
    category: 'otros',
    origin: 'arg',
    title: 'Correo aéreo',
    img: 'https://i.imgur.com/QHxhb8g.jpg',
    price: 5,
    stock: 15,
  },
  {
    id: 10,
    category: 'animales',
    origin: 'pkr',
    title: 'Cynognathus',
    img: 'https://i.imgur.com/gJts4kV.jpg',
    price: 540,
    stock: 18,
  },
  {
    id: 11,
    category: 'personas',
    origin: 'arg',
    title: 'Eva Perón',
    img: 'https://i.imgur.com/9gLzKsL.jpg',
    price: 34,
    stock: 14,
  },
  {
    id: 12,
    category: 'flores',
    origin: 'arg',
    title: 'Flor de cáctus',
    img: 'https://i.imgur.com/14nGP7X.jpg',
    price: 24,
    stock: 28,
  },
  {
    id: 13,
    category: 'flores',
    origin: 'arg',
    title: 'Flor de patito',
    img: 'https://i.imgur.com/qU89S6b.jpg',
    price: 28,
    stock: 14,
  },
  {
    id: 14,
    category: 'otros',
    origin: 'arg',
    title: 'Fruticultura',
    img: 'https://i.imgur.com/c0Fltq0.jpg',
    price: 6,
    stock: 4,
  },
  {
    id: 15,
    category: 'animales',
    origin: 'arg',
    title: 'Ganadería',
    img: 'https://i.imgur.com/c8fyQyd.jpg',
    price: 14,
    stock: 26,
  },
  {
    id: 16,
    category: 'paisajes',
    origin: 'arg',
    title: 'Paisaje ganadería',
    img: 'https://i.imgur.com/5aIymT6.jpg',
    price: 44,
    stock: 15,
  },
  {
    id: 17,
    category: 'flores',
    origin: 'arg',
    title: 'Girasol',
    img: 'https://i.imgur.com/iqNZyWo.jpg',
    price: 14,
    stock: 6,
  },
  {
    id: 18,
    category: 'flores',
    origin: 'arg',
    title: 'Girasol 2',
    img: 'https://i.imgur.com/OXnKKaf.jpg',
    price: 16,
    stock: 12,
  },
  {
    id: 19,
    category: 'animales',
    origin: 'pkr',
    title: 'Itchiosaurio',
    img: 'https://i.imgur.com/VtxhkBK.jpg',
    price: 205,
    stock: 41,
  },
  {
    id: 20,
    category: 'personas',
    origin: 'arg',
    title: 'Mariano Moreno',
    img: 'https://i.imgur.com/vNm8zoI.jpg',
    price: 27,
    stock: 16,
  },
  {
    id: 21,
    category: 'paisajes',
    origin: 'arg',
    title: 'Puente del Inca',
    img: 'https://i.imgur.com/nOeDVch.jpg',
    price: 40,
    stock: 25,
  },
  {
    id: 22,
    category: 'flores',
    origin: 'arg',
    title: 'Ciruelillo',
    img: 'https://i.imgur.com/m2wNXHl.jpg',
    price: 22,
    stock: 14,
  },
  {
    id: 23,
    category: 'flores',
    origin: 'arg',
    title: 'Palo borracho',
    img: 'https://i.imgur.com/f1HIZm7.jpg',
    price: 18,
    stock: 9,
  },
  {
    id: 24,
    category: 'flores',
    origin: 'arg',
    title: 'Pata de vaca',
    img: 'https://i.imgur.com/25M931P.jpg',
    price: 14,
    stock: 9,
  },
  {
    id: 25,
    category: 'paisajes',
    origin: 'arg',
    title: 'Pozo de petróleo',
    img: 'https://i.imgur.com/bqBwUF8.jpg',
    price: 14,
    stock: 9,
  },
  {
    id: 26,
    category: 'animales',
    origin: 'pkr',
    title: 'Terodáctilo',
    img: 'https://i.imgur.com/Etj4jei.jpg',
    price: 420,
    stock: 111,
  },
  {
    id: 27,
    category: 'paisajes',
    origin: 'arg',
    title: 'Quebracho colorado',
    img: 'https://i.imgur.com/YRSAPQm.jpg',
    price: 26,
    stock: 13,
  },
  {
    id: 28,
    category: 'personas',
    origin: 'arg',
    title: 'San Martín',
    img: 'https://i.imgur.com/knauCZy.jpg',
    price: 48,
    stock: 7,
  },
  {
    id: 29,
    category: 'personas',
    origin: 'arg',
    title: 'Sarmiento',
    img: 'https://i.imgur.com/QxOP1Wn.jpg',
    price: 12,
    stock: 7,
  },
  {
    id: 30,
    category: 'personas',
    origin: 'arg',
    title: 'Florentino',
    img: 'https://i.imgur.com/LTkSpOl.jpg',
    price: 10,
    stock: 2,
  },
  {
    id: 31,
    category: 'animales',
    origin: 'pkr',
    title: 'Estegosaurio y Alosaurio',
    img: 'https://i.imgur.com/J0maREE.jpg',
    price: 580,
    stock: 87,
  },
  {
    id: 32,
    category: 'paisajes',
    origin: 'arg',
    title: 'Tierra del Fuego',
    img: 'https://i.imgur.com/SW2OnIW.jpg',
    price: 24,
    stock: 15,
  },
];

stamps.forEach((obj) => {
  db.collection('stamps')
    .add({
      id: obj.id,
      category: obj.category,
      origin: obj.origin,
      title: obj.title,
      img: obj.img,
      price: obj.price,
      stock: obj.stock,
    })
    .then((docRef) => {
      console.log('Producto registrado con ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error al agregar un documento: ', error);
    });
});
