<template>
    <div class="breed-displaybar-container">
        <p>{{property}}: </p>
        <div class="breed-displaybar-container">
            <div class="breed-displaybar-container">
                <div class="displaybar" v-for="i in num" :key="i">
                    <div class="rectangle"></div>
                </div>
            </div>
            <div class="displaybar" v-for="i in 5 - num" :key="i">
                <div class="rectangle-blank"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        num: Number,
        property: String,
    },
}
</script>

<style scoped>
.breed-displaybar-container {
    display: flex;
    align-items: baseline;
}

.displaybar {
    margin: 0 1%;
}

.rectangle {
    width: 6vw;
    height: 0.8vw;
    background-color:#544439;
    border-radius: 8px;
}

.rectangle-blank {
    width: 6vw;
    height: 0.8vw;
    background-color: #E0E0E0;
    border-radius: 8px;
}
</style>
