const startButton = document.getElementById("startButton");
const time = document.getElementById("time");
const video = document.getElementById("video");
const timeInput = document.getElementById("timeInput");
const timerContainer = document.getElementById("timerContainer"); // Referencia al contenedor principal

// Crear y configurar el div para el mensaje de despegue
const messageDiv = document.createElement("div"); 
messageDiv.id = "messageDiv"; // Añadir un ID para control CSS/JS
messageDiv.style.fontSize = "72px"; 
messageDiv.style.color = "white"; 
messageDiv.style.textAlign = "center"; 
messageDiv.style.position = "relative"; // Asegurar que el mensaje esté centrado en el flujo normal
messageDiv.textContent = "¡Despegue!"; 
messageDiv.classList.add("hidden"); // Oculto por defecto

let countdownValue;
let interval;

// Asegúrate de que el video esté en pausa al inicio y que el mensaje esté añadido (pero oculto)
video.pause();
timerContainer.after(messageDiv); // Añade el mensaje después del contenedor del temporizador

const countdown = () => {
    // Usa el valor ingresado o 60 por defecto
    countdownValue = parseInt(timeInput.value) > 0 ? parseInt(timeInput.value) : 60; 
    
    // Oculta elementos
    startButton.classList.add("hidden");
    timeInput.classList.add("hidden"); 

    // Muestra el contador
    time.textContent = `${countdownValue} sec`; 
    time.classList.remove("hidden"); // Asegura que el texto del tiempo esté visible

    interval = setInterval(updateCountdown, 1000); // Inicia el contador
};

const updateCountdown = () => {
    if (countdownValue > 0) {
        time.textContent = `${countdownValue} sec`;
        countdownValue--;
    } else {
        clearInterval(interval);
        
        // Muestra el mensaje y reproduce el video
        video.play();
        timerContainer.classList.add("hidden"); // Oculta todo el temporizador
        messageDiv.classList.remove("hidden"); // Muestra el mensaje de despegue
        
        // Espera un tiempo (16 segundos) y luego reinicia
        setTimeout(reset, 16000); 
    }
};

const reset = () => {
    // Oculta el mensaje
    messageDiv.classList.add("hidden");
    
    // Muestra los elementos de reinicio
    timerContainer.classList.remove("hidden"); // Muestra el contenedor principal
    startButton.classList.remove("hidden"); 
    timeInput.classList.remove("hidden"); 
    
    // Resetea el estado
    time.textContent = "60 sec"; 
    timeInput.value = "60"; // Resetea el valor del input por defecto
    video.pause(); 
    video.currentTime = 0; 
};

startButton.addEventListener("click", countdown);









































