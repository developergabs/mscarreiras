<template>
    <div class="body">
        <nav>
            <img src="../assets/mslogo.png" class="logoms">

            <div class="menu-items">
                <ul class="nav-links">
                    <li><a href="">
                            <i class="uil uil-estate"></i>
                            <span class="link-name">Dashboard</span>
                        </a></li>
                    <li><a href="">
                            <i class="uil uil-files-landscapes"></i>
                            <span class="link-name">Cadastros</span>
                        </a></li>
                    <li><a href="">
                            <i class="uil uil-chart"></i>
                            <span class="link-name">Vagas</span>
                        </a></li>
                    <li><a href="">
                            <i class="uil uil-thumbs-up"></i>
                            <span class="link-name">Like</span>
                        </a></li>
                    <li><a href="">
                            <i class="uil uil-comments"></i>
                            <span class="link-name">Comment</span>
                        </a></li>
                    <li><a href="">
                            <i class="uil uil-share"></i>
                            <span class="link-name">Share</span>
                        </a></li>
                </ul>

                <ul class="logout-mode">
                    <li><a href="">
                            <i class="uil uil-signout"></i>
                            <span class="link-name">Sair</span>
                        </a></li>

                    <li class="mode">
                        <a href="#/admin">
                            <i class="uil uil-settings"></i>
                            <span class="link-name">Configurações</span>
                        </a>

                        <!-- <div class="mode-toggle">
                            <span class="switch" @click="modeToggle"></span>
                        </div> -->
                    </li>
                </ul>
            </div>
        </nav>

        <section class="dashboard">
            <div class="top">
                <i class="uil uil-bars sidebar-toogle" @click="toggleSidebar"></i>

                <div class="search-box">
                    <i class="uil uil-search"></i>
                    <input type="text" placeholder="Pesquise aqui...">
                </div>

                <!-- <img src="../assets/" alt=""> -->
            </div>
        
            <div class="dash-content">
                <div class="overview">
                    <div class="title">
                        <i class="uil uil-tachometer-fast-alt"></i>
                        <span class="text">Dashboard</span>
                    </div>

                    <div class="boxes">
                        <div class="box box1">
                            <i class="uil uil-files-landscapes"></i>
                            <span class="text">Cadastros</span>
                            <span class="number">501</span>
                        </div>
                        <div class="box box2">
                            <i class="uil uil-comments"></i>
                            <span class="text">Vagas</span>
                            <span class="number">35</span>
                        </div>
                        <div class="box box3">
                            <i class="uil uil-share"></i>
                            <span class="text">Aplicações</span>
                            <span class="number">485</span>
                        </div>
                    </div>
                </div>

                <div class="activity">
                    <div class="title">
                        <i class="uil uil-clock-three"></i>
                        <span class="text">Atividade Recente</span>
                    </div>

                    <div class="activity-data">
                        <div class="data names">
                            <span class="data-title">Nome</span>
                            <span class="data-list">John Doe</span>
                            <span class="data-list">Pedro Silva Azevedo</span>
                            <span class="data-list">Maria Roberta Costa</span>
                            <span class="data-list">Carlos Sainz Júnior</span>
                        </div>
                        <div class="data email">
                            <span class="data-title">Email</span>
                            <span class="data-list">john.doe@mail.com</span>
                            <span class="data-list">pedro.silva@mail.com</span>
                            <span class="data-list">maria.costa@mail.com</span>
                            <span class="data-list">carlos.sainz@mail.com</span>
                        </div>
                        <div class="data joined">
                            <span class="data-title">Cadastro</span>
                            <span class="data-list">23/05/2024</span>
                            <span class="data-list">21/05/2024</span>
                            <span class="data-list">17/05/2024</span>
                            <span class="data-list">11/05/2024</span>
                        </div>
                        <div class="data type">
                            <span class="data-title">Tipo</span>
                            <span class="data-list">Novo</span>
                            <span class="data-list">Novo</span>
                            <span class="data-list">Novo</span>
                            <span class="data-list">Novo</span>
                        </div>
                        <div class="data joined">
                            <span class="data-title">Status</span>
                            <span class="data-list">Disponível</span>
                            <span class="data-list">Trabalhando</span>
                            <span class="data-list">Disponível</span>
                            <span class="data-list">Trabalhando</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            isSidebarClosed: false,
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarClosed = !this.isSidebarClosed;
        }
    },
    watch: {
        isSidebarClosed(newVal){
            const sidebar = document.querySelector("nav");
            if (sidebar) {
                sidebar.classList.toggle("close", newVal);
            }
        }
    },
    mounted() {
        const sidebar = document.querySelector("nav");
        if (sidebar) {
            this.isSidebarClosed = sidebar.classList.contains("close");
        }
    }
}
</script>

<style scoped>
.body {
    min-height: 100vh;
    color: #1e1c2a;
}

body.dark {
    background-color: #3A3B3C;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #fff;
    border-right: 2px solid #e6e5e5;
    transition: all 0.5s ease;
}

nav.close {
    width: 73px;
}

.logoms {
    width: 120px;
    height: auto;
}

nav.close .logoms{
    opacity: 0;
    pointer-events: none;
}

nav .menu-items {
    margin-top: 40px;
    height: calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.menu-items li {
    list-style: none;
}

.menu-items li a {
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    position: relative;
}

.nav-links li a:hover:before {
    content: "";
    position: absolute;
    left: -7px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: #0E4BF1;
}

body.dark li a:hover::before {
    background-color: #000;
}

.menu-items li a i {
    font-size: 24px;
    min-width: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #707070;
}

.menu-items li a .link-name {
    font-size: 18px;
    font-weight: 400;
    color: #707070;
    transition: all 0.5s ease;
}

nav.close li a .link-name{
    opacity: 0;
    pointer-events: none;
}

/* .nav-links li a:hover i,
.nav-links li a:hover .link-name {
    color: #0E4BF1;
} */

body.dark .nav-links li a:hover i,
body.dark .nav-links li a:hover .link-name {
    color: #000;
}

.menu-items .logout-mode {
    padding-top: 10px;
    border-top: 1px solid #e6e5e5;
}

.menu-items .mode {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.menu-items .mode-toggle {
    position: absolute;
    right: 14px;
    height: 50px;
    min-width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.mode-toggle .switch {
    position: relative;
    display: inline-block;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: #DDD;
}

.switch:before {
    content: "";
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    height: 15px;
    width: 15px;
    background-color: #FFF;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.body.dark .switch::before {
    left: 20px;
}

.dashboard {
    position: relative;
    left: 250px;
    background-color: #fff;
    min-height: 100vh;
    width: calc(100% - 250px);
    padding: 10px 14px;
    transition: all 0.5s ease;
}

nav.close ~ .dashboard {
    left: 73px;
    width: calc(100% - 250px);
}

.dashboard .top {
    position: fixed;
    top: 0;
    left: 250px;
    display: flex;
    width: calc(100% - 250px);
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background-color: #fff;
    transition: all 0.5s ease;
}

nav.close ~ .dashboard .top{
    left: 73px;
    width: calc(100% - 250px);
}

.dashboard .top .sidebar-toggle {
    font-size: 26px;
    color: #000;
    cursor: pointer;
}

.dashboard .top .search-box {
    position: relative;
    height: 45px;
    max-width: 600px;
    width: 100%;
    margin: 0 30px;

}

.top .search-box input {
    position: absolute;
    border: 1px solid #e6e5e5;
    background-color: #fff;
    padding: 0 25px 0 50px;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    color: #000;
    font-size: 15px;
    font-weight: 400;
    outline: none;
}

.top .search-box i {
    position: absolute;
    left: 15px;
    font-size: 22px;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    color: #707070;
}

.top img {
    width: 40px;
    border-radius: 50%;
}

.dashboard .dash-content {
    padding-top: 50px;
}

.dash-content .title {
    display: flex;
    align-items: center;
    margin: 60px 0 30px 0;
}

.dash-content .title i {
    position: relative;
    height: 35px;
    width: 35px;
    background-color: #0E4BF1;
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.dash-content .title .text {
    font-size: 24px;
    font-weight: 500;
    color: #000;
    margin-left: 10px;
}

.dash-content .boxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dash-content .boxes .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    width: calc(100% / 3 - 15px);
    padding: 15px 20px;
    background-color: #4DA3FF;
}

.boxes .box i {
    font-size: 25px;
    color: #000;
}

.boxes .box .text {
    white-space: nowrap;
    font-size: 18px;
    font-weight: 500;
    color: #000;
}

.boxes .box .number {
    font-size: 40px;
    font-weight: 500;
    color: #000;
}

.boxes .box.box2 {
    background-color: #FFE6AC;
}

.boxes .box.box3 {
    background-color: #E7D1FC;
}

.dash-content .activity .activity-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.activity .activity-data {
    display: flex;
}

.activity-data .data{
    display: flex;
    flex-direction: column;
    margin: 0 15px;
}

.activity-data .data-title {
    font-size: 20px;
    font-weight: 500;
    color: #000;
}

.activity-data .data .data-list {
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    white-space: nowrap;
    color: #000;
}
</style>