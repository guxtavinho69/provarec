import app from './App.css'

function App() {
    const elementos = [{
        img: <img src='big-king.webp' width={360}></img>,
        sanduba: "Combo king",
        descricao: "Um hamburger bla bla bla",
        serve: "Serve 1 pessoa",
        preco:"R$ 41,90"
    },
    {
        img: <img src='cheddar-duplo.webp'width={360}></img>,
        sanduba: "Combo chedar duplo",
        descricao: "Um hamburger bla bla bla",
        serve: "Serve 1 pessoa",
        preco:"R$ 41,90"
    },
    {
        img: <img src='cheeseburger-duplo.webp'width={360}></img>,
        sanduba: "Combo chessburger duplo com bacon",
        descricao: "Um hamburger bla bla bla",
        serve: "Serve 1 pessoa",
        preco:"R$ 36,90"
    },
    {
        img: <img src='mega-stacker.webp'width={360}></img>,
        sanduba: "Combo mega straquer 2.0",
        descricao: "Um hamburger com duas carnes",
        serve: "Serve 1 pessoa",
        preco:"R$ 51,90"
    }
]
const sanduiche = elementos.map(
    (sanduiche)=>
    {
        return (
        <div className='item'>
            <br></br>
            {sanduiche.img}
            <br></br>
            {sanduiche.sanduba}
            <br></br>
            {sanduiche.descricao}
            <br></br>
            {sanduiche.serve}
            <br></br>
            {sanduiche.preco}

        </div>
        )
    }
)
    return (       
        <div className='ifood'>        
            <ol className="itens">
                <img classname= 'logo' src='logo.svg'></img>
                <button className='Tbotao'>Entregador</button>
                <button>Restaurantes e Mercado</button>
                <button>Carreiras</button>
                <button>Ifood Card</button>
                <button className='botao'>Criar conta</button>
                <button className='botao2'>Conta</button>
        </ol>
        <div>
            <h1 className='destaque'>Destaques</h1>
            
        </div>
        <div className='componentes'>
            {sanduiche}



        </div>
        </div>
    )
   
}

export default App
