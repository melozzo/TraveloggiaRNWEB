import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';



const ToggleMapType =(props)=>{
      const {handleToggle, mapName} = props;
      return (
            <Button
                        iconBottom
                        icon={<MaterialIcons name="satellite" size={24} color="black" />}
                        title={mapName}
                        onPress={() => { handleToggle() }}
            />
      )
}
export default ToggleMapType