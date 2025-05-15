 // Estado da lâmpada (falsa igual  = desligada)
        let lampadaLigada = false;


       //*Coloca  que as variaveis estão recebendo as imagens
        const imagemLigada = 'ChatGPT Image 15 de mai. de 2025, 13_12_58.png';
        const imagemDesligada = 'ChatGPT Image 15 de mai. de 2025, 13_12_57.png';


        function alternar() {
            const imagem = document.getElementById('Apagada');
            //* Alterna o estado da lampada liga e desliga
            lampadaLigada = !lampadaLigada;


            if (lampadaLigada) {
                imagem.src = imagemLigada;
                //*Se a lampada estiver ligada  o botão fica com a mensagem desligar
                botao.textContent = 'Desligar';
                //*Fundo fica com quarto quando ligada
                document.body.style.backgroundImage = "url('https://img.freepik.com/vetores-premium/desenho-de-um-quarto-com-uma-cama-e-uma-mesa-com-um-relogio_895122-1.jpg')";
                //*A cor da letra do botão fica rosa
                botao.style.color = 'pink';
                //*A cor de fundo do botão fica preto quando estiver ligada
                botao.style.backgroundColor = 'black';
            } else {
                imagem.src = imagemDesligada;
                 //*Se a lampada estiver Desligada ao botão fica com a mensagem  ligar
                botao.textContent = 'Ligar';
               
                document.body.style.backgroundImage = '';
                //* Fica preto o fundo quando estiver desligado
                document.body.style.backgroundColor = 'black';
                //*A cor de fundo do botão fica amarelo quando estiver desligada
                botao.style.backgroundColor = 'yellow';
                //*A cor da letra do botão fica azul quando estiver desligada
                botao.style.color = 'blue';
            }
        }


