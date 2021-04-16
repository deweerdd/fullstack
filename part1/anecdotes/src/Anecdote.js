
const Anecdote = ({anecdotes, selected}) => {
    return (
        <div>
            {anecdotes[selected]}
        </div>
    )
}

export default Anecdote