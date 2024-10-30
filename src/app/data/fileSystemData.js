
export const fileSystem = {
    root: {
      id: "root",
      name: "Root",
      type: "folder",
      children: ["folder1", "folder2", "file1"],
      created: "2024-10-15T10:00:00Z",
      modified: "2024-10-30T15:30:00Z"
    },
    items: {
      folder1: {
        id: "folder1",
        name: "Documents",
        type: "folder",
        parent: "root",
        children: ["file2", "file3"],
        created: "2024-10-15T10:00:00Z",
        modified: "2024-10-30T15:30:00Z"
      },
      folder2: {
        id: "folder2",
        name: "Images",
        type: "folder",
        parent: "root",
        children: ["file4", "file5"],
        created: "2024-10-15T10:00:00Z",
        modified: "2024-10-30T15:30:00Z"
      },
      file1: {
        id: "file1",
        name: "readme.md",
        type: "markdown",
        parent: "root",
        size: 1024,
        created: "2024-10-15T10:00:00Z",
        modified: "2024-10-30T15:30:00Z",
        content: "# Project Documentation..."
      },
      file2: {
        id: "file2",
        name: "report.txt",
        type: "text",
        parent: "folder1",
        size: 2048,
        created: "2024-10-15T10:00:00Z",
        modified: "2024-10-30T15:30:00Z",
        content: "Monthly Report..."
      }
    }
  }
  
  export const fileOperations = [
    {
      id: "op1",
      type: "move",
      items: ["file1"],
      from: "root",
      to: "folder1",
      timestamp: "2024-10-30T15:30:00Z",
      user: "John Doe"
    }
  ]