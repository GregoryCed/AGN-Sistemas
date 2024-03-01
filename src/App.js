import CampoTexto from "./Components/CampoTexto";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CampoTexto type={'text'} nome={'Identificação do Produto:'}/>
      <CampoTexto type={'text'} nome={'Identificação do Fornecedor:'}/>
      <CampoTexto type={'text'} nome={'Número da Nota Fiscal:'}/>
      <CampoTexto type={'text'} nome={'Quantidade:'}/>
      <CampoTexto type={'text'} nome={'Número de Lote:'}/>
      <CampoTexto type={'text'} nome={'Número de Série:'}/>
      <CampoTexto placeholder={'N° Registro:'} type={'text'} nome={'Possui Registro na Anvisa?'}/>
      <CampoTexto type={'text'} nome={'Validade:'}/>
      <CampoTexto placeholder={'Número da RNC:'} type={'text'} nome={'Produto Não-Conforme:'}/>
      <CampoTexto type={'text'} nome={'Responsável pela Inspeção:'}/>
      <CampoTexto type={'text'} nome={'Data:'}/>
    </div>
  );
}

export default App;
