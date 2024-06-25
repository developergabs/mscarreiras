<template>
    <NavBar />
    <div class="body">
        <header class="header">
            <div class="section__container header__container" id="home">
            </div>
        </header>

        <section class="section__container about__container about__container--above" id="about">
            <div class="about__image">
                <img src="@/assets/equipeMS.jpeg" alt="about" />
            </div>
            <div class="about__content">
                <p class="section__subheader">SOBRE NÓS</p>
                <h2 class="section__header">MS CONSULTING</h2>
                <h2>Nosso propósito</h2>
                <p>Gerar e praticar as melhores soluções em gestão empresarial, inspirando nossos clientes a investirem
                    mais, gerando crescimendo ao país e geraão de emprego.</p><br>
                <h2>Nossa missão</h2>
                <p>Fornecer as melhores soluções empresariais para que nossos clientes tenham vantagens competiticas que
                    os conduzam a uma posição de liderança em seus segmentos de negócio.</p><br>
                <h2>Nossa visão</h2>
                <p>Sermos uma das maiores empresas de gestão empresarial do país até 2025.</p><br>
            </div>
        </section>

        <section class="section__container about__container about__container--below" id="about">
            <div class="about__content">
                <h2>Nossos valores</h2><br>
                <p><i class="uil uil-user-arrows"></i><strong> Satisfação do Cliente:</strong> Excedermos as
                    expectativas dos nossos clientes na execução de nossos serviços;</p><br>
                <p><i class="uil uil-crosshair"></i><strong> Foco no Resultado:</strong> Apresentamos nossos relatórios
                    gerenciais para nossos clientes em tempo hábil para auxilia-los nas tomadas de decisão;</p><br>
                <p><i class="uil uil-comparison"></i><strong> Comprometimento:</strong>Termos compromisso total com os
                    nossos clientes e colaboradores, tanto nas atividades que desenvolvemos quanto nas responsabilidades
                    que assumimos;</p><br>
                <p><i class="uil uil-chart-growth"></i><strong> Melhoria Contínua:</strong>Buscamos a excelência na
                    prestação dos nossos serviços através do aperfeiçoamento dos nossos processos.</p>
            </div>
            <div class="about__image">
                <img src="@/assets/equipeMS1.jpg" alt="about" />
            </div>
        </section>

        <section class="section__container banner__container">
            <div class="banner__content">
                <div class="banner__card">
                    <h4>25+</h4>
                    <p>Clientes atendidos</p>
                </div>
                <div class="banner__card">
                    <h4>350+</h4>
                    <p>Empresas atendidas</p>
                </div>
                <div class="banner__card">
                    <h4>600+</h4>
                    <p>Indicações de uso</p>
                </div>
            </div>
        </section>

        <section class="explore" id="explore">
            <p class="section__subheader">EXPLORAR</p>
            <h2 class="section__header">O que temos de novo hoje?</h2>
            <div class="explore__bg">
                <div class="explore__content">
                    <p class="section__description">Data</p>
                    <h4>Noticia</h4>
                    <button class="btn">Link</button>
                </div>
            </div>
        </section>

        <footer class="footer" id="contact">
            <div class="section__container footer__container">
                <div class="footer__col">
                    <div class="logo">
                        <a href="#home"><img src="@/assets/mslogo.png" alt="logo" /></a>
                    </div>
                    <p class="section__description">
                        Candidate-se a oportunidades para uma das maiores empresas
                        de inteligência competitiva do país.
                    </p>
                    <button class="btn candidatar-btn"><router-link to='/login/candidate'>Candidatar-se</router-link></button>
                </div>
                <div class="footer__col">
                    <h4>LINKS RÁPIDOS</h4>
                    <ul class="footer__links">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Vagas</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div class="footer__col">
                    <h4>NOSSOS SERVIÇOS</h4>
                    <ul class="footer__links">
                        <li><a href="https://msconsulting-brasil.com/solucoes/">Serviços Contábeis</a></li>
                        <li><a href="https://msconsulting-brasil.com/solucoes/">Consultorias Estratégicas</a></li>
                        <li><a href="https://msconsulting-brasil.com/solucoes/">Serviços Operacionais</a></li>
                        <li><a href="https://msconsulting-brasil.com/solucoes/">Consultoria e Gestão</a></li>
                    </ul>
                </div>
                <div class="footer__col">
                    <h4>NOS CONTATE</h4>
                    <ul class="footer__links">
                        <li><a href="https://msconsulting-brasil.com/contato/">rh@g360-brasil.com</a></li>
                    </ul>
                    <div class="footer__socials">
                        <a href="https://www.facebook.com/msconsulting.brasil/?locale=pt_BR"><img
                                src="@/assets/facebook.png" alt="facebook" /></a>
                        <a href="https://www.instagram.com/msconsulting.brasil/"><img
                                src="@/assets/instagram.png" alt="instagram" /></a>
                        <a href="https://www.youtube.com/@msconsulting-brasil8419"><img
                                src="@/assets/youtube.png" alt="youtube" /></a>
                        <a href="https://open.spotify.com/show/50CVb0Kzik9XfCaJuuWwcL"><img
                                src="@/assets/spotify.png" alt="twitter" /></a>
                    </div>
                </div>
            </div>
            <div class="footer__bar">
                MS Gestão Contabilidade LTDA - CNPJ: 25.328.341/0001-66 © 2024.<br>
                Todos os direitos reservados.
            </div>
        </footer>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'AboutView',
    components: {
        NavBar
    }
}
</script>

<style scoped>
.body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Poppins", sans-serif;
}


.section__subheader {
    margin-bottom: 0.5rem;
    position: relative;
    font-weight: 500;
    letter-spacing: 2px;
    color: #0c0a09;
}

.section__subheader::after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translate(1rem, -50%);
    height: 2px;
    width: 4rem;
    background-color: #034078;
}

.section__header {
    max-width: 600px;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3rem;
    color: #0c0a09;
}

.section__description {
    max-width: 600px;
    margin-bottom: 1rem;
    color: #78716c;
}

.btn {
    padding: 0.75rem 1.5rem;
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    background-color: #034078;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background-color: #0457a5;
}

.candidatar-btn {
    padding: 0.75rem 1.5rem;
    outline: none;
    border: 1px solid #000; 
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.candidatar-btn:hover {
    background-color: #034078;
    color: #fff;
}

.candidatar-btn:hover a{
    color: #fff;
}

img {
    width: 100%;
    display: flex;
}

a {
    text-decoration: none;
}

.logo {
    max-width: 120px;
}

.header {
    background-image: url("@/assets/cover.png");
    width: 100%;
    height: 100%;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
}

.header__container {
    padding-block: 10rem 15rem;
}

.header__container p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    opacity: 0.6;
}

.header__container h1 {
    font-size: 4rem;
    font-weight: 500;
    line-height: 4.5rem;
    color: #fff;
    text-align: center;
}

.header__container h1 span {
    color: #034078;
}

.section__container {
    max-width: var(--max-width);
    margin: auto;
    padding: 5rem 1rem 2rem;
}

.about__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
}

.about__image img {
    max-width: 500px;
    width: 100%;
    height: auto;
    margin: auto;
    border-radius: 5px;
}

.about__content {
    margin: auto;
}

.about__content p{
    font-size: 18px;
}
.about__container--above .about__content {
    margin-right: 6rem; 
}
.about__container--below .about__content {
    margin-left: 6rem; 
}

.banner__content {
    padding: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.banner__card {
    text-align: center;
    flex: 1 1 180px;
}

.banner__card h4 {
    font-size: 2rem;
    font-weight: 600;
    color: #0c0a09;
}

.banner__card p {
    color: #78716c;
}

.explore :is(.section__subheader, .section__header) {
    text-align: center;
    margin-inline: auto;
}

.explore__bg {
    margin-top: 4rem;
    padding-block: 2rem;
    display: grid;
    grid-template-columns: minmax(1rem, 1fr) minmax(0, var(--max-width)) minmax(1rem, 1fr);
    background-image: url("@/assets/equipeMS2.jpg");
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.explore__content {
    grid-column: 2/3;
    max-width: 400px;
    padding: 2rem;
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.explore__content p {
    margin-bottom: 0.5rem;
}

.explore__content h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #0c0a09;
}

.explore__content .btn {
    color: #0c0a09;
    background-color: #fff;
    border: 1px solid #0c0a09;
}

.explore__content .btn:hover {
    color: #fff;
    background-color: #034078;
}

.footer {
    background-color: #fff;
}

.footer__container {
    display: grid;
    gap: 4rem 2rem;
    margin-left: 4rem;
}

.footer__col .section__description {
    margin-block: 2rem;
}

.footer__col h4 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
}

.footer__links {
    list-style: none;
    display: grid;
    gap: 1rem;
}

.footer__links a {
    color: #78716c;
    transition: 0.3s;
}

.footer__links a:hover {
    color: #034078;
}

.footer__socials {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.footer__socials img {
    max-width: 25px;
    opacity: 0.8;
    transition: 0.3s;
}

.footer__socials img:hover {
    opacity: 1;
}

.footer__bar {
    padding: 1rem;
    font-size: 0.9rem;
    color: #727272;
    text-align: center;
}

@media (width > 576px) {
    .footer__container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (width > 768px) {
    .about__container {
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .footer__container {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
