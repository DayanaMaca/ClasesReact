import './App.css'
import Card from './components/Card'

function App() {

  let nombres = [ "Flor Maza", "Giselle Roldan", "Grisel Ortiz", "Luciana Pegoraro", "Clerianna Mora", "Alejandra Barrios", "Dayana R Maca"]

  return (
    
    <>
    
    <h1> Mesa 2 </h1>
    <Card elemento = {nombres[0]}/>
    <Card elemento = {nombres[1]}/>
    <Card elemento = {nombres[2]}/>
    <Card elemento = {nombres[3]}/>
    <Card elemento = {nombres[4]}/>
    <Card elemento = {nombres[5]}/>
    <Card elemento = {nombres[6]}/>

    </>
  )
}
export default App

