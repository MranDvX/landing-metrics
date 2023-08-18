<template>
    <div>
        <img src="@/ui/assets/images/TrianguloVerde.png" alt="Triángulo Verde" class="triangulo-verde">
        <img src="@/ui/assets/images/TrianguloAmarillo.png" alt="Triángulo Amarillo" class="triangulo-amarillo">
        <img src="@/ui/assets/images/TrianguloNaranja.png" alt="Triángulo Naranja" class="triangulo-naranja">
    </div>
</template>

<script lang="ts">
export default ({
  name: 'TriangleImages',
  components: {
  },
  props: {}
})
</script>

<style scoped>
.triangulo-verde {
    position: absolute;
    top: 157px;
    left: -86px;
}

.triangulo-naranja {
    position: absolute;
    top: 2300px;
    left: -102px;
}

.triangulo-amarillo {
    position: absolute;
    top: 1260px;
    left: 300px;
}
</style>
