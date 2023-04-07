"use client"

import SimpleMDE, { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./editor.css"
import { useCallback, useState, useMemo } from "react"

export default function Editor({ id, content }: any) {
  const [value, setValue] = useState(content);

  const onChange = useCallback((value: string) => {
    setValue(value);
    // console.log(value);
  }, []);
  const getNewContent = () => {
    return value
  }

  // const delay = 1000;
  // // const autosavedValue = await callback(id, value);
  // const anOptions = useMemo(() => {
  //   return {
  //     autosave: {
  //       enabled: true,
  //       uniqueId: "editor",
  //       delay,
  //     },
  //   };
  // }, [delay]);

  const toolbar = []

  return (
    <div className="w-full h-full overflow-y-auto">
      <SimpleMdeReact
        id="editor"
        value={value}
        onChange={onChange}
        options={{
          autofocus: true,
          spellChecker: false,
          toolbar: [],
          status: false
        }}
        className=""
      />
    </div>
  );
}
