# SHS Flyer Generator

A React-based application for generating promotional flyers for SHS (Saigon – Hanoi Securities) trading system. This tool allows users to create customized flyers with dynamic QR codes for broker accounts and download them as high-resolution PNG images.

## Features

- **Dynamic QR Code Generation**: Generate QR codes for specific broker IDs
- **Flyer Preview**: Real-time preview of the flyer design
- **High-Resolution Export**: Export flyers as PNG images optimized for A4 printing (300 DPI)
- **Responsive Design**: Works on desktop and mobile devices
- **Vietnamese Language Support**: Fully localized interface

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Image Generation**: html-to-image library
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd gen-tờ-rơi-shs-2.0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a broker ID in the control panel
2. Preview the flyer in real-time
3. Click "Tạo ảnh PNG" to generate a high-resolution image
4. Download the generated flyer

## Build for Production

```bash
npm run build
```

## Deployment

The project is configured for deployment to GitHub Pages:

```bash
npm run deploy
```

This command will build the project and deploy it to GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── ControlPanel.tsx      # Input controls for broker ID
│   ├── FlyerPreview.tsx      # Flyer design component
│   ├── DynamicQRCode.tsx     # QR code generation
│   ├── PreviewModal.tsx      # Image preview modal
│   └── icons.tsx             # Icon components
├── assets/                   # Static assets (images, logos)
├── App.tsx                   # Main application component
└── index.tsx                 # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to SHS (Saigon – Hanoi Securities).
