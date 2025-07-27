import { useState } from "react";
import axios from "axios";

import Spinner from "../visuals/Spinner";

function BraSizeForm () {
  const [bustSize, setBustSize] = useState('90');
  const [underSize, setUnderSize] = useState('75');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const urlAPI = 'https://bra-fitting-advisor-back.onrender.com/api/sizes/calculate-bra'

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

      await new Promise(resolve => setTimeout(resolve, 2500));
      
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
    <section className="range-wrapper">
      <h4>¿Estás lista? Introduce tus medidas en nuestra calculadora de tallas</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bustSlider">Contorno pecho: {bustSize}</label>
        <div className="slider-wrapper">
          <input
            id="bustSlider"
            type="range"
            min={72}
            max={129}
            value={bustSize}
            onChange={(e) => setBustSize(e.target.value)}
          />
        </div>
        <label htmlFor="underSlider">Contorno bajo pecho: {underSize}</label>
        <div className="slider-wrapper">
          <input
            id="underSlider"
            type="range"
            min={58}
            max={107}
            value={underSize}
            onChange={(e) => setUnderSize(e.target.value)}
          />

        </div>
        <button type="submit">Calcular talla</button>
      </form>
      {loading && <Spinner
        message="Veamos la talla que mejor sienta a tus medidas ..."
        />}
      {!loading && result && (
        <div style={{fontSize: "18px", fontWeight: "600", color: "#d441bc"}}>{result}</div>
      )}
      {!loading && error && (
        <div style={{ color: 'crimson' }}>Error: {error}</div>
      )}
    </section>
    
  )
}

export default BraSizeForm
