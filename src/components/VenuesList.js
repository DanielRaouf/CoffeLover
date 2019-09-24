import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';
import * as actions from '../Actions';
import * as Colors from '../utils/Colors';
import VenueItem from '../components/VenueItem';

class VenuesList extends Component {
  componentDidMount() {
    const {fetchVenues} = this.props;
    fetchVenues();
  }

  renderItem({item}) {
    return <VenueItem item={item} showDetailsBtn={true} navigation={this.props.navigation} />;
  }

  render() {
    const {venues, isLoading} = this.props;
    const {container} = styles;
    return (
      <View style={container}>
        <FlatList
        // ListHeaderComponent={this.renderItem}
          data={venues}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item, index) => `${index}`}
          windowSize={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const mapStateToProps = ({venues}, props) => {
  const {list, isLoading} = venues;
  return {
    venues: list,
    isLoading: isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchVenues: () => dispatch(actions.fetchVenues()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenuesList);
