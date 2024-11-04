'use client';

import { useState } from 'react';
import { fileSystem } from '../data/fileSystemData';

export default function FileTree({ onSelectPath }) {
    const [isRootOpen, setIsRootOpen] = useState(false);
    const [folderState, setFolderState] = useState({
        open: false,
        childFolders: []
    });

    const handleFolderClick = (value) => {
        const folder1 = fileSystem.items.folder1;
        const folder2 = fileSystem.items.folder2;
        const file1 = fileSystem.items.file1;
        const file2 = fileSystem.items.file2;

        if (folder1.id === value) {
            setFolderState({
                open: !folderState.open,
                childFolders: folder1.children
            });
        } else if (folder2.id === value) {
            setFolderState({
                open: !folderState.open,
                childFolders: folder2.children
            });
        } else if (file1.id === value && 'content' in file1) {
            onSelectPath(file1);
            localStorage.setItem('folderData', JSON.stringify(file1));
        } else if (file2.id === value && 'content' in file2) {
            onSelectPath(file2);
            localStorage.setItem('folderData', JSON.stringify(file2));
        }
    };

    return (
        <div>
            <h2 className="text-gray-700 font-bold text-xl text-center">Folder</h2>
            <h2
                className="h-auto py-1 w-full rounded-sm bg-yellow-200 my-4 text-center cursor-pointer"
                onClick={() => setIsRootOpen(!isRootOpen)}
            >
                Root
            </h2>
            {isRootOpen && (
                <div className="pl-5">
                    {fileSystem.root.children.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleFolderClick(item)}
                            className="bg-yellow-200 my-4 text-center py-1 cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                    {folderState.open && (
                        <div className="pl-4">
                            {folderState.childFolders.map((child, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleFolderClick(child)}
                                    className="bg-blue-200 my-4 text-center py-1 cursor-pointer"
                                >
                                    {child}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
