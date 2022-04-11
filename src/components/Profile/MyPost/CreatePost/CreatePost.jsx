import { Field } from "redux-form"
import { required } from "../../../../utilities/validate"
import { maxLengthCreator } from '../../../../utilities/validate';
import { Element } from './../../../common/Form/FormsControl';

const maxLength20 = maxLengthCreator(20)

const Textarea = Element('textarea')

const CreatePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field 
            name={'postBody'} 
            component={Textarea} 
            placeholder={'Create new post'} 
            validate={[required, maxLength20]}/>
            <button>Post</button>
        </form>
    )
}


export default CreatePostForm