function App() {
  const variableTitle = import.meta.env.VITE_APP_TITLE;

  return (
    <>
      <h1>{import.meta.env.VITE_APP_TITLE || 'Título por defecto'}</h1>
    </>
  )
}

export default App;
