# Favicon Instructions

Your HTML files are now configured to use favicons. Follow these steps to add your logo/icon:

## Required Files

Place these files in the **root directory** (`d:\Websites\OptimumClientSolutions\`):

- `favicon.ico` (16x16 or 32x32, .ico format)
- `favicon-32x32.png` (32x32 PNG)
- `favicon-16x16.png` (16x16 PNG)
- `apple-touch-icon.png` (180x180 PNG for iOS devices)

## Quick Generation

**Option 1: Use Online Tool (Easiest)**
1. Go to https://favicon.io/favicon-converter/
2. Upload your logo (square image, PNG or JPG)
3. Click "Download" - it generates all required sizes
4. Extract ZIP and copy files to project root

**Option 2: Use Realfavicongenerator**
1. Go to https://realfavicongenerator.net/
2. Upload your logo
3. Generate all formats
4. Download and place in project root

## If You Don't Have a Logo Yet

**Use a placeholder:**
1. Go to https://favicon.io/favicon-generator/
2. Create a simple text favicon with "OCS" or "O"
3. Choose colors: Background: #333333, Text: #FFFFFF
4. Download and use until you have a real logo

## After Adding Files

```bash
cd d:\Websites\OptimumClientSolutions
git add favicon.ico favicon-32x32.png favicon-16x16.png apple-touch-icon.png
git commit -m "Add favicon icons"
git push
```

Wait 1-2 minutes for Cloudflare Pages to deploy, then clear your browser cache to see the new favicon.
