# QR Code Generator

This is a simple command-line QR code generator built with Node.js.

The program allows users to enter a URL in the terminal, then automatically:

- Generates a QR code image (`qr.png`)
- Saves the entered URL into a text file (`URL.txt`)

## Requirements

Before running the project, make sure Node.js is installed on your computer.

Check if Node.js is installed:

```bash
node -v
```

If installed, this command will display the current Node.js version.

## Installation

Initialize npm in the project folder:

```bash
npm init -y
```

Install the required packages:

```bash
npm install qr-image inquirer
```

## How to Run

Run the program using:

```bash
node index.js
```

## Features

- Command-line interaction
- QR code generation
- Saves URLs into a text file
- Beginner-friendly Node.js project

## Technologies Used

- Node.js
- `qr-image`
- `inquirer`
- `fs` (File System module)

## Example

Input:

```bash
https://example.com
```

Output:

- QR code image saved as `qr.png`
- URL saved in `URL.txt`

## Author

Made by [Your Name]
