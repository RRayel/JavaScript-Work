
function updateTime() {
    const now = new Date();
    const currentTimeDisplay = document.getElementById('current-time');
    const countdownDisplay = document.getElementById('countdown');

    
    currentTimeDisplay.textContent = now.toLocaleString();

   
    const nextYear = new Date(now.getFullYear() + 1, 0, 1); 
    const timeRemaining = nextYear - now; 

    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    
    countdownDisplay.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds Unitl January 1st 2025`;
}


setInterval(updateTime, 1000);


updateTime(); 