#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'fs/promises';
import figlet from 'figlet';
import path from 'path';


figlet("Bear CLI", function(err, data) {
    if (err) {
        console.log(chalk.red("Error generating figlet"));
        return;
    }
    console.log(chalk.green(data));
    const usage = chalk.yellow("\nUsage: bearscli -p <project>  -l <level>\n") + chalk.green("Creates file structure for getting started learning different technologies.");

    const options = yargs(hideBin(process.argv))
        .usage(usage)
        .option("p", { alias: "project", describe: "Type of project (web, data)", type: "string", demandOption: true })
        .option("l", { alias: "level", describe: "Level of experience(beginner, advanced)", type: "string", demandOption: true })
        .option("n", {alias: "name", describe: "Optional project name", type: "String", demandOption: false})
        .help()
        .argv;
    console.log(usage)
    createProject(options.project, options.level, options.name)
})


function createProject(projectType, level, name) {
    const projectRoot = path.join(process.cwd(), name);
    projectType = projectType.trim().toLowerCase();
    level = level.trim().toLowerCase();

    console.log(`Project type: ${projectType}, Level: ${level}`);
    console.log(`Normalized Project type: "${projectType}", Normalized Level: "${level}"`);

    try{
        const projectKey = `${projectType}_${level}`;
        
        switch (projectKey) {
            case "web_beginner":
                //create frontend folders
                await fs.mkdir(path.join(projectRoot,"frontend"),{recursive:true});
                await fs.mkdir(path.join(projectRoot,"backend"),{recursive:true});

                //create files
                await fs.writeFile(path.join(projectRoot,"frontend","index.html"), "<!DOCTYPE html>\n<html>\n<head>\n<title>My Project</title>\n<link rel='stylesheet' href='styles.css'>\n</head>\n<body>\n<h1>Hello, World!</h1>\n</body>\n</html>");

                await fs.writeFile(path.join(projectRoot,"frontend","styles.css"), "body{height:100%; background-color: #f4f4f4;}");

                await fs.writeFile(path.join(projectRoot,"frontend","script.js"),"console.log('hello world!')");
                
                //create backend files
                await fs.writeFile(path.join(projectRoot,"backend","app.py"), "# Flask app starter code\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Hello, Flask!'\n\nif __name__ == '__main__':\n    app.run(debug=True)\n");

                console.log(chalk.bgBlueBright("files and folders created happy coding!"));
                break;
            
            case "data_beginner":
                await fs.mkdir(path.join(projectRoot, "data_project"),{recursive:true});
                await fs.writeFile(path.join(projectRoot,"data_project","app.py"), "import numpy as np \nimport pandas as pd \nimport seaborn as sns \nimport matplotlib.pyplot as plt");
                break;
                
            default:
                console.log(chalk.red("please enter a valid option"));

        }
    } catch (error) { 
        console.log(chalk.red("failed to create project structure."))
    }
}

