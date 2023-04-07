"use client"

import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./editor.css"
import { useCallback, useState, useMemo } from "react"
// import { updateNoteById } from "@/lib/prisma/notes";

export default async function Editor({ shortid, content }: any) {

  const [value, setValue] = useState(content);

  const onChange = useCallback((value: string) => {
    setValue(value);
    console.log(`vlaue from editor: ${value}`);
  }, [value]);

  console.log(value)

  const delay = 1000;
  const anOptions = useMemo(() => {
    console.log("you should save")
  }, [delay]);
  
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
