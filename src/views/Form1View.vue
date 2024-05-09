<template>
  <div class="body">
    <div class="container">
      <header>Cadastro (1/3)</header>

      <form @submit.prevent="submitForm">
        <div class="form first">
          <div class="details personal">
            <span class="title">Dados Pessoais</span>

            <div class="fields">
              <div class="input-field">
                <label for="fullName">Nome Completo:</label>
                <input type="text" v-model="identity.fullName" />
              </div>
              <div class="input-field">
                <label for="email">Email:</label>
                <input type="text" v-model="identity.email" />
              </div>
              <div class="input-field">
                <label for="cpf">CPF:</label>
                <input type="text" v-model="identity.cpf" />
              </div>

              <div class="input-field">
                <label for="birthdate">Data de Nascimento:</label>
                <input type="date" v-model="identity.birthDate" max="9999-12-31" />
              </div>
              <div class="input-field">
                <label for="motherName">Nome Completo da mãe:</label>
                <input type="text" v-model="identity.motherName" />
              </div>
              <div class="input-field">
                <label for="pis">Número do PIS:</label>
                <input type="text" v-model="identity.pis" />
              </div>

              <div v-if="currentStep.id === 1" class="input-field">
                <label for="rgNumber">Número do RG:</label>
                <input type="text" v-model="identity.rgNumber" class="input-numbers" />
              </div>
              <div v-if="currentStep.id === 1" class="input-field">
                <label for="emissionRg">Data de Emissão:</label>
                <input type="date" v-model="identity.emissionRg" max="9999-12-31" class="input-numbers" />
              </div>
              <div class="input-field">
                <label for="state">Estado:</label>
                <select v-model="identity.state" @change="updateCities" class="">
                  <option value="">Selecione um estado</option>
                  <option v-for="state in states" :key="state">{{ state }}</option>
                </select>
              </div>

              <div class="input-field">
                <label for="city">Cidade:</label>
                <select v-model="identity.city">
                  <option value="">Selecione uma cidade</option>
                  <option v-for="city in cities" :key="city"> {{ city }}</option>
                </select>
              </div>
              <div class="input-field">
                <label for="cep">CEP:</label>
                <input type="text" v-model="identity.cep" />
              </div>
              <div v-if="currentStep.id === 1" class="input-field">
                <label for="neighbor">Bairro:</label>
                <input type="text" v-model="identity.neighbor" />
              </div>

            </div>
            <div class="details personal">
              <span class="title">Diversidade e Inclusão</span>

              <div class="fields">
                <div class="input-field">
                  <label for="gender">Gênero:</label>
                  <select v-model="diversidade.gender">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Indiferente">Indiferente</option>
                  </select>
                </div>
                <div class="input-field">
                  <label for="identityGender">Identidade de Gênero:</label>
                  <select v-model="diversidade.identityGender">
                    <option value="Cisgênero">Cisgênero</option>
                    <option value="Transgênero">Transgênero</option>
                    <option value="Prefiro não responder">Prefiro não responder</option>
                  </select>
                </div>
                <div class="input-field">
                  <label for="race">Cor ou Raça:</label>
                  <select v-model="diversidade.race">
                    <option value="Amarela">Amarela</option>
                    <option value="Branca">Branca</option>
                    <option value="Indígena">Indígena</option>
                    <option value="Parda">Parda</option>
                    <option value="Preta">Preta</option>
                    <option value="Prefiro não responder">Prefiro não responder</option>
                  </select>
                </div>

                <div class="input-field">
                  <label for="sexualOrientation">Orientação Sexual:</label>
                  <select v-model="diversidade.sexualOrientation">
                    <option value="Assexual">Assexual</option>
                    <option value="Bissexual">Bissexual</option>
                    <option value="Heterossexual">Heterossexual</option>
                    <option value="Homossexual">Homossexual</option>
                    <option value="Pansexual">Pansexual</option>
                    <option value="Prefiro não responder">Prefiro não responder</option>
                  </select>
                </div>
                <div class="input-field">
                  <label for="pronoun">Pronome:</label>
                  <select v-model="diversidade.pronoun">
                    <option value="Ele dele">Ele dele</option>
                    <option value="Ela dela">Ela dela</option>
                    <option value="Prefiro não responder">Prefiro não responder</option>
                  </select>
                </div>
                <div class="input-field">
                  <label for="disability">Pessoa com Deficiência:</label>
                  <select v-model="diversidade.hasDisability" @change="showDisabilityType">
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                  </select>
                </div>

                <div class="input-field">
                  <div v-if="showDisabilitySelect">
                    <label for="disabilityType">Tipo de Deficiência:</label>
                    <select v-model="diversidade.disabilityType">
                      <option value="Auditiva">Auditiva</option>
                      <option value="Física">Física</option>
                      <option value="Intelectual">Intelectual</option>
                      <option value="Múltiplas">Múltiplas</option>
                      <option value="Outros">Outros</option>
                      <option value="Visual">Visual</option>
                    </select>
                  </div>
                </div>

                <button class="nextBtn" @click="goToNextStep()">
                  <span class="btnText">Próximo</span>
                  <i class="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>

  <div v-if="showSuccessMessage">
    <SuccessView />
  </div>
</template>

<script>
import SuccessView from './SuccessView.vue';

export default {
  name: 'Form1View',
  data() {
    return {
      currentStep: { id: 1, title: "Dados Pessoais (1/6)", buttonText: "Próximo" },
      identity: {
        fullName: "",
        email: "",
        cpf: "",
        birthDate: "",
        motherName: "",
        pis: "",
        rgNumber: "",
        emissionRg: "",
        cep: "",
        city: "",
        state: "",
        neighbor: "",
      },
      states: [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins"
      ],
      citiesByState: {
        "Acre": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
        "Alagoas": ["Maceió", "Arapiraca", "Palmeira dos Índios"],
        "Amapá": ["Macapá", "Santana", "Laranjal do Jari"],
        "Amazonas": ["Manaus", "Parintins", "Itacoatiara"],
        "Bahia": ["Salvador", "Feira de Santana", "Vitória da Conquista"],
        "Ceará": ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
        "Distrito Federal": ["Brasília"],
        "Espírito Santo": ["Vitória", "Vila Velha", "Serra"],
        "Goiás": ["Goiânia", "Anápolis", "Aparecida de Goiânia"],
        "Maranhão": ["São Luís", "Imperatriz", "São José de Ribamar"],
        "Mato Grosso": ["Cuiabá", "Várzea Grande", "Rondonópolis"],
        "Mato Grosso do Sul": ["Campo Grande", "Dourados", "Três Lagoas"],
        "Minas Gerais": ["Belo Horizonte", "Uberlândia", "Contagem"],
        "Pará": ["Belém", "Ananindeua", "Santarém"],
        "Paraíba": ["João Pessoa", "Campina Grande", "Santa Rita"],
        "Paraná": ["Curitiba", "Londrina", "Maringá"],
        "Pernambuco": ["Recife", "Jaboatão dos Guararapes", "Olinda"],
        "Piauí": ["Teresina", "Parnaíba", "Picos"],
        "Rio de Janeiro": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias"],
        "Rio Grande do Norte": ["Natal", "Mossoró", "Parnamirim"],
        "Rio Grande do Sul": ["Porto Alegre", "Caxias do Sul", "Pelotas"],
        "Rondônia": ["Porto Velho", "Ji-Paraná", "Ariquemes"],
        "Roraima": ["Boa Vista", "Caracaraí", "Rorainópolis"],
        "Santa Catarina": ["Florianópolis", "Joinville", "Blumenau"],
        "São Paulo": ["São Paulo", "Guarulhos", "Campinas"],
        "Sergipe": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
        "Tocantins": ["Palmas", "Araguaína", "Gurupi"]
      },
      cities: [],
      diversidade: {
        gender: "",
        identityGender: "",
        race: "",
        sexualOrientation: "",
        pronoun: "",
        hasDisability: 'não',
        disabilityType: ""
      },
      showDisabilitySelect: false,
    };
  },
  components: {
    SuccessView
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await fetch('/src/rest.json');
        const data = await response.json();
        this.states = data.estados.map(function (estado) {
          return estado.nome;
        });
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    },

    updateCities() {
      const selectedState = this.identity.state;
      this.cities = this.citiesByState[selectedState] || [];
    },
    goToNextStep() {
      this.$router.push('/cadastro2')
    }, 
    showDisabilityType() {
      if (this.diversidade.hasDisability === 'sim') {
        this.showDisabilitySelect = true;
      } else {
        this.showDisabilitySelect = false;
        this.diversidade.disabilityType = '';
      }
    },
  }
};
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4070f4;
}

.container {
  position: relative;
  max-width: 900px;
  width: 100%;
  border-radius: 6px;
  padding: 30px;
  margin: 0 15px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.container header {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.container header::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 3px;
  width: 27px;
  border-radius: 8px;
  background-color: #4070f4;
}

.container form {
  position: relative;
  margin-top: 16px;
  min-height: 490px;
  background-color: #fff;
}

.container form .details {
  margin-top: 30px;
}

.container form .title {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  margin: 6px 0;
  color: #333;
}

.container form .fields {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

form .fields .input-field {
  display: flex;
  width: calc(100% / 3 - 15px);
  flex-direction: column;
  margin: 4px 0;
}

.input-field label {
  font-size: 12px;
  font-weight: 500;
  color: #2e2e2e;
}

.input-field input {
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0 15px;
  height: 42px;
  margin: 8px 0;
}

.input-field select {
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 0 15px;
  height: 42px;
  margin: 8px 0;
  background-color: #fff;
}

.input-field select:focus,
.input-field select:valid {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
}


.input-field input:is(:focus, :valid) {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
}

.input-field input[type="date"] {
  color: #707070;
}

.input-field input[type="date"]:valid {
  color: #333;
}

.container form button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  max-width: 200px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  margin: 25px 0;
  background-color: #4070f4;
  transition: all 0.3s linear;
  cursor: pointer;
}

form button:hover {
  background-color: #265df2;
}

form button i {
  margin: 0 6px;
}

/* .submit-button {
  background-color: #034078;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #4caf50;
}

.remove-button {
  background-color: #dc3545;
}

.remove-button:hover {
  background-color: #ff5252;
} */
</style>