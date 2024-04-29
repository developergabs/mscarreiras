<template>
  <div class="background">
    <h2>{{ currentStep.title }}</h2>
    <form @submit.prevent="submitForm" class="form-container">
      <!-- Identidade -->
      <div v-if="currentStep.id === 1" class="form-group">
        <label for="fullName">Nome Completo:</label>
        <input type="text" v-model="identity.fullName" />
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <label for="email">Email:</label>
        <input type="text" v-model="identity.email" />
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <div class="form-group-half">
          <label for="cpf">CPF:</label>
          <input type="text" v-model="identity.cpf" />
        </div>

        <div class="form-group-half">
          <label for="birthdate">Data de Nascimento:</label>
          <input type="date" v-model="identity.birthDate" max="9999-12-31" />
        </div>
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <label for="motherName">Nome Completo da mãe:</label>
        <input type="text" v-model="identity.motherName" />
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <div class="form-group-half">
          <label for="pis">PIS:</label>
          <input type="text" v-model="identity.pis" />
        </div>
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <div class="form-group-half">
          <label for="rgNumber">Número do RG:</label>
          <input type="text" v-model="identity.rgNumber" />
        </div>
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <div class="form-group-half">
          <label for="emissionRg">Data de Emissão:</label>
          <input type="date" v-model="identity.emissionRg" max="9999-12-31" />
        </div>
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <div class="form-group-half">
          <label for="cep">CEP:</label>
          <input type="text" v-model="identity.cep" />
        </div>
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <div class="form-group-half">
          <label for="state">Estado:</label>
          <select v-model="identity.state" @change="updateCities">
            <option value="">Selecione um estado</option>
            <option v-for="state in states" :key="state">{{ state }}</option>
          </select>
        </div>

        <div class="form-group-half">
          <label for="city">Cidade:</label>
          <select v-model="identity.city">
            <option value="">Selecione uma cidade</option>
            <option v-for="city in cities" :key="city"> {{ city }}</option>
          </select>
        </div>
      </div>

      <div v-if="currentStep.id === 1" class="form-group">
        <label for="neighbor">Bairro:</label>
        <input type="text" v-model="identity.neighbor" />
      </div>

      <!-- Formação -->
      <div v-if="currentStep.id === 2" class="form-group">
        <label for="education">Escolaridade:</label>
        <select v-model="education.level">
          <option value="">Selecione um nível de escolaridade</option>
          <option value="Ensino Fundamental">Ensino Fundamental</option>
          <option value="Ensino Médio">Ensino Médio</option>
          <option value="Ensino Técnico">Ensino Técnico</option>
          <option value="Ensino Superior">Ensino Superior</option>
          <option value="Pós Graduação">Pós Graduação</option>
        </select>
      </div>

      <div v-if="education.level === 'Ensino Técnico' && currentStep.id === 2" class="form-group">
        <label for="technicalCourse">Curso Técnico:</label>
        <select v-model="education.course">
          <option value="">Selecione um curso técnico</option>
          <option v-for="course in technicalCourses" :key="course">{{ course }}</option>
        </select>
      </div>

      <div v-if="education.level === 'Ensino Superior' && currentStep.id === 2" class="form-group">
        <label for="graduationCourse">Curso de Graduação:</label>
        <select v-model="education.course">
          <option value="">Selecione um curso de graduação</option>
          <option v-for="course in commonCourses" :key="course">{{ course }}</option>
        </select>
      </div>

      <div v-if="education.level === 'Pós Graduação' && currentStep.id === 2" class="form-group">
        <label for="postGraduationCourse">Nome da Pós Graduação:</label>
        <input type="text" v-model="education.course" />
      </div>

      <div v-if="currentStep.id === 2" class="form-group">
        <label for="status">Status do Curso:</label>
        <select v-model="education.status">
          <option value="">Selecione o status do curso</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
        </select>
      </div>

      <div v-if="currentStep.id === 2" class="form-group">
        <label for="institution">Instituição:</label>
        <input type="text" v-model="education.institution" />
      </div>

      <div v-if="currentStep.id === 2" class="form-group">
        <label for="startDate">Data de Início:</label>
        <input type="date" v-model="education.startDate" max="9999-12-31" />
      </div>

      <div v-if="currentStep.id === 2" class="form-group">
        <label for="endDate">Data de Término:</label>
        <input type="date" v-model="education.endDate" max="9999-12-31" />
      </div>

      <button v-if="education.level === 'Graduação' && currentStep.id === 2" @click="addAnotherGraduation">Adicionar Graduação</button>

      <!-- Experiência -->
      <div v-if="!showAddExperienceButton && currentStep.id === 3" class="form-group">
        <div class="form-group">
          <label for="hasNoExperience">Não possuo experiência</label>
          <input type="checkbox" id="hasNoExperience" v-model="hasNoExperience" @change="toggleExperienceForm" />
        </div>
        <div v-if="!hasNoExperience">
          <button type="button" class="submit-button" @click="addExperience">Adicionar Experiência</button>
          <div class="form-group" v-for="(experience, index) in experiences" :key="index">
            <div class="form-group">
              <label for="position">Cargo:</label>
              <input type="text" v-model="experience.position" />
            </div>
            <div class="form-group">
              <label for="company">Empresa:</label>
              <input type="text" v-model="experience.company" />
            </div>
            <div class="form-group">
              <label for="activities">Atividades Exercidas:</label>
              <textarea v-model="experience.activities"></textarea>
            </div>
            <div class="form-group">
              <label for="workMode">Modo de trabalho:</label>
              <select v-model="experience.workMode">
                <option value="Remoto">Remoto</option>
                <option value="Presencial">Presencial</option>
                <option value="Híbrido">Híbrido</option>
              </select>
            </div>
            <div v-if="experience.workMode !== 'Remoto'">
              <div class="form-group">
                <label for="city">Cidade:</label>
                <input type="text" v-model="experience.city" />
              </div>
              <div class="form-group">
                <label for="state">Estado:</label>
                <input type="text" v-model="experience.state" />
              </div>
            </div>
            <div class="form-group">
              <label for="startDate">Data de entrada:</label>
              <input type="date" v-model="experience.startDate" max="9999-12-31" />
            </div>
            <div class="form-group">
              <label for="endDate">Data de saída:</label>
              <input type="date" v-model="experience.endDate" max="9999-12-31" />
              <input type="checkbox" v-model="experience.currentlyWorking" /> Estou trabalhando atualmente
            </div>
            <div class="form-group">
              <button type="button" class="submit-button remove-button"
                @click="removeExperience(index)">Remover</button>
                  <button v-if="showAddExperienceButton" @click="addExperience">Adicionar experiência</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Cursos Complementares -->
      <div v-if="currentStep.id === 4" class="form-group">
        <div v-for="(course, index) in courses" :key="index">
          <div class="form-group">
            <label for="course">Curso Complementar:</label>
            <input type="text" v-model="course.course" />
          </div>

          <div class="form-group">
            <label for="courseInstitution">Instituição:</label>
            <input type="text" v-model="course.institution" />
          </div>

          <div class="form-group-half">
            <label for="courseStartDate">Data de Início:</label>
            <input type="date" v-model="course.startDate" max="9999-12-31" />
          </div>

          <div class="form-group-half">
            <label for="courseEndDate">Data de Término:</label>
            <input type="date" v-model="course.endDate" max="9999-12-31" />
          </div>

          <button type="button" class="submit-button remove-button" @click="removeCourse(index)">Remover</button>
        </div>
        <button type="button" class="submit-button" @click="addCourse">Adicionar Curso Complementar</button>
      </div>

      <!-- Idiomas -->
      <div v-if="currentStep.id === 5" class="form-group">
        <div v-for="(language, index) in languages" :key="index">
          <div class="form-group">
            <label for="language">Idioma:</label>
            <input type="text" v-model="language.language" />
          </div>

          <div class="form-group">
            <label for="languageInstitution">Instituição:</label>
            <input type="text" v-model="language.institution" />
          </div>

          <div class="form-group-half">
            <label for="languageStartDate">Data de Início:</label>
            <input type="date" v-model="language.startDate" max="9999-12-31" />
          </div>

          <div class="form-group-half">
            <label for="languageEndDate">Data de Término:</label>
            <input type="date" v-model="language.endDate" max="9999-12-31" />
          </div>
          <div class="buttons">
            <button type="button" class="submit-button remove-button" @click="removeLanguage(index)">Remover</button>
            <button type="button" class="submit-button" @click="addLanguage">Adicionar Idioma</button>
          </div>
        </div>
      </div>
      <button type="submit" class="submit-button">{{ currentStep.buttonText }}</button>
    </form>

    <div v-if="showSuccessMessage">
      <SuccessView />
    </div>
  </div>
</template>

<script>
import SuccessView from './SuccessView.vue';
// import { useRouter } from 'vue-router';

export default {
  name: 'RegisterView',
  data() {
    return {
      currentStep: { id: 1, title: "Identidade", buttonText: "Próximo" },
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
      technicalCourses: [
        "Informática",
        "Eletrônica",
        "Mecânica",
        "Eletrotécnica",
        "Automação Industrial",
        "Segurança do Trabalho",
        "Redes de Computadores",
        "Mecatrônica",
        "Logística",
        "Edificações",
        "Química",
        "Eletroeletrônica",
        "Agropecuária",
        "Meio Ambiente",
        "Contabilidade",
        "Transações Imobiliárias",
        "Design de Interiores",
        "Administração Escolar",
        "Enfermagem",
        "Nutrição e Dietética",
        "Radiologia",
        "Farmácia",
        "Estética",
        "Secretariado",
        "Finanças",
        "Segurança do Trabalho",
        "Automação Industrial",
        "Manutenção Automotiva",
        "Design Gráfico",
        "Programação de Jogos Digitais",
        "Gastronomia",
        "Teatro",
        "Cinema",
        "Produção de Áudio e Vídeo",
        "Comunicação Visual",
        "Artes Cênicas",
        "Web Design",
        "Técnico em Informática para Internet",
        "Design de Moda",
      ],
      commonCourses: [
        "Administração",
        "Administração de Empresas",
        "Administração Pública",
        "Gestão de Recursos Humanos",
        "Arquitetura e Urbanismo",
        "Arquitetura de Interiores",
        "Urbanismo",
        "Paisagismo",
        "Ciência da Computação",
        "Ciência da Informação",
        "Engenharia de Software",
        "Sistemas de Informação",
        "Ciências Contábeis",
        "Contabilidade Financeira",
        "Contabilidade Gerencial",
        "Auditoria",
        "Direito",
        "Direito Penal",
        "Direito Civil",
        "Direito do Trabalho",
        "Economia",
        "Economia Internacional",
        "Economia Agrícola",
        "Economia Política",
        "Engenharia Civil",
        "Engenharia Estrutural",
        "Engenharia Hidráulica",
        "Engenharia de Transportes",
        "Engenharia Elétrica",
        "Eletrotécnica",
        "Energias Renováveis",
        "Eletrônica de Potência",
        "Engenharia Mecânica",
        "Mecânica dos Sólidos",
        "Termodinâmica",
        "Mecânica dos Fluidos",
        "Engenharia de Produção",
        "Gestão da Produção",
        "Engenharia Econômica",
        "Controle de Qualidade",
        "Engenharia Química",
        "Química Orgânica",
        "Processos Químicos Industriais",
        "Química Ambiental",
        "Farmácia",
        "Farmácia Industrial",
        "Bioquímica",
        "Farmacologia",
        "Fisioterapia",
        "Fisioterapia Desportiva",
        "Fisioterapia Neurológica",
        "Fisioterapia Respiratória",
        "Medicina",
        "Medicina Veterinária",
        "Nutrição",
        "Nutrição Clínica",
        "Nutrição Esportiva",
        "Nutrição Funcional",
        "Odontologia",
        "Odontologia Estética",
        "Odontopediatria",
        "Ortodontia",
        "Psicologia",
        "Psicologia Clínica",
        "Psicologia Organizacional",
        "Psicologia Educacional",
        "Serviço Social",
        "Assistência Social",
        "Gestão de Políticas Públicas",
        "Terapia Ocupacional"
      ],
      education: {
        level: "",
        institution: "",
        startDate: "",
        endDate: "",
      },
      hasExperience: false,
      experiences: [],
      experience: {
        position: "",
        company: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
      courses: [
        { course: "", institution: "", startDate: "", endDate: "" }
      ],
      languages: [
        { language: "", institution: "", startDate: "", endDate: "" }
      ],
      showSuccessMessage: false,
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
    submitForm() {
      if (this.currentStep.id < 5) {
        this.currentStep.id++;
        this.updateStep();
      } else {
        this.showSuccessMessage = true;
      }
    },
    updateStep() {
      switch (this.currentStep.id) {
        case 1:
          this.currentStep.title = "Identidade";
          this.currentStep.buttonText = "Próximo";
          break;
        case 2:
          this.currentStep.title = "Formação";
          break;
        case 3:
          this.currentStep.title = "Experiência";
          break;
        case 4:
          this.currentStep.title = "Cursos Complementares";
          break;
        case 5:
          this.currentStep.title = "Idiomas";
          this.currentStep.buttonText = "Enviar";
          break;
        default:
          break;
      }
    },
    toggleExperienceForm() {
      if (!this.hasNoExperience) {
        this.hasNoExperience = false;
      } else {
        this.addExperience();
      }
    },
    addAnotherGraduation() {
      this.courses.push({ course: "", institution: "", startDate: "", endDate: "" });
    },
    addExperience() {
      this.experiences.push({
        position: "",
        company: "",
        activities: "",
        workMode: "Remoto",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false
      });
    },
    removeExperience(index) {
      this.experiences.splice(index, 1);
    },
    addCourse() {
      this.courses.push({ course: "", institution: "", startDate: "", endDate: "" });
    },
    removeCourse(index) {
      this.courses.splice(index, 1);
    },
    addLanguage() {
      this.languages.push({ language: "", institution: "", startDate: "", endDate: "" });
    },
    removeLanguage(index) {
      this.languages.splice(index, 1);
    }
  },
  watch: {
    showSuccessMessage(newValue) {
      if (newValue) {
        setTimeout(function () {
          this.showSuccessMessage = false;
        }, 10000);
      }
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
}

.background {
  background-size: cover;
  background-position: center;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  margin: 30px auto;
}

.form-container {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group-half {
  width: calc(50% - 10px);
  display: inline-block;
  vertical-align: top;
}

.form-group-half label {
  display: block;
}

select {
  width: calc(100% - 10px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select:focus {
  outline: none;
  border-color: #4caf50;
}

option {
  padding: 10px;
}

input,
textarea {
  width: calc(100% - 10px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="date"] {
  width: calc(100% - 20px);
}

.tooltip {
  position: relative;
  display: inline-block;
  margin-left: 5px;
}

.tooltip .fa-info-circle:before {
  content: "\f05a";
  font-family: FontAwesome;
}

.tooltip:hover::after {
  content: attr(title);
  position: absolute;
  z-index: 1;
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.buttons {
  text-align: center;
  margin-top: 20px;
}

.buttons button {
  margin: 0 5px;
}

.submit-button {
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
}
</style>
