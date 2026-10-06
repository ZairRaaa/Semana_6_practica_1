import Component2 from './Component2.jsx';

// Este objeto viaja por props a través de los cuatro niveles.
export default function Component1() {
  const explorador = { nombre: 'Jaime', direccion: 'Jr. Junin 450', ciudad: 'Huancayo' };
  return <div className="component-level level-one"><span className="level-label">01 · CENTRO DE CONTROL</span><Component2 explorador={explorador} /></div>;
}
