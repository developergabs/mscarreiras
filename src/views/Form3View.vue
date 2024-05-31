<template>
    <div class="body">
        <div class="container">
            <header>Cadastro (3/3)</header>

            <form action="#">
                <div class="form first">
                    <div class="details personal">
                        <div v-for="(course, index) in courses" :key="index">
                            <span class="title">{{ courseTitles[index] }}</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label for="course">Curso Complementar:</label>
                                    <select v-model="course.course">
                                        <option value="">Selecione seu curso</option>
                                        <option v-for="courseOption in availableCourses" :key="courseOption"
                                            :value="courseOption">{{ courseOption }}</option>
                                    </select>
                                </div>

                                <div v-if="course.course === 'Outro'" class="input-field">
                                    <label for="otherCourse">Nome do curso:</label>
                                    <input type="text" v-model="course.otherCourse"
                                        placeholder="Digite o nome do curso">
                                </div>

                                <div class="input-field">
                                    <label for="courseInstituition">Instituição:</label>
                                    <input type="text" v-model="course.instituition">
                                </div>

                                <div class="input-field">
                                    <label for="extraHours">Horas cursadas:</label>
                                    <input type="text" v-model="course.extraHours"
                                        placeholder="Informe as horas cursadas">
                                </div>

                                <div class="input-field">
                                    <label for="courseStartDate">Data de Inicio:</label>
                                    <input type="date" v-model="course.startDate" max="9999-12-31">
                                </div>

                                <div class="input-field">
                                    <label for="courseEndDate">Data de Término:</label>
                                    <input type="date" v-model="course.endDate" max="9999-12-31">
                                </div>
                            </div>
                        </div>
                        <div class="buttons">
                            <button type="button" @click="removeCourse(index)" class="semi-button-remove"><i
                                    class="uil uil-multiply"></i></button>
                            <button type="button" @click="addNewCourse" class="semi-button-add"><i
                                    class="uil uil-plus"></i></button>
                        </div>

                        <div class="details personal">
                            <div v-for="(language, index) in languages" :key="index">
                                <span class="title">{{ languageTitles[index] }}</span>

                                <div class="fields">
                                    <div class="input-field">
                                        <label for="language">Idioma:</label>
                                        <select v-model="language.language">
                                            <option value="">Selecione o idioma</option>
                                            <option v-for="lang in availableLanguages" :key="lang" :value="lang">{{ lang
                                                }}</option>
                                        </select>
                                    </div>

                                    <div class="input-field">
                                        <label for="proficiency">Nível de Proficiência:</label>
                                        <select v-model="language.proficiency">
                                            <option value="">Selecione o seu nível de proficiência</option>
                                            <option value="Básico">Básico</option>
                                            <option value="Intermediário">Intermediário</option>
                                            <option value="Avançado">Avançado</option>
                                            <option value="Fluente">Fluente</option>
                                        </select>
                                    </div>

                                    <div class="input-field">
                                        <label for="languageInstituition">Instituição:</label>
                                        <input type="text" v-model="language.institution">
                                    </div>

                                    <div class="input-field">
                                        <label for="languageStartDate">Data de Inicio:</label>
                                        <input type="date" v-model="language.startDate" max="9999-12-31">
                                    </div>

                                    <div class="input-field">
                                        <label for="languageEndDate">Data de Término:</label>
                                        <input type="date" v-model="language.endDate" max="9999-12-31">
                                    </div>
                                </div>
                            </div>
                            <div class="buttons">
                                <button type="button" @click="removeLanguage(index)" class="semi-button-remove"><i
                                        class="uil uil-multiply"></i></button>
                                <button type="button" @click="addNewLanguage" class="semi-button-add"><i
                                        class="uil uil-plus"></i></button>
                            </div>
                            <div class="buttons">
                                <div class="backBtn" @click="goToPreviousStep()">
                                    <i class="uil uil-navigator"></i>
                                    <span class="btnText">Voltar</span>
                                </div>

                                <button class="nextBtn" @click="saveButton()">
                                    <span class="btnText">Salvar</span>
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
    name: "Form3View",
    data() {
        return {
            courses: [
                {
                    course: "",
                    institution: "",
                    extraHours: "",
                    startDate: "",
                    endDate: ""
                }
            ],
            languages: [
                {
                    language: "",
                    proficiency: "",
                    institution: "",
                    startDate: "",
                    endDate: ""
                }
            ],
            availableLanguages: [
                'Inglês',
                'Espanhol',
                'Francês',
                'Alemão',
                'Chinês',
                'Japonês',
                'Português',
                'Russo',
                'Árabe',
                'Hindi',
                'Italiano',
                'Coreano',
                'Holandês',
                'Sueco',
                'Turco'
            ],
            availableCourses: [
                'Gestão de Projetos',
                'Marketing Digital',
                'Design Gráfico',
                'Programação e Desenvolvimento Web',
                'Análise de Dados',
                'Idiomas Estrangeiros',
                'Escrita Criativa',
                'Fotografia',
                'Finanças Pessoais',
                'Comunicação e Oratória',
                'Liderança e Gestão de Equipes',
                'Negociação e Vendas',
                'Mindfulness e Meditação',
                'Desenvolvimento Pessoal e Coaching',
                'Empreendedorismo',
                'Ética e Sustentabilidade',
                'Direito para Não Juristas',
                'Primeiros Socorros',
                'Segurança da Informação',
                'Inteligência Artificial e Machine Learning',
                'Outro'
            ]
        };
    },
    computed: {
        courseTitles() {
            return this.courses.map((_, index) => index === 0 ? 'Curso Complementar' : 'Adicionar Novo Curso');
        },
        languageTitles() {
            return this.languages.map((_, index) => index === 0 ? 'Idioma' : 'Adicionar Novo Idioma');
        }
    },
    methods: {
        addNewCourse() {
            this.courses.push({
                course: '',
                institution: '',
                extraHours: '',
                startDate: '',
                endDate: ''
            });
        },
        removeCourse(index) {
            this.courses.splice(index, 1);
        },
        addNewLanguage() {
            this.languages.push({
                language: "",
                proficiency: "",
                institution: "",
                startDate: "",
                endDate: ""
            });
        },
        removeLanguage(index) {
            this.languages.splice(index, 1);
        },
        goToPreviousStep() {
            this.$router.push("/cadastro2")
        },
        saveButton() {
            this.$router.push("/success")
        }
    }
}
</script>
ript>

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