import React from 'react';
import { View, ScrollView, TextInput, KeyboardAvoidingView, Text, TouchableOpacity,
    ImageBackground, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Overlay, ListItem } from 'react-native-elements';
import cover from 'movie-reviews/assets/cover.jpg';
import userIcon from 'movie-reviews/assets/user.png';
import Constants from 'movie-reviews/src/constants';
import styles from './styles';

const renderGenres = genres => (
    genres.map((genre, index)=><Text key={index}>{genre}{index !== genres.length-1 ? ', ' : ''}</Text>)
);

const renderComments = (comments, loading) => {

    if(!loading && (!comments || !comments.length)) {

        return <Text style={styles.noComment}>There isn't any comment yet!</Text>
        
    }

    return (

        <View>
        {
            comments.map((l, i) => (
            <ListItem
                key={i}
                title={l.username}
                leftAvatar={{ source: userIcon }}
                subtitle={l.comment}
                subtitleProps={{numberOfLines: 1}}
            />
            ))
        }
        </View>

    );

}

const MovieDetailsView = props => {

    const { movie, comments, sendComment, comment, onChangeText, showMovieDetails, movieDetails,
        loading } = props;

    return (

        <View style={styles.mainContainer}>

            <ScrollView contentContainerStyle={styles.container} >

                <TouchableOpacity activeOpacity={0.9} onPress={()=>showMovieDetails(true)}  >
                    <ImageBackground style={styles.coverImg} source={cover} resizeMode='cover' >
                        <Text style={styles.coverTxt}>{movie.title}</Text>
                    </ImageBackground>
                </TouchableOpacity>

                { loading &&

                <View style={styles.activityIndicator}>

                    <ActivityIndicator size="large" color={Constants.pastelRed} />

                </View>

                }

                { renderComments(comments, loading) }

            </ScrollView>

            <KeyboardAvoidingView
            style={styles.inputContainer}
            contentContainerStyle={styles.wrapper}
            behavior="position"
                >

                <TextInput
                    placeholder="Write your message..."
                    style={styles.input}
                    onChangeText={text=>onChangeText(text)}
                    onSubmitEditing={e=>sendMessage(e.nativeEvent.text)}
                    value={comment}
                    placeholderTextColor={Constants.lightGray}
                    selectionColor={'black'}
                    onSubmitEditing={sendComment}

                />

            </KeyboardAvoidingView>

            { movieDetails &&

            <Overlay isVisible onBackdropPress={()=>showMovieDetails(false)} height="auto"
                overlayStyle={styles.overlayContainer} height="auto" >

                <View>

                    <Text style={styles.movieInfo} >Title: {movie.title}</Text>
                    <Text style={styles.movieInfo} >Director: {movie.director}</Text>
                    <Text style={styles.movieInfo} >Year: {movie.year}</Text>
                    <Text style={styles.movieInfo} >Genre: {renderGenres(movie.genre)}</Text>
                    <Text style={styles.movieInfo} >Description: {movie.description}</Text>
                    
                </View>

            </Overlay>

            }
            
        </View>

    );

};

MovieDetailsView.propTypes = {

    movie: PropTypes.object,
    comments: PropTypes.array,
    sendComment: PropTypes.func,
    comment: PropTypes.string,
    onChangeText: PropTypes.func,
    showMovieDetails: PropTypes.func,
    movieDetails: PropTypes.bool,
    loading: PropTypes.bool

};

MovieDetailsView.defaultProps = {

    movie: {},
    comments: [],
    sendComment: ()=>{},
    comment: '',
    onChangeText: ()=>{},
    showMovieDetails: ()=>{},
    movieDetails: false,
    loading: false

};

export default MovieDetailsView;