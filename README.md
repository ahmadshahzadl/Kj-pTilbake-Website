# KjøpTilbake Website

This project is a modern, responsive landing page for "KjøpTilbake," a Norwegian service offering a flexible buyback solution for valuable items. Users can sell their items for immediate cash and have the option to buy them back later, emphasizing simplicity, security, and quick payouts.

## Features

*   **Responsive Header**: Navigation bar with logo, main links, and login/signup buttons, adapting to different screen sizes.
*   **Dynamic Hero Section**: Prominent headline with gradient text, a call-to-action for free valuation, and category cards for various item types.
*   **How It Works Section**: A clear, step-by-step guide explaining the buyback process with engaging icons and descriptions.
*   **Interactive Timeline**: Visual representation of the process timeline with animated icons on hover and connecting lines.
*   **Key Statistics**: Displays important metrics like response time, customer satisfaction, and buyback guarantee period.
*   **Accordion FAQ**: An expandable section for frequently asked questions, providing quick answers to common queries.
*   **Contact Section**: Includes a contact form for user inquiries and detailed contact information, opening hours, and social media links.
*   **Informative Footer**: Provides company information, service links, and social media integration.
*   **Modern UI**: Built with Tailwind CSS and shadcn/ui components for a clean, contemporary design.

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for production
*   [React](https://react.dev/) - JavaScript library for building user interfaces
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development
*   [shadcn/ui](https://ui.shadcn.com/) - Reusable components built with Radix UI and Tailwind CSS
*   [Lucide React](https://lucide.dev/) - A beautiful collection of open-source icons

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have Node.js (v18.x or higher) and npm/yarn installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/kjoptilbake-website.git
    cd kjoptilbake-website
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the project in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
.
├── app/
│   └── page.tsx             # Main page component
├── components/
│   ├── header.tsx           # Header component
│   ├── hero-section.tsx     # Hero section component
│   ├── category-cards.tsx   # Category cards sub-component
│   ├── how-it-works.tsx     # How It Works section component
│   ├── timeline-section.tsx # Timeline section component
│   ├── statistics-section.tsx # Statistics section component
│   ├── faq-section.tsx      # FAQ section component
│   ├── contact-section.tsx  # Contact section component
│   ├── contact-info.tsx     # Contact info sub-component
│   ├── footer.tsx           # Footer component
│   └── ui/                  # shadcn/ui components
├── public/
│   └── logo.png             # Website logo image
├── tailwind.config.ts       # Tailwind CSS configuration
└── ...other config files
```

## License

This project is licensed under the MIT License.
```
