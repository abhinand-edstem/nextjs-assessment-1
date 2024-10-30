import FileTree from "./components/FileTree";
import ContentView from "./components/ContentView";


export default function Home() {
  return (
    <div className="flex">
      <div className="w-[20vw]">     
        <FileTree/>
        </div>
        <div className="w-[80vw]">     
        <ContentView/>
        </div>
    </div>
  );
}


