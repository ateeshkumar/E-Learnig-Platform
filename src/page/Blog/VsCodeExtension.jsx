import React from 'react'
import Layout from '../../components/layout/Layout'
import './css/vscodeextension.css';
import vsCode from '../../assets/page/vs-code-extension.jpg';
import liveserver from '../../assets/page/live-server.png'
import prettier from '../../assets/page/prettier.png'
import intent from '../../assets/page/intent.png'
import coderunner from '../../assets/page/code-runner.png'
import betercomment from '../../assets/page/bettercomment.png'
import autoclosetag from '../../assets/page/auto-close-tag.png'
import bracketpair from '../../assets/page/bracket-pair.png'
import hilium from '../../assets/page/helium.png'
import pathintellisence from '../../assets/page/path-intellisence.png'
import peacock from '../../assets/page/peacock.png'
import outputcolorizer from '../../assets/page/output-colorizer.png'
import beatify from '../../assets/page/beautify.png'
import CodeSnippit from '../../components/CodeSnippit';
const VsCodeExtension = () => {
  return (
    <>
      <Layout title="Vs Code Extension">
        <div className="vce-container">
          <h1>Best Vs Code Extensions for Developer</h1>
          <img src={vsCode} alt="Vs Code" />
          <div className="extension-container">
            <h3>1. Live Server</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Server
              </a>{" "}
              is a popular Visual Studio Code (VS Code) extension that
              simplifies web development by providing a local development
              server. It allows you to preview and interact with your web
              applications in real-time as you make changes to your HTML, CSS,
              and JavaScript files. This extension is particularly useful for
              front-end developers.
            </p>
            <img src={liveserver} alt="Live Server" />

            <p>1. A Quick Development Live Server with live browser reload.</p>
            <p>2. Start or Stop server by a single click from status bar.</p>
            <p>3. Hot Key control.</p>
            <p>4. Customizable Port Number, Server Root, default browser.</p>
            <p>5. Remote Connect through WLAN (E.g.: Connect with mobile) </p>

            <hr />
          </div>
          <div className="extension-container">
            <h3>2. Prettier</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prettier
              </a>{" "}
              is a popular code formatting tool that helps maintain consistent
              and clean code in a wide range of programming languages. There is
              a Visual Studio Code (VS Code) extension for Prettier, which
              allows you to integrate Prettier directly into your development
              workflow. Here's how to use Prettier with VS Code.
            </p>
            <img src={prettier} alt="prettier" />

            <hr />
          </div>
          <div className="extension-container">
            <h3>3. Intent Rainbow</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intent Rainbow
              </a>{" "}
              is a specific feature, extension, or concept in VS Code introduced
              after that date, I recommend checking the official documentation
              or resources related to VS Code for the most up-to-date
              information and details on what "intent rainbow" means and how
              it's used within the context of the software.
            </p>
            <img src={intent} alt="prettier" />

            <hr />
          </div>
          <div className="extension-container">
            <h3>4. Code Runner</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Runner
              </a>{" "}
              is a specific feature, extension, or concept in VS Code introduced
              after that date, I recommend checking the official documentation
              or resources related to VS Code for the most up-to-date
              information and details on what "intent rainbow" means and how
              it's used within the context of the software.
            </p>
            <img src={coderunner} alt="Code Runner" />

            <p>1. Run code file of current active Text Editor</p>
            <p>2. Run code file through context menu of file explorer</p>
            <p>3. Run selected code snippet in Text Editor</p>
            <p>4. Run code per Shebang</p>
            <p>5. Support REPL by running code in Integrated Terminal</p>
            <hr />
          </div>
          <div className="extension-container">
            <h3>5. Better Comments</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
                target="_blank"
                rel="noopener noreferrer"
              >
                Better Comment
              </a>{" "}
              extension allows you to create more visually appealing and
              informative comments in your code. It provides different comment
              styles for different purposes, such as highlighting important
              comments, tasks, and questions. This extension makes your comments
              more readable and easier to differentiate.
            </p>
            <img src={betercomment} alt="Code Runner" />

            <hr />
          </div>
          <div className="extension-container">
            <h3>6. Auto Close Tag</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auto Close Tag
              </a>{" "}
              is a useful Visual Studio Code (VS Code) extension that
              automatically generates and closes HTML or XML tags as you type.
              This extension can significantly speed up your web development
              workflow by eliminating the need to manually type closing tags.
            </p>
            <img src={autoclosetag} alt="Auto Close Tag" />
            <p>
              1. Automatically add closing tag when you type in the closing
              bracket of the opening tag
            </p>
            <p>
              2. After closing tag is inserted, the cursor is between the
              opening and closing tag
            </p>
            <p>3. Set the tag list that would not be auto closed</p>
            <p>4. Automatically close self-closing tag</p>
            <p>
              5. Use Keyboard Shortcut or Command Palette to add close tag
              manually
            </p>
            <hr />
          </div>
          <div className="extension-container">
            <h3>7. Bracket Pair Color DLW</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=BracketPairColorDLW.bracket-pair-color-dlw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bracket Pair Color DLW
              </a>{" "}
              extension for Visual Studio Code (VS Code). It's possible that
              this extension has been introduced or gained popularity after my
              last update or that the extension you mentioned is relatively
              unknown or specific to a certain context.
            </p>
            <img src={bracketpair} alt="Bracket Pair" />

            <hr />
          </div>
          <div className="extension-container">
            <h3>9. Beautify</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beautify
              </a>{" "}
              is not a specific extension name in Visual Studio Code (VS Code),
              but you might be looking for an extension that can help you format
              or "beautify" your code. There are several code formatting
              extensions available for VS Code, depending on the programming
              languages you're working with.
            </p>
            <img src={beatify} alt="Beautify" />

            <hr />
          </div>
          <div className="extension-container">
            <h3>10. Peacock</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peacock
              </a>{" "}
              is a popular Visual Studio Code (VS Code) extension that allows
              you to customize the colors of your workspace, making it easier to
              differentiate between multiple VS Code instances or different
              projects. This extension is especially helpful when you work on
              multiple projects simultaneously and want to visually distinguish
              them.
            </p>
            <img src={peacock} alt="peacock" />

            <hr />
          </div>
          <div className="extension-container">
            <h3>11. Output Colorizer</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=SteveBushResearch.BuildOutputColorizer#:~:text=Build%20Output%20Colorizer%20applies%20syntax,CMake%20builds)%20are%20stripped%20away."
                target="_blank"
                rel="noopener noreferrer"
              >
                Output Colorizer
              </a>{" "}
              is a popular Visual Studio Code (VS Code) extension that allows
              you to add color to the text in the VS Code output panel. This
              extension is useful for improving the readability of log files,
              console outputs, and other text-based outputs by applying syntax
              highlighting and colorization.
            </p>
            <img src={outputcolorizer} alt="Output Colorizer" />
            <CodeSnippit
              type="json"
              code={`"outputColorizer.ignoredPatterns": ["npm:.*"],
                  "outputColorizer.transform": [
                    {
                      "match": "\\[error\\]",
                      "color": "red",
                      "background": "white",
                      "ranges": ["stderr"]
                    },
                    {
                      "match": "\\[warning\\]",
                      "color": "yellow",
                      "background": "black",
                      "ranges": ["stderr"]
                    }
                  ]
                  `}
            />
            <hr />
          </div>
          <div className="extension-container">
            <h3>12. Helium</h3>
            <p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=DhyeyThumar.helium-theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Helium
              </a>{" "}
              is a new or less-known extension or project, I recommend checking
              the official Visual Studio Code marketplace or the specific
              documentation or resources associated with it for the most
              up-to-date information and details about its purpose and usage.
            </p>
            <img src={hilium} alt="Helium" />
            <hr />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default VsCodeExtension