#!/bin/bash
PROD_TARGET="/var/www/prod"

# TODO: Eventually enable flags for dev environments
TARGET=${PROD_TARGET}

# This script should be run on the machine the website will be hosted from.
echo "➡️  Building production version of React app..."
npm run build

echo "📦 Copying build folder to prod..."
cp -r build/* ${TARGET}

echo "✅ Deployed to PRODUCTION"
