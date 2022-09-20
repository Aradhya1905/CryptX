import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
	useFonts,
	Poppins_700Bold,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import CryptoScreen from './screens/CryptoScreen';
import GetStarted from './screens/GetStarted';
import SeeAllCoins from './screens/SeeAllCoins';

//Redux Imports
import { Provider } from 'react-redux';
import { store } from './redux-store/Store';

//navigation
const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
		Poppins_500Medium,
		Poppins_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaProvider>
				<Provider store={store}>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen
								options={{ headerShown: false }}
								name='GetStarted'
								component={GetStarted}
							/>
							<Stack.Screen
								options={{ headerShown: false }}
								name='CryptoScreen'
								component={CryptoScreen}
							/>
							<Stack.Screen
								options={{ headerShown: false }}
								name='SeeAllCoins'
								component={SeeAllCoins}
							/>
						
						</Stack.Navigator>
					</NavigationContainer>
				</Provider>
			</SafeAreaProvider>
		);
	}
}
