# front-end

## My Developer Toolbox & Ecosystem
### Formatting & Linting
[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss): Automatically sorts Tailwind `classNames` using the official recommended order. Prevents "class soup" and makes CSS debugging 10x faster.

### Future tools I want to incorperate
[ESLint React Plugin](https://github.com/jsx-eslint/eslint-plugin-react): Catches common React mistakes (like missing keys in loops) before they become bugs.





# Monorepo Architecture & Workflow

This project is organized as a **Professional Monorepo** using **npm Workspaces**. It centralizes developer experience (DX) tooling while keeping individual projects isolated and lightweight.

## 🛠️ Tech Stack & Tooling
- **Core:** React 19 + Tailwind CSS v4 + Vite 8
- **Monorepo:** npm Workspaces (`projects/*`)
- **Formatting:** Prettier + `prettier-plugin-tailwindcss` (Official)
- **Class Ordering:** Automated "outside-in" sorting (Layout → Box Model → Typography → Visuals).

---

##  Common Commands

### 1. Running Projects
Always run commands from the **root folder**. Use the `-w` (workspace) flag followed by the project name (from its `package.json`).
```bash
# Start a specific project
npm run dev -w weather-app

# Build a specific project
npm run build -w weather-app
```

### 2. Managing Dependencies
- **Project-Specific (Runtime):** Use for libraries the browser needs (React, Lucide, etc.).
  ```bash
  npm install lucide-react -w weather-app
  ```
- **Global Tooling (Dev):** Use for build tools, linters, or formatters at the root.
  ```bash
  npm install -D vitest
  ```

### 3. Repository-Wide Formatting
To ensure every file in the entire monorepo is perfectly clean and Tailwind classes are sorted:
```bash
npm run format
```

### 4. Pushing to GitHub
All code review are done by [CodeRabbit](https://www.coderabbit.ai/), a AI code reviewer.

**The workflow will go like this:**
1. Create a branch from `main`
```bash
git checkout main
git pull origin main  # Ensures you are branching from the newest version
git checkout -b project/project-name
```

2. Build and project on that branch
```bash
git add .
git commit -m "Add FastAPI app with health endpoint and CORS"
```

3. Push and open a PR on the GH website
```bash
git push -u origin project/project-name
```

Go to the repository page on GitHub (github.com/JustinShawAcademy/front-end).

Since we've just pushed, GitHub will show a yellow notification at the top of the code list that says:

> **project/project-name had recent pushes less than a minute ago.**

We can click the green **[Compare & pull request]** button on that yellow bar to review the Diff before giving a title and creating **pull request**

We could have also created the PR request usign CLI:

```bash
gh pr create --fill
```

But I prefer Github's GUI :)

4. Learn from CodeRabbit's PR review, and push back any suggestions
```bash
git add .
git commit -m "Tighten CORS origins and add useCallback to health check"
git push
```

### 5.. Merge the PR into `main` once satisfied:

```bash
# On GitHub: click "Merge pull request"
# Then locally:
git checkout main
git pull
```

When we then start a new project, we run:

```bash
git checkout -b project/project-name
```


---

## Architecture Decisions

### Dependency "Hoisting"
We use a **Two-Layer Dependency** system:
1. **Root `devDependencies`:** Contains shared tools (Prettier, Tailwind Plugin). This ensures a consistent code style across all projects.
2. **Project `dependencies`:** Contains only what that specific app needs to run (e.g., React). 

### Tailwind v4 Sorting
This repo uses **Tailwind v4**. Unlike v3, it does not require a `tailwind.config.js`. The Prettier plugin automatically detects the `@import "tailwindcss";` entry point in the CSS and handles class ordering.

### Centralized Configuration
- **`.prettierrc`**: Located at the root to enforce a single source of truth for all projects.
- **`.vscode/settings.json`**: Included in the repo to enable **"Format on Save"** for anyone who clones the project. This guarantees "Senior-level" code cleanliness instantly.

---

## Maintenance: The "Monorepo Reset"
If `node_modules` becomes desynced or Prettier stops sorting, run this "Nuclear Reset" from the root:

```bash
# 1. Delete all node_modules and lockfiles
rm -rf node_modules projects/*/node_modules package-lock.json

# 2. Reinstall and re-link everything
npm install

# 3. Reload VS Code (Cmd+Shift+P > Developer: Reload Window)
```

---

## Future Project Checklist
To add a new project (`001-dashboard`) to this monorepo:
1. cd projects
2. npm create vite@latest 001-dashboard
3. cd ..
4. rm -rf projects/001-dashboard/node_modules
5. rm projects/001-dashboard/package-lock.json
6. npm install

---

### Why this setup?
I wanted all my small pet projects to just be in one repo :)