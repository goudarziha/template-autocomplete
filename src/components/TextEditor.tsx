import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { useEffect } from "react";
import wordListPath from "word-list";

interface TextEditorProps {
  editorState: any;
  setEditorState: (state: any) => void;
}

useEffect(() => {
  const words = wordListPath;
  words.split("\n").forEach(word => {
    console.log(word);

  });   
}, [EditorState]);

}, [EditorState]);

const TextEditor = ({ editorState, setEditorState }: TextEditorProps) => {
  return (
    <div className="editor-container">
      <Editor editorState={editorState} onChange={setEditorState} spellCheck />
    </div>
  );
};

export default TextEditor;
