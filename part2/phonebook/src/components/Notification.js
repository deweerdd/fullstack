const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    if (message.includes('Error:')) {
        return (
            <div className="Error">
                {message}
            </div>
        )
    }
    return (
        <div className="Notification">
            {message}
        </div>
    )
}

export default Notification