import { useState } from "react";
import { runCodeSanbox } from "../utils/promiseSandbox";
import { Editor } from "@monaco-editor/react";
interface CodeEditorProps {
  defaultCode: string;
}

export default function CodeEditor({ defaultCode }: CodeEditorProps) {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const result = await runCodeSanbox(code);
      setOutput(String(result))
    } catch (error: any) {
      setOutput(error.message);
    }
  }

  return (
    <div className="flex-2 p-4 border rounded-xl">
      <Editor
        value={code}
        onChange={(_code) => {
          setCode(_code || '');
        }}
        height="500px"
        defaultLanguage="javascript" // 🔥 language quyết định syntax highlight
        defaultValue={defaultCode}
        theme="vs-dark" // hoặc "light", "hc-black", tùy bạn
      />
      <button
        onClick={handleRun}
        className="mt-6 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Run
      </button>
      <pre className="mt-4 bg-gray-100 p-10 text-sm rounded">{output}</pre>
    </div>
  )
}