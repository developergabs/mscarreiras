<template>
  <div class="success-message">
    <h2>Sucesso!</h2>
    <p>Seu currículo foi cadastrado com sucesso em nosso banco de dados.</p>
    <div class="buttons">
      <router-link to="/">
        <button class="success-button">Voltar ao Menu</button>
      </router-link>
      <button class="success-button" @click="resetForm">Cadastrar Novo Currículo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessPage',
  methods: {
    resetForm() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.success-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #034885;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.buttons button{
  margin-right: 14px;
}

.success-button {
  background-color: #45a049;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.success-button:hover {
  background-color: #4c89a5;
}

.success-button+.success-button {
  margin-left: 10px;
}
</style>
