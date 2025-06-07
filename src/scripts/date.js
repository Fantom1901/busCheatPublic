const currentDate = new Date();
const day = currentDate.getDate();
const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

const formattedDate = `${day} ${month} ${year} г.`;

document.getElementById("currentDate").textContent = formattedDate;