'use client';

import FileTree from "./components/FileTree";
import ContentView from "./components/ContentView";
import { useState } from "react";
import TopBar from "./components/TopBar";
import { fileSystem } from '../app/data/fileSystemData';



export default function Home() {
  const [selectedPath, setSelectedPath] = useState({id:'root'});
  console.warn({ selectedPath });

  return (
    <div className="flex">
      <div className="w-1/4">
        <FileTree
          onSelectPath={setSelectedPath}
        />
      </div>
      <div className="flex-1">
        <TopBar 
        data={fileSystem}
        selectedPath={selectedPath}
         />
        <ContentView
          selectedPath={selectedPath}
        />
      </div>
    </div>
  );
}


