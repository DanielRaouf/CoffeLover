import React, { Component } from 'react'
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
	Image,
} from 'react-native'
import * as Colors from '../utils/Colors';

export default class HeaderWithBack extends Component {

	render() {
    const {navigation, showBack, title } = this.props;
		return (<View style={styles.container}>
        <View>
        {!!showBack &&  <TouchableOpacity style={styles.backButton}
                            onPress={()=>{
                              navigation.goBack()
                            }}
                          >
                        <Image source={require('../assets/Back.png')} />
                    </TouchableOpacity>}
        </View>
        <Text style={styles.titleText}>{title}</Text>
        {!!showBack && <View style={styles.backButton} />}
        {!showBack && <View />}
				</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
    height: 40,
    backgroundColor: Colors.CHARCOAL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '600',
    backgroundColor: Colors.BACKGROUND,
    color: Colors.WHITE,
  },
  backButton:{
    height: 40,
    width: 40,
    paddingTop: 10,
    paddingLeft: 20
  }

})


