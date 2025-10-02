# Deployment Guide

This guide explains how to deploy the Laundri AI-Powered Fashion Label Creation Platform to various hosting providers.

## Quick Deploy Options

### Netlify (Recommended)

1. **Via Netlify CLI**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

2. **Via Netlify Dashboard**
- Go to [netlify.com](https://netlify.com) and sign in
- Click "Add new site" → "Import an existing project"
- Connect your GitHub repository
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Click "Deploy site"

### Vercel

1. **Via Vercel CLI**
```bash
npm install -g vercel
npm run build
vercel --prod
```

2. **Via Vercel Dashboard**
- Go to [vercel.com](https://vercel.com) and sign in
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Vite configuration
- Click "Deploy"

### GitHub Pages

**✅ CONFIGURED - Automatic deployment is set up!**

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions with the custom domain `laundri.co.za`.

**Deployment Workflow:**
- Automatically triggers on push to `main` branch
- Can be manually triggered from Actions tab
- Uses the workflow at `.github/workflows/deploy.yml`

**Setup Instructions:**
See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for complete setup instructions.

**Quick Steps to Enable:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Verify custom domain is set to `laundri.co.za`
4. Configure DNS records with your domain provider (see GITHUB_PAGES_SETUP.md)
5. Merge to `main` branch or manually trigger workflow

**Manual Deployment (Alternative):**

If you prefer manual deployment instead of automatic:

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. For custom domain, keep base as `/` in `vite.config.ts` (already configured)
4. For GitHub repo URL (e.g., username.github.io/laundri), set:
```typescript
export default defineConfig({
  base: '/laundri/',  // Only if NOT using custom domain
  // ... rest of config
})
```

5. Deploy manually:
```bash
npm run deploy
```

### Cloudflare Pages

1. **Via Dashboard**
- Go to [pages.cloudflare.com](https://pages.cloudflare.com)
- Click "Create a project"
- Connect your GitHub repository
- Configure build settings:
  - Framework preset: Vite
  - Build command: `npm run build`
  - Build output directory: `dist`
- Click "Save and Deploy"

### AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create S3 bucket and enable static website hosting

3. Upload dist folder contents to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. Create CloudFront distribution pointing to S3 bucket

5. Configure CloudFront to handle SPA routing:
   - Error pages: 404 → /index.html (200)
   - Error pages: 403 → /index.html (200)

## Environment Configuration

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=Laundri
```

Access in your code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

### Production Build Optimizations

The current configuration includes:

- **Code Splitting**: Automatic chunk splitting for optimal loading
- **Minification**: JavaScript and CSS minification
- **Tree Shaking**: Removal of unused code
- **Asset Optimization**: Image optimization and compression
- **PWA Caching**: Service worker with Workbox strategies

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test AI chat functionality
- [ ] Confirm all category links work
- [ ] Check PWA installation on mobile and desktop
- [ ] Test offline functionality
- [ ] Verify service worker registration
- [ ] Confirm manifest.json is accessible
- [ ] Test responsive design on various devices
- [ ] Check loading performance with Lighthouse
- [ ] Verify HTTPS is enabled
- [ ] Test social media sharing with correct metadata

## Custom Domain Setup

### Netlify
1. Go to Domain settings in Netlify dashboard
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### GitHub Pages

**✅ Already configured for this repository!**

The custom domain `laundri.co.za` is set up with:
1. ✅ CNAME file in `public/` directory (automatically deployed)
2. ⚠️ DNS records need to be configured with your domain provider:

**DNS Configuration Required:**

For the apex domain `laundri.co.za`, add these A records:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

For the www subdomain (optional):
```
Type: CNAME
Name: www
Value: jobbyist.github.io
```

3. Enable HTTPS in GitHub repository Settings → Pages (after DNS is configured)

See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed instructions.

## SSL/HTTPS

All recommended hosting providers offer free SSL certificates:
- **Netlify**: Automatic Let's Encrypt SSL
- **Vercel**: Automatic SSL
- **Cloudflare Pages**: Automatic SSL
- **GitHub Pages**: Automatic SSL for custom domains

## Monitoring and Analytics

### Google Analytics

Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring

Use tools like:
- Google Lighthouse
- WebPageTest
- GTmetrix
- Chrome DevTools Performance panel

## Troubleshooting

### 404 Errors on Refresh

**Problem**: SPA routes return 404 when directly accessed or refreshed.

**Solution**: Configure server to redirect all requests to index.html

For **Netlify**, create `public/_redirects`:
```
/*    /index.html   200
```

For **Vercel**, create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Service Worker Not Updating

**Problem**: Old cached version continues to load.

**Solution**:
1. Clear browser cache
2. Unregister old service worker in DevTools
3. Update version in manifest.json
4. Rebuild and redeploy

### Build Failures

Common issues:
- **TypeScript errors**: Run `npm run build` locally first
- **Missing dependencies**: Ensure `package-lock.json` is committed
- **Node version**: Verify Node.js version matches requirements
- **Memory issues**: Increase Node memory: `NODE_OPTIONS=--max_old_space_size=4096 npm run build`

## Continuous Deployment

### Automatic Deployments

Most hosting providers support automatic deployment on git push:

**Netlify/Vercel**:
- Automatically deploy on push to main branch
- Preview deployments for pull requests
- Branch-based deployments

**GitHub Actions** for custom deployments:

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Support

For deployment issues, check:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [PWA Deployment Best Practices](https://vite-pwa-org.netlify.app/deployment/)
- Provider-specific documentation
- [Laundri Contact Page](https://laundri.co.za/contact.html)
