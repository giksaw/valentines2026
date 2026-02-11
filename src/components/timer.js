export function initTimer(startDateStr) {
    const container = document.getElementById('timer-container');
    if (!container) return;

    const startDate = new Date(startDateStr).getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = now - startDate;

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('t-years').innerText = years;
        document.getElementById('t-days').innerText = days;
        document.getElementById('t-hours').innerText = hours;
        document.getElementById('t-minutes').innerText = minutes;
        document.getElementById('t-seconds').innerText = seconds;
    }

    setInterval(updateTimer, 1000);
    updateTimer();
}
