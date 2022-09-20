import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const GetStarted = () => {
	const navigation = useNavigation();
	const handleNavigation = () => {
		navigation.navigate('CryptoScreen');
	};
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='light' />
			<View>
				<Text style={styles.title}>
					Crypt<Text style={styles.titleColor}>X</Text>
				</Text>
				<View style={styles.image}>
					<Image style={styles.imageShape} source={require('../assets/shape.png')} />
					<Image style={styles.imageShape1} source={require('../assets/ETH.png')} />
				</View>
				<View style={styles.description}>
					<Text style={styles.textDes}>Jump start your crypto portfolio</Text>

					<TouchableOpacity onPress={handleNavigation} style={styles.button}>
						<AntDesign name='arrowright' size={24} color='#fff' />
					</TouchableOpacity>
				</View>
				<Text style={styles.textDes1}>Take your investment portfolio to next level</Text>
			</View>
		</SafeAreaView>
	);
};

export default GetStarted;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#070707',
	},
	title: {
		padding: 20,
		fontSize: 64,
		fontFamily: 'Poppins_700Bold',
		color: '#fff',
	},
	titleColor: {
		fontSize: 64,
		fontFamily: 'Poppins_700Bold',
		color: '#6552FE',
	},
	image: {
		height: 425,
		width: 425,
	},
	imageShape: {
		height: 425,
		width: 425,
		resizeMode: 'contain',
	},
	imageShape1: {
		height: 150,
		width: 150,
		resizeMode: 'contain',
		position: 'absolute',
		zIndex: -1,
	},
	description: {
		marginLeft: 20,
		marginRight: 20,
		display: 'flex',
		flexDirection: 'row',
	},
	textDes: {
		color: '#fff',
		fontFamily: 'Poppins_500Medium',
		fontSize: 30,
		lineHeight: 45,
	},
	textDes1: {
		color: '#fff',
		fontFamily: 'Poppins_400Regular',
		fontSize: 12,
		lineHeight: 45,
		marginLeft: 20,
	},
	button: {
		backgroundColor: '#6552FE',
		borderRadius: 50,
		width: 70,
		height: 70,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
