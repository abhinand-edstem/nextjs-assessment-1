'use client';

export default function ContentView({ selectedPath }) {

    return (
        <div className="px-10 py-8">
            <div className="flex justify-between py-4">
                <h4>Name : {selectedPath?.name}</h4>
                <p>parent Folder : {selectedPath?.parent}</p>
            </div>
            <div className="w-full bg-gray-300 h-[60vh] px-5 py-4 text-md rounded-md">
                <p>{selectedPath?.content}</p>
            </div>
        </div>
    )
}