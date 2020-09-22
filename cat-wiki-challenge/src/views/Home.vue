<template>
    <div>
        <UpperPart />
        <LowerPart />
    </div>
</template>

<script>
// import catwikiTitle from '../components/catwikiTitle'
import UpperPart from '../components/UpperPart'
import LowerPart from '../components/LowerPart'

export default {
    components: {
        UpperPart,
        LowerPart,
        // catwikiTitle
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
