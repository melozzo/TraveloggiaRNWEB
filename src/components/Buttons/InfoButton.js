import React from 'react';
import { Button } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons'; 



const InfoButton=(props)=>{
     const siteName = props.siteName
      return (<Button
      style={{}}
            iconLeft
                  title=" Info"
                  icon={<Entypo name="info-with-circle" size={24} color="black" />}
                  onPress={props.handleClick }
            />
      )
}



export default InfoButton;