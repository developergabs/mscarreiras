<template>
  <NavBar />
  <div class="heading">
    <h1>Quem somos nós</h1>
    <p>Conheça a MS Consulting</p>
  </div>
  <div class="container">
    <section class="about">
      <div class="about-image">
        <img src="../assets/image.jpg">
      </div>
      <div class="about-content">
        <h3>Nossa visão é sermos umas das maiores empresas de inteligência competitiva em consultoria contábil e empresarial do
          país.</h3><br>
        <h3>Nossa missão é fornecer as melhores soluções empresariais para que nossos clientes tenham vantagens competitivas que
          os conduzam a uma posição de liderança em seus segmentos de negócio.</h3><br>
        <h3>Nossos valores são <strong>Satisfação do cliente, foco no resultado, comprometimento e melhoria contínua</strong></h3><br>
        <a href="https://msconsulting-brasil.com/solucoes/" class="read-more">Ler Mais</a>
      </div>
    </section>
  </div>
  <FooterSession />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterSession from '@/components/FooterSession.vue';

export default {
  components: {
    NavBar,
    FooterSession
  }
}
</script>

<style scoped>
.heading {
  width: 90%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
}

.heading>h1 {
  font-size: 50px;
  color: #000;
  margin-bottom: 25px;
  position: relative;
}

.heading h1::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  display: block;
  margin: 0 auto;
  background-color: rgb(41, 41, 116);
}

.heading>p {
  font-size: 18px;
  color: #666;
  margin-bottom: 35px;
}

.container {
  width: 90%;
  margin: 0 auto;
  padding: 10px 20px;
}

.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.about-image {
  flex: 1;
  margin-right: 40px;
  overflow: hidden;
}

.about-image img {
  max-width: 100%;
  height: auto;
  display: block;
  transition: 0.5s ease;
}

.about-image:hover img {
  transform: scale(1.2);
}

.about-content {
  flex: 1;
}

.about-content h2 {
  font-size: 23px;
  margin-bottom: 15px;
  color: #333;
}

.about-content p {
  font-size: 18px;
  line-height: 1.5;
  color: #666;
}

.about-content .read-more {
  display: inline-block;
  padding: 10px 20px;
  background-color: rgb(60, 60, 184);
  color: #fff;
  font-size: 19px;
  text-decoration: none;
  border-radius: 25px;
  margin-top: 15px;
  transition: 0.3s ease;
}

.about-content .read-more:hover {
  background-color: rgb(2, 2, 49);
}

@media screen and (max-width: 768px) {
  .heading {
    padding: 0px 20px;
  }

  .heading h1 {
    font-size: 36px;
  }

  .heading p {
    font-size: 17px;
    margin-bottom: 0px;
  }

  .container {
    padding: 0px;
  }

  .about {
    padding: 20px;
    flex-direction: column;
  }

  .about-image {
    margin-right: 0px;
    margin-bottom: 20px;
  }

  .about-content p {
    padding: 0px;
    font-size: 16px;
  }

  .about-content .read-more {
    font-size: 16px;
  }
}</style>