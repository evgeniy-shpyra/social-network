import { connect } from 'react-redux'
import CreatePostForm from './SendMessage'
import { reduxForm } from 'redux-form';


const CreatePostReduxForm = reduxForm({ form: 'createPost' })(CreatePostForm)

const CreatePostContainer = (props) => {
    const onSubmit = (data) => {
        console.log(data)
    }
    return <CreatePostReduxForm onSubmit={onSubmit} />
}

const mapStateToProps = (state) => {
}

export default connect(mapStateToProps, {})(CreatePostContainer)
