import './App.css'
import { useCatImg } from "./hooks/useCatImg"
import { useCatFact } from "./hooks/useCatFact"
import CatCanvas from './components/CatCanvas'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImg({ fact })

    const handleFact = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1 className='neon'>App de Gatos</h1>
            <section className='fact'>
                <h2>Cat Facts</h2>
                <button className='btn-fact' onClick={handleFact} >Facts</button>
                {fact && <p>{fact}</p>}
                <CatCanvas fact={fact} imageUrl={imageUrl} />
            </section>
        </main>
    )
}