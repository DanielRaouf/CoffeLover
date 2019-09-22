import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

class VenueScreen extends Component {
  renderHeader() {
    const {header} = styles;
    return (
      <View>
        <Text style={header}>Venue</Text>
      </View>
    );
  }
  renderBody() {
    const {header} = styles;
    return <View />;
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

    paddingTop: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
  },
  topBarItem: {
    width: 40,
    margin: 10,
  },
  screenTitleStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  backButton: {
    flex: 1,
    height: 40,
    width: 40,
    paddingTop: 10,
    paddingLeft: 20,
  },
  noDataOnTabContainer: {
    marginTop: 50,
    backgroundColor: 'transparent',
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorStyle: {
    height: 1,
    flex: 1,
    marginTop: 6,
    backgroundColor: 'rgb(26, 33, 42)',
  },
  textFieldStyle: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgb(28, 42, 58)',
    height: 38,
    marginTop: 16,
    marginRight: 17,
    marginLeft: 17,
    borderRadius: 19,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

const mapStateToProps = ({currencies}, props) => {
  return {
    isLoading: currencies.isLoading,
  };
};

const mapDispatchToProps = dispatch => ({});

export {VenueScreen};
