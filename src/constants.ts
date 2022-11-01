export const POSTS = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/juliommen.png',
      name: 'Júlio Mendonça',
      role: 'Web Developer'
    },
    content: [
      {type:'p', text:'Faaala galera! 😄'},
      {type:'p', text:'Acabei de subir mais um projeto no meu portfólio. 🙌'},
      {type:'p', text:'É um projeto que fiz para o meu curso de React, como desafio para conclusão do módulo de Context.'},
      {type:'a', text:'👉 Confere lá!', link:'https://github.com/juliommen/CoffeeDelivery'},
      {type:'#', text:'#novoprojeto', link:'#'},
      {type:'#', text:'#react', link:'#'},
      {type:'#', text:'#coffee', link:'#'},
    ],
    publishedAt: new Date("2022-11-01 10:00:00")
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/facebook.png',
      name: 'Meta',
      role: 'Enterprise'
    },
    content: [
      {type:'p', text:'Hi comunity! 😄'},
      {type:'p', text:'We\'ve just released a new React version. 🙌'},
      {type:'p', text:'Please, keep the comunity rules and our own guidelines for posting issues.'},
      {type:'a', text:'👉 Checkout!', link:'https://github.com/facebook/react'},
      {type:'a', text:'#newversion', link:'#'},
      {type:'a', text:'#react', link:'#'},
    ],
    publishedAt: new Date("2022-10-31 04:50:10")
  }
]