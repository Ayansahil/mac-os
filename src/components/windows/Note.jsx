import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import MacWindow from "./MacWindow";
import "./note.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Note = ({ windowName, setWindowsState }) => {
  const [markdown, setMarkdown] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(function () {
    fetch("/note.txt")
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.text();
      })
      .then(result => {
        setMarkdown(result);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
  }, []);

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="note-window">
        {error && <p style={{color: 'red'}}>Error: {error}</p>}
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MacWindow>
  );
};

export default Note;