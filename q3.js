db.createCollection("products");

db.products.insertMany([
  {
    name: "Guitar",
    description: "Kadence Acoustic guitar",
    imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkadence.in%2Fproduct%2Fsemi-acoustic-zebra-wood-guitar-with-eq%2F&psig=AOvVaw1ErWxQoXj55YoxjeU3wXTZ&ust=1748610959097000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCJ7MrhyI0DFQAAAAAdAAAAABAE",
    price: 8000
  },
  {
    name: "Shoes",
    description: "Puma Shoes",
    imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore-in.puma.com%2Fpuma-store-delhi-ghitorni-3-sports-apparel-ghitorni-new-delhi-253846%2FProductDetails%2F4099683461969&psig=AOvVaw3Xd_WqtshwOEoPpnNiSv7E&ust=1748610997537000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjz6N7hyI0DFQAAAAAdAAAAABAE",
    price: 6500
  },
  {
    name: "Verity Book",
    description: "A Novel",
    imgUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FVERITY-Paperback-Hoover-Colleen%2Fdp%2F1408726602&psig=AOvVaw0MlpfrOOpiCz5jwCOgrSts&ust=1748611034092000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCS3u3hyI0DFQAAAAAdAAAAABAE",
    price: 250
  }
]);

db.products.find()