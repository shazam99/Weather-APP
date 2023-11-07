import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

// Importing the IconPaths service for mapping weather conditions to icons
import ImagePaths from '../service/iconService';

const ForecastList = ({ forecastData }) => {
    // An object to keep track of unique dates
    const uniqueDates = {};

    return (
        <View>
            <Text style={styles.cityName}>5 Days Forecast ( swipe )</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
                {forecastData.list.map((item) => {
                    const dt_txt = item.dt_txt.split(' ')[0]; // Extract date part from dt_txt

                    if (!uniqueDates[dt_txt]) {
                        uniqueDates[dt_txt] = true;

                        return (
                            <View style={styles.forecastCard} key={item.dt}>
                                <View style={styles.topRow}>
                                    <Text style={styles.date}>{item.dt_txt.split(' ')[0]}</Text>
                                    <Text style={styles.cityName}>{forecastData.city.name}, {forecastData.city.country}</Text>
                                </View>
                                <View style={styles.center}>
                                    <Image
                                        style={styles.weatherIcon}
                                        source={ImagePaths(item.weather[0].main)}
                                    />
                                    <>
                                        <Text style={styles.temperature}>Feels: {(item.main.feels_like - 273.15).toFixed(2)}°C</Text>
                                        <Text>{(item.weather[0].description)}</Text>
                                    </>
                                </View>

                                <View style={styles.bottomRow}>
                                    <View style={styles.gridItem}>
                                        <Text style={styles.gridLabel}>Humidity</Text>
                                        <Text>{item.main.humidity}%</Text>
                                    </View>
                                    <View style={styles.gridItem}>
                                        <Text style={styles.gridLabel}>Pressure</Text>
                                        <Text>{item.main.pressure} hPa</Text>
                                    </View>
                                    <View style={styles.gridItem}>
                                        <Text style={styles.gridLabel}>Max Temp.</Text>
                                        <Text>{(item.main.temp_max - 273.15).toFixed(2)}°C</Text>
                                    </View>
                                    <View style={styles.gridItem}>
                                        <Text style={styles.gridLabel}>Min Temp.</Text>
                                        <Text>{(item.main.temp_min - 273.15).toFixed(2)}°C</Text>
                                    </View>
                                </View>

                            </View>
                        );
                    }

                    return null;
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 4,
        height: 550
    },
    forecastCard: {
        backgroundColor: '#FFF',
        height: 350,
        padding: 20,
        borderRadius: 20,
        marginRight: 20,
        width: 260,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        elevation: 4,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    center: {
        alignItems: 'center',
        marginBottom: 30,
    },
    bottomRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontSize: 14,
        textAlign: 'left',
        color: 'gray'
    },
    cityName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'gray'
    },
    temperature: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    weatherIcon: {
        width: 80,
        height: 80,
        marginBottom: 10
    },
    gridItem: {
        width: '50%',
        marginBottom: 10,
        alignItems: 'center',
    },
    gridLabel: {
        fontWeight: 'bold',
        marginBottom: 5,
    },

});

export default ForecastList;
