import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {getVenues} from '../services/Api';
import VenuesList from '../components/VenuesList';
import * as Colors from '../utils/Colors';
import HeaderWithBack from '../components/HeaderWithBack';

class HomeScreen extends Component {
  renderHeader() {
    return <HeaderWithBack showBack={false} title={'Venues'}/>;
  }
  renderBody() {
    return <VenuesList navigation={this.props.navigation} />;
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
  },
  headerContainer: {
    height: 40,
    backgroundColor: Colors.CHARCOAL,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '600',
    backgroundColor: Colors.BACKGROUND,
    color: Colors.WHITE,
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
    backgroundColor: Colors.SEPERATOR,
  },
  textFieldStyle: {
    color: 'white',
    fontSize: 16,
    backgroundColor: Colors.TEXTFIELD,
    height: 38,
    marginTop: 16,
    marginRight: 17,
    marginLeft: 17,
    borderRadius: 19,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

const mapDispatchToProps = dispatch => ({});

export {HomeScreen};
