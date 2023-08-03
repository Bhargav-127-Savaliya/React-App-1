import './counter.css'

function Counter(props) {
    return (
        <div className='count'>
            <h3>Number of Users : </h3>
            <h1>{props.num.length}</h1>
        </div>
    )
}

export default Counter;