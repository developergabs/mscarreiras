<template>
  <header>
      <nav class="navigation">
          <img src="../assets/mslogo.png" class="logoms">
          <ul class="nav-menu">
              <li class="nav-item"><router-link to="/">Inicio</router-link></li>
              <li class="nav-item"><router-link to="/about">Sobre</router-link></li>
              <li class="nav-item"><a href="https://msconsulting.vagas.solides.com.br">Vagas</a></li>
              <li class="nav-item"><a href="#">Contato</a></li>
              <li class="nav-item"><a href="#">Login / Cadastre-se</a></li>
              <i class="bx bx-search"></i> 
          </ul>
          <div class="menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </div>
      </nav>
  </header>

</template>

<script>
export default {
mounted () {
  const menu = document.querySelector('.menu')
  const NavMenu = document.querySelector('.nav-menu')

  menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    NavMenu.classList.toggle('ativo')
  })
}
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

.navigation ul {
  display: flex;
  align-items: center;
  gap: 5rem;
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

.navigation i {
  cursor: pointer;
  font-size: 1.5rem;
}

.menu {
  cursor: pointer;
  display: none;
}

.menu .bar {
  display: block;
  width: 29px;
  height: 3px;
  border-radius: 3px;
  background: #1e1c2a;
  margin: 5px auto;
  transition: all 0.3s;
}

.menu .bar:nth-child(1),
.menu .bar:nth-child(3) {
background: #d63a25;
}

</style>
