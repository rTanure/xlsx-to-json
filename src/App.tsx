import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'

import { toJson } from './functions'

function App() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0]
    if (selectedFile) {
      console.log("Salvou o estado")
      setFile(selectedFile)
    }
  }

  useEffect(()=>{toJson(file)},[file])

  return (
    <>
      <input 
        type="file" 
        accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
        onChange={handleFileChange}
      />
      {file ?(
        <h2>Arquivo: {file.name}</h2>
        
        ) : (
        <h2>Nenhum arquivo</h2>
      )}
    </>
  )
}

export default App
