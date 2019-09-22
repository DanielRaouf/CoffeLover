import {createStackNavigator, createAppContainer} from 'react-navigation';
import {HomeScreen, VenueScreen} from './screens'
import { MapScreen } from './screens/MapScreen';

export const Router = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Venue: {
        screen: VenueScreen,
      },
      Map: {
        screen: MapScreen,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);
