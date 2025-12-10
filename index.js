
    const toggle = document.getElementById("theme-switch");
    toggle.addEventListener("change",()=>{
        document.body.classList.toggle("dark");
});

    const updateEl = document.getElementById('last-update');
    const now = new Date();


    const formattedDate = now.getFullYear() + '-' +
        String(now.getMonth() + 1).padStart(2, '0') + '-' +
        String(now.getDate()).padStart(2, '0') + ' ' +
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0') + ':' +
        String(now.getSeconds()).padStart(2, '0');

    updateEl.textContent = formattedDate;







    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";


        const size = Math.random() * 20 + 10;
        const left = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 5;
        const opacity = Math.random() * 0.5 + 0.5;

        snowflake.style.left = left + "px";
        snowflake.style.fontSize = size + "px";
        snowflake.style.opacity = opacity;
        snowflake.style.animationDuration = duration + "s";

        document.body.appendChild(snowflake);


        setTimeout(() => snowflake.remove(), duration * 1000);
    }


    setInterval(createSnowflake, 200);
