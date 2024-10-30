'use client';

import { useState } from 'react';
import { fileSystem } from '../data/fileSystemData';

export default function FileTree({onSelectPath}) {
    const [rootFileOpen, setrootFileOpen] = useState(false);
    const [mainFolder, setmainFolder] = useState({
        open: false,
        childFolder: []
    });
    const hanldeFolderCick = (value) => {
        if (fileSystem.items.folder1.id === value) {
            setmainFolder({
                ...mainFolder,
                open: !mainFolder.open || true,
                childFolder: [fileSystem.items.folder1.children]
            });

        } else if (fileSystem.items.folder2.id === value) {
            setmainFolder({
                ...mainFolder,
                open: !mainFolder.open || true,
                childFolder: [fileSystem.items.folder2.children]
            });
            if ('content' in fileSystem.items.folder1) {

            }
        }
        else if (fileSystem.items.file1.id === value) {
            if ('content' in fileSystem.items.file1) {
                onSelectPath(fileSystem.items.file1);
                localStorage.setItem('folderData', JSON.stringify(fileSystem.items.file1))
            }
        } else if (fileSystem.items.file2.id === value) {
            onSelectPath(fileSystem.items.file2);
            localStorage.setItem('folderData', JSON.stringify(fileSystem.items.file2))
        }
    }


    return (
        <div className="">
            <h2 className="text-gray-700 font-bold text-xl text-center">Folder</h2>
            <h2 className='h-auto py-1 w-full rounded-sm bg-yellow-200 my-4 text-center cursor-pointer' onClick={() => setrootFileOpen(!rootFileOpen)}>Root</h2>
            {rootFileOpen &&
                <div className='pl-5'>
                    {
                        fileSystem.root.children.map((item, index) => (
                            <>
                                <div onClick={() => hanldeFolderCick(item)} key={index} className='bg-yellow-200 my-4 text-center py-1 cursor-pointer'>{item}</div>
                            </>
                        ))
                    }
                    {mainFolder.open &&
                        <div className='pl-4'>
                            {mainFolder.childFolder[0].map((item, index) => (
                                <div onClick={() => hanldeFolderCick(item)} key={index} className='bg-blue-200 my-4 text-center py-1 cursor-pointer'>{item}</div>
                            ))}
                        </div>
                    }
                </div>
            }

        </div>
    )
}