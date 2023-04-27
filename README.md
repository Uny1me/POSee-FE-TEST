# POSee Test App

POSee Test App is a sample frontend app built with Tailwind CSS, Material-UI, Next.js, and TypeScript. It's designed to display products and provide a detailed product page with a search functionality.

Live Preview here: https://p-osee-test-uny1me.vercel.app/

## Installation

1. Clone the repository from GitHub:

```bash
git clone https://github.com/Uny1me/POSee-Test-App.git
```

2. Navigate into the project directory:

```bash
cd POSee-Test-App
```

3. Install the project dependencies:

```bash
npm install
```

Alternatively, to avoid package conflicts

```bash
npm install --legacy-peer-deps
```

4. Start the development server:

```bash
npm run dev
```

## Features

- Displays a list of products on the homepage with their name, image, and price
- Provides a detailed product page with additional information about each product
- Offers search functionality that allows users to search for specific products by name

## Technologies Used

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [Material-UI](https://material-ui.com/) - A React UI framework that implements Google's Material Design.
- [Next.js](https://nextjs.org/) - A React framework for server-side rendering, static site generation, and more.
- [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript.

## Project Structure

- `pages/` - Contains the Next.js pages for the app.
- `components/` - Contains the shared components used throughout the app.
- `styles/` - Contains the Tailwind CSS styles for the app.
- `public/` - Contains the static assets used in the app.

## Contributing

Contributions are welcome! To contribute to POSee Test App, please:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes and commit them with descriptive commit messages
4. Push your changes to your forked repository
5. Open a pull request to the main repository

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- Noteable upgrades -->

@material-ui/core -> @mui/material
@material-ui/unstyled -> @mui/base
@material-ui/icons -> @mui/icons-material
@material-ui/styles -> @mui/styles
@material-ui/system -> @mui/system
@material-ui/lab -> @mui/lab
@material-ui/types -> @mui/types
@material-ui/styled-engine -> @mui/styled-engine
@material-ui/styled-engine-sc ->@mui/styled-engine-sc
@material-ui/private-theming -> @mui/private-theming
@material-ui/codemod -> @mui/codemod
@material-ui/docs -> @mui/docs
@material-ui/envinfo -> @mui/envinfo
