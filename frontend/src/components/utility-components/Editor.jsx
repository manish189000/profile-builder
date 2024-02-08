import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");
  const toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  return (
    <div>
      <ReactQuill
        modules={module}
        className="bg-black text-white"
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Editor;
