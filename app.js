let items = [];

function trackPrice() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const priceDate = document.getElementById('priceDate').value;

    if (!itemName || isNaN(itemPrice) || !priceDate) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const existingItem = items.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.prices.push({ price: itemPrice, date: priceDate });
    } else {
        items.push({ name: itemName, prices: [{ price: itemPrice, date: priceDate }] });
    }

    displayPrices();
}

function displayPrices() {
    const listContainer = document.getElementById('priceHistory');
    listContainer.innerHTML = ''; // Clear previous entries

    items.forEach(item => {
        const itemElement = document.createElement('div');
        const prices = item.prices.map(p => p.price);
        const minPrice = Math.min(...prices);
        const latestPrice = prices[prices.length - 1];
        const difference = latestPrice - minPrice;

        itemElement.textContent = `Item: ${item.name}, Latest Price: $${latestPrice}, Lowest Price: $${minPrice}, Difference: $${difference}`;
        listContainer.appendChild(itemElement);
    });
}
