const CountrysDisplay = ({ result, onClick }) => {
    return (
        <div>{result} <button onClick={onClick}>show</button>
        </div>
    )
}

export default CountrysDisplay