import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, ScrollView} from 'react-native';
import { ListItem, Header } from 'react-native-elements'
import AddButton from './../components/Buttons/AddButton';
import EditDeleteButton from './../components/Buttons/EditDeleteButton'
import Moment from 'moment';
import lodash from 'lodash';

import LeftButton from './../components/Buttons/LeftButton';
import AddEditMapModal from '../components/Modals/AddEditMapModal'
import ModalPrompt from './../components/Modals/ModalPrompt'
import { styles } from './../styles/Styles'
import * as MapActions from './../redux-store/actions/map-actions';




const MapList = ({ navigation }) => {
      const dispatch = useDispatch();
      const readOnly = useSelector(state => state.auth.readOnly)
      const maplist = useSelector(state => state.map.mapList);
      const selectedMap = useSelector(state => state.map.selectedMap);
      const member = useSelector(state => state.auth.authenticatedMember)
      const [memberDisplayName, setMemberDisplayName] = useState('Read Only Public');
      const [mapModalVisible, setMapModalVisible] = useState(false)
      const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false)
      const [mapToDelete, setMapToDelete] = useState({});
	const [isEdit, setIsEdit]= useState(false)

      useEffect(() => {
            if (readOnly === true) {
                  setMemberDisplayName('Read Only Public')
            } else if (member && member.Email) {
                  setMemberDisplayName(member.Email)
            }
      }, [readOnly, member])

      return (
            <View style={{paddingBottom:120}}>
                  <Header
                        leftComponent={<LeftButton handleClick={toggleDrawer} />}
                        centerComponent={<Text style={{ color: '#707c87' }}>{`${memberDisplayName}`}</Text>}
                        rightComponent={!readOnly && <AddButton handleClick={handleAddMap} />} >
                  </Header>

                  <AddEditMapModal 
                        visible={mapModalVisible} 
				isEdit={isEdit}
                        onCancel={()=>{setMapModalVisible(false)}}
                        navigation={navigation}
                  />
                  <ModalPrompt
                        visible={confirmDeleteVisible}
                        message={`Delete ${mapToDelete.MapName} ? `}
                        onDismiss={e=>setConfirmDeleteVisible(false)}
                        onClickYes={handleConfirmDelete}
                  />

                  <ScrollView>
                        {
                              maplist.map(item => {
                                    const rowColor= selectedMap && item.MapID===selectedMap.MapID ? '#fcfbcf':'transparent'
                                    const listRowStyle={
                                          backgroundColor: rowColor
                                    }
                                    return (
                              item && <ListItem key={Math.random()}
                                                bottomDivider
								containerStyle={listRowStyle}
                                                onPress={e => selectMap(item)}
                                          >
                                                <View style={{display: 'flex', flexDirection: 'row' } }    >
                                                      <View style={{ display: 'flex', flexDirection: 'column', width: 240, }}       >
                                                            <ListItem.Title>{item.MapName}</ListItem.Title>
                                                            <ListItem.Subtitle>{Moment(item.CreateDate).format('M/D/y')}</ListItem.Subtitle>
                                                      </View>
                                                      {!readOnly &&
                                                            <EditDeleteButton
                                                                  item={item}
                                                                  onEdit={handleEditMap}
                                                                  onDelete={handleDeleteMap}
                                                            />
                                                      }
                                                </View>
                                          </ListItem>
                                    )
                              })
                        }
                  </ScrollView>
            </View>
      )

      function selectMap(map) {
            dispatch({ type: MapActions.SET_MAP, selectedMap: map })
            navigation.navigate('Map', { screen: "Map" });
      }

	async function handleAddMap() {
		setIsEdit(false)
		await dispatch({type:MapActions.SET_MAP, selectedMap:null})
		
            setMapModalVisible(true)
      }

      function handleEditMap(map) {
		setIsEdit(true)
            dispatch({ type: MapActions.SET_MAP, selectedMap: map })
            setMapModalVisible(true)
      }

      function handleDeleteMap(item){
            setConfirmDeleteVisible(true);
            setMapToDelete(item)
      }

      function handleConfirmDelete() {
            setConfirmDeleteVisible(false)
		const copyOfMap = lodash.cloneDeep(mapToDelete)
		copyOfMap.isDeleted = true;
            dispatch(MapActions.deleteMap(copyOfMap))
            setMapToDelete({})

      }

     

      function toggleDrawer() {
            navigation.toggleDrawer();
      }


}

export default MapList;
