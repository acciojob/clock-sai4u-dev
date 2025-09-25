const timer = document.getElementById("timer");

function formatDateTime(date) {
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  let year = date.getFullYear();

  let hours = date.getHours();
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');

  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  hours = String(hours).padStart(2, '0');

  return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(() => {
  let now = new Date();
  timer.innerText = formatDateTime(now);
}, 1000);
