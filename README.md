This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## How I Built The Project
Terminal Commands
- npx create-next-app@latest -> Create the project
- npm install -> Installs Next.js

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

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
