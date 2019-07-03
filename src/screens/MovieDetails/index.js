import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostService, addCommentService, getCommentsService } from 'movie-reviews/src/services/postService';
import MovieDetailsView from './view';

class MovieDetails extends Component {

    state = {
        movie: {},
        comment: '',
        comments: [],
        movieDetails: false,
        loading: true
    }

    componentDidMount() {

        this.getMovieDetails();
        this.getComments();

    }

    getMovieDetails = () => {

        const id = this.props.navigation.getParam('id');

        getPostService(id).then(movie =>{

            this.setState({movie});

        });

    }

    showMovieDetails = value => this.setState({movieDetails: value});

    updateComments = data => {

        const comments = data ? data.reverse() : [];

        this.setState({comments, loading: false});
    }

    getComments = () => {

        const { navigation } = this.props;
        const id = navigation.getParam('id');

        getCommentsService(id, this.updateComments);

    }

    sendComment = () => {

        const { comment } = this.state;
        const { authentication, navigation } = this.props;
        const id = navigation.getParam('id');

        /* This timeout must exist because a lot of work in a short time period blocks the main
        UI thread */
        setTimeout(() => {

            this.setState({comment: ''});
            addCommentService(authentication.data.user.email, id, comment);

        }, 100);

    }

    onChangeText = value => this.setState({comment: value});

    render() {

        const { movie, comment, comments, movieDetails, loading } = this.state;

        return <MovieDetailsView movie={movie} comment={comment} onChangeText={this.onChangeText}
            sendComment={this.sendComment} comments={comments} showMovieDetails={this.showMovieDetails }
            movieDetails={movieDetails} loading={loading} />;

    }

}

const mapStateToProps = ({ authentication }) => ({
    authentication
});
  
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);