<template>
    <div class="container">
        <div class="basic-container title-background"  v-if="isHomePage">
            <div class="title-container">
                <h1 class="CatWiki-title">Catwiki</h1>
                <h1 class="CatWiki-subtitle">
                    Get to know more about your cat breed
                </h1>
                <div>
                    <input id="search-box" class="search-box" list="cat-breeds" v-on:keyup.enter="getBreedInfo"/>
                    <datalist id="cat-breeds">
                        <option v-for="breed in breedList" :key="breed.id">
                            {{breed.name}}
                        </option>
                    </datalist>
                </div>
            </div>
        </div>

        <div v-else class="basic-container">
            <div class="breedtitle-container">
                <img class="breedImg" :src="breedImgUrl">
                <div class="breedDetails">
                    <h1 class="breed-title">{{breed.name}}</h1>
                    <p class="breed-description">{{breed.description}}</p>
                    <p>Temperament: {{breed.temperament}}</p>
                    <p>Origin:: {{breed.origin}}</p>
                    <p>Life Span: {{breed.life_span}} years</p>
                    <div class="breed-display-container">
                        <breedProperties :num="breed.adaptability" property="Adaptability"/>
                        <breedProperties :num="breed.affection_level" property="Affection Level"/>
                        <breedProperties :num="breed.child_friendly" property="Child Friendly"/>
                        <breedProperties :num="breed.grooming" property="Grooming"/>
                        <breedProperties :num="breed.intelligence" property="Intelligence"/>
                        <breedProperties :num="breed.health_issues" property="Health Issues"/>
                        <breedProperties :num="breed.social_needs" property="Social Needs"/>
                        <breedProperties :num="breed.stranger_friendly" property="Stranger Friendly"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="basic-container mostSearchedBreeds"  v-if="isHomePage">
            <div class="mostSearchedBreeds-subtitle">
                <p>Most Searched Breeds</p>
            </div>
            <div>
                <p class="mostSearchedBreeds-title">
                    66+ Breeds For you to discover
                </p>
                <p class="seeMore">SEE MORE &#8594;</p>
            </div>
            <div class="mostSearchedImages">
                <div class="mostSearchedImage" v-for="(url, index) in imgUrls" :key="index">
                    <img :src="url[0]">
                    <p>{{url[1]}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import breedProperties from './breedProperties'
export default {
    props: ['breedList'],

    components: {
        breedProperties,
    },

    mounted() {
        this.copyBreedList()
        this.getRandomFourImages(this.breedListLocal)
    },

    data() {
        return {
            isHomePage: true,
            breeds: [],
            breedListLocal: [],
            imgUrls: [],
            breedImgUrl: '',
            breed: null,
        }
    },

    methods: {
        copyBreedList() {
            this.breedListLocal = this.breedList
        },

        async getRandomFourImages(breedList) {
            const breedIds = breedList
                .slice(0, 4)
                .map((breed) => {
                    return breed.id
                })
            for (let i = 0; i < 4; ++i) {
                this.imgUrls.push([await this.getImageByBreedId(breedIds[i]), breedList[i].name])
            }
        },

        async getImageByBreedId(breedId) {
            const imageRequestUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids='.concat(breedId)
            return fetch(imageRequestUrl)
                .then((response) => {
                    return response.json()
                })
                .then((details) => {
                    console.log('details---', details)
                    this.breed = details[0].breeds[0]
                    this.breedImgUrl = details[0].url
                    return details[0].url
                })
        },

        getBreedInfo() {
            this.isHomePage = false

            const requestUrl = 'https://api.thecatapi.com/v1/breeds/search?q='
                .concat(document.getElementById('search-box').value)

            fetch(requestUrl)
                .then((response) => {
                    return response.json()
                })
                .then((breed) => {
                    const breedId = breed[0].id
                    this.breedImgUrl = this.getImageByBreedId(breedId)
                })
        },
    },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap');

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.basic-container {
    height: 80vh;
    width: 90vw;
}

.title-background {
    background: url("../../images/HeroImagelg.png");
    background-size: cover;
    border-radius: 42px 42px 0px 0px;
}

.title-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10% 10% 0 10%;
    width: 50vw;
    color: #FFFFFF;
}

.CatWiki-title {
    width: 207px;
    height: 87px;

    font-family: Mystery Quest;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 87px;
}

.CatWiki-subtitle {
    width: 371.3px;
    height: 58px;

    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
}

.search-box {
    width: 394.62px;
    height: 69.67px;
    margin: 10% 0;
    background: #FFFFFF;
    border-radius: 59px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #291507;
}

.mostSearchedBreeds {
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 42px 42px;
    background: #E3E1DC;
}

.mostSearchedBreeds-subtitle{
    margin: 3% 10%;
    font-weight: 500;
    font-size: 28px;
    line-height: 22px;
    /* identical to box height */
    color: #291507;
}

.mostSearchedBreeds-title {
    margin: 0 10%;
    width: 38vw;
    height: 118px;

    font-weight: bold;
    font-size: 48px;
    line-height: 59px;

    color: #291507;
}


.seeMore {
    margin: 0 10% 0 0;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    color: rgba(41, 21, 7, 0.6);
}


.mostSearchedImages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
}

.mostSearchedImage {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 4% 2%;

    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #291507;
}

img {
    width: 15vw;
    height: 15vw;
    border-radius: 24px;
}

.breedImg {
    width: 371.04px;
    height: 371.04px;
    border-radius: 24px;
    margin: 5%;
}

.breed-value {
    display: flex;
}

.breed-display-container {
    display: flex;
    flex-direction: column;
}

.breedtitle-container {
    display: flex;
    color: black;
    font-size: 16px;
}

.breed-title {
    font-weight: 600;
    font-size: 36px;
    color: #291507;
}

.breedDetails{
    display: flex;
    flex-direction: column;
    margin: 0 0 0 10%;
}

.breed-description {
    font-weight: 500;
    font-size: 18px;

    color: #291507;
}
</style>
