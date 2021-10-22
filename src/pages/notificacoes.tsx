import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const ctx = useAppData()
  return (
    <Layout titulo="Notificações" 
    subtitulo="Aqui você irá gerenciar as suas notificaçoes!">
      <h3>{ctx.tema}</h3>
      <button onClick={ctx.alternarTema}>Click</button>
    </Layout>
  )
}
