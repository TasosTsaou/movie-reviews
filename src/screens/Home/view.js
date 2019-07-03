import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Button, ListItem } from 'react-native-elements';
import movieIcon from 'movie-reviews/assets/movie-icon.png';
import Constants from 'movie-reviews/src/constants';
import styles from './styles';

const HomeView = props => {

    const { movies, showMovieDetails, logout, loadMore, loading } = props;

    return (

        <ScrollView contentContainerStyle={styles.container} >

        <Button
            buttonStyle={styles.button}
            title="Log Out"
            type="outline"
            onPress={logout}
        />

        {
            movies.map((movie, index) => (
            <ListItem
                key={index}
                leftAvatar={{ source: movieIcon }}
                title={movie.title}
                onPress={()=>showMovieDetails(index)}
                rightIcon={<Icon  name='chevron-right' />} />
            ))
        }

        { loading &&

        <View style={styles.activityIndicator}>

            <ActivityIndicator size="large" color={Constants.pastelRed} />

        </View>

        }

        { !loading && movies.length > 0 &&

            <View style={styles.bottomContainer}>

                <Button
                    buttonStyle={styles.button}
                    title={Constants.loadMore}
                    type="clear"
                    onPress={loadMore}
                />

            </View>
        
        }

        </ScrollView>

    );

};

HomeView.propTypes = {

    movies: PropTypes.array,
    showMovieDetails: PropTypes.func,
    logout: PropTypes.func,
    loadMore: PropTypes.func,
    loading: PropTypes.bool

};

HomeView.defaultProps = {

    movies: [],
    showMovieDetails: ()=>{},
    logout: ()=>{},
    loadMore: ()=>{},
    loading: false

};

export default HomeView;