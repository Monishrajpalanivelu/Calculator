# 🧮 Simple Calculator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML](https://img.shields.io/badge/HTML-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A responsive and user-friendly calculator built with vanilla HTML, CSS, and JavaScript. Features a modern design, real-time calculations, comprehensive error handling, and full keyboard support.

## 🌟 Live Demo



**Live Demo**: [https://YOUR_GITHUB_USERNAME.github.io/simple-calculator](https://Monishrajpalanivelu.github.io/simple-calculator)

## ✨ Features

### Core Functionality
- ✅ **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- ✅ **Real-time Calculations**: Instant calculation display with smooth updates
- ✅ **Error Handling**: Comprehensive error management for edge cases
- ✅ **Continuous Operations**: Chain calculations without clearing

### User Experience
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **Keyboard Support**: Full keyboard navigation and input support
- ✅ **Visual Feedback**: Smooth animations and hover effects
- ✅ **Accessibility**: Proper focus management and ARIA support

### Technical Features
- ✅ **Vanilla JavaScript**: No external dependencies
- ✅ **Modern CSS**: Grid layout, flexbox, and CSS custom properties
- ✅ **ES6+ Features**: Classes, arrow functions, and modern JavaScript
- ✅ **Cross-browser Compatible**: Works on all modern browsers

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Go to repository Settings → Pages
3. Select source branch (main/master)
4. Visit your GitHub Pages URL (will be provided in Settings)

### Option 2: Local Development
1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/simple-calculator.git
   cd simple-calculator
   ```

2. **Open in browser**
   - Double-click `index.html` or
   - Use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Then visit http://localhost:8000
   ```

## 📁 Project Structure

```
simple-calculator/
├── index.html              # Main HTML structure
├── css/
│   └── style.css          # Stylesheet and responsive design
├── js/
│   └── script.js          # Calculator functionality and logic
├── README.md              # Project documentation
├── .gitignore            # Git ignore rules
└── LICENSE               # MIT License
```

## 🎮 Usage

### Mouse Input
- Click number buttons (0-9) to input numbers
- Click operator buttons (+, −, ×, ÷) for operations
- Click equals (=) to calculate result
- Click C to clear all
- Click ← (backspace) to delete last character

### Keyboard Input
| Key | Function |
|-----|----------|
| `0-9` | Number input |
| `+`, `-`, `*`, `/` | Mathematical operators |
| `Enter` or `=` | Calculate result |
| `Escape` or `C` | Clear all |
| `Backspace` | Delete last character |
| `.` | Decimal point |

## 🛠️ Technical Implementation

### HTML Structure
```html
<!-- Semantic HTML with proper accessibility -->
<div class="calculator">
    <div class="header">Simple Calculator</div>
    <div class="display">
        <input type="text" id="result" placeholder="0" readonly>
    </div>
    <div class="buttons">
        <!-- Grid of calculator buttons -->
    </div>
</div>
```

### CSS Features
- **CSS Grid**: For responsive button layout
- **Flexbox**: For component alignment
- **Custom Properties**: For maintainable theming
- **Media Queries**: For responsive breakpoints
- **Animations**: For smooth user interactions

### JavaScript Architecture
```javascript
// Modern ES6+ class-based structure
class Calculator {
    constructor() {
        this.display = document.getElementById('result');
        this.initializeEventListeners();
    }

    appendToDisplay(value) { /* Handle input */ }
    calculate() { /* Perform calculations */ }
    handleError(message) { /* Error management */ }
}
```

## 🔧 Error Handling

The calculator handles various error scenarios:

- **Division by Zero**: Shows "Error" with auto-recovery
- **Invalid Operations**: Prevents invalid input combinations
- **Overflow Numbers**: Uses scientific notation for large numbers
- **Multiple Decimals**: Prevents invalid decimal input
- **Empty Operations**: Validates input before calculations

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1024px+ (Full features)
- **Tablet**: 768px - 1024px (Optimized layout)
- **Mobile**: 320px - 768px (Touch-friendly buttons)

### Device Optimization
- **Touch Devices**: Larger buttons for easier tapping
- **Small Screens**: Optimized font sizes and spacing
- **Landscape Mode**: Adaptive layout for orientation changes

## 🌙 Browser Support

| Browser | Minimum Version | Status |
|---------|----------------|---------|
| Chrome | 60+ | ✅ Fully Supported |
| Firefox | 55+ | ✅ Fully Supported |
| Safari | 12+ | ✅ Fully Supported |
| Edge | 79+ | ✅ Fully Supported |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes and test thoroughly**
4. **Commit**: `git commit -m "Add feature description"`
5. **Push**: `git push origin feature-name`
6. **Open a Pull Request**

### Development Guidelines
- Use consistent indentation (2 spaces)
- Follow existing naming conventions
- Add comments for complex logic
- Test on multiple browsers

## 🔮 Future Enhancements

### Planned Features
- [ ] **Scientific Functions**: sin, cos, tan, log, etc.
- [ ] **Memory Functions**: M+, M-, MR, MC
- [ ] **Calculation History**: View previous calculations
- [ ] **Themes**: Dark mode and custom themes
- [ ] **Advanced Operations**: Percentage, square root, power

### Technical Improvements
- [ ] **PWA Support**: Install as mobile app
- [ ] **Unit Tests**: Comprehensive test coverage
- [ ] **TypeScript**: Type safety and better development experience

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Monishraj P**
- Email: monishrajpalanivelu@gmail.com
- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)
- LinkedIn: [Connect with me](https://linkedin.com/in/YOUR_LINKEDIN_PROFILE)

> **Note**: Update the links above with your actual GitHub username and LinkedIn profile after creating accounts.

## 🙏 Acknowledgments

- Inspired by modern calculator designs
- Built with vanilla HTML, CSS, and JavaScript
- Responsive design patterns from web development best practices
- Error handling techniques from JavaScript community guidelines

---

## 📋 Setup Checklist

After uploading to GitHub, remember to:

- [ ] Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
- [ ] Update LinkedIn profile link
- [ ] Enable GitHub Pages in repository settings
- [ ] Test the live demo link
- [ ] Add repository link to your resume
- [ ] Share with potential employers

---

⭐ **Star this repository if you found it helpful!** ⭐

*Built with ❤️ by Monishraj P*
