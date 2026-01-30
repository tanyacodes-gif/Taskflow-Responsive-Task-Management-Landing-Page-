let completed = 2;
let pending = 3;

function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("taskList").appendChild(li);

    pending++;
    drawChart();
    input.value = "";
}

function drawChart() {
    const canvas = document.getElementById("progressChart");
    const ctx = canvas.getContext("2d");

    const total = completed + pending;
    const angle = (completed / total) * 2 * Math.PI;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.fillStyle = "#00ff88";
    ctx.arc(110, 110, 90, 0, angle);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(110, 110);
    ctx.fillStyle = "white";
    ctx.arc(110, 110, 90, angle, 2 * Math.PI);
    ctx.fill();
}

drawChart();
