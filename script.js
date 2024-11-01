// Przykładowy kod dla różnych języków
const codeExamples = {
    python: `# Python code
def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)

print(factorial(5))`,
    
    scilab: `// Scilab code
function factorial(n)
    if n == 0 then
        factorial = 1
    else
        factorial = n * factorial(n - 1)
    end
endfunction
disp(factorial(5))`,

    matlab: `% Matlab code
function result = factorial(n)
    if n == 0
        result = 1;
    else
        result = n * factorial(n - 1);
    end
end
disp(factorial(5))`,

    cpp: `// C++ code
#include <iostream>
using namespace std;

int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
}

int main() {
    cout << factorial(5) << endl;
    return 0;
}`
};

// Funkcja aktualizująca przykładowy kod w wybranym języku
function updateCodeExample() {
    const languageSelect = document.getElementById('language-select');
    const codeExample = document.getElementById('code-example');
    const selectedLanguage = languageSelect.value;
    
    codeExample.className = `language-${selectedLanguage}`;
    codeExample.textContent = codeExamples[selectedLanguage];
    
    // Kolorowanie składni
    Prism.highlightElement(codeExample);
}

// Inicjalizacja z domyślnym kodem Pythona
document.addEventListener("DOMContentLoaded", () => {
    updateCodeExample();
});
