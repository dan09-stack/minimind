#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 MiniMinds Setup Script');
console.log('========================');

// Check if .env exists
if (!fs.existsSync('.env')) {
  console.log('📝 Creating .env file from .env.example...');
  fs.copyFileSync('.env.example', '.env');
  console.log('✅ .env file created! Please fill in your environment variables.');
} else {
  console.log('📁 .env file already exists.');
}

// Install dependencies
console.log('📦 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully!');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Generate Prisma client
console.log('🗄️ Generating Prisma client...');
try {
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('✅ Prisma client generated successfully!');
} catch (error) {
  console.error('❌ Failed to generate Prisma client:', error.message);
  console.log('💡 Make sure to set up your DATABASE_URL in .env first');
}

console.log('');
console.log('🎉 Setup complete! Next steps:');
console.log('');
console.log('1. Edit .env file with your API keys and database URL');
console.log('2. Run: npx prisma db push (after setting DATABASE_URL)');
console.log('3. Run: npm run dev');
console.log('4. Open: http://localhost:3000');
console.log('');
console.log('📚 Check README.md for detailed setup instructions!');
