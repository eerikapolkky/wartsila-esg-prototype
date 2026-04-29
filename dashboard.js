const data = [
    "🌱 Carbon neutral operations by 2030",
    "⚡ Zero-carbon fuel ready portfolio",
    "📉 25% supplier emission reduction",
    "🌍 Focus on marine & energy sectors"
];

const dashboard = document.getElementById("dashboard");

data.forEach(item => {
    const div = document.createElement("div");
    div.className = "dashboard-box";
    div.innerText = item;
    dashboard.appendChild(div);
});