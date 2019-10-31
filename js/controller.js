const criaController = jogo => {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    const exibeLacunas = () => {
        $lacunas.empty();
        jogo.getLacunas().forEach((lacuna) => {
            $("<li>").addClass("lacuna").text(lacuna).appendTo($lacunas);
        })
    };

    const mudaPlaceHolder = (texto) => {

        $entrada.attr("placeholder", texto);
    };

    const guardaPalavraSecreta = () => {

        try{
            jogo.setPalavra($entrada.val().trim());
            $entrada.val("");
        }catch (err){
            alert(err.message);
        }
    };

    const leChute = () => {
        
        try{
            jogo.processaChute($entrada.val().trim().substr(0,1));
            $entrada.val("");
            exibeLacunas();

            setTimeout(() => {

                if(jogo.ganhouOuPerdeu()){
                    if(jogo.ganhou()){
                        alert("Parabéns! Você ganhou!");
                    }else{
                        alert("Você perdeu. Tente outra vez!");
                    }
                    reiniciaController();
                }
                }, 200);
        }catch (err){
            alert(err.message);
        }    
    };

    const reiniciaController = () => {
            jogo.reinicia();
            $lacunas.empty();
            mudaPlaceHolder("Palavra Secreta");
        
    };

    const inicia = () =>{

        $entrada.keypress( (event) => {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        mudaPlaceHolder("Chute aqui!");
                        exibeLacunas();
                        break
                    case 2:
                        leChute()
                        break
                }
            }
        });
    }
    return {inicia};
};
