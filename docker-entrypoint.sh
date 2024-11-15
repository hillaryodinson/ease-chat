#!/bin/sh

# Wait for database to be ready
echo "Waiting for database to be ready..."
while ! nc -z db 5432; do
  sleep 1
done

# Ensure dependencies are properly installed
echo "Checking dependencies..."
npm install

# Run database migrations
echo "Running database migrations..."
npx prisma migrate deploy

# Start development server
echo "Starting development server..."
npm run dev 