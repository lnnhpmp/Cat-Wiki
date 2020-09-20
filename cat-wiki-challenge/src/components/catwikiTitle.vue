<template>
    <div class="container">
        <div class="title-container">
            <div>
                <h1 class="CatWiki-title">Catwiki</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mystery+Quest&display=swap');

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title-container {
    display: flex;
    flex-direction: column;

    height: 80vh;
    width: 90vw;
    background: url("../../images/HeroImagelg.png");
    border-radius: 42px 42px 0px 0px;
}

.CatWiki-title {
    width: 207px;
    height: 87px;
    margin: 25px 50px 75px 100px;

    font-family: Mystery Quest;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 87px;  

    color: #FFFFFF;
}
</style>