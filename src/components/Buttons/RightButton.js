import React from 'react';
import { Button } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons'; 



const RightButton=(props)=>{
     
      return (<Button
      style={{}}
                  icon={<Fontisto name="arrow-right" size={24} color="black" />}
                  
                  onPress={props.handleClick }
            />
      )
}



export default RightButton;