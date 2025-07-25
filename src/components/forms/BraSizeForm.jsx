import { useState } from "react";
import axios from "axios";

import Spinner from "../Spinner";

function BraSizeForm () {
  const [bustSize, setBustSize] = useState('90');
  const [underSize, setUnderSize] = useState('75');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const urlAPI = 'http://localhost:3001/api/sizes/calculate-bra'

  const getBraSize = async () => {
    const payload = { bustInput: bustSize, underInput: underSize }
    setLoading(true);
    setError(null)
    setResult(null);

    try {
      const sizes = await fetch (urlAPI, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if(!sizes.ok) { throw new Error(`Error ${sizes.status}: ${sizes.statusText}`)}
      const data = await sizes.json();
      setResult(data.size);
      
    } catch {
      setError(error.message)
    } finally {
      setLoading(false);
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
      {loading && <Spinner
        message="Veamos la talla que mejor sienta a tus medidas ..."
        />}
      {!loading && result && (
        <div>{result}</div>
      )}
      {!loading && error && (
        <div style={{ color: 'crimson' }}>Error: {error}</div>
      )}
    </section>
    
  )
}

export default BraSizeForm
