INSPO: https://dennissnellenberg.com/
Learning TailwindCSS: https://tailwindcss.com/docs/box-shadow

## How I Built The Project
Terminal Commands
- npx create-next-app@latest -> Create the project
- npm install -> Installs Next.js


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Using Github
- Creating the repository
    - git init
        - Initializes git to start tracking the project
    - git add . 
        - Selects all files in the project to prepare for the commit
    - git commit -m "Inital Commit" 
        - Saves your work
    - git branch -M main 
        - Renames default branch on local machine to main
        - 'git branch' allows you to check current branch
    - git remote add origin https://github.com/JaredSkates/Personal-Portfolio.git 
        - Connects the local project to the repository on github
    - git remote -v 
        - Check for connection
    - git push -u origin main 
        - Pushes the commit to the remote's 'main' branch; '-u' sets origin/main as the default remote branch
