// Initialize Chart.js
const ctx = document.getElementById('scoreChart').getContext('2d');
const data = {
    labels: ['0', '50', '100', '150', '200'],
    datasets: [{
        label: 'Percentile',
        data: [0, 25, 60, 100, 159], // Sample data
        borderColor: '#7a40f2',
        backgroundColor: 'rgba(122, 64, 242, 0.1)',
        pointBackgroundColor: '#7a40f2',
        pointRadius: 5,
        fill: true,
        tension: 0.4 // Smooth curve
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Score'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percentile'
                },
                max: 200
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        }
    }
};

const scoreChart = new Chart(ctx, config);
