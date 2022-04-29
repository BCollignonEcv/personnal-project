<template>
    <!-- <CustomPagination :sections="dataStore.getSections" /> -->
    <Swiper :direction="'vertical'" :keyboard="true" :mousewheel="{ forceToAxis: true }" :modules="modules">
        <SwiperSlide>
            <section class="duo centered">
                <div>
                    <h1>Baptiste COLLIGNON</h1>
                    <h2 class="">Développeur WEB</h2>
                    <p class="sub_text">Né à Brest le 19 novembre 1996</p>
                    <p></p>
                </div>
                <div class="col-4">
                    <picture>
                        <img class="img big" src="@/assets/imgs/profile.jpg" alt="">
                    </picture>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <p class="title">Apprendre</p>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <p class="title">Médecine ou ?</p>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <div>
                    <span class="date">2015 - 2016</span>
                    <p class="title">Classes préparatoires : EPITA</p>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="duo">
                <div class="col-6">
                    <span class="date bg_secondary_dark">2016 - 2018</span>
                    <p class="title">Bachelor Digital Management</p>
                    <p class="title">ESSCA</p>
                    <div class="list_container">
                        <ul class="list col-6">
                            <li class="list_item">
                                <Icone :name="'todo'" :color="'success'" />Management
                            </li>
                            <li class="list_item">
                                <Icone :name="'todo'" />Gestion de projet
                            </li>
                            <li class="list_item">
                                <Icone :name="'todo'" />Marketing
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 subSubjects_container vertical">
                    <div class="subSubject">
                        <p class="title">Stage - E-testing</p>
                        <div class="list_container">
                            <ul class="list">
                                <li class="list_item">
                                    <Icone :name="'todo'" />Moulinette d'intégration de test
                                </li>
                            </ul>
                        </div>
                        <div style="margin-top: auto">
                            <span class="bubble bg_success">PHP</span>
                            <span class="bubble bg_success">JavaScript</span>
                            <span class="bubble bg_success">HTML</span>
                            <span class="bubble bg_success">CSS</span>
                        </div>
                    </div>
                    <div class="subSubject">
                        <p class="title">Alternance - SYD GROUPE</p>
                        <div class="list_container">
                            <ul class="list">
                                <li class="list_item">
                                    <Icone :name="'cross'" />Manque de reconnaissance
                                </li>
                                <li class="list_item">
                                    <Icone :name="'cross'" />Manque d'apprentissage
                                </li>
                            </ul>
                        </div>
                        <div style="margin-top: auto">
                            <span class="bubble bg_success">Dynamics CRM</span>
                            <span class="bubble bg_success">C#</span>
                        </div>
                    </div>
                    <div class="subSubject">
                        <p class="title">Course Croisière de l'EDHEC</p>
                        <div class="list_container">
                            <ul class="list col-6">
                                <li class="list_item">
                                    <Icone :name="'todo'" />Management
                                </li>
                                <li class="list_item">
                                    <Icone :name="'todo'" />Gestion de projet
                                </li>
                                <li class="list_item">
                                    <Icone :name="'todo'" />Entreprenariat
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <p class="title">Gagner du temps</p>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <div>
                    <span class="date bg_primary_dark">2019</span>
                    <p class="title">E-testing - CDD</p>
                    <div class="subSubjects_container horizontal">
                        <div class="subSubject">
                            <p class="title">Développement</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Moteur de question
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Backoffice
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Wordpress
                                    </li>
                                </ul>
                            </div>
                            <div style="margin-top: auto">
                                <span class="bubble bg_success">PHP</span>
                                <span class="bubble bg_success">JavaScript</span>
                                <span class="bubble bg_success">HTML</span>
                                <span class="bubble bg_success">CSS</span>
                            </div>
                        </div>
                        <div class="subSubject">
                            <p class="title">Marketing</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Animation des reseaux sociaux
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Participations salons PRO
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="subSubject">
                            <p class="title">Gestion de projet</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Pole Emploi
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <div>
                    <span class="date bg_primary_dark">2020</span>
                    <p class="title">Freelance</p>
                    <div class="subSubjects_container horizontal">
                        <div class="subSubject">
                            <p class="title">E-testing</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Integration : GSUITE
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Marketing : Salon RH
                                    </li>
                                </ul>
                            </div>
                            <div style="margin-top: auto">
                                <span class="bubble bg_success">Google Suite</span>
                            </div>
                        </div>
                        <div class="subSubject">
                            <p class="title">CG Concept</p>
                            <p class="description">Développement d'un site vitrine</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Portfolio
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />SEO
                                    </li>
                                    <li class="list_item">
                                        <a href="https://www.cgconcept-pumptrack.fr/" target="_blank">
                                            <Icone :name="'web'" />Website
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="margin-top: auto">
                                <span class="bubble bg_success">HTML</span>
                                <span class="bubble bg_success">Javascript</span>
                                <span class="bubble bg_success">CSS</span>
                            </div>
                        </div>
                        <div class="subSubject">
                            <p class="title">Atlanticoeur</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Prise de rendez-vous
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Vulgarisation
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />SEO
                                    </li>
                                    <li class="list_item">
                                        <a href="https://www.atlanticoeur.fr/" target="_blank">
                                            <Icone :name="'web'" />Website
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div style="margin-top: auto">
                                <span class="bubble bg_success">Vue JS</span>
                                <span class="bubble bg_success">HTML</span>
                                <span class="bubble bg_success">CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <p class="title">Le freelance c'est pas pour moi...</p>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <p class="title">Faire grandir mon bébé</p>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <div>
                    <span class="date bg_secondary_dark">2020 - 2022</span>
                    <p class="title">Master Développement WEB</p>
                    <p class="title">ECV Digital</p>
                    <div class="subSubjects_container vertical">
                        <div class="subSubject">
                            <p class="title">Frameword JS</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Node JS
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Vue JS
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="subSubject">
                            <p class="title">Frameword PHP</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Laravel
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="subSubject">
                            <p class="title">Equipe</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Apprendre, comprendre et s'entraider
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="duo">
                <div class="col-6">
                    <span class="date bg_secondary_dark">2020 - 2022</span>
                    <p class="title">Capgemini</p>
                    <p class="title">L'Oréal</p>
                    <div class="subSubjects_container vertical">
                        <div class="subSubject">
                            <p class="title">Rollout</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <a href="https://www.valentino-beauty.fr/" target="_blank">
                                            <Icone :name="'web'" />Valentino beauty
                                        </a>
                                    </li>
                                    <li class="list_item">
                                        <a href="https://www.helenarubinstein.fr/" target="_blank">
                                            <Icone :name="'web'" />Helena Rubinstein
                                        </a>
                                    </li>
                                    <li class="list_item">
                                        <a href="https://www.armanibeauty.fr/" target="_blank">
                                            <Icone :name="'web'" />Giorgio Armani beauty
                                        </a>
                                    </li>
                                    <li class="list_item">
                                        <a href="https://www.kerastase.fr/" target="_blank">
                                            <Icone :name="'web'" />Kerastase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="subSubject">
                            <p class="title">Liaison E-commerce & CRM</p>
                            <div class="list_container">
                                <ul class="list">
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Consents
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Customers
                                    </li>
                                    <li class="list_item">
                                        <Icone :name="'todo'" />Orders
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text">
                        <p class="title">Complexité</p>
                        <p class="description">Layers, entités et budget</p>
                        <p class="title">Exigence</p>
                        <p class="description">Qualité du code avant tout.<br><br>Changement vers la quantité.</p>
                        <p class="title">Distanciel</p>
                        <p class="description">Les 9 premiers mois d'alternance effectués en distanciel.</p>
                    </div>

                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <div>
                    <p class="title">A plusieurs c'est mieux</p>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <div>
                    <p class="title">Apprendre</p>
                    <p class="title">Gagner du temps</p>
                    <p class="title">Faire grandir mon bébé</p>
                    <p class="title">A plusieurs c'est mieux</p>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section class="single">
                <p class="title">Merci !</p>
            </section>
        </SwiperSlide>
    </Swiper>
</template>

<script>
import { useDataStore } from '@/stores/Data.store'
import { Pagination as CustomPagination } from '@/components/custom.components/Swiper'
import { Icone } from '@/components/basic.components/'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Keyboard, Pagination } from "swiper";


export default {
    components: {
        Swiper, SwiperSlide,
        CustomPagination,
        Icone
    },
    setup() {
        const dataStore = useDataStore();
        return {
            dataStore, modules: [Mousewheel, Keyboard, Pagination]
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    @include container;
}

.swiper {
    width: 100%;
    height: calc(100vh - $header-height);
    padding-bottom: $header-height;

    .swiper-slide {
        width: 100%;
        height: 100%;
        padding: $margin-medium;

        section {
            height: 100%;
            padding: 0 $margin-xxlarge;
        }
    }
}

.single {
    @include container;
    justify-content: space-around;
    align-items: center;

    &>div {
        min-width: 50vw;
    }
}

.duo {
    @include container;
    column-gap: $margin-xlarge;
    align-items: center;

    &.centered {
        justify-content: space-around;
    }
}

.date {
    @include bubble;
    display: inline-block;
    font-size: $font-medium;

    &.bg_primary_dark {
        background-color: $color-primary;
    }

    &.bg_secondary_dark {
        background-color: $color-secondary;
    }
}

.bubble {
    @include bubble;
    display: inline-block;
    font-size: $font-small;
    margin-bottom: 0;

    &.bg_primary_dark {
        background-color: $color-primary;
    }

    &.bg_secondary_dark {
        background-color: $color-secondary;
    }

    &.bg_success {
        background-color: $color-success;
    }

    &.bg_neutral {
        background-color: $color-neutral;
    }

    &+& {
        margin-left: $margin-medium;
    }
}

.subSubjects_container {
    &.horizontal {
        @include container;

        .subSubject {
            margin-right: $margin-large;
        }
    }

    &.vertical {
        .subSubject {
            margin-bottom: $margin-large;
        }
    }
}

.subSubject {
    padding: $margin-large;
    border-radius: $margin-large;
    border: 1px solid $color-primary;
    box-shadow: $margin-small $margin-small 0 0px $color-secondary;
    min-width: 25vw;
    display: flex;
    flex-direction: column;


    .title {
        font-size: $font-large;
    }

}

.title {
    font-size: $font-xxlarge;
    font-weight: bold;
    margin-bottom: $margin-xxsmall;

    &+.title {
        margin-top: -$margin-xxsmall;
    }

    &+.description {
        margin-top: -$margin-xxsmall;
    }
}

.description {
    font-size: $font-medium;
    margin-bottom: $margin-small;
}

.text{
    margin-left: $margin-xxlarge;

    .title {
    font-size: $font-large;
    font-weight: bold;
    margin-bottom: $margin-xxsmall;

    &+.title {
        margin-top: -$margin-xxsmall;
    }

    &+.description {
        margin-top: -$margin-xxsmall;
        margin-bottom: $margin-xxlarge;
    }
}

.description {
    font-size: $font-medium;
    margin-bottom: $margin-small;
}
}

.list_container {
    @include container;

    .list {
        .list_item {
            padding: $margin-xxsmall;
        }
    }
}

.img.big {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: -$margin-medium $margin-medium 0 0px $color-secondary;
}
</style>