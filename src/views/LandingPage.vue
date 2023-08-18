<template>
    <div class="landing-container">
        <DescriptionComponent />
    </div>
     <TriangleImages />
</template>

<script lang="ts">
import DescriptionComponent from '@/views/DescriptionComponent.vue'
import TriangleImages from '@/views/TriangleImages.vue'

export default ({
  name: 'LandingPage',
  components: {
    DescriptionComponent,
    TriangleImages
  },
  props: {}
})
</script>

<style scoped>
.landing-container {
    background-image: url('@/ui/assets/images/Background.webp');
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    margin-top: -50px;
}

</style>
