export const ButtonBlue = (props) => {
    return(
        <>
            <button className='btn btn-detail shadow' to="">{props.name ? props.name : 'Button Blue'}</button>
        </>
    )
}