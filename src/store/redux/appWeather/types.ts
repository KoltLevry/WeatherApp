export interface AppWeatherSliceState {
    data: WeatherData | null;
    error: string | undefined;
    status: 'default' | 'loading' | 'success' | 'error';
    history: WeatherData[];
}

interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}
