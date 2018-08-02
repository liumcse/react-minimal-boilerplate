import React from "react";
import ReactDOM from "react-dom";

import "src/styles/app.scss";
import "src/styles/normalize.css";
import * as styles from "./style.scss";

const App = () => (
  <div className={styles.appContainer}>
    <div className={styles.welcomeHeader}>Hello, World!</div>
    <div className={styles.welcomeMessage}>
      This is your React App. Congratulations on setting it up!
    </div>
    <div className={styles.welcomeMessage.concat(" ").concat(styles.emoji)}>🚀</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
