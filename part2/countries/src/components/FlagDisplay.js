const FlagDisplay = ({ flag, name }) => {
    return (
        <div>
            <img src={flag} alt={`Flag of ${name}`} height='200px' width='300px' />
        </div>
    )
}

export default FlagDisplay