import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Linking,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Rating, AirbnbRating} from 'react-native-ratings';
import * as Colors from '../utils/Colors';
const {width, height} = Dimensions.get('window');

class VenueItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCalculatedWidth: 0,
      imageCalculatedHeight: 0,
    };
  }

  calcDim(imageWidth, imageHeight, maxHeight, maxWidth) {
    const imageRatio = imageWidth / imageHeight;
    let newImageWidth = maxWidth;
    let newImageHeight = maxWidth / imageRatio;
    newImageHeight = Math.min(maxHeight, newImageHeight);
    newImageWidth = newImageHeight * imageRatio;
    return {
      imageCalculatedWidth: newImageWidth,
      imageCalculatedHeight: newImageHeight,
    };
  }

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
        style={styles.rating}
      />
    );
  }

  callNumber(number) {
    Linking.openURL(`tel:${number}`);
  }

  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Venue', {item: item})}>
        <View style={styles.container}>
          <View style={styles.firstRow}>
            <Text style={styles.titleText}>{item.name}</Text>
            {this.renderRating(item.review.rating)}
          </View>
          <FastImage
            style={[
              styles.image,
              {
                width: this.state.imageCalculatedWidth,
                height: this.state.imageCalculatedHeight,
              },
            ]}
            resizeMode={'contain'}
            source={{uri: item.imageUrl}}
            onLoad={evt => {
              const {
                imageCalculatedWidth,
                imageCalculatedHeight,
              } = this.calcDim(
                evt.nativeEvent.width,
                evt.nativeEvent.height,
                height,
                width - 34,
              );
              this.setState({
                imageCalculatedWidth,
                imageCalculatedHeight,
              });
            }}
          />

          <View style={styles.thirdRow}>
            <TouchableOpacity
              style={styles.callBtn}
              onPress={() => this.callNumber(item.phone)}>
              <Text style={styles.callText}>Call</Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.openStatusText,
                {color: item.isClosed ? Colors.RED : Colors.GREEN},
              ]}>
              {item.isClosed ? 'Closed Now' : 'Open Now'}
            </Text>
          </View>

          <View style={styles.fourthRow}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => this.callNumber(item.phone)}>
              <Text style={styles.btnText}>Show On Map</Text>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>More Details</Text>
            </View>
          </View>
          {/* <View
                style={{flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                <Text>City :</Text>
                <Text style={{textAlign: 'center'}}>
                  {item.location.display_address[1]}
                <Text>Address :</Text>
                <Text style={{textAlign: 'right'}}>
                  {item.location.display_address[0]}
                </Text>
                </Text>
              <View
                style={{flexDirection: 'row', marginLeft: 10, marginTop: 5}}>
                <Text>Country :</Text>
                <Text style={{textAlign: 'center'}}>
                  {item.location.display_address[2]}
                </Text>
              </View> */}
        </View>
      </TouchableWithoutFeedback>
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
  rating: {
    marginLeft: 8,
  },
  image: {
    width: width - 34,
    borderRadius: 8,
    marginBottom: 10,
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
    marginBottom: 5,
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

export default VenueItem;
