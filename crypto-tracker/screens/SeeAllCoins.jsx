import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import Coins from './components/Coins';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux-store/GetCoin';

const SeeAllCoins = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCoins());
	}, []);
	const { coins, isLoading } = useSelector(state => state.coin);

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
			<Text style={styles.titleText}>Coins</Text>
			<View style={styles.divider}></View>
			{coins && (
				<ScrollView style={styles.scrollCoinContainer}>
					<FlatList
						keyExtractor={item => item.id}
						data={coins}
						renderItem={({ item }) => (
							<Coins
								id={item.id}
								img={item.image}
								name={item.name}
								currentPrice={item.current_price}
								percentageChange={item.price_change_percentage_24h}
								high24hr={item.high_24h}
								low24hr={item.low_24h}
								sparkline={item.sparkline_in_7d.price}
							/>
						)}
					/>
				</ScrollView>
			)}
		</SafeAreaView>
	);
};

export default SeeAllCoins;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#070707',
	},

	titleText: {
		fontSize: 64,
		color: '#fff',
		fontFamily: 'Poppins_600SemiBold',
		marginLeft: 20,
	},

	divider: {
		backgroundColor: '#6552FE',
		height: StyleSheet.hairlineWidth,
		marginHorizontal: 10,
		opacity: 0.3,
	},
	scrollCoinContainer: {
		marginHorizontal: 10,
	},
	contentContainer: {
		height: 500,
	},
});
