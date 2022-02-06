import React from 'react';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';



const AddButton=(props)=>{
     
      return (<Button
      style={{}}
                  icon={<Ionicons name="md-add-circle" size={24} color="black" />}
                  title="Add"
                  onPress={props.handleClick }
            />
      )
}



export default AddButton;