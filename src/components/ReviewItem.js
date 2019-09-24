import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Linking,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Rating, AirbnbRating} from 'react-native-ratings';
import * as Colors from '../utils/Colors';
const {width, height} = Dimensions.get('window');

class ReviewItem extends Component {

  renderRating(rate) {
    return (
      <Rating
        type={'custom'}
        readonly
        startingValue={rate}
        ratingCount={5}
        imageSize={15}
        ratingBackgroundColor={Colors.WARM_GREY}
        tintColor={Colors.BACKGROUND}
      />
    );
  }


  render() {
    const {item, navigation} = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <Image source={{uri: item.user.image_url}} style={styles.image}/>
            <Text style={styles.titleText}>{item.user.name}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <View style={styles.ratingContainer}>
            {this.renderRating(item.rating)}
          </View>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviewText}>{item.text}</Text>
          </View>

        </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Colors.BACKGROUND,
    paddingBottom: 15,
    paddingTop: 10,
    paddingRight: 7,
    paddingLeft: 7,
    borderBottomWidth: 1,
    borderColor: Colors.WARM_GREY,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  ratingContainer: {
    marginLeft: 40,
    marginTop: -8,
    marginBottom: 5,
    flexDirection: 'row',
  },
  timeText: {
    marginLeft: 10,
    fontSize: 14,
    textAlign: 'right',
    fontWeight: 'normal',
    color: Colors.WHITE,
  },
  reviewContainer: {
    marginLeft: 40,
    flexDirection: 'column',

  },
  reviewText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: Colors.WHITE,
  },
  image: {
    width: 35,
    height:35,
    borderRadius: 17.5,
    marginRight: 5,

  },
  callBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 12,
  },
  openStatusText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 10,
  },
  btnContainer: {
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.WARM_GREY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 8,
    paddingRight: 8,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thirdRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  fourthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default ReviewItem;
