import '../styles/AppartementsList.css'

const appartList = [
    'appart 1',
    'appart 2',
    'appart 3',
    'appart 4',
    'appart 5',
    'appart 6'
]

function AppartementsList() {
    return (
        <ul className='appartement-box'>
            {appartList.map((appart, index) => (
                <li className='box-appart' key={`${appart}-${index}`}>{ appart }</li>
            ))}
        </ul>
    )
}

export default AppartementsList