<template>
    <v-speed-dial v-model="fab" top right direction="bottom" class="menu">
        <template v-slot:activator>
            <v-btn v-model="fab" color="primary" dark fab :small="!$vuetify.breakpoint.mdAndUp">
                <v-icon v-if="fab" small>mdi-close</v-icon>
                <v-icon v-else small>mdi-menu</v-icon>
            </v-btn>
        </template>
        <v-btn fab small @click="$emit('scroll', 'description')">
            <v-icon class="primary--text" small>mdi-text</v-icon>
        </v-btn>
        <v-btn fab small @click="$emit('scroll', 'counter')">
            <v-icon class="primary--text" small>mdi-clock-outline</v-icon>
        </v-btn>
        <v-btn fab small @click="$emit('scroll', 'gifts')">
            <v-icon class="primary--text" small>mdi-wallet-giftcard</v-icon>
        </v-btn>
        <v-btn fab small @click="$emit('scroll', 'attend')">
            <v-icon class="primary--text" small>mdi-checkbox-marked-outline</v-icon>
        </v-btn>
        <v-btn fab small @click="$emit('scroll', 'gallery')">
            <v-icon class="primary--text" small>mdi-image</v-icon>
        </v-btn>
        <v-btn fab small @click="$emit('scroll', 'location')">
            <v-icon class="primary--text" small>mdi-google-maps</v-icon>
        </v-btn>
        <v-btn fab small @click="$emit('scroll', 'game')">
            <v-icon class="primary--text" small>mdi-gamepad-square</v-icon>
        </v-btn>
    </v-speed-dial>
</template>

<script>
export default {
    name: 'menu',
    data() {
        return {
            fab: null
        }
    },
}
</script>

<style scoped>
.menu {
    position: fixed;
    color: var(--v-primary-base);
    right: 15px;
    top: 7px;
}
</style>
