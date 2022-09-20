import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Coins = ({ img, name, currentPrice, percentageChange, high24hr, low24hr, id, sparkline }) => {

	//color change
	const priceChangeColor = percentageChange > 0 ? 'green' : 'red';
	const caretColor = percentageChange > 0 ? 'caretup' : 'caretdown';

	return (
		<Pressable style={styles.container} >
			<View style={styles.coinCard}>
				<View>
					<View style={styles.coinImgAndName}>
						<Image
							source={{ uri: img }}
							style={{ width: 30, height: 30, resizeMode: 'cover' }}
						/>
						<Text style={[styles.coinName, { marginLeft: 10 }]}>{name}</Text>
					</View>
					<View style={styles.coinTexts}>
						<Text style={styles.coinPrice}>
							$ {currentPrice.toLocaleString('en-US', { currency: 'USD' })}
						</Text>
						<Text style={[styles.coinPercentageChange, { color: priceChangeColor }]}>
							{percentageChange.toFixed(2)}%
							<AntDesign
								name={caretColor}
								size={12}
								color={priceChangeColor}
								style={{ marginLeft: 4 }}
							/>
						</Text>
						<Text style={styles.coinHigh24hr}>
							24hr High : $ {high24hr.toLocaleString('en-US', { currency: 'USD' })}
						</Text>
						<Text style={styles.coinLow24hr}>
							24hr Low : $ {low24hr.toLocaleString('en-US', { currency: 'USD' })}
						</Text>
					</View>
				</View>
			</View>
		</Pressable>
	);
};

export default Coins;

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
		marginRight: 15,
	},
	coinCard: {
		height: 200,
		backgroundColor: '#282B35',
		borderRadius: 15,
		marginBottom: 20,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	coinImgAndName: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		marginTop: 15,
	},
	coinTexts: {
		marginLeft: 25,
		marginTop: 10,
	},
	coinName: {
		color: '#fff',
		fontFamily: 'Poppins_500Medium',
		fontSize: 16,
		marginTop: 5,
	},
	coinPrice: {
		color: '#fff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 18,
		marginTop: 5,
	},
	coinPercentageChange: {
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
		marginTop: 5,
	},
	coinHigh24hr: {
		color: '#fff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 15,
		marginTop: 10,
	},
	coinLow24hr: {
		color: '#fff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 15,
		marginTop: 5,
	},
	
});
