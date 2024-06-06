<template>
  <NavBar />
  <main>
    <section class="home">
      <div class="home-text">
        <h4 class="text-h4">MS Carreiras</h4>
        <h1 class="text-h1">Cadastre-se em nosso banco de dados</h1>
        <p>E saia na frente com as oportunidades MS Consulting por todo o Brasil.</p>
        <router-link to="/login/candidate">
          <div class="home-btn">Cadastre-se</div>
        </router-link>
      </div>
      <div class="home-img">
        <img src="@/assets/building1.jpg" alt="">
      </div>
    </section>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10%;
}

.home-text {
  max-width: 37rem;
}

.home-text .text-h4 {
  font-size: 1.5rem;
  color: #034078;
  margin-bottom: 1rem;
}

.home-text .text-h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  line-height: 4rem;
}

.home-text p {
  margin-bottom: 4rem;
}

.home-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 200px;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  margin: 25px 0;
  background-color: #034078;
  transition: all 0.3s ease linear;
}

.home-btn:hover {
  background: #0667c1;
}

.home-img img {
  width: 50%;
  margin-left: 2rem;
  float: right;
}
</style>
