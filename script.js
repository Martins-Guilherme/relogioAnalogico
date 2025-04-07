const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");
// criando as funções para armazenar cada ponteiro: horas, minutos e segundos.

// Animação do ponteiro de segundos.
const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotate", rotationPercentage * 360);
};

// Função principal
const setClock = () => {
  const currentDate = new Date();

  // Calculando o valor a ser atribuido aos segundos, minutos e horas
  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  // Chamada de função para alterar cada valor do ponteiro.
  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

// Inicialização da função principal
setClock();
// Interfalo para renderizar ponteiro na tela.
setInterval(setClock, 1000);
