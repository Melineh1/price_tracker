document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { name: "Item 1", prices: [100, 95, 98, 110, 105] },
        { name: "Item 2", prices: [200, 205, 198, 187, 190] },
        { name: "Item 3", prices: [150, 145, 148, 152, 150] }
    ];

    const listContainer = document.getElementById('priceList');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        const latestPrice = item.prices[item.prices.length - 1];
        const lowestPrevious = Math.min(...item.prices.slice(0, -1));

        let trend = (latestPrice < lowestPrevious) ? "lower" : "higher";

        itemElement.textContent = `${item.name} - Latest Price: $${latestPrice} (Previous Low: $${lowestPrevious}, Trend: ${trend})`;
        listContainer.appendChild(itemElement);
    });
});
