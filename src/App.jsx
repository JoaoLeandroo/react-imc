import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState('')

  function calculadorImc() {
    const imc = weight / (height * height)
    const formatterImc = imc.toFixed(2)

    if(weight === '' && height === '') {
      setResult('')
      toast.warn("Informe seu Peso e Altura")
      return
    }
    else {
      if(formatterImc < 18.5){
        setResult(`
        IMC: ${formatterImc} -
        Abaixo do Peso Normal!`)
      }
      else if(formatterImc >= 18.5 && formatterImc <= 24.9){
          setResult(`
          IMC: ${formatterImc} -
          Peso Normal!`)
      }
      else if(formatterImc >= 25.0 && formatterImc <= 34.9){
          setResult(`
          IMC: ${formatterImc} -
          Obesidade Grau (1)`)
      }
      else if(formatterImc >= 35.0 && formatterImc <= 39.9){
          setResult(`
          IMC: ${formatterImc} -
          Obesidade Grau (2)`)
      }
      else if(formatterImc > 40.0){
          setResult(`
          IMC: ${formatterImc} -
          Obesidade Grau (3)`)
      }
    }
    toast.success("IMC Gerado com Sucesso!")
    setHeight('')
    setWeight('')
    return
  }

  return(
    <section>
      <ToastContainer autoClose={3000}/>
      <h3>Informe o seu Peso(kg) e sua Altura(m)</h3>
      <input type="number" value={weight} placeholder="Informe Seu peso" onChange={(e) => setWeight(e.target.value)}/>
      <input type="number" value={height} placeholder="Informe sua altura" onChange={(e) => setHeight(e.target.value)}/>
      <button onClick={calculadorImc}>Calcular</button>

      {result === 'NaN' ? setResult('') : result}
    </section>
  )
}
