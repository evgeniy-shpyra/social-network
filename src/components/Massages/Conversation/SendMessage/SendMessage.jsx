import { Field } from "redux-form"




const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'post'} component={'input'} type={'text'} placeholder={'Write message'} />
            <button>Send</button>
        </form>
    )
}


export default SendMessageForm