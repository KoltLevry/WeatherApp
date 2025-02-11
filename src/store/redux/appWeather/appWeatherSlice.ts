import { createAppSlice } from './../../createAppSlice';
import axios from 'axios';
import { AppWeatherSliceState } from './types';

const appWeathreInitialState: AppWeatherSliceState = {
    data: null,
    error: undefined,
    status: 'default',
}

export const appWeatherSlice = createAppSlice ({
    name: 'WEATHER_APP',
    initialState: appWeathreInitialState,
    reducers: create => ({
        getWeather: create.asyncThunk ( 
            async (name: string, thunkApi) => {
                try {
                    const result = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=c4c16037cd6e170b958cd49f397a0146`
                    );
                    return result.data;
                } catch(error) {
                    return thunkApi.rejectWithValue(error);
                }
            }, 
            {
                pending: (state: AppWeatherSliceState) => {
                    state.status = 'loading';
                    state.error = undefined;
                },
                fulfilled: (state: AppWeatherSliceState, action: any) => {
                    state.data = action.payload;
                    state.status = 'success';
                },
                rejected: (state: AppWeatherSliceState, action: any) => {
                    state.status = 'error';
                    state.error = action.payload;
                }
            }),
            resetweather: create.reducer((state: AppWeatherSliceState) => {
                state.data = null;
                state.error = undefined;
                state.status = 'default';
            })
    }),
    selectors: {
        weatherData: (state: AppWeatherSliceState) => state,
    }
});

export const appWeatherActions = appWeatherSlice.actions;
export const appWeatherSelectors = appWeatherSlice.selectors;