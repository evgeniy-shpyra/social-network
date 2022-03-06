import { connect } from 'react-redux';
import Posts from './Posts';
import Post from './Post/Post';

const mapStateToProps = (state) => {
    
    return {
        postsElements: state.postPage.posts.map(p => <Post author={p.author} key={p.id} body={p.body} />)
    }
}

const mapDispatchToProps = () => {
    return {}
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer