import { StyleSheet, SafeAreaView } from "react-native";
import slides from "../utilities/sildeData";
import SlideItem from "./SlideItem";
import SwiperFlatList from "react-native-swiper-flatlist";
import Colors from "../utilities/Colors";

const Slider = () => {
	return (
		<SafeAreaView>
			<SwiperFlatList
				keyExtractor={(item) => item.id}
				data={slides}
				renderItem={({ item }) => <SlideItem item={item} />}
				horizontal
				pagingEnabled
				snapToAlignment="center"
				showsHorizontalScrollIndicator={false}
				bounces={false}
				autoplay
				autoplayDelay={5}
				autoplayLoop
				index={2}
				showPagination
				paginationStyle={{ position: "absolute", top: 30 }}
				paginationStyleItem={{ marginHorizontal: 5 }}
				paginationStyleItemActive={{
					width: 25,
					height: 15,
					borderRadius: 6,
				}}
				paginationStyleItemInactive={{
					width: 10,
					height: 15,
					borderRadius: 4,
				}}
				paginationActiveColor={Colors.primary}
				paginationDefaultColor={Colors.white}
			/>
		</SafeAreaView>
	);
};

export default Slider;

const styles = StyleSheet.create({});
