import {createStackNavigator, createAppContainer} from 'react-navigation';
import {HomeScreen, VenueScreen} from './screens'

export const Router = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Venue: {
        screen: VenueScreen,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);
