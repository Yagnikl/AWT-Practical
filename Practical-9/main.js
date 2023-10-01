const button = document.getElementById('button');
const data = document.getElementById('data');

button.addEventListener('click', async () => {
    const shouldLoadModule1 = true;
    try {
        if (shouldLoadModule1) {
            const { displayMessage } = await import('./module1.js');
            shouldLoadModule1 = false;
            data.textContent = displayMessage();
        } else {
            const { displayMessage } = await import('./module2.js');
            data.textContent = displayMessage();
            shouldLoadModule1 = true;
        }
    } catch (error) {
        console.error('Error loading module:', error);
    }
});
