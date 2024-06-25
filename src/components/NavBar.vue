<template>
  <header>
    <nav class="navigation">
      <img src="../assets/mslogo.png" class="logoms">
      <ul class="nav-menu">
        <li class="nav-item"><router-link to="/">Inicio</router-link></li>
        <li class="nav-item"><router-link to="/about">Sobre</router-link></li>
        <li class="nav-item"><a href="https://msconsulting.vagas.solides.com.br">Vagas</a></li>
        <li class="nav-item"><a href="https://msconsulting-brasil.com/contato/">Contato</a></li>
        <li class="nav-item nav-item--login">
          <router-link to="/login/candidate">Cadastre-se</router-link>
        </li>
        <i class="bx bx-search"></i>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  body {
    color: #1e1c2a;
    background: #fff;
  }

  .logoms {
    width: 120px;
    height: auto;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 40px;
    box-shadow: 0 0.1rem 0.5rem #ccc;
    width: 100%;
    background: #fff;
    transition: all 0.5s;
  }

  .navigation .logo {
    color: #d63a25;
    font-size: 1.7rem;
    font-weight: 600;
  }

  .logo span {
    color: #1e1c2a;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0;
  }

  .nav-item {
    list-style: none;
    margin: 0;
    padding: 0 20px; 
  }

  .nav-item:last-child {
    padding-right: 15px; 
  }

  .navigation ul {
    display: flex;
    align-items: center;
  }

  .navigation ul li a {
    color: #1e1c2a;
    font-size: 17px;
    font-weight: 500;
    transition: all 0.5s;
  }

  .navigation ul li a:hover {
    color: #d63a25;
  }

  .navigation ul li.nav-item--login a {
    background-color: #034078;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  .navigation ul li.nav-item--login a:hover {
    background-color: #0457a5;
    color: #fff;
  }

  .navigation i {
    cursor: pointer;
    font-size: 1.5rem;
  }
</style>
