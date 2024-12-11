<script lang="ts" >
import '../scss/nav.scss'

const isResponsive = window.innerWidth < 1000
const navLinkList = [
    {
        linkTitle: 'HOME',
        linkRouteName: '/'
    },
    {
        linkTitle: 'ABOUT US',
        linkRouteName: 'about_us'
    },
    {
        linkTitle: 'PROJECT',
        linkRouteName: 'projects'
    },
    {
        linkTitle: 'JOIN US',
        linkRouteName: 'join_us'
    },
    {
        linkTitle: 'SPONSORSHIP',
        linkRouteName: 'sponsorships'
    },
]
export default {

    data() {
        let navTop = '0%'
        let prevScrollPos = window.pageYOffset;

        return {
            isResponsive,
            navLinkList,
            prevScrollPos,
            navTop
        }
    },

    //handle link
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {
        showHideNavHandle() {
            console.log('scroll')
            let currentScrollPos = window.pageYOffset;
            if (this.prevScrollPos > currentScrollPos) {
                this.navTop = '0%'
            }
            else {
                this.navTop = '-100%'
            }
            this.prevScrollPos = currentScrollPos;
        }
    }


}

</script>

<template>
    <nav class="fs-5 position-fixed" v-on:scroll="showHideNavHandle" v-bind:style="{
        top: navTop
    }">
        <!--burger icon button-->
        <div class="pt-3 pb-2 px-1 mx-3 fs-2 nav__burger" data-toggle="collapse" data-target="#navBar__link">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </div>

        <!--nav link-->
        <ul class="m-0 p-0" :class="isResponsive ? 'collapse' : ''" id="navBar__link">

            <li v-for="navLink in navLinkList" class="py-3 px-1 mx-3" :class="(currentRouteName == navLink.linkRouteName) ||
                (currentRouteName == 'home' && navLink.linkTitle == 'HOME') ? 'navBar-activePage' : ''">
                <router-link :to="navLink.linkRouteName">
                    {{ navLink.linkTitle }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss"></style>