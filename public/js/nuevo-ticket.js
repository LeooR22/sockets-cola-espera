// Referencias html

const lblNuevoTicket = document.querySelector("#lblNuevoTicket");
const btnNuevoTicket = document.querySelector(".btn");

const socket = io();

socket.on("connect", () => {
  // console.log('Conectado');
  btnNuevoTicket.disabled = false;
});

socket.on("ultimo-ticket", (payload) => {
  lblNuevoTicket.innerText = "Ticket " + payload;
});

socket.on("disconnect", () => {
  btnNuevoTicket.disabled = true;
});

btnNuevoTicket.addEventListener("click", () => {
  socket.emit("siguiente-ticket", null, (ticket) => {
    lblNuevoTicket.innerText = ticket;
  });
});
