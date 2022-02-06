import React from 'react';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'; 



const AlbumButton=(props)=>{
     const siteName = props.siteName
      return (<Button
                        style={{}}
                        iconLeft
                        title=" Pics"
                        icon={<Ionicons name="md-images-sharp" size={24} color="black" />}
                        onPress={props.handleClick }
                  />
                  )
}



export default AlbumButton;