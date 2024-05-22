let items = [];

function trackPrice() {
    const itemName = document.getElementById('itemName').value.trim();
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const priceDate = document.getElementById('priceDate').value;

    if (!itemName || isNaN(itemPrice) || !priceDate) {
        alert("Please fill in all fields correctly.");
        return;
    }

    let existingItem = items.find(item => item.name === itemName);
    if (existingItem) {
        if (existingItem.prices.length < 5) {
            existingItem.prices.push({ price: itemPrice, date: priceDate });
        } else {
            alert("Maximum of 5 price records reached for this item.");
            return;
        }
    } else {
        if (items.length < 10) {
            items.push({ name: itemName, prices: [{ price: itemPrice, date: priceDate }] });
        } else {
            alert("Maximum of 10 different items can be tracked.");
            return;
        }
    }

    displayPrices();
}

function displayPrices() {
    const listContainer = document.getElementById('priceHistory');
    listContainer.innerHTML = ''; // Clear previous entries

    items.forEach(item => {
        const itemElement = document.createElement('div');
        const prices = item.prices.map(p => `$${p.price} on ${p.date}`);
        const priceValues = item.prices.map(p => p.price);
        const minPrice = Math.min(...priceValues);
        const latestPrice = priceValues[priceValues.length - 1];
        const lowestMessage = latestPrice === minPrice ? "The price for this item is at the lowest point we've seen." : "";

        itemElement.innerHTML = `<strong>${item.name}</strong>: Prices - ${prices.join(', ')}<br>${lowestMessage}`;
        listContainer.appendChild(itemElement);
    });
}
