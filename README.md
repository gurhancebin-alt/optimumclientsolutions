# Optimum Client Solutions Website

Professional business portfolio website for Optimum Client Solutions, built with HTML, CSS, and JavaScript. Hosted on Cloudflare Pages with automatic deployments from GitHub.

## 🚀 Quick Start

### Prerequisites
- Git installed
- GitHub account (gurhan.cebin@optimumclientsolutions.com)
- Cloudflare account
- Active Squarespace domain

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/optimum-client-solutions.git
   cd optimum-client-solutions
   ```

2. **Open in browser:**
   Simply open `index.html` in your web browser. No build process required for static HTML sites.

3. **Make changes:**
   Edit HTML, CSS, or JS files directly. Refresh browser to see changes.

## 📁 Project Structure

```
OptimumClientSolutions/
├── index.html              # Home / Under Construction page
├── services.html           # Services page
├── about.html              # About Us page
├── partners.html           # Partners page
├── contact.html            # Contact page with lead form
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── navigation.js      # Shared navigation & footer component
├── images/
│   └── background/        # Background images folder (upload square JPEG here)
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 🎨 Customization

### Adding Background Image
1. Place your square JPEG image in `images/background/` folder
2. Name it `background.jpg`
3. The CSS is already configured to display it with 15% opacity overlay

### Updating Social Media Links
Edit the `socialLinks` array in `js/navigation.js`:
```javascript
const socialLinks = [
    { platform: 'facebook', url: 'https://facebook.com/yourpage', ... },
    { platform: 'instagram', url: 'https://instagram.com/yourpage', ... },
    { platform: 'linkedin', url: 'https://linkedin.com/company/yourpage', ... },
    { platform: 'twitter', url: 'https://twitter.com/yourpage', ... }
];
```

### Setting Up Google Analytics (GA4)
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new GA4 property for your domain
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Replace `GA_MEASUREMENT_ID` in ALL HTML files with your actual Measurement ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## 🌐 Deployment to Cloudflare Pages

### Step 1: Push to GitHub

1. **Create new public repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `optimum-client-solutions`
   - Visibility: **Public**
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit: Optimum Client Solutions website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/optimum-client-solutions.git
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages

1. **Login to Cloudflare:**
   - Go to https://dash.cloudflare.com/
   - Login or create account

2. **Create new Pages project:**
   - Click "Workers & Pages" in sidebar
   - Click "Create application" → "Pages" tab → "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select `optimum-client-solutions` repository
   - Click "Begin setup"

3. **Configure build settings:**
   - **Project name:** `optimum-client-solutions`
   - **Production branch:** `main`
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
   - Click "Save and Deploy"

4. **Wait for deployment:**
   - First deployment takes 1-2 minutes
   - You'll get a `*.pages.dev` URL (e.g., `optimum-client-solutions.pages.dev`)
   - Test this URL to verify deployment

### Step 3: Connect Squarespace Domain

1. **In Cloudflare Pages dashboard:**
   - Go to your project → "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter your Squarespace domain (e.g., `optimumclientsolutions.com`)
   - Cloudflare will show you 2 nameservers (e.g., `john.ns.cloudflare.com`, `jane.ns.cloudflare.com`)

2. **In Squarespace:**
   - Login to Squarespace account
   - Go to Settings → Domains → Your domain
   - Click "DNS Settings" or "Advanced Settings"
   - Find "Nameservers" section
   - Change from Squarespace nameservers to Cloudflare nameservers (copy from Cloudflare dashboard)
   - Save changes

3. **Wait for DNS propagation:**
   - DNS changes take 15 minutes to 48 hours (usually ~30 minutes)
   - Check status in Cloudflare dashboard
   - When active, you'll see "Active" status with green checkmark

4. **Enable SSL/TLS:**
   - In Cloudflare dashboard, go to SSL/TLS settings
   - Set mode to **"Full"** or **"Full (strict)"**
   - Cloudflare automatically provisions free SSL certificate
   - Wait 5-10 minutes for certificate to activate
   - Your site will be accessible via HTTPS

### Step 4: Verify Everything Works

1. **Test domain:**
   ```bash
   # Check DNS propagation
   nslookup yourdomain.com
   
   # Should show Cloudflare IP addresses
   ```

2. **Test website:**
   - Visit `https://yourdomain.com`
   - Verify "Under Construction" page loads
   - Check SSL certificate (padlock icon in browser)
   - Verify social media icons appear
   - Check Google Analytics (Real-time report in GA dashboard)

## 🔄 Making Updates

Once GitHub is connected to Cloudflare Pages, updates are automatic:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Cloudflare automatically detects push and deploys within 1-2 minutes
4. Check deployment status in Cloudflare dashboard

## 📊 Google Analytics Setup

### Creating New GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/) (use gurhan.cebin@optimumclientsolutions.com)
2. Click "Admin" (gear icon, bottom left)
3. Click "Create Property"
4. **Property details:**
   - Property name: `Optimum Client Solutions`
   - Reporting time zone: Your timezone
   - Currency: Your currency
   - Click "Next"
5. **Business details:**
   - Industry: Select your category
   - Business size: Select appropriate size
   - Click "Next"
6. **Business objectives:**
   - Select "Generate leads"
   - Click "Create"
7. **Data stream:**
   - Choose "Web"
   - Website URL: `https://yourdomain.com`
   - Stream name: `Optimum Client Solutions Website`
   - Click "Create stream"
8. **Get Measurement ID:**
   - You'll see Measurement ID (format: `G-XXXXXXXXXX`)
   - Copy this ID
   - Update ALL HTML files (replace `GA_MEASUREMENT_ID`)

### Viewing Analytics

- **Real-time:** Admin → Reports → Realtime (see current visitors)
- **Overview:** Reports → Acquisition → Overview (traffic sources)
- **Pages:** Reports → Engagement → Pages and screens (popular pages)
- **Events:** Reports → Engagement → Events (user interactions)

## 🔧 Troubleshooting

### Domain not connecting
- Verify nameservers are correctly updated in Squarespace
- Wait 24-48 hours for full DNS propagation
- Use `nslookup yourdomain.com` to check DNS

### SSL certificate errors
- Ensure SSL/TLS mode in Cloudflare is "Full" not "Flexible"
- Wait 10-15 minutes for certificate provisioning
- Clear browser cache and try incognito mode

### Google Analytics not tracking
- Verify Measurement ID is correct (starts with `G-`)
- Check browser console for errors (F12 → Console)
- Use GA4 DebugView or Real-time report to verify data
- Ad blockers may prevent tracking (test in incognito)

### GitHub deployment not triggering
- Verify webhook exists: GitHub repo → Settings → Webhooks
- Check Cloudflare Pages → Deployments for errors
- Ensure GitHub app has repository access

## 📝 License

Copyright © 2026 Optimum Client Solutions. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: gurhan.cebin@optimumclientsolutions.com
- Review Cloudflare Pages documentation: https://developers.cloudflare.com/pages/
- Check Google Analytics help: https://support.google.com/analytics/

---

**Note:** Replace placeholder social media URLs in `js/navigation.js` with actual profile links before launching the site.
