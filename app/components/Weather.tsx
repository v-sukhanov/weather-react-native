import { Ionicons } from '@expo/vector-icons';
import { LinearGradient as LinearGradient2 } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherCondition, WeatherData } from '..';

type WeatherProps = WeatherData

type IconName = keyof typeof Ionicons.glyphMap;

const weatherOptions: Record<WeatherCondition, {
    iconName: IconName;
    gradientColors: [string, string];
    title: string;
    subtitle: string;
}> = {
    'Thunderstorm': { 
        iconName: 'thunderstorm', 
        gradientColors: ['#373B44', '#4286f4'],
        title: 'Thunderstorm',
        subtitle: 'Lightning and thunder ahead'
    },
    'Drizzle': { 
        iconName: 'rainy', 
        gradientColors: ['#89F7FE', '#66A6FF'],
        title: 'Light Rain',
        subtitle: 'A gentle drizzle is falling'
    },
    'Rain': { 
        iconName: 'rainy', 
        gradientColors: ['#00C6FB', '#005BEA'],
        title: 'Rainy Day',
        subtitle: 'Perfect weather for staying cozy'
    },
    'Snow': { 
        iconName: 'snow', 
        gradientColors: ['#E6DEDD', '#657786'],
        title: 'Snowy Weather',
        subtitle: 'Winter wonderland outside'
    },
    'Mist': { 
        iconName: 'cloudy', 
        gradientColors: ['#76b852', '#8DC26F'],
        title: 'Misty Morning',
        subtitle: 'Soft mist blankets the area'
    },
    'Smoke': { 
        iconName: 'cloudy', 
        gradientColors: ['#4B6CB7', '#182848'],
        title: 'Smoky Conditions',
        subtitle: 'Air quality may be affected'
    },
    'Haze': { 
        iconName: 'partly-sunny', 
        gradientColors: ['#FFC837', '#FF8008'],
        title: 'Hazy Atmosphere',
        subtitle: 'Reduced visibility today'
    },
    'Dust': { 
        iconName: 'cloudy', 
        gradientColors: ['#D7816A', '#BD4F36'],
        title: 'Dusty Weather',
        subtitle: 'Fine particles in the air'
    },
    'Fog': { 
        iconName: 'cloudy', 
        gradientColors: ['#4CA1AF', '#C4E0E5'],
        title: 'Foggy Day',
        subtitle: 'Dense fog reduces visibility'
    },
    'Sand': { 
        iconName: 'cloudy', 
        gradientColors: ['#FEAC5E', '#C779D0'],
        title: 'Sandstorm',
        subtitle: 'Strong winds carrying sand'
    },
    'Ash': { 
        iconName: 'cloudy', 
        gradientColors: ['#4B79A1', '#283E51'],
        title: 'Volcanic Ash',
        subtitle: 'Ash particles in the atmosphere'
    },
    'Squall': { 
        iconName: 'thunderstorm', 
        gradientColors: ['#0F2027', '#203A43'],
        title: 'Sudden Squall',
        subtitle: 'Brief but intense weather'
    },
    'Tornado': { 
        iconName: 'thunderstorm', 
        gradientColors: ['#2C3E50', '#4CA1AF'],
        title: 'Tornado Warning',
        subtitle: 'Seek shelter immediately'
    },
    'Clear': { 
        iconName: 'sunny', 
        gradientColors: ['#56CCF2', '#2F80ED'],
        title: 'Beautiful Day',
        subtitle: 'Clear skies and sunshine'
    },
    'Clouds': { 
        iconName: 'cloudy', 
        gradientColors: ['#BDC3C7', '#2C3E50'],
        title: 'Cloudy Skies',
        subtitle: 'Overcast but pleasant'
    }
}  

const Weather: React.FC<WeatherProps> = ({ temperature, condition, city }) => (
    <LinearGradient2 colors={weatherOptions[condition]?.gradientColors ?? []} style={styles.container}>
        <View style={styles.topSection}>
            <Text style={styles.city}>{city}</Text>
            <Ionicons 
                name={weatherOptions[condition]?.iconName ?? 'sunny'} 
                size={80} 
                color="#FFFFFF" 
                style={styles.icon}
            />
            <Text style={styles.temp}>{temperature}°C</Text>
            <Text style={styles.condition}>{condition}</Text>
        </View>
        
        <View style={styles.bottomSection}>
            <Text style={styles.title}>{weatherOptions[condition]?.title ?? 'Weather'}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition]?.subtitle ?? 'Current conditions'}</Text>
        </View>
    </LinearGradient2>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 50,
    },
    topSection: {
        alignItems: 'center',
        marginTop: 100,
        zIndex: 2,
    },
    bottomSection: {
        alignItems: 'center',
        marginBottom: 80,
        paddingHorizontal: 40,
        zIndex: 2,
    },
    city: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#FFFFFF',
    },
    icon: {
        marginBottom: 16,
    },
    temp: {
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFFFFF',
    },
    condition: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        opacity: 0.8,
    },
});

export default Weather;