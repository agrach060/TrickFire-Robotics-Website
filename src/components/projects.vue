<script lang="ts">
import aboutUs from '../components/row_blocks.vue';
import '../scss/Projects.scss';
import { projectsSectionData } from '../data/projects_data';

export default {
    name: 'MyComponent',
    components: {
        aboutUs
    },
    data() {
        return {
            projectsSectionData: projectsSectionData
        }
    }
}

</script>

<template>
    <div class="page">
        <header id="projects_header">
            <div id="projects_header__background">
                <div id="projects_header__content">
                    <h1>PROJECT
                    </h1>
                    <p style="color: white;">
                        In six years, we have built four rovers for the NASA Robotics Mining
                        Competition - A competition hosted by NASA, where fifty teams across
                        the United States compete to build the best rover that can mine under a
                        simulated surface of the moon. A rover starts at the home base,
                        navigates through obstacles, and then reaches a mining zone where it
                        has to break through a few layers. It then digs out regolith (gravel) and
                        trasports it back to the home base, where it deposits the regolith. The
                        process is repeated multiple times.
                    </p>
                </div>
            </div>
        </header>

        <section id="projects_section">
            <div id="projects_rows">

                <!--Houdini-->
                <aboutUs :image__left="projectsSectionData[0].image" :title="projectsSectionData[0].title"
                    :text="projectsSectionData[0].content"
                    :image__left__responsive="projectsSectionData[0].imageResponsive" />
                <!--Atlas-->
                <aboutUs :image__left="projectsSectionData[1].image" :title="projectsSectionData[1].title"
                    :text="projectsSectionData[1].content"
                    :image__left__responsive="projectsSectionData[1].imageResponsive" />
                <!--Grimlock-->
                <aboutUs :image__left="projectsSectionData[2].image" :title="projectsSectionData[2].title"
                    :text="projectsSectionData[2].content"
                    :image__left__responsive="projectsSectionData[2].imageResponsive" />
                <!--Daybreak-->
                <aboutUs :image__left="projectsSectionData[3].image" :title="projectsSectionData[3].title"
                    :text="projectsSectionData[3].content"
                    :image__left__responsive="projectsSectionData[3].imageResponsive" />
            </div>
        </section>
    </div>
</template>
<style lang="scss"></style>