/**
 * Simple Calculator - JavaScript Implementation
 * Author: Monishraj P
 * Description: A responsive calculator with basic arithmetic operations
 * Features: Real-time calculations, error handling, keyboard support
 */

// Calculator state management
class Calculator {
    constructor() {
        this.display = document.getElementById('result');
        this.currentInput = '';
        this.operator = '';
        this.previousInput = '';
        this.shouldResetDisplay = false;
        this.lastOperation = '';

        this.initializeEventListeners();
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Keyboard support
        document.addEventListener('keydown', (event) => this.handleKeyboard(event));

        // Prevent context menu on calculator
        document.addEventListener('contextmenu', (event) => {
            if (event.target.closest('.calculator')) {
                event.preventDefault();
            }
        });

        // Initialize display
        document.addEventListener('DOMContentLoaded', () => {
            this.display.value = '';
            this.display.focus();
        });
    }

    // Append values to display
    appendToDisplay(value) {
        // Reset display if needed
        if (this.shouldResetDisplay) {
            this.display.value = '';
            this.shouldResetDisplay = false;
        }

        // Handle decimal point
        if (value === '.') {
            if (this.display.value.includes('.')) {
                return; // Prevent multiple decimal points
            }
            if (this.display.value === '' || this.display.value === '0') {
                this.display.value = '0.';
                return;
            }
        }

        // Handle operators
        if (['+', '-', '*', '/'].includes(value)) {
            if (this.display.value === '' || this.display.value === 'Error') {
                return; // Don't allow operator as first input
            }

            // If there's already an operation, calculate first
            if (this.previousInput !== '' && this.currentInput !== '' && this.operator !== '') {
                this.calculate();
            }

            this.previousInput = this.display.value;
            this.operator = value;
            this.currentInput = '';
            this.shouldResetDisplay = true;
            return;
        }

        // Handle numbers
        if (this.display.value === '0' && value !== '.') {
            this.display.value = value;
        } else {
            // Limit display length
            if (this.display.value.length < 12) {
                this.display.value += value;
            }
        }

        this.currentInput = this.display.value;
    }

    // Perform calculation
    calculate() {
        if (this.previousInput === '' || this.operator === '' || this.display.value === '') {
            return;
        }

        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.display.value);
        let result;

        try {
            switch (this.operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        throw new Error('Division by zero');
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            // Validate result
            if (result === Infinity || result === -Infinity || isNaN(result)) {
                throw new Error('Invalid operation');
            }

            // Format result
            result = this.formatResult(result);

            // Update display and state
            this.display.value = result.toString();
            this.lastOperation = `${prev} ${this.operator} ${current} = ${result}`;
            this.resetState();
            this.currentInput = result.toString();
            this.shouldResetDisplay = true;

            // Log operation (for debugging)
            console.log(this.lastOperation);

        } catch (error) {
            this.handleError(error.message);
        }
    }

    // Format calculation result
    formatResult(result) {
        // Handle very large or very small numbers
        if (Math.abs(result) > 999999999999) {
            return parseFloat(result.toExponential(5));
        } else if (Math.abs(result) < 0.000001 && result !== 0) {
            return parseFloat(result.toExponential(5));
        } else {
            // Round to prevent floating point errors
            return Math.round(result * 100000000) / 100000000;
        }
    }

    // Handle errors
    handleError(message) {
        this.display.value = 'Error';
        this.display.classList.add('error');

        console.error('Calculator Error:', message);

        setTimeout(() => {
            this.display.classList.remove('error');
            this.clearDisplay();
        }, 2000);

        this.resetState();
    }

    // Clear display and reset state
    clearDisplay() {
        this.display.value = '';
        this.resetState();
        this.display.classList.remove('error');
        this.display.focus();
    }

    // Reset calculator state
    resetState() {
        this.currentInput = '';
        this.operator = '';
        this.previousInput = '';
        this.shouldResetDisplay = false;
    }

    // Delete last character
    deleteLast() {
        if (this.display.value === 'Error') {
            this.clearDisplay();
            return;
        }

        this.display.value = this.display.value.slice(0, -1);
        this.currentInput = this.display.value;

        if (this.display.value === '' || this.display.value === '-') {
            this.display.value = '';
            this.currentInput = '';
        }
    }

    // Handle keyboard input
    handleKeyboard(event) {
        const key = event.key;

        // Prevent default for specific keys
        if (['/', 'Enter', '='].includes(key)) {
            event.preventDefault();
        }

        // Numbers and decimal point
        if (/[0-9.]/.test(key)) {
            this.appendToDisplay(key);
        }
        // Operators
        else if (['+', '-', '*', '/'].includes(key)) {
            this.appendToDisplay(key);
        }
        // Calculate
        else if (['Enter', '='].includes(key)) {
            this.calculate();
        }
        // Clear
        else if (['Escape'].includes(key) || key.toLowerCase() === 'c') {
            this.clearDisplay();
        }
        // Delete
        else if (key === 'Backspace') {
            this.deleteLast();
        }
    }

    // Get last operation (for history feature)
    getLastOperation() {
        return this.lastOperation;
    }
}

// Global functions for HTML onclick events
let calculator;

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    calculator = new Calculator();
});

// Global wrapper functions for HTML compatibility
function appendToDisplay(value) {
    if (calculator) {
        calculator.appendToDisplay(value);
    }
}

function calculate() {
    if (calculator) {
        calculator.calculate();
    }
}

function clearDisplay() {
    if (calculator) {
        calculator.clearDisplay();
    }
}

function deleteLast() {
    if (calculator) {
        calculator.deleteLast();
    }
}

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
}

// Add service worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment next lines if you add a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}
