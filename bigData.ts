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
          "Creates a new Git repository. Think of this as creating a new photo album. You're setting up a place to store all your photo memories (code changes). This initializes a hidden .git directory in your project, which contains all the necessary metadata and object database for your new repository.",
        nextHint:
          "Try adding a file to your repository using 'git add <filename>' or 'git add .'",
        examples: ["git init", "git init my-project"],
        additionalNotes:
          "This command should be run inside the directory you want to turn into a Git repository.",
      },
      {
        command: "git add",
        explanation:
          "Stages changes for commit. Like choosing which photos you want to put in your album before actually sticking them in. It updates the index with the current content found in your working directory, preparing it for the next commit.",
        nextHint:
          "Now commit your changes using 'git commit -m \"your message\"'",
        examples: ["git add filename.txt", "git add .", "git add src/*.js"],
        additionalNotes:
          "You can stage specific files, directories, or patterns. Using 'git add .' stages all changes in the current directory.",
      },
      {
        command: "git commit",
        explanation:
          "Saves your staged changes with a descriptive message. Like writing a caption for the photos you just added to your album. This command captures a snapshot of the project's currently staged changes.",
        nextHint: "You can see your commit history using 'git log'",
        examples: [
          'git commit -m "Add login feature"',
          'git commit -am "Fix typo"',
        ],
        additionalNotes:
          "The '-m' flag allows you to provide a commit message inline. Use 'git commit -a -m \"message\"' to stage and commit changes to tracked files in one step.",
      },
      {
        command: "git status",
        explanation:
          "Shows the current state of your working directory and staging area. Like checking which photos are ready to go into the album and which ones you still need to decide on. This command helps you see which changes have been staged, which haven't, and which files aren't being tracked by Git.",
        nextHint:
          "Try modifying a file and run 'git status' again to see the changes",
        examples: ["git status"],
        additionalNotes:
          "It's a good habit to run 'git status' frequently to stay aware of your current repository state.",
      },
      {
        command: "git log",
        explanation:
          "Shows the commit history. Like looking through your photo album to see all the photos you've added and when you added them. This command displays a list of all the commits in your repository, along with relevant details like commit hashes, authors, dates, and messages.",
        nextHint: "Try 'git branch' to see or create new branches",
        examples: ["git log", "git log --oneline", "git log --graph"],
        additionalNotes:
          "'git log --oneline' provides a compact view of your commit history. Adding '--graph' visually represents branch and merge history.",
      },
      {
        command: "git branch",
        explanation:
          "Lists, creates, or deletes branches. Think of branches as different versions of your photo album, each telling a slightly different story. This command helps you manage and navigate branches in your repository.",
        nextHint:
          "Create a new branch using 'git branch feature-name' and switch to it using 'git checkout feature-name'",
        examples: [
          "git branch",
          "git branch new-feature",
          "git branch -d old-feature",
        ],
        additionalNotes:
          "'git branch' with no arguments lists all your current branches. Using '-d' deletes a specified branch.",
      },
      {
        command: "git checkout",
        explanation:
          "Switches between branches or restores files. Like choosing which version of your photo album you want to work on. This command can switch branches, restore files to a previous state, or even create a new branch.",
        nextHint: "Make some changes and commit them to this branch",
        examples: [
          "git checkout main",
          "git checkout -b new-feature",
          "git checkout -- filename.txt",
        ],
        additionalNotes:
          "Using 'git checkout -b branch-name' creates a new branch and switches to it in one step.",
      },
      {
        command: "git merge",
        explanation:
          "Combines changes from different branches. Like taking the best photos from different versions of your album and combining them into one perfect album. This command integrates changes from a specified branch into the current branch.",
        nextHint:
          "Try pushing your changes to a remote repository using 'git push'",
        examples: [
          "git merge feature-branch",
          "git merge --no-ff feature-branch",
        ],
        additionalNotes:
          "The '--no-ff' flag ensures a merge commit is created, preserving the branch history.",
      },
      {
        command: "git push",
        explanation:
          "Uploads your commits to a remote repository. Like making a copy of your photo album and sharing it with friends. This command transfers your local branch commits to the remote repository.",
        nextHint: "To get updates from others, use 'git pull'",
        examples: ["git push origin main", "git push -u origin feature-branch"],
        additionalNotes:
          "The '-u' flag sets the upstream tracking branch, simplifying future pushes.",
      },
      {
        command: "git pull",
        explanation:
          "Downloads and integrates changes from a remote repository. Like getting new photos from friends and adding them to your album. This command fetches and merges changes from the remote repository into your current branch.",
        nextHint: "Try creating a new branch for your next feature",
        examples: ["git pull", "git pull origin main"],
        additionalNotes:
          "'git pull' is a combination of 'git fetch' and 'git merge'. It retrieves and integrates changes in one step.",
      },
      {
        command: "git clone",
        explanation:
          "Copies an existing remote repository to your local machine. Like making a photocopy of a friend's entire photo album so you can start your own collection. This command creates a local copy of the remote repository and sets up the local repository to track the remote repository.",
        nextHint:
          "Navigate into the cloned directory with 'cd <repository-name>'",
        examples: [
          "git clone https://github.com/user/repo.git",
          "git clone git@github.com:user/repo.git",
        ],
        additionalNotes:
          "This command not only downloads the latest snapshot but also the full history of the project.",
      },
      {
        command: "git fetch",
        explanation:
          "Retrieves updates from a remote repository without merging them. Think of it as getting new photos from friends but not adding them to your album yet. This command downloads objects and refs from another repository.",
        nextHint:
          "You can review fetched changes before merging them with 'git diff'",
        examples: ["git fetch", "git fetch origin"],
        additionalNotes:
          "Useful for reviewing what others have done before incorporating their changes.",
      },
      {
        command: "git remote",
        explanation:
          "Manages remote repository connections. Like having multiple pen pals - you can list, add, or remove them as needed. This command lets you view and manage the set of tracked repositories.",
        nextHint: "Add a new remote with 'git remote add <name> <url>'",
        examples: [
          "git remote -v",
          "git remote add origin https://github.com/user/repo.git",
          "git remote rm origin",
        ],
        additionalNotes:
          "Helpful for working with multiple repositories or collaborating with different teams.",
      },
      {
        command: "git rebase",
        explanation:
          "Reapplies commits on top of another base tip. Like rearranging photos in your album so they tell a better story. This command allows you to move or combine a sequence of commits to a new base commit.",
        nextHint:
          "Be careful with rebase if you've shared your changes with others",
        examples: ["git rebase main", "git rebase -i HEAD~3"],
        additionalNotes:
          "Rebase can simplify your commit history but can cause issues if not used correctly.",
      },
      {
        command: "git stash",
        explanation:
          "Temporarily saves changes you don't want to commit yet. Like putting aside some photos you’re not ready to stick in the album. This command is useful for saving your local modifications and reverting the working directory to match the HEAD commit.",
        nextHint: "Use 'git stash apply' to bring back stashed changes",
        examples: [
          "git stash",
          'git stash save "Work in progress"',
          "git stash pop",
        ],
        additionalNotes:
          "Great for switching contexts without losing your work.",
      },
      {
        command: "git reset",
        explanation:
          "Undoes changes by resetting your current HEAD to a specified state. Like taking out a photo from your album. This command can reset the current state of your branch to a previous commit.",
        nextHint:
          "Use with caution - 'git reset --hard' can remove changes permanently",
        examples: [
          "git reset --soft HEAD~1",
          "git reset --hard HEAD",
          "git reset <commit>",
        ],
        additionalNotes:
          "Soft reset keeps changes in the working directory, hard reset removes them.",
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
          "Lists files and directories in the current folder. Like looking at the contents of a filing cabinet drawer. The 'dir' command shows information such as file names, sizes, and modification dates.",
        nextHint: "Try changing directory using 'cd foldername'",
        examples: ["dir", "dir /a", "dir /w"],
        additionalNotes:
          "Using 'dir /a' shows hidden files and 'dir /w' shows files in a wide list format.",
      },
      {
        command: "cd",
        explanation:
          "Changes the current directory. Like moving between different drawers in your filing cabinet. The 'cd' command allows you to navigate to a different directory within the file system.",
        nextHint: "Try creating a new directory using 'mkdir'",
        examples: ["cd foldername", "cd ..", "cd C:\\Users"],
        additionalNotes: "Using 'cd ..' moves you up one directory level.",
      },
      {
        command: "mkdir",
        explanation:
          "Creates a new directory. Like adding a new folder to your filing cabinet. The 'mkdir' command allows you to create new directories to organize your files.",
        nextHint:
          "Create a file in the new directory using 'echo > filename.txt'",
        examples: ["mkdir newfolder", 'mkdir "My Documents"'],
        additionalNotes:
          "You can create nested directories by specifying a path, e.g., 'mkdir parent\\child'.",
      },
      {
        command: "copy",
        explanation:
          "Copies files from one location to another. Like making a photocopy of a document and putting it in a different folder. The 'copy' command allows you to duplicate files within the file system.",
        nextHint: "Try moving a file using 'move'",
        examples: ["copy file.txt backup.txt", "copy *.txt backup\\"],
        additionalNotes:
          "Using wildcards like '*' allows you to copy multiple files at once.",
      },
      {
        command: "move",
        explanation:
          "Moves files from one location to another. Like physically moving a document to a different folder. The 'move' command transfers files from one directory to another.",
        nextHint: "Try deleting a file using 'del'",
        examples: ["move file.txt subfolder\\", "move *.doc archive\\"],
        additionalNotes:
          "Using wildcards like '*' allows you to move multiple files at once.",
      },
      {
        command: "del",
        explanation:
          "Deletes one or more files. Like shredding a document. The 'del' command permanently removes files from the file system.",
        nextHint: "Try renaming a file using 'rename'",
        examples: ["del file.txt", "del *.tmp"],
        additionalNotes: "Be careful when using 'del' as it cannot be undone.",
      },
      {
        command: "rename",
        explanation:
          "Renames a file or directory. Like changing the label on a folder. The 'rename' command allows you to give a new name to an existing file or directory.",
        nextHint: "Try checking the current directory path using 'cd'",
        examples: ["rename file.txt newfile.txt", "rename oldname newname"],
        additionalNotes:
          "You cannot specify a new drive or path for the target name.",
      },
      {
        command: "type",
        explanation:
          "Displays the contents of a text file. Like opening a document to read it. The 'type' command allows you to view the contents of a file directly in the command prompt.",
        nextHint: "Try redirecting output to a file using '>'",
        examples: ["type file.txt", "type document.txt"],
        additionalNotes:
          "Useful for quickly viewing the contents of small text files.",
      },
      {
        command: "cls",
        explanation:
          "Clears the screen. Like wiping a whiteboard clean. The 'cls' command clears all text from the command prompt window.",
        nextHint: "Try viewing the help documentation using 'help'",
        examples: ["cls"],
        additionalNotes:
          "Clearing the screen can help reduce clutter and improve readability.",
      },
      {
        command: "help",
        explanation:
          "Provides a list of available commands and their descriptions. Like consulting a manual. The 'help' command gives you a brief description of all the commands you can use in the command prompt.",
        nextHint:
          "Try getting detailed help for a specific command using 'command /?'",
        examples: ["help", "help dir"],
        additionalNotes:
          "For detailed information about a command, type 'command /?'.",
      },
      {
        command: "exit",
        explanation:
          "Closes the Command Prompt window. Like shutting down a computer. The 'exit' command ends your current session and closes the command prompt.",
        nextHint: "Reopen the command prompt to continue exploring commands.",
        examples: ["exit"],
        additionalNotes:
          "Make sure to save any work before exiting the command prompt.",
      },
    ],
  },

  powershell: {
    name: "Windows PowerShell",
    description:
      "Learn PowerShell commands for advanced Windows system administration",
    steps: [
      {
        command: "Get-ChildItem",
        explanation:
          "Lists items in the current location. PowerShell's equivalent of 'ls' or 'dir'. Think of it as taking inventory of your digital storage. This command provides a detailed list of the files and directories in your current directory, including hidden and system files if specified.",
        nextHint: "Try changing location using 'Set-Location'",
        examples: ["Get-ChildItem", "Get-ChildItem -Path C:\\", "ls"],
        additionalNotes: "You can use aliases like 'gci' or 'dir'.",
      },
      {
        command: "Set-Location",
        explanation:
          "Changes your current location in the file system. Like moving to a different room in your digital house. This command navigates to a different directory within the file system, enabling you to work in a different location.",
        nextHint: "Create a new directory using 'New-Item'",
        examples: ["Set-Location Documents", "cd Desktop", "Set-Location C:\\"],
        additionalNotes: "You can use aliases like 'cd' or 'sl'.",
      },
      {
        command: "New-Item",
        explanation:
          "Creates new files or directories. Like creating new containers for your digital content. This command allows you to create new directories or files, specifying their type and name.",
        nextHint: "Try copying items using 'Copy-Item'",
        examples: [
          'New-Item -ItemType Directory -Name "NewFolder"',
          'New-Item -ItemType File -Name "test.txt"',
        ],
        additionalNotes:
          "You can also create symbolic links using this command with the '-ItemType SymbolicLink' parameter.",
      },
      {
        command: "Copy-Item",
        explanation:
          "Copies items from one location to another. Like making duplicates of documents and placing them in different folders. This command allows you to copy files and directories to a new location.",
        nextHint: "Try moving items using 'Move-Item'",
        examples: ["Copy-Item file.txt backup.txt", "Copy-Item *.txt backup\\"],
        additionalNotes:
          "The '-Recurse' parameter allows you to copy all items, including child items.",
      },
      {
        command: "Move-Item",
        explanation:
          "Moves items from one location to another. Like physically relocating documents to different folders. This command transfers files and directories from one location to another.",
        nextHint: "Try deleting items using 'Remove-Item'",
        examples: [
          "Move-Item file.txt subfolder\\",
          "Move-Item *.doc archive\\",
        ],
        additionalNotes:
          "The '-Force' parameter allows you to overwrite existing files in the destination.",
      },
      {
        command: "Remove-Item",
        explanation:
          "Deletes items from the file system. Like shredding documents permanently. This command removes files and directories from your system.",
        nextHint: "Try renaming items using 'Rename-Item'",
        examples: [
          "Remove-Item file.txt",
          "Remove-Item -Recurse -Force folder",
        ],
        additionalNotes:
          "Use the '-Recurse' parameter to delete directories and their contents.",
      },
      {
        command: "Rename-Item",
        explanation:
          "Renames an item in the file system. Like changing the label on a folder or file. This command allows you to give a new name to an existing file or directory.",
        nextHint: "Try getting the content of a file using 'Get-Content'",
        examples: [
          "Rename-Item file.txt newfile.txt",
          "Rename-Item oldname newname",
        ],
        additionalNotes:
          "You can use wildcards to rename multiple files at once.",
      },
      {
        command: "Get-Content",
        explanation:
          "Retrieves the content of a file. Like opening and reading a document. This command allows you to view the contents of a file directly in PowerShell.",
        nextHint: "Try writing content to a file using 'Set-Content'",
        examples: ["Get-Content file.txt", "Get-Content -Path document.txt"],
        additionalNotes:
          "You can use the '-Tail' parameter to get the last few lines of a file.",
      },
      {
        command: "Set-Content",
        explanation:
          "Writes or replaces the content of a file. Like writing or updating a document. This command allows you to set the content of a file to the specified value.",
        nextHint: "Try adding content to a file using 'Add-Content'",
        examples: [
          "Set-Content -Path file.txt -Value 'Hello, World!'",
          "Set-Content -Path document.txt -Value 'New content'",
        ],
        additionalNotes:
          "This command replaces the existing content of the file.",
      },
      {
        command: "Add-Content",
        explanation:
          "Appends content to a file. Like adding notes to an existing document. This command allows you to add content to the end of a file without replacing the existing content.",
        nextHint: "Try finding items using 'Get-ChildItem'",
        examples: [
          "Add-Content -Path file.txt -Value 'Additional content'",
          "Add-Content -Path document.txt -Value 'More notes'",
        ],
        additionalNotes:
          "Use the '-Force' parameter to add content to read-only files.",
      },
      {
        command: "Get-Process",
        explanation:
          "Displays information about processes running on the system. Like checking the activity status of various tasks. This command provides details about the processes currently running on your computer.",
        nextHint: "Try stopping a process using 'Stop-Process'",
        examples: ["Get-Process", "Get-Process -Name notepad", "ps"],
        additionalNotes: "You can use aliases like 'gps' or 'ps'.",
      },
      {
        command: "Stop-Process",
        explanation:
          "Stops one or more running processes. Like terminating tasks. This command allows you to stop processes that are currently running on your computer.",
        nextHint: "Try starting a process using 'Start-Process'",
        examples: ["Stop-Process -Name notepad", "Stop-Process -Id 1234"],
        additionalNotes:
          "Use the '-Force' parameter to stop stubborn processes.",
      },
      {
        command: "Start-Process",
        explanation:
          "Starts a new process on the system. Like launching an application. This command allows you to start a new process on your computer.",
        nextHint: "Try getting help on any command using 'Get-Help'",
        examples: ["Start-Process notepad.exe", "Start-Process powershell.exe"],
        additionalNotes:
          "You can use the '-NoNewWindow' parameter to start the process in the current window.",
      },
      {
        command: "Get-Help",
        explanation:
          "Provides detailed help information for PowerShell commands. Like consulting a comprehensive manual. This command gives you detailed information about PowerShell cmdlets, including syntax and examples.",
        nextHint: "Try updating the help files using 'Update-Help'",
        examples: ["Get-Help Get-Process", "Get-Help -Name Get-Process -Full"],
        additionalNotes:
          "Use the '-Online' parameter to access help topics online.",
      },
      {
        command: "Update-Help",
        explanation:
          "Downloads and installs the latest help files for PowerShell cmdlets. Like updating your reference library. This command ensures you have the most current help information for PowerShell.",
        nextHint: "Explore more cmdlets and their uses.",
        examples: ["Update-Help"],
        additionalNotes:
          "You need an internet connection to download updated help files.",
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
          "Lists directory contents. Like opening a drawer and seeing what's inside. The 'ls' command shows information such as file names, sizes, and modification dates.",
        nextHint: "Try changing directories using 'cd'",
        examples: ["ls", "ls -la", "ls -h"],
        additionalNotes:
          "Using 'ls -la' shows all files, including hidden ones, and 'ls -h' displays sizes in a human-readable format.",
      },
      {
        command: "cd",
        explanation:
          "Changes current directory. Like moving between rooms in your house. The 'cd' command allows you to navigate to a different directory within the file system.",
        nextHint: "Create a new directory using 'mkdir'",
        examples: ["cd Documents", "cd ..", "cd ~"],
        additionalNotes:
          "Using 'cd ..' moves you up one directory level, and 'cd ~' takes you to your home directory.",
      },
      {
        command: "pwd",
        explanation:
          "Print Working Directory - shows your current location. Like checking your current address. This command displays the full path of your current directory.",
        nextHint: "List files in this directory using 'ls'",
        examples: ["pwd"],
        additionalNotes:
          "Useful for verifying your current location in the directory structure.",
      },
      {
        command: "mkdir",
        explanation:
          "Creates a new directory. Like building a new room in your house. The 'mkdir' command allows you to create new directories to organize your files.",
        nextHint: "Try creating a file using 'touch'",
        examples: ["mkdir newfolder", "mkdir -p path/to/newfolder"],
        additionalNotes:
          "The '-p' option creates parent directories as needed.",
      },
      {
        command: "touch",
        explanation:
          "Creates an empty file or updates file timestamps. Like placing an empty container that you can fill later. The 'touch' command is often used to create new, empty files.",
        nextHint: "Try viewing file contents using 'cat'",
        examples: ["touch newfile.txt", "touch file1.txt file2.txt"],
        additionalNotes:
          "Also updates the access and modification times of existing files.",
      },
      {
        command: "cat",
        explanation:
          "Displays file contents. Like reading what's written on a piece of paper. The 'cat' command concatenates and displays the content of files.",
        nextHint: "Try copying a file using 'cp'",
        examples: ["cat file.txt", "cat -n file.txt"],
        additionalNotes:
          "Using 'cat -n' displays line numbers along with the file content.",
      },
      {
        command: "cp",
        explanation:
          "Copies files and directories. Like making a photocopy of a document. The 'cp' command duplicates files and directories to a new location.",
        nextHint: "Try moving a file using 'mv'",
        examples: ["cp file.txt backup.txt", "cp -r folder1 folder2"],
        additionalNotes:
          "The '-r' option allows you to copy directories recursively.",
      },
      {
        command: "mv",
        explanation:
          "Moves or renames files and directories. Like relocating items in your house or giving them new names. The 'mv' command transfers files and directories to a new location or renames them.",
        nextHint: "Try removing a file using 'rm'",
        examples: ["mv file.txt newname.txt", "mv file.txt ../folder/"],
        additionalNotes:
          "This command can be used for both moving and renaming files and directories.",
      },
      {
        command: "rm",
        explanation:
          "Removes files or directories. Like throwing something in the trash (but be careful - there's no recycling bin!). The 'rm' command permanently deletes files and directories.",
        nextHint: "Try checking disk space using 'df'",
        examples: ["rm file.txt", "rm -r folder/", "rm -rf folder/"],
        additionalNotes:
          "Using 'rm -r' deletes directories and their contents, while 'rm -rf' forces the deletion without prompts.",
      },
      {
        command: "df",
        explanation:
          "Displays disk space usage. Like checking how full your storage spaces are. The 'df' command shows the amount of disk space used and available on mounted filesystems.",
        nextHint: "Try checking file space usage using 'du'",
        examples: ["df", "df -h", "df -T"],
        additionalNotes:
          "Using 'df -h' displays sizes in human-readable format, and 'df -T' shows the filesystem type.",
      },
      {
        command: "du",
        explanation:
          "Shows disk usage of files and directories. Like weighing your belongings. The 'du' command estimates and displays the disk space used by files and directories.",
        nextHint: "Try searching for files using 'find'",
        examples: ["du", "du -h", "du -sh *"],
        additionalNotes:
          "Using 'du -h' displays sizes in human-readable format, and 'du -sh *' gives a summary of space usage for each item in the current directory.",
      },
      {
        command: "find",
        explanation:
          "Searches for files and directories. Like using a metal detector to find hidden treasures. The 'find' command searches for files and directories matching specified criteria.",
        nextHint: "Try locating programs using 'which'",
        examples: [
          "find . -name 'file.txt'",
          "find /home -type d -name 'Documents'",
        ],
        additionalNotes:
          "The 'find' command is very powerful and can be combined with other commands for complex searches.",
      },
      {
        command: "which",
        explanation:
          "Shows the location of executables. Like checking where your tools are stored. The 'which' command displays the path of executables that would have been executed when entered on the command line.",
        nextHint: "Try displaying system information using 'uname'",
        examples: ["which bash", "which python"],
        additionalNotes:
          "Useful for verifying the installation and location of executables.",
      },
      {
        command: "uname",
        explanation:
          "Displays system information. Like checking your system's ID card. The 'uname' command prints detailed information about the system, such as the kernel name, version, and architecture.",
        nextHint:
          "Try getting more detailed system information using 'uname -a'",
        examples: ["uname", "uname -r", "uname -a"],
        additionalNotes:
          "Using 'uname -a' displays all available system information.",
      },
      {
        command: "grep",
        explanation:
          "Searches text using patterns. Like a detective scanning documents for specific clues. The 'grep' command searches for patterns within files and outputs the matching lines.",
        nextHint: "Try searching recursively using 'grep -r'",
        examples: [
          "grep 'search_term' file.txt",
          "grep -i 'search_term' file.txt",
        ],
        additionalNotes: "The '-i' option makes the search case-insensitive.",
      },
      {
        command: "man",
        explanation:
          "Displays the manual for other commands. Like consulting a comprehensive encyclopedia. The 'man' command provides detailed documentation about other commands and their options.",
        nextHint: "Try searching for a command in the manual using 'man -k'",
        examples: ["man ls", "man grep"],
        additionalNotes:
          "The 'man -k' option searches the manual pages for a specific term.",
      },
      {
        command: "chmod",
        explanation:
          "Changes file permissions. Like setting the access rules for rooms in your house. The 'chmod' command modifies the read, write, and execute permissions of files and directories.",
        nextHint: "Try viewing the current permissions using 'ls -l'",
        examples: ["chmod 755 file.txt", "chmod +x script.sh"],
        additionalNotes:
          "Permissions are often represented using numeric codes, such as 755 or 644.",
      },
      {
        command: "chown",
        explanation:
          "Changes file owner and group. Like transferring ownership of a property. The 'chown' command modifies the user and group ownership of files and directories.",
        nextHint: "Try using 'chgrp' to change just the group ownership",
        examples: ["chown user:group file.txt", "chown -R user:group folder"],
        additionalNotes:
          "The '-R' option applies the change recursively to all files and directories within a specified directory.",
      },
      {
        command: "ps",
        explanation:
          "Displays information about active processes. Like checking a list of tasks currently being performed. The 'ps' command shows details about running processes, including their PID and resource usage.",
        nextHint: "Try viewing all processes using 'ps aux'",
        examples: ["ps", "ps aux", "ps -ef"],
        additionalNotes:
          "The 'ps aux' and 'ps -ef' options provide more detailed information about all processes.",
      },
      {
        command: "kill",
        explanation:
          "Terminates processes. Like halting a task that is causing issues. The 'kill' command sends a signal to a process, typically to stop it.",
        nextHint: "Try forcefully terminating a process using 'kill -9'",
        examples: ["kill 1234", "kill -9 1234"],
        additionalNotes:
          "Using 'kill -9' sends the SIGKILL signal, which forcefully stops the process.",
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
