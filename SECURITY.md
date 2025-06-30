# 🔐 Security Guidelines

## Environment Variables

This project uses environment variables to store sensitive information like API keys.

### Setup Instructions

1. Copy the template file:
```bash
cp .env.example .env
```

2. Edit `.env` and add your API keys:
```bash
EXPO_PUBLIC_WEATHER_API_KEY=your_openweather_api_key_here
```

### Important Notes

- **Never commit `.env` files** - they are in `.gitignore`
- **Use `.env.example`** as a template for others
- **Prefix with `EXPO_PUBLIC_`** for client-side access in Expo
- **Keep API keys secure** - don't share them publicly

### For Contributors

When setting up the project:
1. Get your API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Follow the setup instructions above
3. Never include real API keys in commits

### Production Deployment

For production deployments, set environment variables in:
- **Expo EAS**: Use `eas secret:create`
- **Vercel**: Add in dashboard settings
- **Netlify**: Add in site settings
- **Other platforms**: Follow their environment variable guidelines
