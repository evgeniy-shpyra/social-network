import { connect } from 'react-redux'
import CreatePostForm from './CreatePost'
import { reduxForm } from 'redux-form';
import { addNewPost } from './../../../../Redux/postReducer';




const CreatePostReduxForm = reduxForm({ form: 'createPost' })(CreatePostForm)

const CreatePostContainer = (props) => {
    const onSubmit = (data) => {
        props.addNewPost(data.postBody)
    }
    return <CreatePostReduxForm onSubmit={onSubmit} />
}

const mapStateToProps = (state) => {
}

export default connect(mapStateToProps, {addNewPost})(CreatePostContainer)
