# 🌤️ Weather React Native App

<div align="center">
  <img src="https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenWeather-FF6B35?style=for-the-badge&logo=openweathermap&logoColor=white" />
</div>

<br />

<div align="center">
  <h3>🌈 Beautiful Weather App with Dynamic Gradients</h3>
  <p>A stunning React Native weather application that displays real-time weather information with beautiful gradient backgrounds and icons that change based on current weather conditions.</p>
</div>

## ✨ Features

- 🌍 **Real-time Weather Data** - Powered by OpenWeatherMap API
- 📍 **Location-based** - Automatically detects your current location
- 🎨 **Dynamic UI** - Beautiful gradient backgrounds that change with weather conditions
- 🔮 **Weather Icons** - Intuitive Ionicons that represent current weather
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🌡️ **Temperature Display** - Shows current temperature in Celsius
- 📖 **Weather Descriptions** - Descriptive titles and subtitles for each condition
- ⚡ **TypeScript** - Full type safety and better development experience

## 🌈 Weather Conditions Supported

| Condition | Gradient Colors | Icon | Description |
|-----------|----------------|------|-------------|
| ☀️ Clear | Blue Sky | `sunny` | Beautiful Day |
| ☁️ Clouds | Gray Gradient | `cloudy` | Cloudy Skies |
| 🌧️ Rain | Blue Tones | `rainy` | Rainy Day |
| 🌦️ Drizzle | Light Blue | `rainy` | Light Rain |
| ❄️ Snow | Gray/White | `snow` | Snowy Weather |
| ⛈️ Thunderstorm | Dark Blue | `thunderstorm` | Thunderstorm |
| 🌫️ Mist | Green Tones | `cloudy` | Misty Morning |
| 💨 Smoke | Dark Blue | `cloudy` | Smoky Conditions |
| 🌅 Haze | Orange/Yellow | `partly-sunny` | Hazy Atmosphere |
| 🏜️ Dust | Brown/Red | `cloudy` | Dusty Weather |
| 🌁 Fog | Blue/White | `cloudy` | Foggy Day |
| 🏖️ Sand | Orange/Purple | `cloudy` | Sandstorm |
| 🌋 Ash | Dark Blue | `cloudy` | Volcanic Ash |
| 💨 Squall | Very Dark | `thunderstorm` | Sudden Squall |
| 🌪️ Tornado | Gray/Blue | `thunderstorm` | Tornado Warning |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Expo CLI
- React Native development environment
- OpenWeatherMap API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-react-native.git
   cd weather-react-native
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get OpenWeatherMap API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key

4. **Configure API Key**
   - Copy the environment template:
   ```bash
   cp .env.example .env
   ```
   - Open `.env` file and replace with your actual API key:
   ```
   EXPO_PUBLIC_WEATHER_API_KEY=your_actual_api_key_here
   ```

5. **Start the development server**
   ```bash
   npx expo start
   ```

6. **Run on device/simulator**
   - Scan QR code with Expo Go app (iOS/Android)
   - Or press `i` for iOS simulator
   - Or press `a` for Android emulator

## 🏗️ Project Structure

```
weather-react-native/
├── app/
│   ├── components/
│   │   ├── Weather.tsx      # Main weather display component
│   │   └── Loading.tsx      # Loading screen component
│   ├── _layout.tsx          # App layout configuration
│   └── index.tsx            # Main app entry point
├── assets/
│   ├── fonts/
│   └── images/
├── app.json                 # Expo configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform and tools
- **TypeScript** - Type-safe JavaScript
- **Expo Linear Gradient** - Beautiful gradient backgrounds
- **Expo Vector Icons** - Icon library (Ionicons)
- **Expo Location** - Location services
- **OpenWeatherMap API** - Weather data provider

## 🎨 UI Components

### Weather Component
The main component that displays:
- City name
- Current temperature
- Weather condition
- Weather icon
- Descriptive title and subtitle
- Dynamic gradient background

### Loading Component
A simple loading screen shown while fetching weather data.

## 🌐 API Integration

The app uses the OpenWeatherMap API to fetch:
- Current weather conditions
- Temperature data
- Location-based weather information

### API Endpoints Used:
```
https://api.openweathermap.org/data/2.5/weather?units=metric&appid={API_KEY}&lat={lat}&lon={lon}
```

## 🔒 Permissions

The app requires the following permissions:
- **Location** - To get current location for weather data

## 🚀 Performance Features

- **Optimized Components** - Efficient rendering
- **Type Safety** - TypeScript for better code quality
- **Error Handling** - Graceful error management

## 🔮 Future Enhancements

- [ ] 7-day weather forecast
- [ ] Hourly weather data
- [ ] Multiple city support
- [ ] Weather animations
- [ ] Dark/Light theme toggle
- [ ] Weather alerts and notifications
- [ ] Offline cache support
- [ ] Weather maps integration

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data
- [Expo](https://expo.dev/) for the amazing development platform
- [Ionicons](https://ionic.io/ionicons) for beautiful weather icons
- [React Native](https://reactnative.dev/) community for excellent documentation

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
