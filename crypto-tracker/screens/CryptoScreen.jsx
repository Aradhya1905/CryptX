import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import News from './components/News';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux-store/GetCoin';

const CryptoScreen = () => {
	//redux
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCoins());
	}, []);
	const { coins, isLoading } = useSelector(state => state.coin);
	//navigation
	const navigation = useNavigation();
	const navigateToCoins = () => {
		navigation.navigate('SeeAllCoins');
	};
	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#070707',
				}}
			>
				<ActivityIndicator size='large' color='#6552FE' />
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.mainText}>Markets</Text>
			<View style={styles.topCoinTextContainer}>
				<Text style={styles.topCoinText}>Top Coins</Text>
				<TouchableOpacity>
					<Text style={styles.seeAllText} onPress={navigateToCoins}>
						See all
					</Text>
				</TouchableOpacity>
			</View>

			{coins && (
				<View style={styles.coinContainer}>
					{coins.slice(0, 2).map(coin => (
						<View style={styles.coinBit} key={coin.id}>
							<View style={styles.coinCardContiner}>
								<View style={styles.coinImageContiner}>
									<Image
										source={{ uri: coin.image }}
										style={{
											width: 30,
											height: 30,
											backgroundColor: 'white',
											borderRadius: 50,
											marginRight: 7,
										}}
									/>
									<Text style={styles.coinImageText}>{coin.name}</Text>
								</View>

								<View styles={styles.coinMapContainer}>
									<Text style={styles.coinMapText}>
										$
										{coin.current_price.toLocaleString('en-US', {
											currency: 'USD',
										})}
									</Text>
									<Text style={styles.coinMapText}>
										{coin.price_change_percentage_24h.toFixed(2)}%
										<AntDesign
											name={
												coin.price_change_percentage_24h > 0
													? 'caretup'
													: 'caretdown'
											}
											size={12}
											color={
												coin.price_change_percentage_24h > 0
													? 'green'
													: 'red'
											}
											style={{ marginLeft: 4 }}
										/>
									</Text>
									<Text style={styles.coinHigh24hr}>
										24hr high : ${' '}
										{coin.high_24h.toLocaleString('en-US', { currency: 'USD' })}
									</Text>
									<Text style={styles.coinLow24hr}>
										24hr low : ${' '}
										{coin.low_24h.toLocaleString('en-US', { currency: 'USD' })}
									</Text>
								</View>
							</View>
						</View>
					))}
				</View>
			)}

			<News />

			<StatusBar style='light' />
			<Image source={require('../assets/wave.svg')} style={styles.waveImage} />
		</SafeAreaView>
	);
};

export default CryptoScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#070707',
	},
	waveImage: {
		height: 400,
		width: 400,
		resizeMode: 'contain',
		zIndex: -10,
		position: 'absolute',
	},
	mainText: {
		fontSize: 64,
		color: '#fff',
		fontFamily: 'Poppins_600SemiBold',
		marginLeft: 20,
	},
	topCoinTextContainer: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	topCoinText: {
		color: '#fff',
		fontFamily: 'Poppins_500Medium',
		fontSize: 20,
	},
	seeAllText: {
		color: '#F5C249',
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
	},
	coinContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
	},
	coinBit: {
		flex: 0.5,
		height: 200,
		backgroundColor: '#282B35',
		borderRadius: 20,
		marginRight: 7,
		marginLeft: 7,
	},

	coinCardContiner: {
		marginLeft: 20,
		marginTop: 20,
	},
	coinImageContiner: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	coinImageText: {
		color: '#fff',
		fontFamily: 'Poppins_500Medium',
		fontSize: 16,
	},
	coinMapContainer: {},
	coinMapText: {
		color: '#fff',
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
		marginTop: 5,
		marginLeft: 5,
	},
	coinHigh24hr: {
		color: '#fff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
		marginTop: 10,
	},
	coinLow24hr: {
		color: '#fff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
		marginTop: 5,
	},
});
