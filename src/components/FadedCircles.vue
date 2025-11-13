<template>
    <div>
      <div class="star-dust" style="--glow-color: rgb(250 204 21 / 0.35); top: 10%; left: 10%;"></div>
      <div class="star-dust" style="--glow-color: rgb(88 133 201 / 0.35); bottom: 40%; left: 15%;"></div>
      <div class="star-dust" style="--glow-color: rgb(250 84 100 / 0.35); bottom: 19%; left: 5%;"></div>

      <div class="star-dust" style="--glow-color: rgb(88 133 201 / 0.35); top: 7%; right: 30%;"></div>
      <div class="star-dust" style="--glow-color: rgb(105 200 107 / 0.35); top: 20%; right: 10%;"></div>
      <div class="star-dust" style="--glow-color: rgb(250 84 100 / 0.35); top: 50%; right: 20%;"></div>
      <div class="star-dust" style="--glow-color: rgb(250 204 21 / 0.35); bottom: 20%; right: 10%;"></div>
    </div>

    <div>
      <div class="faded-circle" style="--glow-color: rgb(250 204 21 / 0.25); top: 0%; left: 1%;"></div>
      <div class="faded-circle" style="--glow-color: rgb(105 200 107 / 0.25); top: 50%; left: 10%;"></div>

      <div class="faded-circle" style="--glow-color: rgb(88 133 201 / 0.25); top: 1%; right: 30%;"></div>
      <div class="faded-circle" style="--glow-color: rgb(105 200 107 / 0.25); top: 0%; right: 0%;"></div>
      <div class="faded-circle" style="--glow-color: rgb(250 84 100 / 0.25); top: 55%; right: 10%;"></div>
    </div>
</template>

<style scoped>
.faded-circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  z-index: 0;
  background: radial-gradient(circle, var(--glow-color) 0%, rgba(0,0,0,0) 75%);
}
.star-dust {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: absolute;
  z-index: 0;
  background: radial-gradient(circle, var(--glow-color) 0%, rgba(0,0,0,0) 80%);
}
</style>