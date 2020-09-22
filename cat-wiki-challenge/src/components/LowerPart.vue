<template>
    <div class="container">
        <div class="basic-container whyShouldYouhaveaCat-container">
            <div class="contents">
                <h1>Why should you have a cat</h1>
                <div class="brief-reason">
                    Having a cat around you can actually trigger the release of calming chemicals in
                    your body which lower your stress and anxiety levels
                </div>
                <p class="read-more">read more &#8594;</p>
            </div>
            <div class="pics">
            </div>
        </div>

        <footer>FangyuXu-devchallenge.io.2020</footer>
    </div>
</template>

<style scoped>
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

.contents {
    position: relative;
    left: 10vw;
    top: 10vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

h1 {
    width: 455.46px;
    height: 118px;

    font-size: 3em;
    line-height: 59px;
    color: #291507;
}

.brief-reason {
    width: 35vw;
    height: 10vw;
    font-weight: 500;
    font-size: 1.5em;
    color: #291507;
}

.whyShouldYouhaveaCat-container {
    color:black;
}

.read-more {
    font-size: 1em;
    line-height: 22px;
    color: rgba(41, 21, 7, 0.6);
    text-transform: uppercase;
}

footer {
    width: 90vw;
    height: 58px;
    background: #000000;
    text-align: center;
    line-height: 50px;
    border-radius: 42px;
    color:white;
}
</style>
