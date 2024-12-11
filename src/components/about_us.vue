<script lang="ts">
import aboutUs from '../components/row_blocks.vue';
import '../scss/AboutUs.scss';
import { aboutUsSectionData } from '../data/about_us_data';

export default {
    name: 'MyComponent',
    components: {
        aboutUs
    },
    data() {
        return {
            aboutUsSectionData: aboutUsSectionData
        }
    }
}

</script>

<template>
    <div class="page">
        <header id="about_us_header">
            <div id="about_us_header__background">
                <div id="about_us_header__content">
                    <h1>MEET OUR TEAM

                    </h1>
                    <p style="color: white;">

                        Our team is composed of five major sub-teams including
                        mechanical team, electrical team, software team, financial team,
                        and outreach team. Our mission is to provide the technical and
                        professional development of our members by working with a
                        diverse group of people on industry leading robotics, as well as
                        building a strong community in UW Bothell.
                    </p>
                </div>
            </div>
        </header>

        <section id="about_us_section">
            <div id="about_us_rows">

                <!--SOFTWARE-->
                <aboutUs :image__left="aboutUsSectionData[0].image" :title="aboutUsSectionData[0].title"
                    :text="aboutUsSectionData[0].content"
                    :image__left__responsive="aboutUsSectionData[0].imageResponsive" />
                <!--MECHANICAL-->
                <aboutUs :image__left="aboutUsSectionData[1].image" :title="aboutUsSectionData[1].title"
                    :text="aboutUsSectionData[1].content"
                    :image__left__responsive="aboutUsSectionData[1].imageResponsive" />
                <!--ELECTRICAL-->
                <aboutUs :image__left="aboutUsSectionData[2].image" :title="aboutUsSectionData[2].title"
                    :text="aboutUsSectionData[2].content"
                    :image__left__responsive="aboutUsSectionData[2].imageResponsive" />
                <!--FINANCE-->
                <aboutUs :image__left="aboutUsSectionData[3].image" :title="aboutUsSectionData[3].title"
                    :text="aboutUsSectionData[3].content"
                    :image__left__responsive="aboutUsSectionData[3].imageResponsive" />
                <!--OUTREACH-->
                <aboutUs :image__left="aboutUsSectionData[4].image" :title="aboutUsSectionData[4].title"
                    :text="aboutUsSectionData[4].content"
                    :image__left__responsive="aboutUsSectionData[4].imageResponsive" />
            </div>
        </section>
    </div>
</template>
<style lang="scss"></style>