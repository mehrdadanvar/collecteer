<template>
  <div
    class="text-slate-300 bg-gray-800 border border-slate-700 w-1/3 mx-auto rounded-lg h-48 transition ease-linear duration-50 shadow-sm hover:scale-105"
  >
    <div class="bg-slate-900 rounded-t-lg">
      <div class="flex flex-row gap-1 justify-end items-center h-7 pr-3">
        <div class="w-3 h-3 rounded-full bg-red-600"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-600"></div>
        <div class="w-3 h-3 rounded-full bg-violet-600"></div>
      </div>
    </div>
    <div class="terminal text-lg flex flex-row gap-4 p-2 font-Inter">
      <div class="text-slate-600">
        <p v-for="x in [0, 1, 2, 3]" :key="x">
          {{ x + 1 }}
        </p>
      </div>
      <div class="text-teal-400">
        <p class="test">{{ rendered_text[0] }}</p>
        <p>{{ rendered_text[1] }}</p>
        <p>{{ rendered_text[2] }}</p>
        <p>{{ rendered_text[3] }}</p>
      </div>
    </div>
    <!-- <p>{{ rendered_text }}</p> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
let major_text = [
  "from ZenCrawler import CT",
  "CanadianTire = CT()",
  "CanadianTire.fetch_stores()",
  "codes =  ['1', '2', '4']",
];
let minor_text = ref("");

let rendered_text = ref(["", "", "", ""]);

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function minor_render(input, time, index) {
  for (let i = 0; i < input.length; i++) {
    rendered_text.value[index] += input[i];
    await timer(time);
  }
}

async function order(main_array) {
  for (let i = 0; i < main_array.length; i++) {
    await minor_render(main_array[i], 10, i);
  }
}

async function delay() {
  await timer(1000);
  order(major_text);
}

delay();
</script>

<style scoped>
.test {
  color: #f7e1ff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
}
@font-face {
  font-family: "Anek-Gurmukhi";
  src: url("../../public/fonts/Anek.ttf");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
.terminal {
  font-family: "Anek-Gurmukhi";
}
</style>
