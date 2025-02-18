let bulbOn = false;

function toggleBulb() {
    bulbOn = !bulbOn;
    const bulbButton = document.getElementById("likeButton");
    const body = document.body;
    const poetre = document.getElementById("poetre")
    if (bulbOn) {
        bulbButton.textContent = "💡"; 
        body.style.backgroundColor = "black";
        body.style.color = "white";
        poetre.textContent = "إِنَّ لَهِيبَ حُسْنِكِ، يَضْرِمُ النَّارَ فِي قَلْبِي، فَأَسْقِنِي مِنْ بُحُورِ عَيْنَيْكِ، حَتَّى يَزِيدَ اشْتِعَالًا."; 
        
        startSnowfall();
    } else {
        bulbButton.textContent = "💡"; 
        body.style.backgroundColor = "white";
        body.style.color = "black";
        poetre.textContent = ""; 
        stopSnowfall();
    }
}

let snowInterval;

function startSnowfall() {
    snowInterval = setInterval(createSnowflake, 100);
}

function stopSnowfall() {
    clearInterval(snowInterval);
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => snowflake.remove());
}

function createSnowflake() {
    const snow = document.querySelector('.snow');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    const animationDuration = Math.random() * 20+10;
    const animationDelay = Math.random() * 2;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationDelay = `${animationDelay}s`;
    snow.appendChild(snowflake);
}
