import Bugsnag from '@bugsnag/expo';
Bugsnag.start();

import 'react-native-gesture-handler'; // arcane bit of react-navigation
import * as React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Navigation/Drawer';
import {Provider} from 'react-redux';
import mapReducer from './src/redux-store/reducers/map-reducer';
import siteReducer from './src/redux-store/reducers/site-reducer';
import authReducer from './src/redux-store/reducers/auth-reducer';
import albumReducer from './src/redux-store/reducers/album-reducer';
import * as GlobalStyles from './src/styles/Styles'
import ErrorScreen from './src/screens/ErrorScreen'
import {ThemeProvider} from 'react-native-elements'
import theme from './src/styles/react-native-elements-theme'
import { SafeAreaProvider } from 'react-native-safe-area-context';





export default function App() {
     
      const rootReducer = combineReducers({map:mapReducer, site:siteReducer, auth: authReducer, album: albumReducer})
	const store = createStore(rootReducer, applyMiddleware(thunk))

	const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

      return (
		<ErrorBoundary FallbackComponent={ErrorScreen}>
			<Provider store={store}>
				<SafeAreaProvider>
					<NavigationContainer>
						<ThemeProvider theme={theme}>
							<Drawer  styles={GlobalStyles} />
						</ThemeProvider>
					</NavigationContainer>
				</SafeAreaProvider>
			</Provider>
		</ErrorBoundary>
      );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
