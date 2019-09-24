import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../Actions';
import ReviewItem from '../components/ReviewItem';
import * as Colors from '../utils/Colors';
import HeaderWithBack from '../components/HeaderWithBack';
import VenueItem from '../components/VenueItem';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';


class VenueScreen extends Component {

  componentDidMount() {
    const {fetchReviews} = this.props;
    fetchReviews();
  }

  renderHeader() {
    const {header} = styles;
      return <HeaderWithBack navigation={this.props.navigation} showBack={true} title={'Venue'}/>;
  }
  renderReview({item}) {
    return <ReviewItem item={item} navigation={this.props.navigation} />;
  }
  renderItem(item) {
   return <VenueItem item={item} navigation={this.props.navigation} />;
  }
  renderBody() {
    const {reviews, isLoading} = this.props;
    const venue = this.props.navigation.getParam('item');
    const {header} = styles;
    return(
        <FlatList
          ListHeaderComponent={this.renderItem(venue)}
          data={reviews}
          renderItem={this.renderReview.bind(this)}
          keyExtractor={(item, index) => `${index}`}
          windowSize={2}
          style={styles.list}
        />

    );
  }

  render() {
    const {container} = styles;
    return (
      <SafeAreaView style={container}>
        {this.renderHeader()}
        {this.renderBody()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingTop: 10,
  },
  list: {
    marginLeft:10,
  },
});
const mapStateToProps = ({reviews}, props) => {
  const {list, isLoading} = reviews;
  return {
    reviews: list,
    isLoading: isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(actions.fetchReviews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenueScreen);
