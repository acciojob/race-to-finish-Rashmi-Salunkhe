// Create an array to store promises
window.promises = [];

// Helper function to create a promise that resolves after a random time between 1 and 5 seconds
function createRandomPromise() {
    return new Promise((resolve) => {
        const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
        setTimeout(() => {
            resolve(`Resolved after ${randomTime / 1000} seconds`);
        }, randomTime);
    });
}

// Adding five promises to the array
for (let i = 0; i < 5; i++) {
    window.promises.push(createRandomPromise());
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(window.promises)
    .then((result) => {
        // Print the result to the div with id "output"
        document.getElementById('output').textContent = result;
    })
    .catch((error) => {
        // Handle the case where all promises reject (though this is unlikely here)
        document.getElementById('output').textContent = "All promises rejected.";
    });
