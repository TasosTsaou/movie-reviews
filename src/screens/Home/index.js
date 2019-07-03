import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from 'movie-reviews/src/redux/actions/posts';
import { updateUserInfo, updateAuthMode } from 'movie-reviews/src/redux/actions/authentication';
import Utils from "movie-reviews/src/utils";
import HomeView from './view';

class Home extends Component {

    state = {
        page: 1
    }

    componentDidMount() {

        const { getPosts, updateAuthMode } = this.props;

        updateAuthMode('login');
        getPosts(1);

    }

    showMovieDetails = id => {

        const { navigation } = this.props;

        navigation.navigate('MovieDetails', { id });

    }

    logout = () => {

        const { navigation } = this.props;

        updateUserInfo({data: null});
        Utils.storeData('loggedIn', 'false');
        navigation.navigate('Login');

    }

    loadMore = () => {
        
        const { page } = this.state;
        const { posts } = this.props;

        if(!posts.loading) {

            this.setState({page: page + 1});
            this.props.getPosts(page + 1);

        }

    }

    render() {

        const { posts } = this.props;

        return <HomeView movies={posts.data} showMovieDetails={this.showMovieDetails}
            logout={this.logout} loadMore={this.loadMore} loading={posts.loading} />;
    }

}

const mapStateToProps = ({posts}) => ({
    posts
});
  
const mapDispatchToProps = (dispatch) => ({
    getPosts: page => dispatch(getPosts(page)),
    updateAuthMode: authMode => dispatch(updateAuthMode(authMode)),
    updateUserInfo: data => dispatch(updateUserInfo(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
