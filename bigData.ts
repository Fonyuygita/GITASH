// types.ts
export type CommandStep = {
  command: string;
  explanation: string;
  nextHint: string;
  examples?: string[];
  additionalNotes?: string;
};

export type LearningPath = {
  name: string;
  description: string;
  steps: CommandStep[];
};

// terminalSteps.ts
export const terminalSteps: Record<string, LearningPath> = {
  git: {
    name: "Git Version Control",
    description:
      "Learn Git commands from basics to advanced collaboration techniques",
    steps: [
      {
        command: "git init",
        explanation:
          "Creates a new Git repository. Think of this as creating a new photo album - you're setting up a place to store all your photo memories (code changes).",
        nextHint:
          "Try adding a file to your repository using 'git add <filename>' or 'git add .'",
        examples: ["git init", "git init my-project"],
        additionalNotes:
          "This creates a hidden .git folder that stores all the version control information",
      },
      {
        command: "git add",
        explanation:
          "Stages changes for commit. Like choosing which photos you want to put in your album before actually sticking them in.",
        nextHint:
          "Now commit your changes using 'git commit -m \"your message\"'",
        examples: ["git add filename.txt", "git add .", "git add src/*.js"],
      },
      {
        command: "git commit",
        explanation:
          "Saves your staged changes with a descriptive message. Like writing a caption for the photos you just added to your album.",
        nextHint: "You can see your commit history using 'git log'",
        examples: [
          'git commit -m "Add login feature"',
          'git commit -am "Fix typo"',
        ],
      },
      {
        command: "git status",
        explanation:
          "Shows the current state of your working directory and staging area. Like checking which photos are ready to go into the album and which ones you still need to decide on.",
        nextHint:
          "Try modifying a file and run 'git status' again to see the changes",
        examples: ["git status"],
      },
      {
        command: "git log",
        explanation:
          "Shows the commit history. Like looking through your photo album to see all the photos you've added and when you added them.",
        nextHint: "Try 'git branch' to see or create new branches",
        examples: ["git log", "git log --oneline", "git log --graph"],
      },
      {
        command: "git branch",
        explanation:
          "Lists, creates, or deletes branches. Think of branches as different versions of your photo album, each telling a slightly different story.",
        nextHint:
          "Create a new branch using 'git branch feature-name' and switch to it using 'git checkout feature-name'",
        examples: [
          "git branch",
          "git branch new-feature",
          "git branch -d old-feature",
        ],
      },
      {
        command: "git checkout",
        explanation:
          "Switches between branches or restores files. Like choosing which version of your photo album you want to work on.",
        nextHint: "Make some changes and commit them to this branch",
        examples: [
          "git checkout main",
          "git checkout -b new-feature",
          "git checkout -- filename.txt",
        ],
      },
      {
        command: "git merge",
        explanation:
          "Combines changes from different branches. Like taking the best photos from different versions of your album and combining them into one perfect album.",
        nextHint:
          "Try pushing your changes to a remote repository using 'git push'",
        examples: [
          "git merge feature-branch",
          "git merge --no-ff feature-branch",
        ],
      },
      {
        command: "git push",
        explanation:
          "Uploads your commits to a remote repository. Like making a copy of your photo album and sharing it with friends.",
        nextHint: "To get updates from others, use 'git pull'",
        examples: ["git push origin main", "git push -u origin feature-branch"],
      },
      {
        command: "git pull",
        explanation:
          "Downloads and integrates changes from a remote repository. Like getting new photos from friends and adding them to your album.",
        nextHint: "Try creating a new branch for your next feature",
        examples: ["git pull", "git pull origin main"],
      },
    ],
  },
  cmd: {
    name: "Windows Command Prompt",
    description:
      "Learn essential Windows Command Prompt commands for file system navigation and management",
    steps: [
      {
        command: "dir",
        explanation:
          "Lists files and directories in the current folder. Like looking at the contents of a filing cabinet drawer.",
        nextHint: "Try changing directory using 'cd foldername'",
        examples: ["dir", "dir /a", "dir /w"],
      },
      {
        command: "cd",
        explanation:
          "Changes the current directory. Like moving between different drawers in your filing cabinet.",
        nextHint: "Try creating a new directory using 'mkdir'",
        examples: ["cd foldername", "cd ..", "cd C:\\Users"],
      },
      {
        command: "mkdir",
        explanation:
          "Creates a new directory. Like adding a new folder to your filing cabinet.",
        nextHint:
          "Create a file in the new directory using 'echo > filename.txt'",
        examples: ["mkdir newfolder", 'mkdir "My Documents"'],
      },
      {
        command: "copy",
        explanation:
          "Copies files from one location to another. Like making a photocopy of a document and putting it in a different folder.",
        nextHint: "Try moving a file using 'move'",
        examples: ["copy file.txt backup.txt", "copy *.txt backup\\"],
      },
      {
        command: "move",
        explanation:
          "Moves files from one location to another. Like physically moving a document to a different folder.",
        nextHint: "Try deleting a file using 'del'",
        examples: ["move file.txt subfolder\\", "move *.doc archive\\"],
      },
    ],
  },
  powershell: {
    name: "Windows PowerShell",
    description:
      "Learn PowerShell commands for advanced Windows system administration",
    steps: [
      {
        command: "GET",
        explanation:
          "Lists items in current location. PowerShell's equivalent of 'ls' or 'dir'. Think of it as taking inventory of your digital storage.",
        nextHint: "Try changing location using 'Set-Location'",
        examples: ["Get-ChildItem", "Get-ChildItem -Path C:\\", "ls"],
      },
      {
        command: "Set-Location",
        explanation:
          "Changes your current location in the file system. Like moving to a different room in your digital house.",
        nextHint: "Create a new directory using 'New-Item'",
        examples: ["Set-Location Documents", "cd Desktop", "Set-Location C:\\"],
      },
      {
        command: "New-Item",
        explanation:
          "Creates new files or directories. Like creating new containers for your digital content.",
        nextHint: "Try copying items using 'Copy-Item'",
        examples: [
          'New-Item -ItemType Directory -Name "NewFolder"',
          'New-Item -ItemType File -Name "test.txt"',
        ],
      },
    ],
  },
  linux: {
    name: "Linux Terminal",
    description:
      "Learn essential Linux terminal commands for system navigation and file management",
    steps: [
      {
        command: "ls",
        explanation:
          "Lists directory contents. Like opening a drawer and seeing what's inside.",
        nextHint: "Try changing directories using 'cd'",
        examples: ["ls", "ls -la", "ls -h"],
      },
      {
        command: "cd",
        explanation:
          "Changes current directory. Like moving between rooms in your house.",
        nextHint: "Create a new directory using 'mkdir'",
        examples: ["cd Documents", "cd ..", "cd ~"],
      },
      {
        command: "pwd",
        explanation:
          "Print Working Directory - shows your current location. Like checking your current address.",
        nextHint: "List files in this directory using 'ls'",
        examples: ["pwd"],
      },
      {
        command: "mkdir",
        explanation:
          "Creates a new directory. Like building a new room in your house.",
        nextHint: "Try creating a file using 'touch'",
        examples: ["mkdir newfolder", "mkdir -p path/to/newfolder"],
      },
      {
        command: "touch",
        explanation:
          "Creates an empty file or updates file timestamps. Like placing an empty container that you can fill later.",
        nextHint: "Try viewing file contents using 'cat'",
        examples: ["touch newfile.txt", "touch file1.txt file2.txt"],
      },
      {
        command: "cat",
        explanation:
          "Displays file contents. Like reading what's written on a piece of paper.",
        nextHint: "Try copying a file using 'cp'",
        examples: ["cat file.txt", "cat -n file.txt"],
      },
      {
        command: "cp",
        explanation:
          "Copies files and directories. Like making a photocopy of a document.",
        nextHint: "Try moving a file using 'mv'",
        examples: ["cp file.txt backup.txt", "cp -r folder1 folder2"],
      },
      {
        command: "mv",
        explanation:
          "Moves or renames files and directories. Like relocating items in your house or giving them new names.",
        nextHint: "Try removing a file using 'rm'",
        examples: ["mv file.txt newname.txt", "mv file.txt ../folder/"],
      },
      {
        command: "rm",
        explanation:
          "Removes files or directories. Like throwing something in the trash (but be careful - there's no recycling bin!).",
        nextHint: "Try checking disk space using 'df'",
        examples: ["rm file.txt", "rm -r folder/", "rm -rf folder/"],
      },
    ],
  },
};

// functionality to get next command

export const getNextCommand = (
  tool: string,
  currentCommand: string
): CommandStep | null => {
  // you not gonna get any command if you don't select any tool step, for examples <select git>
  const toolSteps = terminalSteps[tool]?.steps;
  if (!toolSteps) return null;

  const currentIndex = toolSteps.findIndex(
    (step) =>
      step.command === currentCommand || currentCommand.startsWith(step.command)
  );

  // if index is out of bound

  if (currentIndex === -1 || currentIndex === toolSteps.length - 1) return null;
  // Finally move to the next step
  return toolSteps[currentIndex + 1];
};

// Making sure that command  is valid

export const validateCommand = (tool: string, command: string): boolean => {
  const toolSteps = terminalSteps[tool]?.steps;
  if (!toolSteps) return false;

  return toolSteps.some(
    (step) => command === step.command || command.startsWith(step.command)
  );
};
