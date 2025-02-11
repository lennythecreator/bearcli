# Bear CLI

Bear CLI is a command-line tool that helps student developers automate full-stack project setup. It generates a clean, organized folder structure with starter files to help you get started fast.

## Features

- **Flexible Project Setup**: Generate a full-stack project with customizable frontend and backend technologies.
- **CLI-based Automation**: Uses [Yargs](https://github.com/yargs/yargs) to parse command-line arguments.
- **Customizable Tech Stack**: Supports various frontend and backend frameworks (see [Supported Tech Stacks](#supported-tech-stacks)).
- **Stylish Terminal Output**: Uses [Chalk](https://github.com/chalk/chalk), and [Figlet](https://github.com/patorjk/figlet.js) for an enhanced CLI experience.

## Supported Tech Stacks

Bear CLI supports multiple frontend and backend technologies, allowing developers to customize their full-stack setup.


### **Frontend Options (`-f, --frontend`)**
| Framework / Library | Command Flag  |
|--------------------|--------------|
| Vanilla HTML/CSS/JS | `vanilla` |
| React (Vite Setup) | coming soon... |
| Vue.js (Vite Setup) | coming soon... |
| Angular | coming soon... |
| SvelteKit | coming soon... |

### **Backend Options (`-b, --backend`)**
| Framework / Library | Command Flag  |
|--------------------|--------------|
| Flask (Python) | `flask` |
| FastAPI (Python) | coming soon... |
| Django (Python) | coming soon... |
| Express.js (Node.js) | coming soon... |
| FastAPI (Python) | coming soon... |
| Spring Boot (Java) | coming soon... |
| Ruby on Rails | coming soon... |

### **Example Usage**
Generate a React frontend with a Flask backend:
```bash
bears_cli -p web -l beginner -n project_name
```

## Installation


1. **Clone the Repository(Optional)**

   ```bash
   git clone https://github.com/lennythecreator/bearcli.git
   cd bearcli
   ```



2. **Install Dependencies**
   ```bash
   npm install
   ```
   or  
   ```bash
   npm install -g bears_cli
   ``` 
   to install the package globally.

3. **Link the CLI Globally (Optional)**
   ```bash
   npm link
   ```

## Usage

Once installed or linked globally, run Bear CLI from your terminal.

### Command Syntax

```bash
bears_cli -p <project> -l <level>
```

- `-p, --project`: Specifies the type of project to set up. Currently, the supported type is `web` and `data`.
- `-l, --level`: Specifies the level of experience, e.g., `beginner` or `advanced` the supported type is `beginner`.

### Example

To set up a basic web project for beginners:

```bash
bears_cli -p web -l beginner

```
- `-p, --project`: Defines the type of project (e.g., `web`, `data`, `mobile`).  
- `-l, --level`: Experience level (`beginner`, `intermediate`, `advanced`).  
- `-f, --frontend`: Frontend stack (e.g., `vanilla`, `react`, `vue`, `svelte`).  
- `-b, --backend`: Backend stack (e.g., `flask`, `express`, `django`, `spring`).  

When executed, the CLI will:
- Display an ASCII art banner ("Bear CLI").
- Show a usage message inside a styled box.
- Create a structured folder in your current directory (insist on changing the project name)
  ```
  web_project/
  ├── frontend/
  │   ├── src/
  │   │   ├── App.js
  │   │   ├── index.js
  │   │   ├── styles.css
  │   ├── package.json
  │   ├── webpack.config.js
  │   └── .gitignore
  └── backend/
      ├── server.js
      ├── package.json
      ├── routes/
      └── controllers/
  ```

## Troubleshooting

- **System Requirements**
  Before generating a project, make sure your system meets the necessary requirements for both the project setup tool and the specific technologies involved.

- **Figlet or Boxen Not Displaying Correctly:**  
  Ensure your terminal supports the required Unicode characters and colors.

- **Permission Issues on Windows:**  
  If you encounter permission issues, run your terminal as an Administrator or adjust your system's PATH variable after running `npm link`.

- **Project Creation Errors:**  
  Make sure you’re providing the correct arguments. For example, use `-p web -l beginner -f react -b express` to set up a React-Express project.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with your improvements. For any issues or suggestions, please open an issue on GitHub.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please reach out via [GitHub Issues](https://github.com/lennythecreator/Bear_CLI/issues) or email [chuwa1@morgan.edu](mailto:chuwa1@morgan.edu).

---

Happy Coding! 🚀

