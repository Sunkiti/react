import superheroes from '../data/superheroes.json'

export default function heroes() {
    console.log(superheroes);
    return (
        <div className='container-heroes'>{
            superheroes.map((item, index) => (
                <div className='item' key={index}>
                    <h1 className='item-title'>{item.name}</h1>
                    <p>
                        <img src={item.url}></img>
                        <span>Universe: {item.universe}</span>
                        <span>Friends: {item.friends}</span>
                        <span>Alterego: {item.alterego}</span>
                        <span> {item.occupation}</span>
                        <span>Супер способности: {item.superpowers}</span>
                        <span> {item.info}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}