function getMenu(campusName) {
    const url = `http://localhost:3000/api/WeekMenu/${campusName}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then((result) => {
            return JSON.parse(result)[0];
        })
        .catch((error) => {
            console.log('Fetch error:', error);
        });
}

/*
    All campuses (Case sensitive!):
        - Geel
        - Turnhout
        - Vorselaar
        - Lier
        - Mechelen
        - De Nayer
        - Antwerpen
*/

// Loads in all receipts -> See console for JSON object.
function loadReceipts(campusName) {
    getMenu(campusName)
        .then((receipts) => {

            // Write your code here
            console.log("Receipts:", receipts);

        });
}

// Gets the receipts on website load.
loadReceipts("Geel");