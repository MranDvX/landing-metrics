<template>
  <section class="masonry-container">
    <div class="masonry-item1">
    </div>
    <div class="masonry-item2 tall">
    </div>
    <div class="masonry-item3 ">
    </div>
    <div class="masonry-item4 ">
    </div>
    <div class="masonry-item5">
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReferenceSection'
}
</script>

<style>
.masonry-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 300px;
}

.masonry-item1 {
  width: 333px;
  height: 188px;
  background-color: #fff;
  border-radius: 40px;
  margin-top: 20px;
}

.masonry-item2{
  width: 495px;
  height: 487px;
  background-color: #fff;
  border-radius: 40px;
  margin-top: 20px;
}

.masonry-item3 {
  width: 333px;
  height: 581px;
  background-color: #fff;
  border-radius: 40px;
  margin-top: -70px;
}

.masonry-item4 {
  width: 333px;
  height: 661px;
  background-color: #fff;
  border-radius: 40px;
  margin-top: -300px;
}

.masonry-item5 {
  width: 863px;
  height: 487px;
  background-color: #fff;
  border-radius: 40px;
  margin-left: -500px;
}

.wide {
  grid-column: span 2;
}

.tall {
  grid-row: span 2;
}
</style>
