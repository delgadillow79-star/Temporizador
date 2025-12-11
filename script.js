const timerDisplay = document.getElementById('timer');
const playBtn = document.getElementById('playBtn');
const message = document.getElementById('message');
const customTimeInput = document.getElementById('customTime');

//Variables de estado del temporizador
let timeLeft = parseInt(customTimeInput.value, 10); // el tiempo inicial en segundos
let timerId = null; // Para almacenar el ID de la función setInterval
let isRunning = false; // Bandera para saber si el temporizador está corriendo

//Formateador de tiempo de MM:SS
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

// Permitirá ver en tiempo real cómo la pantalla del temporizador se actualiza
const updateDisplay = () => {
  timerDisplay.textContent = formatTime(timeLeft);
};

//  usuario cambia el número en el input antes de empezar.
customTimeInput.addEventListener('input', (e) => {
  if (!isRunning) {
    timeLeft = parseInt(e.target.value, 10);
    updateDisplay();
  }
});

// Función para iniciar el temporizador
const startTimer = () => {
  if (isRunning || timeLeft <= 0) return;

  isRunning = true; // indica que el temporizador está en ejecución
  
  // Deshabilitar el input para que no cambien el tiempo mientras corre
  customTimeInput.disabled = true; 

  timerId = setInterval(() => {
    timeLeft--; // resta uno al valor actual de timeLeft
    updateDisplay(); // actualiza la vista

    if (timeLeft <= 0) {
      clearInterval(timerId); // detiene el temporizador
      isRunning = false; // indicamos que ya no está activo
      document.querySelector('.container').style.display = 'none';
      message.style.display = 'block'; 
      rocket.style.display = 'block';
      rocket.classList.add('launch');
    }
  }, 1000); 
};

// Asignar el event listener solo al botón de Play
playBtn.addEventListener('click', startTimer); 

// Inicializar la pantalla del temporizador al cargar la página
updateDisplay();











































