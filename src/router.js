import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Utils from "./utils";
import { Home, Login, MovieDetails } from 'movie-reviews/src/screens';

const HomeStack = {
    Home: {screen: Home},
    MovieDetails: {screen: MovieDetails}
};

const HomeNav = createStackNavigator(HomeStack, {
    headerMode: 'none',
    navigationOptions: { headerVisible: false }
});

const LoginNav = createStackNavigator({ Login }, {
    headerMode: 'none',
    navigationOptions: { headerVisible: false }
});

export const Navigator = () => {

    return new Promise(function(resolve, reject){

        Utils.retrieveData("loggedIn").then(loggedIn => {

                resolve(createAppContainer(createSwitchNavigator(
                    {
                    Main: HomeNav,
                    Login: LoginNav
                    },
                    {
                    initialRouteName: loggedIn === 'true' ? 'Main' : 'Login'
                    }
                )));
        
            });

        });
             
};