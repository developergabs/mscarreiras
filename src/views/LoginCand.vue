<template>
    <div class="container">
        <div class="forms-container">
            <div class="signin-signup">
                <form action="#" class="sign-in-form">
                    <h2 class="title">Login</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Senha" />
                    </div>
                    <router-link to='/cadastro'>
                        <input type="submit" value="Login" class="btn solid" />
                    </router-link>
                    <p class="social-text">Ou entre com suas redes sociais</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
                <form action="#" class="sign-up-form">
                    <h2 class="title">Cadastre-se</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Nome Completo" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Senha" />
                    </div>
                    <!-- <router-link to="/cadastro"> -->
                    <input type="submit" class="btn" id="cadastro-btn" value="Cadastre-se" />
                    <!-- </router-link> -->
                    <p class="social-text">Ou cadastre-se usando suas redes sociais</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>

        <div class="janela-modal" id="janela-modal">
            <div class="modal">
                <button class="fechar" id="fechar">X</button>
                <h2>Termos e Condições de Uso - MS Consulting</h2>
                <div class="modal-content">
                    <div class="modal-scrollable-content">
                        <p><strong>Termos de uso da plataforma MS Consulting</strong></p>
                        <br>
                        <p><strong>Objetivo geral</strong><br>
                            Este documento descreve os termos e condições aos quais se submetem os USUÁRIOS que se
                            inscrevem na plataforma da MS Consulting por meio do site, estabelecendo as normas básicas
                            de utilização da plataforma. Ao efetuar o cadastro junto ao site da MS Consulting, o USUÁRIO
                            tem ciência integral da Política de Privacidade adotada pela empresa, que pode ser acessada
                            clicando "aqui". Caso não concorde com seus termos, deverá deixar de utilizar o site e de
                            realizar cadastro na plataforma. Este documento, bem como a Política de Privacidade, têm
                            natureza de contrato de adesão e passam por revisões periódicas para compatibilização com
                            novas legislações, jurisprudências e práticas de mercado, sem que seja necessária
                            notificação prévia. Por isso, é importante que o USUÁRIO consulte tais documentos para saber
                            se continua concordando com os termos antes de seguir com a navegação e cadastro.</p>
                        <br>
                        <p><strong>Serviços oferecidos</strong><br>
                            Fica esclarecido ao USUÁRIO, o qual se declara ciente, que o serviço oferecido pela MS
                            Consulting se relaciona apenas ao cadastro de currículo para divulgação de vagas, não
                            existindo qualquer responsabilidade pelo ato de contratação. O
                            USUÁRIO declara ciência que a finalidade da coleta e tratamento de dados pessoais pela MS
                            Consulting é para prestação destes serviços de recrutamento e seleção de candidatos,
                            especificamente para funções de vendas e marketing.</p>
                        <br>
                        <p><strong>Direitos e obrigações do usuário (Candidato)</strong><br>
                            O USUÁRIO declara ter lido, entendido e que aceita todas as regras, condições e obrigações
                            estabelecidas no presente TERMO, bem como na Política de Privacidade.</p>
                        <br>
                        <p>Ao se cadastrar, o USUÁRIO reconhece que:</p>
                        <br>
                        <ul>
                            <li><strong>Para efetuar o cadastro em nossa plataforma</strong>, deverá ter capacidade
                                jurídica para atos civis e deverá, necessariamente, prestar as informações exigidas no
                                CADASTRO, assumindo integralmente a responsabilidade (inclusive cível e criminal) pela
                                exatidão e veracidade das informações fornecidas no CADASTRO, que poderá ser verificado,
                                a qualquer momento, pela MS Consulting.</li>
                            <li><strong>Sua senha de acesso ao site</strong> é de uso pessoal e intransferível, não
                                podendo fornecê-la a terceiros em nenhuma hipótese e, deverá tomar todas as providências
                                cabíveis para garantir sua confidencialidade.</li>
                            <li>A recuperação de senhas perdidas ou esquecidas dar-se-á conforme as normas de segurança
                                divulgadas no site.</li>
                        </ul>
                        <br>
                        <p>O USUÁRIO poderá fazer o cadastro de forma gratuita, devendo informar os seguintes dados
                            pessoais (cujo propósito é o descrito acima, sendo que a finalidade da obtenção dos dados e
                            a base legal para o tratamento dos dados encontra-se descrita na Política de Privacidade):
                        </p>
                        <br>
                        <ul>
                            <li><strong>Dados pessoais e dados de identificação</strong>: Nome, sexo, gênero, estado
                                civil, data de nascimento, endereço, número de telefone, endereço de e-mail, Link do
                                Linkedin ou quaisquer outros detalhes de contato, data e país de nascimento, fotos,
                                nacionalidade.</li>
                            <li><strong>Detalhes sobre competências e experiência</strong>: nome da empresa e cargo
                                atual; nível de graduação; qualificações e certificações, incluindo cargos anteriores,
                                cursos educacionais e de treinamento, currículos e marcos profissionais, últimos livros
                                lidos; esportes; hobbies; profissão da esposa; profissão dos pais; tem carteira de
                                motorista; está empregado; anexo do currículo; idiomas; histórico profissional. Em
                                alguns casos: detalhes para contato de avaliação de capacidade e avaliações/feedback de
                                antigos gestores ou colegas de equipes e qualquer outra informação pessoal que o USUÁRIO
                                decida fornecer como parte de sua candidatura de emprego.</li>
                            <li><strong>Detalhes sobre pretensões</strong>: momento profissional; principal motivo para
                                estar olhando o mercado; remuneração fixa atual; vínculo profissional atual; pretensão
                                fixa mínima; pretensão mensal mínima; tem carro para trabalho; disponível para se mudar
                                para outra cidade; frequência disponível para viajar; histórico profissional; cidades
                                que avaliaria se mudar; tipo de movimentação profissional que avalia.</li>
                            <li><strong>Respostas a avaliações internas/externas</strong>: Dados e fatos relacionados
                                aos resultados que o USUÁRIO entregou nas empresas por onde passou, o que poderá ser
                                feito por telefone, videoconferências, entrevistas presenciais e gravações em vídeo.
                            </li>
                        </ul>
                        <br>
                        <p>O USUÁRIO aceita e autoriza expressamente que:</p>
                        <br>
                        <ul>
                            <li>Todos seus dados cadastrados no perfil sejam compartilhados com empresas clientes da MS
                                Consulting, objetivando sua participação e avaliação em vagas sendo conduzidas por esta
                                empresa.</li>
                            <li>Sua imagem e voz sejam gravadas pela MS Consulting e visualizadas posteriormente pelos
                                consultores e/ou, eventualmente, pelas empresas clientes da MS Consulting.</li>
                        </ul>
                        <br>
                        <p>O USUÁRIO declara ciência de que:</p>
                        <br>
                        <ul>
                            <li>Poderá, a qualquer tempo, efetuar a desativação do seu perfil, oportunidade em que os
                                dados não serão visíveis aos consultores da MS Consulting para eventual recrutamento e
                                seleção. Para aderir, clique no botão “Encerrar a minha conta” em seu perfil, deixando
                                seu perfil não visualizável em nosso banco de dados, mas passível de ser reativado no
                                futuro.</li>
                            <li>A partir do seu cadastro e aceitação do Termo de Uso, poderão ser enviadas mensagens via
                                e-mail, whatsapp, dentre outros canais de comunicação, informando sobre vagas e
                                processos seletivos abertos que estejam de acordo com o perfil cadastrado no site, tendo
                                ocorrido a candidatura ou não.</li>
                        </ul>
                        <br>
                        <p>Não existe um prazo para o tratamento dos dados e a MS Consulting não exclui os dados
                            armazenados, independente do período de tempo, salvo por solicitação do USUÁRIO.</p>
                        <br>
                        <p>A qualquer tempo, saiba que poderá excluir seu perfil e dados pessoais dos cadastros da MS
                            Consulting, de forma que todos seus dados serão excluídos da base de dados da empresa,
                            devendo para tanto enviar um e-mail para rh@msconsultingbrasil.com.br com o título “Exclusão
                            de dados pessoais”. Com esta solicitação, a MS Consulting fará a exclusão dos dados em até
                            72 (setenta e duas) horas.</p>
                        <br>
                        <p>Ao solicitar a exclusão dos Dados Pessoais, o USUÁRIO não poderá criar uma nova conta
                            utilizando o mesmo endereço de e-mail.</p>
                        <br>
                        <p>Caso o USUÁRIO solicite a exclusão de seus Dados Pessoais, situação em que imediatamente
                            perderá acesso aos serviços da MS Consulting, pode ocorrer que os dados precisem ser
                            mantidos por período superior ao pedido de exclusão, nos termos do art. 16 da Lei Geral de
                            Proteção de Dados Pessoais, especialmente para:</p>
                        <br>
                        <ul>
                            <li>Cumprimento de obrigação legal ou regulatória;</li>
                            <li>Estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados
                                pessoais;</li>
                            <li>Uso exclusivo do controlador, vedado seu acesso por terceiro, mediante anonimização dos
                                dados pessoais, desde que possível. Findos o prazo de manutenção e a necessidade legal,
                                os dados pessoais serão excluídos com uso de métodos de descarte seguro, ou utilizados
                                de forma anonimizada para fins estatísticos.</li>
                        </ul>
                        <br>
                        <p>A MS Consulting também se reserva no direito de pesquisar e coletar informações sobre sua
                            pessoa através de banco de dados externos e terceiros, notadamente, pelo LINKEDIN.</p>
                        <br>
                        <p><strong>Direitos e obrigações da MS Consulting</strong><br>
                            A MS Consulting possui obrigação de manter a fidelidade dos dados cadastrados no sistema
                            pelo USUÁRIO e zelar pela privacidade dos mesmos. Os dados pessoais não serão, em hipótese
                            alguma, comercializados ou fornecidos a quaisquer terceiros, exceto às empresas
                            empregadoras, que são clientes da MS Consulting. Obriga-se a MS Consulting a proteger, por
                            meio de armazenamento em servidores ou quaisquer outros meios magnéticos de alta segurança,
                            a confidencialidade de todas as informações e cadastros relativos aos USUÁRIOS.</p>
                        <br>
                        <p>Poderá a MS Consulting compartilhar os dados e o perfil do candidato com terceiros, desde
                            que:</p>
                        <br>
                        <ul>
                            <li>Sejam empresas clientes, quando necessário para o processo de recrutamento e seleção
                                oferecido pela MS Consulting.</li>
                            <li>Quando solicitado por autoridades, agências regulatórias ou de exercício da lei, para
                                cumprir qualquer lei aplicável ou ordem judicial ou em relação a qualquer procedimento
                                legal.</li>
                        </ul>
                        <br>
                        <p>Caso a MS Consulting tome ciência por si mesma, ou por qualquer terceiro, de que qualquer
                            informação veiculada pelo USUÁRIO através do site está em desacordo com o sistema jurídico
                            vigente, inclusive por conflito com direitos de terceiros, será enviada comunicação para
                            manifestação do USUÁRIO sobre tais fatos no prazo máximo de 24 (vinte e quatro) horas.</p>
                        <br>
                        <p>Se após a devida manifestação ficar constatada a ilicitude ou irregularidade do conteúdo
                            publicado pelo USUÁRIO, a MS Consulting poderá excluir a informação, ou até mesmo desativar
                            seu cadastro e currículo do site unilateralmente, independentemente de autorização, podendo
                            fornecer todas as informações às autoridades legais, nos termos da lei.</p>
                        <br>
                        <p>Ainda, no silêncio do USUÁRIO no prazo designado acima, a MS Consulting poderá suspender o
                            conteúdo publicado unilateralmente, independentemente de autorização, até a devida
                            regularização ou manifestação no sentido de demonstrar a adequação do conteúdo ao sistema
                            jurídico vigente.</p>
                        <br>
                        <p>Caso a MS Consulting constate uma incontroversa ilicitude de conteúdo que possa causar danos
                            de qualquer espécie a terceiros ou envolva legislação de natureza penal, ela poderá
                            suspender o cadastro do USUÁRIO, unilateralmente, previamente a comunicação para
                            manifestação a respeito, nos termos do acima.</p>
                        <br>
                        <p>A suspensão ou exclusão de conteúdo também será unilateral e independente de qualquer
                            comunicação ao USUÁRIO quando determinado por órgão do poder público competente.</p>
                        <br>
                        <p>A suspensão de conteúdo ajustada acima não dará direito a nenhuma espécie de indenização, nem
                            a reparação de danos ou prejuízos pela MS Consulting ao USUÁRIO.</p>
                        <br>
                        <p>Por fim, a MS Consulting se reserva o direito de, caso constatado descumprimento pelo USUÁRIO
                            de qualquer obrigação decorrente dos presentes Termos de Uso ou da Política de Privacidade,
                            desativar o acesso ao site, ou mesmo excluir cadastro e currículo, sem prejuízo da
                            possibilidade de remessa de seus dados cadastrais e de acesso às autoridades legais
                            competentes, sem que isso represente lesão aos direitos de privacidade.</p>
                        <br>
                        <p><strong>Vigência e modificação</strong><br>
                            Este Termo de Uso vigorará por tempo indeterminado e, poderá, a qualquer tempo, ter seu
                            conteúdo, integral ou parcialmente, modificado para adequações e inserções, tudo com vistas
                            ao aprimoramento dos serviços disponibilizados, sendo que, em tal caso, o USUÁRIO será
                            devidamente notificado via e-mail.</p>
                        <br>
                        <p><strong>Comunicação</strong><br>
                            Qualquer dúvida, sugestão, reclamação, etc. sobre estes termos de uso poderá ser esclarecida
                            por meio de contato com o Encarregado de Dados da MS Consulting, pelo e-mail: <a
                                href="mailto:rh@msconsultingbrasil.com.br">rh@msconsultingbrasil.com.br</a>.</p>

                        <p><input type="checkbox" id="termos" name="termos">
                            <label for="termos"> Aceito os termos e condições de uso MS Consulting</label>
                        </p>

                        <p><input type="checkbox" id="lgpd" name="lgpd">
                            <label for="lgpd"> Aceito que meus dados serão utilizados pela MS Consulting com a proteção
                                da LGPD</label>
                        </p>

                        <button id="prosseguir" class="move-forward" @click="verificarCheckbox()">Prosseguir</button>

                    </div>
                </div>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>Novo aqui ?</h3>
                    <p>
                        Cadastre-se em nosso banco de dados e saiba das oportunidades MS pelo Brasil.
                    </p>
                    <button class="btn transparent" id="sign-up-btn" @click="addTransition()">
                        Cadastre-se
                    </button>
                </div>
                <img src="img/log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>Já possui login ?</h3>
                    <p>
                        Faça seu login e acesse as oportunidades MS pelo Brasil.
                    </p>
                    <button class="btn transparent" id="sign-in-btn" @click="removeTransition()">
                        Login
                    </button>
                </div>
                <img src="img/register.svg" class="image" alt="" />
            </div>
        </div>
    </div>

</template>

<script>
export default {
    mounted() {
        const cadastroBtn = document.getElementById('cadastro-btn')
        cadastroBtn.addEventListener('click', this.openModal)
    },
    methods: {
        addTransition() {
            document.getElementsByClassName('container')[0].classList.add('sign-up-mode')
        },
        removeTransition() {
            document.getElementsByClassName('container')[0].classList.remove('sign-up-mode')
        },
        openModal(event) {
            event.preventDefault();

            const modal = document.getElementById('janela-modal');
            modal.classList.add('abrir');

            modal.addEventListener('click', (e) => {
                if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
                    modal.classList.remove('abrir');
                }
            });
        },
        verificarCheckbox() {
            var termosCheckbox = document.getElementById("termos");
            var lgpdCheckbox = document.getElementById("lgpd");
            var prosseguirButton = document.getElementById("prosseguir");

            if (termosCheckbox.checked && lgpdCheckbox.checked) {
                prosseguirButton.disabled = false;
                this.$router.push("/cadastro")
            } else {
                alert("Por favor, marque ambas as caixas de seleção para prosseguir.");
                termosCheckbox.disabled = false;
                lgpdCheckbox.disabled = false;
            }
        },

    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
}

.forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.signin-signup {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 5rem;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

form.sign-up-form {
    opacity: 0;
    z-index: 1;
}

form.sign-in-form {
    z-index: 2;
}

.title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
}

.input-field {
    max-width: 380px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    position: relative;
}

.input-field i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
}

.input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
}

.input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
}

.social-text {
    padding: 0.7rem 0;
    font-size: 1rem;
}

.social-media {
    display: flex;
    justify-content: center;
}

.social-icon {
    height: 46px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.45rem;
    color: #333;
    border-radius: 50%;
    border: 1px solid #333;
    text-decoration: none;
    font-size: 1.1rem;
    transition: 0.3s;
}

.social-icon:hover {
    color: #4481eb;
    border-color: #4481eb;
}

.btn {
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
}

.btn:hover {
    background-color: #4d84e2;
}

.panels-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.container:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
}

.image {
    width: 100%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
}

.panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
}

.left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
}

.right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
}

.panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
}

.panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
}

.panel p {
    font-size: 0.95rem;
    padding: 0.7rem 0;
}

.btn.transparent {
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
    transform: translateX(800px);
}

.container.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
    left: 25%;
}

.container.sign-up-mode form.sign-up-form {
    opacity: 1;
    z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
    transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
    pointer-events: none;
}

.container.sign-up-mode .right-panel {
    pointer-events: all;
}

@media (max-width: 870px) {
    .container {
        min-height: 800px;
        height: 100vh;
    }

    .signin-signup {
        width: 100%;
        top: 95%;
        transform: translate(-50%, -100%);
        transition: 1s 0.8s ease-in-out;
    }

    .signin-signup,
    .container.sign-up-mode .signin-signup {
        left: 50%;
    }

    .panels-container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 1fr;
    }

    .panel {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 8%;
        grid-column: 1 / 2;
    }

    .right-panel {
        grid-row: 3 / 4;
    }

    .left-panel {
        grid-row: 1 / 2;
    }

    .image {
        width: 200px;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.6s;
    }

    .panel .content {
        padding-right: 15%;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.8s;
    }

    .panel h3 {
        font-size: 1.2rem;
    }

    .panel p {
        font-size: 0.7rem;
        padding: 0.5rem 0;
    }

    .btn.transparent {
        width: 110px;
        height: 35px;
        font-size: 0.7rem;
    }

    .container:before {
        width: 1500px;
        height: 1500px;
        transform: translateX(-50%);
        left: 30%;
        bottom: 68%;
        right: initial;
        top: initial;
        transition: 2s ease-in-out;
    }

    .container.sign-up-mode:before {
        transform: translate(-50%, 100%);
        bottom: 32%;
        right: initial;
    }

    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
        transform: translateY(-300px);
    }

    .container.sign-up-mode .right-panel .image,
    .container.sign-up-mode .right-panel .content {
        transform: translateY(0px);
    }

    .right-panel .image,
    .right-panel .content {
        transform: translateY(300px);
    }

    .container.sign-up-mode .signin-signup {
        top: 5%;
        transform: translate(-50%, 0);
    }
}

@media (max-width: 570px) {
    form {
        padding: 0 1.5rem;
    }

    .image {
        display: none;
    }

    .panel .content {
        padding: 0.5rem 1rem;
    }

    .container {
        padding: 1.5rem;
    }

    .container:before {
        bottom: 72%;
        left: 50%;
    }

    .container.sign-up-mode:before {
        bottom: 28%;
        left: 50%;
    }
}

/* .btn-modal {
    padding: 25px 60px;
    display: inline;
    background-color: tomato;
    border-radius: 20px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.5s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.btn-modal:hover {
    background-color: #ff4c2c;
} */

.janela-modal {
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    background-color: #00000080;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal {
    width: 60%;
    min-width: 450px;
    min-height: 200px;
    background-color: #ffffff96;
    backdrop-filter: blur(10px);
    padding: 50px;
    border-radius: 20px;
}

.fechar {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    background-color: red;
    font-size: 20px;
    cursor: pointer;
}

.janela-modal.abrir {
    display: flex;
}

@keyframes abrirModal {
    from {
        opacity: 0;
        transform: translate3d(-20px, 0, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

.abrir .modal {
    animation: abrirmodal 0.5s;
}

.modal-content {
    max-height: 400px;
    overflow-y: auto;
}

.modal-content::-webkit-scrollbar {
    width: 8px;
}

.modal-content::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
}

.modal-content::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
}

.move-forward {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    margin: 10px;
    cursor: pointer;
    border-radius: 8px;
    float: right;
}
</style>
