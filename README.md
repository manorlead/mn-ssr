## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000] with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Build Docker Image

docker build -t mn-web .

## Run Docker Image

docker run -d --name mn-next -p 3000:80 mn-web
