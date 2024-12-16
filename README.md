# EIA Website
A landing website for Engineers in Action - University of Alberta Chapter.

Each section is divided into seperated file so can be easy to debug afterwards (given in the App.tsx comment above each file call)
## Prerequisites
- Node.js (v18 or newer)
- npm or yarn
- Git

## Local Development Setup

1. Clone the repository
```bash
git clone https://github.com/prototype-zero-one/eia-website.git
cd eia-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deploying to Netlify

### Option 1: Deploy via Netlify UI

1. Create a Netlify account at [netlify.com](https://www.netlify.com)

2. Connect your GitHub repository:
   - Log in to Netlify
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Select the branch to deploy (usually `main` or `master`)

3. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `dist`
   - Node version: 18 (or your preferred version)

4. Drag the dis (or build) folder inside the Drag and drop zone of site section (in netifly)

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Login to Netlify
```bash
netlify login
```

3. Initialize Netlify in your project
```bash
netlify init
```

4. Deploy your site
```bash
netlify deploy
```

5. For production deployment
```bash
netlify deploy --prod
```

## Project Structure

```
eia-website/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
|   └──...
├── public/
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, email [kdbui@ualberta.ca] or create an issue in the GitHub repository.