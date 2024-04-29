<template>
    <footer>
        <div class="footer-wrapper footer-wrapper--full">
            <h3>MS CONSULTING</h3>
            <h4>Nossos Escritórios</h4>
            <p><strong>Macapá-AP: </strong>Rua Jovino Dinoá nº 2343, 2º pavimento, salas C e D • CEP 68.900-75 • +55 (96)
                3217-4929 / 99154-4738</p>
            <p><strong>Belém-PA: </strong>Tv. Dom Romualdo de Seixas nº 1476, Ed. Evolution, sala 2506 • Umarizal • CEP
                66.055-200 • +55 (91) 3038-6427 / 98906-6687</p>
            <p><strong>Altamira-PA: </strong>Trav. Hiroito nº 87, Prédio Comercial Hiroito, sala 03 • Centro • CEP
                67.370-0001 • +55 (93) 99176-5635</p>
            <p><strong>Marabá-PA: </strong>Folha 26, Quadra 14, Lote 01, Ed. Amazon Center • Nova Marabá • CEP 68.509-094 •
                +55 (94) 3322-6400 / 99203-9675</p>
            <p><strong>São Luís-MA: </strong>Av. Jerônimo Albuquerque, Ed. Galileu Center, sala 19 • Calhau • CEP 65.074-220
                • +55 (98) 99198-5894</p>
            <p><strong>Manaus-AM: </strong>Av. Djalma Batista nº 1719, Ed. Atlantic Tower • Chapada • CEP 69.050-010 • +55
                (92) 3212-4172/ (91) 98933-1000</p>
            <p><strong>São Paulo-SP: </strong>Av. Eng. Luiz C. Berrini, nº 1748, Ed. E. Office, sala 1906 • Brooklin Novo •
                CEP 04571-000 • +55 (11) 2667-1160</p>
            <div class="social-media">
                <a :href="facebook"><i class="fab fa-facebook-f"></i></a>
                <a :href="linkedin"><i class="fab fa-linkedin-in"></i></a>
                <a :href="youtube"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
        <div class="footer-wrapper footer-wrapper--margin">
            <h4>Conheça a MS</h4>
            <a :href="solucoes">Soluções</a>
            <a :href="blog">Blog</a>
            <a :href="conteudo">Conteúdo gratuito</a>
            <a :href="contato">Contato</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSession',
    data() {
        return {
            facebook: 'https://www.facebook.com/msconsulting.brasil',
            linkedin: 'https://www.linkedin.com/company/msconsulting-brasil/mycompany/',
            youtube: 'https://www.youtube.com/@msconsulting-brasil8419',
            solucoes: 'https://msconsulting-brasil.com/solucoes/',
            blog: 'https://msconsulting-brasil.com/blog/',
            conteudo: 'https://msconsulting-brasil.com/conteudo-gratuito/',
            contato: 'https://msconsulting-brasil.com/contato/'
        }
    }
}
</script>

<style scoped>
footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    background: #0076de;
    color: white;
    padding: 3rem;
}

.footer-wrapper--full  {
    width: 80%;
    gap: 14px;
}

.footer-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    justify-content: flex-start;
    align-content: flex-start;
}

.footer-wrapper--margin {
    margin-top: 69px;
}

.footer-wrapper h3 {
    line-height: 3;
    color: #ffd723;
}
.footer-wrapper h4 {
    line-height: 3;
    color: #ffd723;
}

.footer-wrapper p {
    width: 100%;
    line-height: 1.5;
    color: white;
}

.social-media {
    margin-top: 1rem;
}

.social-media a {
    text-decoration: none;
    color: #f6f8fa;
    margin-right: 10px;
}

.footer-wrapper a {
    text-decoration: none;
    color: #f6f8fa;
    line-height: 2;
}

.footer-wrapper a:hover {
    text-decoration: underline;
}
</style>
