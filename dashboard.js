const dashboardData = [
    {
        icon: "🌱",
        title: "Carbon neutral operations",
        value: "2030",
        description: "Wärtsilä aims to make its own operations carbon neutral by 2030.",
        progress: 70
    },
    {
        icon: "⚡",
        title: "Zero-carbon fuel readiness",
        value: "2030",
        description: "The product portfolio is developed towards readiness for zero-carbon fuels.",
        progress: 60
    },
    {
        icon: "📉",
        title: "Supplier emissions",
        value: "25%",
        description: "Targeted reduction in greenhouse gas emissions from direct suppliers.",
        progress: 45
    },
    {
        icon: "🌍",
        title: "Main focus areas",
        value: "Marine + Energy",
        description: "The key sustainability focus is decarbonisation in marine and energy industries.",
        progress: 80
    }
];

const kpiGrid = document.getElementById("kpiGrid");

dashboardData.forEach(item => {
    const card = document.createElement("div");
    card.className = "kpi-card";

    card.innerHTML = `
        <div class="kpi-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <div class="kpi-value">${item.value}</div>
        <p>${item.description}</p>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${item.progress}%"></div>
        </div>
    `;

    kpiGrid.appendChild(card);
});