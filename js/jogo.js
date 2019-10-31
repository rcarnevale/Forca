const criaJogo = (sprite) => {

    let palavraSecreta = "";
    let lacunas = [];
    let etapa = 1;

    const processaChute = (chute) => {

        if(!chute.trim()) throw Error ("Chute inválido!");
        const exp = new RegExp(chute, 'gi');
        let resultado;
        let acerto = false;

        while(resultado = exp.exec(palavraSecreta)){

            lacunas[resultado.index] = chute;
            acerto = true;
        }

        if(!acerto){
            sprite.nextFrame()
        }

    }

    const criaLacuna = () => {
        
        lacunas = Array(palavraSecreta.length).fill("");
    }
    

    const setPalavra = (palavra) => {
    
        if(!palavra.trim()) throw Error ("Palavra inválida!");
        palavraSecreta = palavra;
        criaLacuna();
        etapa = 2;
    }

    const getLacunas = () =>  lacunas;
    

    const getEtapa = () => etapa;
    
    const ganhou =  () => {
        
        return lacunas.length 
        ? !lacunas.some((lacuna) => {
            return lacuna == '';
        })
        : false;
    

    };

    const perdeu = () => sprite.isFinished()


    const ganhouOuPerdeu = () => {

        if(ganhou() || perdeu()){
            return true;
        }
    };

    const reinicia = () => {
    
        etapa = 1;
        lacunas = [];
        palavraSecreta ="";
    };

    return {
        setPalavra,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    }
    
}