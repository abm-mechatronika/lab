// Funkcja do uruchamiania wprowadzonego kodu
function executeCode() {
    const codeInput = document.getElementById('code-input').value;
    const output = document.getElementById('output');
    
    try {
        // Uruchomienie kodu numerycznego (wykorzystując eval)
        const result = eval(codeInput);
        output.textContent = `Wynik: ${result}`;
    } catch (error) {
        output.textContent = `Błąd: ${error.message}`;
    }
}