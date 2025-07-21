import { useState } from "react";
import axios from "axios";

function BraSizeForm () {
  const [bustSize, setBustSize] = useState('90');
  const [underSize, setUnderSize] = useState('75');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const urlAPI = 'http://localhost:3001/api/sizes/calculate-bra'

  const getBraSize = async () => {
    const payload = { bustInput: bustSize, underInput: underSize }
    try {
      const sizes = await fetch (urlAPI, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if(!sizes.ok) { throw new Error(`Error ${sizes.status}: ${sizes.statusText}`)}

      const data = await sizes.json();
      setResult(data.size);
      
    } catch (error) {
      setError(error.message)
      console.error(error)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getBraSize();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Calculadora de Tallas</h3>
        <label htmlFor="bustSlider">Contorno pecho: {bustSize}</label>
        <input
          id="bustSlider"
          type="range"
          min={72}
          max={129}
          value={bustSize}
          onChange={(e) => setBustSize(e.target.value)}
        />
        <label htmlFor="underSlider">Contorno bajo pecho: {underSize}</label>
        <input
          id="underSlider"
          type="range"
          min={58}
          max={107}
          value={underSize}
          onChange={(e) => setUnderSize(e.target.value)}
        />
        <button type="submit">Calcular talla</button>
      </form>
      {error && (
        <div>Error: {error}</div>
      )}
      {result && (
        <div>{result}</div>
      )}
    </section>
  )
}

export default BraSizeForm
