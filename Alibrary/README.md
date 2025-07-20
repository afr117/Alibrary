# ALibrary - Product Library Website

A simple, static product library website with an admin panel for managing products. Built with React and deployed on Netlify.

## Features

- **Public Product Display**: Clean, eBay-style product grid showing photos, descriptions, and optional phone numbers
- **Admin Panel**: Web-based content management system for adding/editing products
- **Responsive Design**: Works on desktop and mobile devices
- **Free Hosting**: Deployed on Netlify with 24/7 availability
- **No Backend Required**: Static site with Netlify CMS for content management

## Project Structure

```
/Alibrary
  /backend/frontend/          # Main React application
    /src/                     # React source files
      App.js                  # Main product display component
      App.css                 # Styling for product grid
      index.js                # React entry point
    /images/                  # Product images folder
    /admin/                   # Netlify CMS configuration
      index.html              # CMS admin panel
      config.yml              # CMS configuration
    /products/                # Product markdown files (for CMS)
    index.html                # Static HTML backup
    package.json              # React dependencies
  /static-product-library.html # Alternative static version
```

## Quick Start

### For Viewers
1. Visit the deployed site at your Netlify URL
2. Browse products in the clean, grid layout

### For Admins
1. Go to `https://your-site.netlify.app/admin`
2. Log in with your admin credentials
3. Add, edit, or delete products through the web interface

## Deployment

### Netlify Settings
- **Build command**: `npm run build`
- **Publish directory**: `build`
- **Base directory**: `Alibrary/backend/frontend`

### Environment Variables
No environment variables required for basic functionality.

## Development

### Local Development
1. Clone the repository
2. Navigate to `backend/frontend`
3. Install dependencies: `npm install`
4. Start development server: `npm start`
5. Open `http://localhost:3000`

### Building for Production
```bash
cd backend/frontend
npm run build
```

## Adding Products

### Via Netlify CMS (Recommended)
1. Log in to `/admin` on your deployed site
2. Click "New Products"
3. Fill in title, description, phone (optional), and upload image
4. Click "Publish"

### Via Code (Alternative)
1. Edit `backend/frontend/src/App.js`
2. Add new product objects to the array
3. Add corresponding images to `/images/` folder
4. Commit and push changes

## Customization

### Styling
- Edit `backend/frontend/src/App.css` for visual changes
- The design uses a clean, minimal aesthetic with CSS Grid

### Adding Features
- The React structure makes it easy to add new features
- Consider adding search, filtering, or categories

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS3 with Flexbox/Grid
- **Hosting**: Netlify
- **CMS**: Netlify CMS
- **Version Control**: Git/GitHub

## Support

For issues or questions:
1. Check the Netlify build logs
2. Verify all files are committed to GitHub
3. Ensure Netlify settings match the project structure

## License

This project is open source and available under the MIT License. 