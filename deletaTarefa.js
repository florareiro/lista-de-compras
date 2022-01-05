const BotaoDelete = () => {
  const botaoDelete = document.createElement('buttom')

  botaoDelete.classList.add('check-buttom')
  botaoDelete.innerText = 'Deletar'
  botaoDelete.addEventListener('click', deletarTarefa)
  return botaoDelete
}
const deletarTarefa = evento => {
  const botaoDelete = evento.target
  const tarefaCompleta = botaoDelete.parentElement
  tarefaCompleta.remove()

  return botaoDelete
}

export default BotaoDelete
