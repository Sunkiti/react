import superheroes from '../data/superheroes.json'

export default function heroes() {
    return (
        <div className='container-heroes' key={index}>{
            superheroes.map((item, index) => (
                <div className='item'>
                    <h1 className='item-title'>{item.name}</h1>
                    <p>
                        <span>Universe: {item.universe}</span>
                        <span>Friends: {item.firends}</span>
                        <span>Alterego: {item.alterego}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}