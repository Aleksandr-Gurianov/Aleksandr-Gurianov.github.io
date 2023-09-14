// javascript file
const сhart = document.querySelector("#chart").getContext('2d');

// create new chart
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 46900, 59050, 57000, 42000, 
                45891, 46789, 30250, 25904, 11000, 29000],
                borderColor: ['red'], 
                borderWidth: 2
            }, 
            {
                label: 'ETH',
                data: [31000, 41537, 88900, 26050, 47000, 32600, 
                5891, 2789, 18250, 24904, 17000, 21000],
                borderColor: ['blue'], 
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})



