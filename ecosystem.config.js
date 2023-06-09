module.exports = {
  apps: [
    {
      name: 'yvypora-api',
      script: 'npm run start',
      instances: '1',
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
