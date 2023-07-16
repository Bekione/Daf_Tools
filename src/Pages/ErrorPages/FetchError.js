import './style.css'

const FetchError = ({errorMsg}) => {
    return (
        <div className='page_body'>
            <div className='daf_error_message_wrapper'>
                <h2 className='error_message_title'>Error Occured {`:(`}</h2>
                <div className='error_message_description'>
                    <p className='error_message_code'>{errorMsg}</p>
                    <p>Failed to load resources</p>
                    <p>Please check your internet connection</p>
                </div>
            </div>
        </div>
    )
}

export default FetchError