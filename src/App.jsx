import './App.css'
import Titulo from '../src/componentes/Titulo'
import Sobre from './componentes/Sobre'
import Footer from './componentes/Footer'
import Imagem from './componentes/Imagii'

function App() {

  return (
    <div className='cards_container'>
      <div className='card'>
        <ins> <Titulo /></ins>
        <Sobre tiitulo='Olá, muito prazer, eu sou a Marta!' />
        <Imagem link="https://avatars.githubusercontent.com/u/109400186?v=4" alt="mulher negra sorrindo, ela tem cabelos medios castanho escuro um pouco claro nas pontas, ela eata maquiada." />
        <br /><br />
        <Sobre paragrafos='Me aprensentando um pouquinho, eu sou a Marta, tenho 25 anos. Atualmente, sou aluna de Front end na {Reprograma} e está sendo uma experiÊncia incrível na minha vida.O projeto tem mudado a minha vida de formas inimanigináveis. Antes de entrar aqui na {Reprograma}  , não sabia nem como ligar um computador direito. Agora,estou aqui desenvolvendo meu primeiro 
      projeto em React. '/>
      </div>
      <div className='card1'>
        <Sobre tiitulo='A diferença entre Git e Github' />
        <Sobre paragrafos='O GitHub serve, fundamentalmente, para facilitar o controle de versões de um (Software) ou aplicação.As diferenças entre ele e o GIT estão nas interações proporcionadas pelo GitHub: funcionando de modo semelhante a uma rede social, o GitHub é hoje um dos maiores pontos de encontro virtuais entre programadores de todo o mundo.
      Ele é, também, o maior repositório de softwares de código aberto de toda a internet, tendo, inclusive, como um de seus maiores colaboradores quando o assunto é open source a gigante Microsoft.  '/>
        <Imagem link="https://solanch96.files.wordpress.com/2017/06/github.gif" alt="git de git e github com o fundo branco" />
      </div>
      <div className='card2'>
        <Sobre tiitulo='HTML e CSS' />
        <Sobre paragrafos='HTML: linguagem de marcação utilizada para estruturar os elementos da página, como parágrafos, links, títulos, tabelas, imagens e até vídeos. CSS: linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página.' />
        <Imagem link="https://campuscode-site.s3-sa-east-1.amazonaws.com/newsletter/css1html+copy.gif" alt="gif com um fundo de ceu estrelado, com duas imagens uma de HTML que é vermelho com branco e outra de CSS que é azul e braco" />
      </div>
      <div className='card3'>
        <Sobre tiitulo=' JavaScript' />
        <Sobre paragrafos='JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet. As funções de JavaScript podem melhorar a experiência do usuário durante a navegação em um site, como, por exemplo, desde a atualização do feed na página da mídia social até a exibição de animações e mapas interativos. Como uma linguagem de script do lado do cliente, ele é uma das tecnologias principais da World Wide Web. Por exemplo, ao navegar na Internet, é possível visualizar a qualquer momento um carrossel de imagens, um menu suspenso “clicar para visualizar” ou mesmo mudar dinamicamente as cores dos elementos de uma página da Web. Tudo isso graças ao JavaScript.' />
        <Imagem link="https://c.tenor.com/MzJE99H8NLsAAAAC/js-javascript.gif" alt="git com fundo branco, com um desenho de sapo em pé dançando, e um lobo dançando parecido com o sapo, um js bem gande que troca de cor, um menino de pele clara cabelo curto loiro, fazeno joinha com o polegar, e um homem de pele preta dançando" />
      </div>
      <br /><br />
      <hr />
      <Footer />
    </div>
  )
}

export default App


