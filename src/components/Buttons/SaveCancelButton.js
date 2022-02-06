import React from "react";
import { View, Dimensions } from "react-native";
import {Button} from 'react-native-elements'

const SaveCancelButton = (props) => {
	const { onSave, onCancel, saveDisabled=false} = props;

	return (
		<View
			style={{
				display: "flex",
				marginBottom: 20,
				flexDirection: "row",
				justifyContent: "center",
				width:250
						}}
		>
			<Button
			disabled={saveDisabled}
				style={{width:110}}
				type="outline"
				raised={true}
				 title={'Save'}
				onPress={ onSave}
			/>
			<View style={{width:10}} />
			<Button
				raised={true}
			   	style={{width:110}}
				title="Cancel"
				type="outline"
				onPress={onCancel}
			/>
		</View>
	)

	


};




export default SaveCancelButton;
