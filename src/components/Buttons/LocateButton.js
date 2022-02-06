import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';



const CurrentLocation =(props)=>{
      const {getLocation} = props;
      return (
            <Button
                        iconLeft
                        icon={<Ionicons name="location-sharp" size={24} color="black" />}
                        title="Loc"
                        onPress={() => { getLocation();}}
            />
      )
}
export default CurrentLocation