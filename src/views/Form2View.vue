<template>
    <div class="body">
        <div class="container">
            <header>Cadastro (2/3)</header>

            <form action="#">
                <div class="form first">
                    <div class="details personal">
                        <span class="title">Formação</span>

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

                            <div class="input-field">
                                <div v-if="education.level === 'Ensino Técnico'">
                                    <label for="technicalCourse">Curso Técnico:</label>
                                    <select v-model="education.course">
                                        <option value="">Selecione um curso técnico</option>
                                        <option v-for="course in technicalCourses" :key="course">{{ course }}</option>
                                    </select>
                                </div>

                                <div v-if="education.level === 'Ensino Superior'">
                                    <label for="graduationCourse">Curso de Graduação:</label>
                                    <select v-model="education.course">
                                        <option value="">Selecione uma graduação</option>
                                        <option v-for="course in commonCourses" :key="course">{{ course }}</option>
                                    </select>
                                </div>

                                <div v-if="education.level === 'Pós Graduação'">
                                    <label for="postGraduationCourse">Nome da Pós Graduação:</label>
                                    <input type="text" v-model="education.course" />
                                </div>
                            </div>

                            <div class="input-field">
                                <label for="instituition">Instituição</label>
                                <input type="text" placeholder="Nome da instituição">
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
                                <input type="date" v-model="education.startDate" max="9999-12-31">
                            </div>

                            <div class="input-field">
                                <label for="endDate">Data de Término:</label>
                                <input type="date" v-model="education.endDate" max="9999-12-31">
                            </div>
                        </div>

                        <div class="details personal">
                            <span class="title">Experiência</span>

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
                                    <label for="salary">Salário:</label>
                                    <input type="text" v-model="experience.salary" />
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
                                    <label for="city">Cidade:</label>
                                    <input type="text" v-model="experience.city" />
                                </div>

                                <div class="input-field">
                                    <label for="state">Estado:</label>
                                    <input type="text" v-model="experience.state" />
                                </div>

                                <div class="input-field">
                                    <label for="startDate">Data de entrada:</label>
                                    <input type="date" v-model="experience.startDate" max="9999-12-31" />
                                </div>

                                <div class="input-field"></div>

                                <div class="input-field">
                                    <label for="endDate">Data de saída:</label>
                                    <input type="date" v-model="experience.endDate" max="9999-12-31" />
                                </div>

                                <div class="form-group">
                                    <input type="checkbox" id="hasNoExperience" v-model="hasNoExperience">
                                    <label for="hasNoExperience"> Não possuo experiência</label>
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
                salary: "",
                description: "",
                startDate: "",
                endDate: "",
                currentlyWorking: false,
            },
        }
    },
    components: {
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
        addAnotherGraduation() {
            this.courses.push({ course: "", institution: "", startDate: "", endDate: "" });
        },
        goToPreviousStep() {
            this.$router.push("/cadastro")
        },
        goToNextStep() {
            this.$router.push("/cadastro3")
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
            })
        }
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

.form-group {
  margin-bottom: 20px;
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

.container form .submit-button{
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
</style>