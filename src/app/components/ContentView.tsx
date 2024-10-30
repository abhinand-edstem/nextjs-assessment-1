import ContentActions from "./ContentActions";
import Content from "./Content"

// interface SelectedPath{
//         id: string;
//         name: string;
//         type: 'folder' | 'text' | 'markdown' | 'image';
//         parent: string;
//         children?: string[];
//         content?: string;
//         size?: number;
//         created: string;
//         modified: string;
//       }
      

export default function ContentView({selectedPath}){
    return(
        <div>
            <ContentActions/>
            <Content selectedPath={selectedPath}/>
        </div>
    )
}