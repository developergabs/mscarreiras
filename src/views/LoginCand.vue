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
                        <p><strong>MS Consulting</strong> (“Controladora” e, quando em conjunto com o “Titular”,
                            “Partes”, sendo cada qual uma “Parte”).</p>
                        <p><strong>USUÁRIO</strong> (“Titular” e, quando em conjunto com a “Controladora”, “Partes”,
                            sendo cada qual uma “Parte”).</p><br>
                        <p><strong>Considerando que:</strong></p>
                        <p>Em conformidade com a Lei nº13.709/18 - Lei Geral de Proteção de Dados Pessoais (LGPD), o
                            presente Termo visa registrar o consentimento LIVRE, INFORMADO E INEQUÍVOCO do(a)
                            CANDIDATO(A) interessado(a) em participar de Processo Seletivo da <strong>MS
                                Consulting</strong>, ao fornecer seus dados pessoais por meio do preenchimento de Ficha
                            Cadastral ou mediante apresentação de currículo, dessa forma, as partes acordam com as
                            disposições a seguir expostas:</p><br>

                        <p><strong>Cláusula Primeira - Dados Pessoais e Finalidade</strong>
                            O USUÁRIO, ao enviar seus dados pessoais e/ou vídeo, para participação em processo seletivo
                            da Controladora, autoriza a utilização dos mesmos, especialmente para o recebimento do
                            currículo e/ou vídeo-currículo, sua avaliação, seleção e recrutamento em processo de
                            admissão para compor o quadro de empregados da Controladora.</p><br>

                        <p><strong>Parágrafo Primeiro:</strong> O USUÁRIO declara que o seu currículo e/ou
                            vídeo-currículo estão de acordo com o padrão aceito pela Controladora, sendo que serão
                            objeto de tratamento os seguintes dados, especificamente para participação do processo de
                            seleção e recrutamento para vaga de emprego: Nome completo; Estado Civil; Nível de instrução
                            ou escolaridade; Números de telefone e WhatsApp; Endereços de e-mail; Endereço domiciliar;
                            Escolaridade; Experiência Profissional; Testes de conhecimentos específicos de acordo com a
                            área de atuação; imagem e som e entre outros dados pessoais sensíveis, ou não, que venham a
                            ser necessários.</p><br>

                        <p><strong>Parágrafo Segundo:</strong> A fim de conceituar "Dados pessoais" significam quaisquer
                            informações obtidas em razão do processo seletivo em questão: (i) relativa a uma pessoa
                            física identificada ou identificável; (ii) que podem ser usadas para identificar ou
                            autenticar um indivíduo, incluindo, mas não limitado a nome, informações de contato,
                            informações precisas de localização, identificadores, números de identificação emitidos pelo
                            governo e outros identificadores pessoais; e (iii) todas as informações que possam ser
                            consideradas "dados pessoais" ou "informações pessoais" sob a lei aplicável.</p><br>

                        <p><strong>Cláusula Segunda - Atualização e Veracidade dos Dados</strong>
                            O USUÁRIO é o responsável pela exatidão, veracidade e atualização dos dados fornecidos.</p>
                        <br>

                        <p><strong>Cláusula Terceira - Compartilhamento</strong>
                            A Controladora pode compartilhar os dados pessoais do USUÁRIO com empresas que auxiliam na
                            realização do recrutamento de candidatos e com empresas do mesmo grupo econômico da
                            Controladora.</p><br>

                        <p><strong>Cláusula Quarta - Tempo de Guarda dos Dados</strong>
                            Finalizado o processo seletivo, caso o USUÁRIO não tenha sido selecionado, a Controladora
                            armazenará os seus dados, em banco de dados que garanta a segurança das informações, pelo
                            período de 2 (dois) anos, quando então serão eliminados, ficando ressalvadas as hipóteses
                            que autorizam a conservação de dados, conforme prevê o artigo 16 da Lei n° 13.709/2018,
                            inclusive para a defesa dos direitos da Controladora em processo administrativo, judicial e
                            arbitral.</p><br>

                        <p><strong>Cláusula Quinta - Acesso aos Dados e Exercício do Direito a Revogação</strong>
                            O USUÁRIO declara que foram sanadas as suas dúvidas sobre a utilização dos seus dados
                            pessoais e declara ter ciência que poderá obter informações sobre o tratamento dos seus
                            dados, exercendo seus direitos, inclusive de revogação do consentimento, por meio do Canal
                            de Comunicação a seguir relacionado: <strong>rh@g360-brasil.com</strong></p><br>

                        <p><strong>Cláusula Sexta - Segurança dos Dados</strong>
                            A Controladora se responsabiliza pela manutenção de medidas de segurança, técnicas e
                            administrativas aptas a proteger os dados pessoais de tratamento inadequado ou ilícito. Em
                            caso de incidente de segurança que possa acarretar risco ou dano relevante ao USUÁRIO, a
                            Controladora comunicará sua ocorrência ao USUÁRIO e à Autoridade Nacional de Proteção de
                            Dados (ANPD), em cumprimento ao artigo 48 da Lei n° 13.709/2018.</p><br>

                        <p><strong>Cláusula Sétima - Conciliação</strong>
                            Os vazamentos individuais ou acessos não autorizados poderão ser objeto de conciliação
                            direta
                            entre Controladora e USUÁRIO e, comprovado o dano e não havendo acordo, a Controladora
                            ficará sujeita às penalidades previstas no artigo 52 da Lei n° 13.709/2018, devidamente
                            apuradas pela ANPD.</p><br>

                        <p><strong>Cláusula Oitava - Disposições Finais</strong>
                            O USUÁRIO declara que tem ciência que os seus dados pessoais e dados pessoais sensíveis
                            serão
                            compartilhados apenas para as finalidades indicadas neste termo, e em observância à
                            legislação vigente no Brasil, resguardado o exercício do direito de defesa pela
                            Controladora, e as hipóteses de conservação de dados autorizada pela Lei Geral de Proteção
                            de Dados (Lei n° 13.709/2018).</p><br>

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
    background-color: #ff5f5f;
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
    background-color: #034078;
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

.move-forward:hover {
    background-color: #4CAF50;
}
</style>
