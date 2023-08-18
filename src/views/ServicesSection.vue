<template>
  <section class="services-container">
    <div class="services-container">
      <div class="service-card">
        <img src="@/ui/assets/images/Agencias.webp" alt="Icono 1" class="service-icon">
        <h2 class="service-title">Marcas</h2>
        <p class="service-description">Crea mejores estrategias de marketing digital, planes de medios y reportes de resultados para tus clientes. Muéstrale qué está haciendo su competencia en publicidad online.</p>
      </div>
    <div class="service-card">
      <img src="@/ui/assets/images/Medios.webp" alt="Icono 2" class="service-icon">
      <h2 class="service-title">Medios</h2>
      <p class="service-description">Mejora tus argumentos de ventas conociendo en detalle la inversión de tus clientes en otros medios y el alcance que les aporta.us clientes en otros medios y el alcance que les aporta.</p>
    </div>
    <div class="service-card">
      <img src="@/ui/assets/images/Marcas.webp" alt="Icono 3" class="service-icon">
      <h2 class="service-title">Marcas</h2>
      <p class="service-description">Descubre las ofertas y campañas que tu competencia está promocionando. Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad online.</p>
    </div>
    <div class="service-card">
      <img src="@/ui/assets/images/Verificación.webp" alt="Icono 4" class="service-icon">
      <h2 class="service-title">Verificación</h2>
      <p class="service-description">Como un agente tercero, transparente y sin conflictos de interés, Admetricks permite a los actores de la industria del marketing digital verificar que sus campañas exhiban en los sitios y formatos pautados.</p>
    </div>
  </div>
  </section>
    <ReferenceSection />
</template>

<script>
import ReferenceSection from '@/views/ReferenceSection.vue'

export default {
  name: 'ServicesSection',
  components: {
    ReferenceSection
  }
}
</script>

<style>
.services-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
}

.service-card {
    flex: 1;
    box-sizing: border-box;
    text-align: left;
    color:#fff;
    padding: 16px;
}

.service-icon {
  width: 34px;
  height: 32px;
  margin: 0;
}

.service-title {
    font-size: 18px;
    color:#fff;
    position: relative;
    padding-left: 10px;
}

.service-title::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 20px;
  background-color: #00D4FF;
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
}

.service-description {
    font-size: 15px;  /* Tamaño de la descripción */
    color: #ffffffad;
}
</style>
