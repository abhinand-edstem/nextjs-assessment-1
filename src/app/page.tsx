'use client';

import FileTree from "./components/FileTree";
import ContentView from "./components/ContentView";
import { useState } from "react";


export default function Home() {
  const [selectedPath, setSelectedPath] = useState();
  console.warn({ selectedPath });

  return (
    <div className="flex">
      <div className="w-[20vw]">
        <FileTree
          onSelectPath={setSelectedPath}
        />
      </div>
      <div className="w-[80vw]">
        <ContentView
          selectedPath={selectedPath}
        />
      </div>
    </div>
  );
}
