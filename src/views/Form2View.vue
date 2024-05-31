<template>
    <div class="body">
        <div class="container">
            <header>Cadastro (2/3)</header>

            <form action="#" name="formulario">
                <div class="form first">
                    <div class="details personal">
                        <div v-for="(education, index) in educations" :key="index">
                            <span class="title">{{ educationTitles[index] }}</span>
                            <div class="fields">
                                <div class="input-field">
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

                                <div class="input-field" v-if="education.level === 'Ensino Técnico'">
                                    <label for="technicalCourse">Curso Técnico:</label>
                                    <select v-model="education.course">
                                        <option value="">Selecione um curso técnico</option>
                                        <option v-for="course in technicalCourses" :key="course">{{ course }}</option>
                                    </select>
                                </div>

                                <div class="input-field" v-if="education.level === 'Ensino Superior'">
                                    <label for="graduationCourse">Curso de Graduação:</label>
                                    <select v-model="education.course">
                                        <option value="">Selecione uma graduação</option>
                                        <option v-for="course in commonCourses" :key="course">{{ course }}</option>
                                    </select>
                                </div>

                                <div class="input-field" v-if="education.level === 'Pós Graduação'">
                                    <label for="postGraduationCourse">Nome da Pós Graduação:</label>
                                    <input type="text" v-model="education.course" />
                                </div>

                                <div class="input-field">
                                    <label for="institution">Instituição:</label>
                                    <input type="text" v-model="education.institution"
                                        placeholder="Nome da instituição" />
                                </div>

                                <div class="input-field">
                                    <label for="status">Status do Curso:</label>
                                    <select v-model="education.status">
                                        <option value="">Selecione o status do curso</option>
                                        <option value="Em andamento">Em andamento</option>
                                        <option value="Concluído">Concluído</option>
                                    </select>
                                </div>

                                <div class="input-field">
                                    <label for="startDate">Data de Início:</label>
                                    <input type="date" v-model="education.startDate" max="9999-12-31" />
                                </div>

                                <div class="input-field">
                                    <label for="endDate">Data de Término:</label>
                                    <input type="date" v-model="education.endDate" max="9999-12-31" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" @click="removeEducation(index)" class="semi-button-remove">
                            <i class="uil uil-multiply"></i>
                        </button>
                        <button type="button" @click="addNewEducation" class="semi-button-add">
                            <i class="uil uil-plus"></i>
                        </button>
                    </div>

                    <div class="details personal">
                        <div v-for="(experience, index) in experiences" :key="index">
                            <span class="title">{{ experienceTitles[index] }}</span>
                            <div class="fields">
                                <div class="input-field">
                                    <label for="position">Cargo:</label>
                                    <input type="text" v-model="experience.position" />
                                </div>

                                <div class="input-field">
                                    <label for="company">Empresa:</label>
                                    <input type="text" v-model="experience.company" />
                                </div>

                                <div class="input-field">
                                    <label for="salary">Último Salário:</label>
                                    <input type="text" v-model="experience.salary" placeholder="R$" />
                                </div>

                                <div class="input-field textarea-field">
                                    <label for="activities">Principais Atividades:</label>
                                    <textarea v-model="experience.activities"
                                        placeholder="Descreva suas principais atividades" />
                                </div>

                                <div class="side-fields">
                                    <div class="input-field">
                                        <label for="state">Estado:</label>
                                        <select v-model="experience.state" @change="updateCities">
                                            <option value="">Selecione um estado</option>
                                            <option v-for="state in states" :key="state">{{ state }}</option>
                                        </select>
                                    </div>

                                    <div class="input-field">
                                        <label for="city">Cidade:</label>
                                        <select v-model="experience.city">
                                            <option value="">Selecione uma cidade</option>
                                            <option v-for="city in cities" :key="city"> {{ city }}</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="input-field">
                                        <label for="workMode">Modelo de trabalho:</label>
                                        <select v-model="experience.workMode">
                                            <option value="Remoto">Remoto</option>
                                            <option value="Presencial">Presencial</option>
                                            <option value="Híbrido">Híbrido</option>
                                        </select>
                                    </div>

                                <div class="input-field">
                                    <label for="startDate">Data de entrada:</label>
                                    <input type="date" v-model="experience.startDate" max="9999-12-31" />
                                </div>

                                <div class="input-field">
                                    <label for="endDate">Data de saída:</label>
                                    <input type="date" v-model="experience.endDate" max="9999-12-31" />
                                </div>

                                <div class="form-group">
                                    <input type="checkbox" id="hasNoExperience" v-model="hasNoExperience">
                                    <label for="hasNoExperience"> Não possuo experiência</label>
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <button type="button" @click="removeExperience(index)" class="semi-button-remove">
                                <i class="uil uil-multiply"></i>
                            </button>
                            <button type="button" @click="addNewExperience" class="semi-button-add">
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>

                    <div class="buttons">
                        <div class="backBtn" @click="goToPreviousStep()">
                            <i class="uil uil-navigator"></i>
                            <span class="btnText">Voltar</span>
                        </div>

                        <button class="nextBtn" @click="goToNextStep()">
                            <span class="btnText">Próximo</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    name: "Form2View",
    data() {
        return {
            educations: [
                {
                    level: '',
                    course: '',
                    institution: '',
                    status: '',
                    startDate: '',
                    endDate: '',
                },
            ],
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
                "Técnico em Informática",
                "Design de Moda",
            ],
            commonCourses: [
                "Administração",
                "Administração Pública",
                "Recursos Humanos",
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
                "Amazonas": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tefé", "Tabatinga", "São Gabriel da Cachoeira", "Humaitá", "Iranduba"],
                "Bahia": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas"],
                "Ceará": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixadá"],
                "Distrito Federal": ["Brasília", "Ceilândia", "Gama", "Taguatinga", "Paranoá", "Planaltina", "Samambaia", "Santa Maria", "Sobradinho", "Recanto das Emas"],
                "Espírito Santo": ["Vitória", "Vila Velha", "Serra", "Cariacica", "Cachoeiro de Itapemirim", "Linhares", "São Mateus", "Guarapari", "Colatina", "Aracruz"],
                "Goiás": ["Goiânia", "Anápolis", "Aparecida de Goiânia", "Rio Verde", "Águas Lindas de Goiás", "Luziânia", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama"],
                "Maranhão": ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas"],
                "Mato Grosso": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", "Sorriso", "Lucas do Rio Verde", "Primavera do Leste", "Barra do Garças"],
                "Mato Grosso do Sul": ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Naviraí", "Nova Andradina", "Aquidauana", "Sidrolândia", "Paranaíba"],
                "Minas Gerais": ["Belo Horizonte", "Uberlândia", "Contagem", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas"],
                "Pará": ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Parauapebas", "Itaituba", "Abaetetuba", "Cametá", "São Félix do Xingu"],
                "Paraíba": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cajazeiras", "Cabedelo", "Guarabira", "Santa Luzia"],
                "Paraná": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá"],
                "Pernambuco": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão"],
                "Piauí": ["Teresina", "Parnaíba", "Picos", "Campo Maior", "Floriano", "Piripiri", "Barras", "Altos", "José de Freitas", "Oeiras"],
                "Rio de Janeiro": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Campos dos Goytacazes", "Belford Roxo", "São João de Meriti", "Petrópolis", "Volta Redonda"],
                "Rio Grande do Norte": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Ceará-Mirim", "Caicó", "Açu", "Currais Novos", "São José de Mipibu"],
                "Rio Grande do Sul": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande"],
                "Rondônia": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Rolim de Moura", "Guajará-Mirim", "Jaru", "Ouro Preto do Oeste", "Pimenta Bueno"],
                "Roraima": ["Boa Vista", "Caracaraí", "Rorainópolis", "Bonfim", "Mucajaí", "São Luiz", "Cantá", "Alto Alegre", "Pacaraima", "Caroebe"],
                "Santa Catarina": ["Florianópolis", "Joinville", "Blumenau", "São José", "Criciúma", "Chapecó", "Itajaí", "Jaraguá do Sul", "Palhoça", "Lages"],
                "São Paulo": ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André", "São José dos Campos", "Osasco", "Ribeirão Preto", "Sorocaba", "Mauá"],
                "Sergipe": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão", "Estância", "Tobias Barreto", "Simão Dias", "Nossa Senhora da Glória", "Itabaianinha"],
                "Tocantins": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins", "Gurupi", "Colinas do Tocantins", "Guaraí", "Formoso do Araguaia", "Dianópolis"]
            },
            cities: [],
            hasExperience: false,
            experiences: [
                {
                    position: "",
                    company: "",
                    salary: "",
                    activities: "",
                    workMode: "Remoto",
                    city: "",
                    state: "",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: false,
                }
            ],
            experience: {
                position: "",
                company: "",
                salary: "",
                activities: "",
                workMode: "Remoto",
                city: "",
                state: "",
                startDate: "",
                endDate: "",
                currentlyWorking: false,
            },
        }
    },
    computed: {
        educationTitles() {
            return this.educations.map((_, index) => index === 0 ? 'Formação' : 'Adicionar Nova Formação');
        },
        experienceTitles() {
            return this.experiences.map((_, index) => index === 0 ? 'Experiência' : 'Adicionar Nova Experiência');
        }
    },
    methods: {
        addNewEducation() {
            this.educations.push({
                level: '',
                course: '',
                institution: '',
                status: '',
                startDate: '',
                endDate: '',
            });
            this.educationTitle = 'Adicionar Nova Formação';
        },
        removeEducation(index) {
            this.educations.splice(index, 1);
        },
        goToPreviousStep() {
            this.$router.push("/cadastro")
        },
        goToNextStep() {
            this.$router.push("/cadastro3")
        },
        addNewExperience() {
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
        updateCities() {
            const selectedState = this.identity.state;
            this.cities = this.citiesByState[selectedState] || [];
        },
    }
}
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

form .fields .input-field.textarea-field {
    width: calc(100% / 3 * 2 - 15px);
}

form .fields .side-fields {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% / 3 - 15px);
    margin-top: 8px;
}

form .fields .side-fields .input-field {
    width: 100%;
}

.input-field label {
    font-size: 12px;
    font-weight: 500;
    color: #2e2e2e;
}

.input-field input,
.input-field textarea {
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

.input-field textarea {
    height: 130px;
    resize: none;
    padding-top: 10px;
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
    width: 100%;
}

.input-field select:focus,
.input-field select:valid {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
}

.form-group {
    margin-bottom: 20px;
}

.input-field input:is(:focus, :valid),
.input-field textarea:is(:focus, :valid) {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
}

.input-field input[type="date"] {
    color: #707070;
}

.input-field input[type="date"]:valid {
    color: #333;
}

.container form button,
.backBtn {
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

.container form .submit-button {
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
    background-color: #4caf50;
    transition: all 0.3s linear;
    cursor: pointer;
}

.container form button,
.container form .backBtn {
    font-size: 14px;
    font-weight: 400;
}

form button:hover {
    background-color: #265df2;
}

form button i,
form .backBtn i {
    margin: 0 6px;
}

form .backBtn i {
    transform: rotate(180deg);
}

form .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

form .buttons button,
.backBtn {
    margin-right: 14px;
}

.education-entry {
    margin-bottom: 20px;
}

.container form .semi-button-remove,
.container form .semi-button-add {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    max-width: 200px;
    width: 10%;
    border: none;
    outline: none;
    color: #fff;
    border-radius: 35px;
    margin: 25px 0;
    transition: all 0.3s linear;
    cursor: pointer;
}

.container form .semi-button-remove {
    background-color: rgb(214, 15, 15);
}

.container form .semi-button-add {
    background-color: rgb(9, 189, 9);
}
</style>
