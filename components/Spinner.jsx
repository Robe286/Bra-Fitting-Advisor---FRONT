export default function Spinner({ message = "Cargando..." }) {
  return (
    <div className="spinner-container">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  );
}