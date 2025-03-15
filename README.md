
# I9 Appify

## Project info

**URL**: https://lovable.dev/projects/bd64306c-2d96-4149-9b53-cfc9fbdae9d0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/bd64306c-2d96-4149-9b53-cfc9fbdae9d0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Deployment to Hostinger

To deploy this project to Hostinger, follow these steps:

1. **Build the project:**
   ```sh
   npm run build
   ```

2. **Upload to Hostinger:**
   - Log in to your Hostinger account
   - Navigate to File Manager or use FTP to access your hosting
   - Upload the contents of the `dist` folder to the public_html directory or your desired subdirectory

3. **Configure for React Router:**
   - The project includes a `.htaccess` file in the `public` folder that will be copied to the `dist` folder during build
   - This file helps with proper routing for a single-page application
   - If you encounter 404 errors when navigating directly to routes, ensure this file is properly uploaded

4. **Test your deployment:**
   - Visit your domain to ensure everything is working correctly
   - Test all navigation links and features

## Technologies used in this project

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

