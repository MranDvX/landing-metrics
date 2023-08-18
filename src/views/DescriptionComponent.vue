<template>
    <main class="landing-content">
        <section class="landing-section">
            <header class="landing-text">
                <h3 style="color: #00D4FF">Estamos para ayudarte</h3>
                <h1>¿Tienes problemas para <span class="text-underline">entender el mercado</span> de la publicidad digital?</h1>
                <p>El Mercado de la publicidad online es incierto y complejo, Admetricks te <span style="color: #00D4FF">ayuda a visibilizar cómo desempeñan las campañas y contenidos</span> versus los de tu competencia en tiempo real con reportes y alertas automáticas</p>
                <button class="landing-btn" @click="toggleDollarChartVisibility">Solicitar demo</button>
                <span class="span-header" @click="toggleDollarChartVisibility"> Ver funcionalidades </span>
            </header>
            <div class="landing-img-wrapper">
                <img src="@/ui/assets/images/Principal.webp" alt="Imagen principal" class="landing-img-main">
                <img src="@/ui/assets/images/logo.webp" alt="Imagen de fondo" class="landing-img-bg">
            </div>
        </section>
        <ServiesSection />
        <DollarChart v-if="showDollarChart" @close="toggleDollarChartVisibility" />
    </main>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import ServiesSection from '@/views/ServicesSection.vue'
import DollarChart from '@/views/DollarChart.vue'

export default defineComponent({
  name: 'DescriptionComponent',
  components: {
    ServiesSection,
    DollarChart
  },
  setup () {
    const showDollarChart = ref(false)

    function toggleDollarChartVisibility () {
      showDollarChart.value = !showDollarChart.value
    }
    return {
      showDollarChart,
      toggleDollarChartVisibility
    }
  }
})
</script>

<style>
.landing-content {
    gap: 100px;
    width: 100%;
    margin-top: 450px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
}

.landing-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.landing-text {
    flex: 1;
    color: #fff;
    font-size: 16px;
    text-align: left;
    padding-right: 10rem;
    padding: 16px;
}

.main-title {
    font-size: 2rem;
    margin-top: 0;
}

.sub-title {
    color: #00D4FF;
    margin-bottom: 0;
}

.text-underline {
  position: relative;
  display: inline-block;
}

.text-underline::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 10px;
  background: linear-gradient(to right, #54BAD6, #AEDA28);
  border-radius: 20px;
  z-index: 1;
}

.landing-img-wrapper {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.landing-img-main {
    z-index: 2;
    width: 530px;
    height: 405px;
}

.landing-img-bg {
    z-index: 1;
    position: absolute;
    right: -350px;
    top: 50px;
    height: 750px;
    transform: translateY(-50%);
}

.landing-btn {
    background: #00D4FF;
    border-radius: 20px;
    border: none;
    font-size: 1rem;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
}

.landing-btn:hover {
    background: #00B0D8;
}

.span-header {
    cursor: pointer;
    margin-left: 20px;
}

.span-header:hover {
    color: #00B0D8;
}

</style>
