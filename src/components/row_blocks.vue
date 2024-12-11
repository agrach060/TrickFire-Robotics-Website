<script lang="ts">
import { aboutUsSectionData } from '../data/about_us_data';
import '../scss/row_blocks.scss';


export default {
    name: "aboutUs",
    props: {
        image__left: String,
        title: String,
        text: String,
        image__left__responsive: String,
    },
    computed: {
        // bullet points in the last block
        isFifthBlock() {
            return this.title === aboutUsSectionData[4].title;
        },
        listItems() {
            // Define the bullet point items for the fifth block
            if (this.text) {
                return this.text.split("\n•");
            } else {
                return [];
            }
        },
    },
};
</script>

<template>
    <div class="image__container">
        <div class="image__left">
            <img :src="image__left">
        </div>

        <div class="words-on-background">
            <img src="../assets/images/fixed_index_header_left.png" />

            <div class="text-container">
                <span class="fs-3">{{ title }}</span>
                <template v-if="isFifthBlock">
                    <p>{{ listItems[0] }}</p>
                    <ul>
                        <li v-for="(item, index) in listItems.slice(1)" :key="index"
                            :class="{ 'bullet-point': index !== 0 && item.startsWith('• ') }">
                            {{ item.startsWith('• ') ? item.substring(2) : item }}
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <p>{{ text }}</p>
                </template>
            </div>
        </div>
    </div>

    <div class="image__container responsive">
        <div class="block responsive">
            <div class="image__left responsive">
                <img :src="image__left__responsive">
            </div>

            <div class="words-on-background responsive">
                <span class="fs-3">{{ title }}</span>

                <template v-if="isFifthBlock">
                    <p>{{ listItems[0] }}</p>
                    <ul>
                        <li v-for="(item, index) in listItems.slice(1)" :key="index"
                            :class="{ 'bullet-point': index !== 0 && item.startsWith('• ') }">
                            {{ item.startsWith('• ') ? item.substring(2) : item }}
                        </li>
                    </ul>
                </template>

                <template v-else>
                    <p>{{ text }}</p>
                </template>
            </div>
        </div>
    </div>
</template>






