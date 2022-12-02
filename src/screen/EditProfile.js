import {
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	Button,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "../utilities/Colors";
import { Formik } from "formik";
import * as Yup from "yup";
import SecondaryButton from "../components/SecondaryButton";

const EditProfile = ({ navigation }) => {
	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		city: "",
		contact: "",
	};

	const onSubmit = (values) => {
		console.log(values);
	};

	const phoneRegex =
		/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

	const validationSchema = Yup.object({
		firstname: Yup.string().required("Required"),
		lastname: Yup.string().required("Required"),
		email: Yup.string().email("Invalid Email").required("Required"),
		location: Yup.string().required("Required"),
		contact: Yup.string()
			.matches(phoneRegex, "Not a valid number")
			.required("Required")
			.min(10, "too short")
			.max(10, "too long"),
	});

	return (
		<View style={styles.container}>
			<View style={styles.statusBar}>
				<Ionicons
					name="arrow-back"
					size={25}
					color={Colors.primary}
					onPress={() => navigation.goBack()}
				/>
				<View style={styles.titleBar}>
					<Text style={styles.title}>Edit Profile Information</Text>
				</View>

				<Entypo
					name="dots-three-vertical"
					size={25}
					color={Colors.primary}
				/>
			</View>
			<ScrollView
				style={styles.form}
				showsVerticalScrollIndicator={false}
			>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({
						handleBlur,
						handleChange,
						handleSubmit,
						values,
						errors,
						touched,
					}) => {
						return (
							<View>
								<View style={styles.formControl}>
									<Text style={styles.label}>Firstname</Text>
									<TextInput
										type="text"
										style={styles.textField}
										name="firstname"
										onChangeText={handleChange("firstname")}
										onBlur={handleBlur("firstname")}
										value={values.firstname}
										placeholder="Firstname"
									/>
									{touched.firstname && errors.firstname ? (
										<Text style={styles.errorMessage}>
											{errors.firstname}
										</Text>
									) : null}
								</View>
								<View style={styles.formControl}>
									<Text style={styles.label}>Lastname</Text>
									<TextInput
										type="text"
										style={styles.textField}
										name="lastname"
										onChangeText={handleChange("lastname")}
										onBlur={handleBlur("lastname")}
										value={values.lastname}
										placeholder="Lastname"
									/>
									{touched.lastname && errors.lastname ? (
										<Text style={styles.errorMessage}>
											{errors.lastname}
										</Text>
									) : null}
								</View>
								<View style={styles.formControl}>
									<Text style={styles.label}>Email</Text>
									<TextInput
										type="text"
										style={styles.textField}
										name="email"
										onChangeText={handleChange("email")}
										onBlur={handleBlur("email")}
										value={values.email}
										placeholder="Email address"
									/>
									{touched.email && errors.email ? (
										<Text style={styles.errorMessage}>
											{errors.email}
										</Text>
									) : null}
								</View>
								<View style={styles.formControl}>
									<Text style={styles.label}>Location</Text>
									<TextInput
										type="text"
										style={styles.textField}
										name="location"
										onChangeText={handleChange("location")}
										onBlur={handleBlur("location")}
										value={values.location}
										placeholder="City"
									/>
									{touched.location && errors.location ? (
										<Text style={styles.errorMessage}>
											{errors.location}
										</Text>
									) : null}
								</View>
								<View style={styles.formControl}>
									<Text style={styles.label}>
										Phone number
									</Text>
									<TextInput
										type="text"
										style={styles.textField}
										name="contact"
										onChangeText={handleChange("contact")}
										onBlur={handleBlur("contact")}
										value={values.contact}
										placeholder="Enter a valid Phone number"
									/>
									{touched.contact && errors.contact ? (
										<Text style={styles.errorMessage}>
											{errors.contact}
										</Text>
									) : null}
								</View>
								<View style={styles.btnWrapper}>
									<SecondaryButton
										title="SUBMIT"
										pressHandler={handleSubmit}
									/>
								</View>
							</View>
						);
					}}
				</Formik>
			</ScrollView>
		</View>
	);
};

export default EditProfile;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 25,
		paddingVertical: 40,
	},
	statusBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	titleBar: {
		backgroundColor: Colors.primary,
		paddingHorizontal: 20,
		paddingVertical: 12,
		borderRadius: 12,
	},
	title: {
		fontFamily: "boldText",
		color: Colors.light,
	},

	form: {
		paddingVertical: 20,
	},

	formControl: {
		paddingVertical: 15,
	},
	label: {
		fontFamily: "boldText",
		color: Colors.primary,
	},
	textField: {
		marginTop: 10,
		padding: 15,
		backgroundColor: Colors.white,
		borderRadius: 15,
		color: Colors.dark,
	},
	errorMessage: {
		color: Colors.secondary,
		paddingTop: 7,
	},
	btnWrapper: {
		paddingTop: 30,
		paddingBottom: 50,
	},
});
