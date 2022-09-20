import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import NewsArticle from '../../object.js';

const News = () => {
	const [sliceIncrement0, setSliceIncrement0] = useState(0);
	const [sliceIncrement10, setSliceIncrement10] = useState(10);
	const slicingFunction = () => {
		setTimeout(() => {
			setSliceIncrement0(sliceIncrement0 + 10);
			setSliceIncrement10(sliceIncrement10 + 10);
			if (sliceIncrement0 > 80) {
				setSliceIncrement0(0);
				setSliceIncrement10(10);
			}
		}, 500);
		
	};

	return (
		<View style={styles.newsContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.NewsText}>News</Text>
				<TouchableOpacity>
					<Text style={styles.seeAllText} onPress={() => slicingFunction()}>
						Refresh
					</Text>
				</TouchableOpacity>
			</View>
			{NewsArticle && (
				<ScrollView style={styles.newsScroll}>
					{NewsArticle.slice(sliceIncrement0, sliceIncrement10).map(
						(newsArticle, index) => {
							return (
								<View style={styles.newsCard} key={index}>
									<Image
										source={{ uri: newsArticle.urlToImage }}
										style={{
											width: 100,
											height: 100,
											resizeMode: 'cover',
											borderRadius: 5,
											marginLeft: 20,
										}}
									/>
									<View>
										<TouchableOpacity>
											<Text
												style={styles.cardText}
												onPress={() => Linking.openURL(newsArticle.url)}
											>
												{newsArticle.title.slice(0, 90).concat(" . . .")}
											</Text>
											<EvilIcons
												name='external-link'
												size={20}
												color='white'
												onPress={() => Linking.openURL(newsArticle.url)}
												style={styles.cardExternalLink}
											/>
										</TouchableOpacity>
									</View>
								</View>
							);
						}
					)}
				</ScrollView>
			)}
		</View>
	);
};

export default News;

const styles = StyleSheet.create({
	newsContainer: {
		marginLeft: 20,
		marginRight: 20,
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	NewsText: {
		fontFamily: 'Poppins_500Medium',
		color: '#fff',
		fontSize: 22,
	},
	seeAllText: {
		color: '#F5C249',
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
	},
	newsScroll: {
		height: '100%',
	},
	newsCard: {
		backgroundColor: '#282B35',
		width: '100%',
		height: 140,
		borderRadius: 12,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
	},

	cardText: {
		color: '#fff',
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
		marginLeft: 10,
		marginRight: 10,
		width: 180,
	},
	cardExternalLink: {
		marginLeft: 8,
	},
});
