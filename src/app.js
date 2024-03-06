document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "McLaren MP4-12C Spider 3.8", img: "1.jpg", price: 4400000000 },
      { id: 1, name: "Porsche 911 GTS", img: "2.jpg", price: 5200000000 },
      { id: 1, name: "Innova Venturer 2.4 Diesel AT 2018", img: "3.jpg", price: 395000000 },
      { id: 1, name: "Innova Venturer 2.4 Diesel AT 2018", img: "4.jpg", price: 395000000 },
      { id: 1, name: "Innova Venturer 2.4 Diesel AT 2018", img: "5.jpg", price: 395000000 },
    ],
  }));
});
