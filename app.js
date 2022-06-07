function addTax(price) {
    if (!price || price <= 0 || typeof(price)=== 'string') {
        return "Nothing is for free! Please supply a price";
    }
        const vat = 1.17; //maam
        const total = (price * vat).toFixed(2);
        return (total);
    }
