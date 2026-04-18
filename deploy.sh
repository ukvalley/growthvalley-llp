#!/bin/bash

# Deploy to GitHub Pages script

echo "Building the project..."
npm run build

echo "Deploying to GitHub Pages..."
# Create a temporary git repo in dist folder
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages

# Add your remote and push
# Replace with your actual remote URL if needed
git remote add origin https://github.com/ukvalley/growthvalley-llp.git
git push -f origin gh-pages

cd ..
echo "Deployed! Your site should be available at: https://ukvalley.github.io/growthvalley-llp/"
