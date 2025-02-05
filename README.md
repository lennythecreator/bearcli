
# Bear CLI

Bear CLI is a command-line interface tool designed to help students quickly set up basic project structures for learning different technologies—such as HTML,CSS and JavaScript. It creates a clean, organized folder structure with starter files to help you get started quickly.

## Features

- **Project Setup**: Creates a basic file structure for a web project.
  - **Frontend**: Sets up an `index.html`, `styles.css`, and `script.js` file.
  - **Backend**: Sets up a Flask starter file (`app.py`).
- **CLI Usage**: Uses [Yargs](https://github.com/yargs/yargs) to parse command-line arguments.
- **Stylish Output**: Uses [Chalk](https://github.com/chalk/chalk) for colored terminal output, [Boxen](https://github.com/sindresorhus/boxen) for attractive box messages, and [Figlet](https://github.com/patorjk/figlet.js) for ASCII art banners.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/lennythecreator/Bear-CLI.git
   cd Bear_CLI
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Link the CLI Globally (Optional)**

   This makes the `bearcli` command available from anywhere on your system.

   ```bash
   npm link
   ```

## Usage

Once installed or linked globally, run Bear CLI from your terminal.

### Command Syntax

```bash
bearcli -p <project> -l <level>
```

- `-p, --project`: Specifies the type of project to set up. Currently, the supported type is `web` and `data`.
- `-l, --level`: Specifies the level of experience, e.g., `beginner` or `advanced` the supported type is `beginner`.

### Example

To set up a basic web project for beginners:

```bash
bearcli -p web -l beginner
```

When executed, the CLI will:

- Display an ASCII art banner ("Bear CLI").
- Show a usage message inside a styled box.
- Create a folder named `web_project` in your current directory with the following structure:

```
web_project/
├── backend/
│   └── app.py      # Flask starter code
└── frontend/
    ├── index.html  # HTML starter file
    ├── styles.css  # CSS file
    └── script.js   # JavaScript file
```

## Customization

You can easily customize the generated content by editing the file creation logic in the `bin/index.js` file. Update the HTML, CSS, JavaScript, and Python starter content to match your learning or project requirements.

## Troubleshooting

- **Figlet or Boxen Not Displaying Correctly:**  
  Ensure your terminal supports the required Unicode characters and colors.

- **Permission Issues on Windows:**  
  If you encounter permission issues, run your terminal as an Administrator or adjust your system's PATH variable after running `npm link`.

- **Project Creation Errors:**  
  Make sure you’re providing the correct arguments. For example, use `-p web -l beginner` to set up a basic web project.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with your improvements. For any issues or suggestions, please open an issue on GitHub.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please reach out via [GitHub Issues](https://github.com/lennythecreator/Bear_CLI/issues) or email [chuwa1@morgan.edu](mailto:chuwa1@morgan.edu).

---

Happy Coding! 🚀
