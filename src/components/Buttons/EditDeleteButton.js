import React from 'react'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



const EditDeleteButton = (props) => {
      const { onEdit, onDelete, item, large = false } = props;

      const small = (
                  <View style={{ display: 'flex', flexDirection: 'row', width: 106 }}>
                        <FontAwesome5 name="edit" size={28} color="#676a6e"
                              style={{ marginTop: 3, }}
                              onPress={e => onEdit(item)} />

                        <AntDesign name="delete" size={28} color="#676a6e"
                              style={{ marginTop: 3, marginLeft: 35 }}
                              onPress={e => onDelete(item)} />
                  </View>
            )
      const big = (<View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, }}>
					<FontAwesome5 name="edit" size={40} color="#676a6e"
						style={{ marginTop: 3, }}
						onPress={e => onEdit(item)} />

					<AntDesign name="delete" size={40} color="#676a6e"
						style={{ marginTop: 3, marginLeft: 50 }}
						onPress={e => onDelete(item)} />
				</View>)
      if (large)
            return big;
      else
            return small;
}
export default EditDeleteButton