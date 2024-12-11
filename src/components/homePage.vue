<script lang="ts">
import '../scss/homePage.scss';
import fetchData from '@/ultility/fetchData';
import calendar from './calendar.vue'

const SHEET_ID = '1rmibTT-UsrZfB9X58mcfgwKb8inYeoKoxYo3RletQ_s'
const SHEET_TITLE = 'Sheet1'
const SHEET_RANGE = 'A6:E10'
const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`

const scrollBtnHandle = () => {
    window.scrollBy(0, 100);
}

const windowHeight = window.innerHeight

export default {
    components: { calendar },
    data() {

        return { calendarSchedule: null }
    },
    methods: {
        //handle scroll down button on the header
        scrollBtnHandle() {
            window.scrollBy(0, windowHeight);
        },

        //fetch data from google sheet
        async fetchData() {
            this.calendarSchedule = await fetchData(FULL_URL)
        }
    },

    mounted() {
        this.fetchData()
    }
}



</script>

<template>
    <div class="page">
        <header>
            <!--header content-->
            <div class="header__content">

                <h1 class="m-0 d-flex flex-column justify-content-center">
                    <span class="text-primary my-1">TRICKFIRE</span>
                    ROBOTICS
                </h1>
                <img src="../images/android-chrome-512x512.png" class=" header__image" />
                <p class="fs-5 m-0">
                    TrickFire Robotics is a student-led robotics team focused on providing a unique educational experience
                    through hands-on work on large scale projects. Since 2016 the team has traveled to the Kennedy Space
                    Center
                    to represent the University of Washington Bothell at the annual NASA Robotics Mining Competition. A
                    competition that pits fifty college teams to design and build a rover that can mine on the surface of
                    the
                    moon.
                </p>
            </div>
            <!--header scroll down button-->
            <div class="d-flex flex-column header__scrollBtn" @click="scrollBtnHandle">

                <div class="d-flex header__scrollGreen">
                    <div class="bg-primary header__btn header__scroll--left"></div>
                    <div class="bg-primary header__btn header__scroll--right"></div>
                </div>

                <div class="d-flex header__scrollWhite">
                    <div class="bg-white header__btn header__scroll--left"></div>
                    <div class="bg-white header__btn header__scroll--right"></div>
                </div>
            </div>
        </header>

        <!--calendar-->
        <calendar v-if="calendarSchedule" :calendarSchedule="calendarSchedule" />

    </div>
</template>

<style lang="scss"></style>