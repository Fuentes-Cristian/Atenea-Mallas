const Cards = [
    {
      img : "https://i.pinimg.com/564x/1d/44/2c/1d442c925ea06152466242d82f7e7803.jpg",
      titulo : "Kassie",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "1"
    },
    {
      img : "https://i.pinimg.com/564x/25/1a/a9/251aa9dce5c5dc3c0ebc85c5e6107955.jpg",
      titulo : "Stefanie",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "2"
    },
    {
      img : "https://i.pinimg.com/564x/4d/99/df/4d99dfab4817c863137f066303ef4fa8.jpg",
      titulo : "Josef",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "3"
    },
    {
      img : "https://i.pinimg.com/564x/fd/47/23/fd472366430bfe6faa62489db31a1352.jpg",
      titulo : "Bella",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "4"
    },
    {
      img : "https://i.pinimg.com/564x/05/2e/54/052e54c24783cd374f55d609159114e4.jpg",
      titulo : "Rosie",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "5"
    },
    {
      img : "https://i.pinimg.com/736x/1a/64/ee/1a64eed4776402bf12bbcc356f252c7c.jpg",
      titulo : "Steff",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "6"
    },
    {
      img : "https://i.pinimg.com/564x/3f/ee/d1/3feed1c22d0eb302cceca481b999f617.jpg",
      titulo : "Lorem",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "7"
    },
    {
      img : "https://i.pinimg.com/564x/1f/e8/5b/1fe85bdfee7e5b93af2db1c049da7b12.jpg",
      titulo : "Cloe",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "8"
    },
    {
      img : "https://i.pinimg.com/564x/06/5e/8f/065e8f756095b3f4330ff7282c951233.jpg",
      titulo : "Juliet",
      precio : 2.500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "9"
    },
    {
      img : "https://i.pinimg.com/564x/94/2b/7d/942b7da7d1f1eaaa3111b1520e69d263.jpg",
      titulo : "Roma",
      precio : 2500,
      select : "Talles",
      btnSubmit : "Comprar",
      id: "10"
    }
  ];

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Cards);
      }, 1000);
    });
  };