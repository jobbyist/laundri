# GitHub Pages Deployment Setup

This document explains the GitHub Pages deployment configuration that has been set up for this repository.

## What Was Configured

### 1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)

A GitHub Actions workflow has been created that will:
- Automatically trigger on every push to the `main` branch
- Can also be manually triggered via the GitHub Actions tab
- Build the application using `npm run build`
- Deploy the built files to GitHub Pages
- Use the custom domain `laundri.co.za`

### 2. Public Directory with Required Files

Created a `public/` directory with:
- **CNAME**: Contains the custom domain `laundri.co.za`
- **404.html**: Handles client-side routing for the Single Page Application

These files are automatically copied to the `dist/` folder during the build process.

### 3. Vite Configuration

The existing `vite.config.ts` already has the correct configuration:
- Base path is `/` (default) which is correct for custom domains
- PWA configuration is properly set up

## How to Enable GitHub Pages

To complete the setup, you need to enable GitHub Pages in your repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/jobbyist/laundri
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will use the workflow we created instead of branch-based deployment

### Step 2: Configure Custom Domain (Optional but Recommended)

Since the CNAME file is already included, GitHub Pages should automatically recognize the custom domain. However, you may need to verify:

1. In the same **Pages** settings page
2. Under "Custom domain", you should see `laundri.co.za`
3. If not, enter it manually and click "Save"
4. Check the "Enforce HTTPS" checkbox once the domain is verified

### Step 3: Configure DNS Records

For the custom domain to work, you need to configure DNS records with your domain provider:

#### Option A: Using A Records (Recommended for apex domains)
Add these A records for `laundri.co.za`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Option B: Using CNAME Record (for www subdomain)
If using `www.laundri.co.za`:
```
CNAME: www -> jobbyist.github.io
```

Note: If you want both `laundri.co.za` and `www.laundri.co.za` to work, use the A records for the apex domain and add a CNAME record for www.

### Step 4: Trigger the First Deployment

The workflow will automatically run when:
1. You merge this PR to the `main` branch, or
2. You push any changes to the `main` branch, or
3. You manually trigger it from the Actions tab

To manually trigger:
1. Go to the **Actions** tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow"

## Verifying the Deployment

After the workflow runs:

1. Go to the **Actions** tab to see the deployment progress
2. Once complete (green checkmark), your site should be live at:
   - https://jobbyist.github.io/laundri/ (GitHub Pages URL)
   - https://laundri.co.za (once DNS is configured)

## Monitoring Deployments

- All deployments are visible in the **Actions** tab
- Each deployment shows build logs and any errors
- Failed deployments will show a red X with error details

## Troubleshooting

### Workflow Not Running
- Ensure GitHub Actions are enabled in repository settings
- Check that the workflow file is on the `main` branch
- Verify you have pushed changes to the `main` branch

### Site Not Loading
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the workflow completed successfully
- Wait 5-10 minutes after first deployment
- Check browser console for any errors

### Custom Domain Not Working
- Verify DNS records are correctly configured
- DNS changes can take 24-48 hours to propagate
- Check the custom domain status in Settings → Pages
- Ensure HTTPS enforcement is enabled after verification

### 404 Errors on Direct Navigation
- The 404.html file handles SPA routing
- If you still see issues, check that 404.html is in the dist folder
- Verify the workflow is deploying the entire dist directory

## Build Details

The build process:
1. Installs dependencies with `npm ci`
2. Runs TypeScript compilation and Vite build: `npm run build`
3. Outputs to the `dist/` directory
4. Includes the CNAME and 404.html files from `public/`
5. Deploys all files from `dist/` to GitHub Pages

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## Support

For issues with:
- **GitHub Actions/Deployment**: Check the Actions tab and workflow logs
- **Custom Domain**: Verify DNS settings with your domain provider
- **Application Issues**: Check browser console and service worker status
