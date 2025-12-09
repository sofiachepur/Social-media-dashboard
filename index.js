
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