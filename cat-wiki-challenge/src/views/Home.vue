<template>
    <div>
        <UpperPart v-if="isBreedListFetched" :breedList="breedList"/>
        <LowerPart />
    </div>
</template>

<script>
import UpperPart from '../components/UpperPart'
import LowerPart from '../components/LowerPart'

export default {
    created() {
        this.getBreedList()
    },

    components: {
        UpperPart,
        LowerPart,
    },

    data() {
        return {
            breedList: [],
            isBreedListFetched: false,
        }
    },

    methods: {
        getBreedList() {
            fetch('https://api.thecatapi.com/v1/breeds')
                .then((response) => {
                    return response.json()
                })
                .then((breeds) => {
                    this.breedList = breeds
                })
                .then(() => {
                    this.isBreedListFetched = true
                })
        },
    },
}
</script>

<style>
.title-background {
    background: url("../../images/HeroImagelg.png");
    background-size: cover;
    border-radius: 42px 42px 0px 0px;
}
</style>
