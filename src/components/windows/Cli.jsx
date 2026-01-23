import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({windowName,setWindowsState}) => {
  const welcomeMessage = `
╔════════════════════════════════════════════════════════╗
║    Hello! Welcome to Ayan's Personal Portfolio CLI     ║
╚════════════════════════════════════════════════════════╝

🚀 Get to know me better! Try these commands:

  • about       - Learn more about me
  • skills      - Explore my technical skills
  • projects    - Check out my recent projects
  • experience  - View my professional experience
  • contact     - Get in touch with me
  • whoami      - See the current user
  • pwd         - Print working directory
  • ls          - List portfolio sections
  • date        - Show current date and time
  • echo        - Echo a message

📖 Type 'help' to see all available commands with descriptions.
📝 Or just start typing any command above to explore!

Happy exploring! 🎉
`;

  const commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "Display information about me.",
      usage: "about",
      fn: () =>
        "Ayan Sahil - Full Stack Developer | React | Node.js | Express.js",
    },
    skills: {
      description: "List my technical skills.",
      usage: "skills",
      fn: () =>
        "Languages: JavaScript, React, Node.js, SCSS\nTools: Git, Webpack, Vite, npm",
    },
    projects: {
      description: "View my recent projects.",
      usage: "projects",
      fn: () =>
        "1. Mac OS Portfolio - A macOS-inspired portfolio (You are here!)\n2. E-commerce Platform - React + Node.js\n3. Weather App - Real-time weather tracking",
    },
    contact: {
      description: "Get my contact information.",
      usage: "contact",
      fn: () =>
        "Email: ayan@example.com\nGithub: github.com/ayansahil\nLinkedIn: linkedin.com/in/ayansahil",
    },
    whoami: {
      description: "Print the current user.",
      usage: "whoami",
      fn: () => "ayansahil",
    },
    date: {
      description: "Print the current date and time.",
      usage: "date",
      fn: () => new Date().toString(),
    },
    pwd: {
      description: "Print working directory.",
      usage: "pwd",
      fn: () => "/Users/ayansahil/portfolio",
    },
    ls: {
      description: "List portfolio sections.",
      usage: "ls",
      fn: () => "About  |  Projects  |  Skills  |  Resume  |  Contact",
    },
    experience: {
      description: "View my professional experience.",
      usage: "experience",
      fn: () =>
        "Full Stack Developer at TechCorp (2021-Present)\nFrontend Developer at StartUp Inc (2019-2021)\nIntern at WebDesign Co (2018-2019)",
    },
    
  };

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"ayansahil:~$"}
          promptLabelStyle={{ color: "#4CF700" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
