<template>
    <div class="container">
        <div class="basic-container title-background"  v-if="isHomePage">
            <div class="title-container">
                <h1 class="CatWiki-title">Catwiki</h1>
                <h1 class="CatWiki-subtitle">Get to know more about your cat breed</h1>
                <div>
                    <input id="search-box" class="search-box"  list="cat-breeds" v-on:keyup.enter="searchBreed"/>  
                    <datalist id="cat-breeds">
                        <option v-for="breed in breedList" :key="breed.id">
                            {{breed.id}}
                        </option>
                    </datalist>
                </div>
            </div>
        </div>

        <div class="basic-container mostSearchedBreeds"  v-if="isHomePage">
            <div class="mostSearchedBreeds-subtitle">
                <p>Most Searched Breeds</p>
            </div>
            <div>
                <p class="mostSearchedBreeds-title">66+ Breeds For you to discover</p>
                <p class="seeMore">SEE MORE &#8594;</p>
            </div>
            <div class="mostSearchedImages">
                <img :src="imgUrl">
            </div>
        </div>
        <div class="basic-container whyShouldYouhaveaCat"  v-if="isHomePage">
            <h1>Why should you have a cat</h1>
        </div>
        <footer>challenge</footer>
    </div>
</template>

<script>
export default {
    created() {
        this.searchBreedList();
        this.getImagesMostSearched();
    },

    data() {
        return {
            isHomePage: true,
            breedList: [],
            breeds: [],
            imgUrl: "",
        };
    },

    methods: {
        searchBreedList() {
            fetch("https://api.thecatapi.com/v1/breeds")
            .then(response => {
                return response.json();
            })
            .then(breeds => {
                this.breedList = breeds;
            });


            
        },

        getImagesMostSearched() {
            fetch("https://api.thecatapi.com/v1/images/search?breed_ids=abys")
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(breed => {
                    console.log("imgurl= ", breed[0].url);
                    this.imgUrl = breed[0].url;
                });
        },

        searchBreed() {
            console.log("enter");
            console.log(document.getElementById("search-box").value);
            this.isHomePage = false;
        }
    }
};

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
    width: 25vw;
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
    /* identical to box height */   

    text-align: right;  

    color: rgba(41, 21, 7, 0.6);
}

.whyShouldYouhaveaCat {
    color:black;
}

.mostSearchedImages {
    margin: 10% 0 0 10%;
    display: flex;
    align-items: center;
}

img {
    width: 15vw;
    height: 15vw;
    border-radius: 24px;
}

footer {
    width: 90vw;
    height: 58px;
    background: #000000;
    border-radius: 42px;

    color:white;
}
</style>