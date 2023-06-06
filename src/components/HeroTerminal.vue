<template>
  <div
    class="text-slate-300 bg-slate-900 w-1/3 mx-auto rounded-lg h-48 px-4 shadow-lg shadow-slate-500 transition ease-linear duration-150 hover:scale-105 hover:shadow-lg hover:shadow-white"
  >
    <div class="flex flex-row gap-1 justify-end pt-2">
      <div class="w-3 h-3 rounded-full bg-red-600"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-600"></div>
      <div class="w-3 h-3 rounded-full bg-violet-600"></div>
    </div>
    <div class="font-body text-lg flex flex-row gap-4">
      <div class="text-slate-600">
        <p v-for="x in [0, 1, 2, 3]" :key="x">
          {{ x + 1 }}
        </p>
      </div>
      <div class="text-violet-500">
        <p class="test">{{ text_0 }}</p>
        <p>{{ text_1 }}</p>
        <p>{{ text_2 }}</p>
        <p>{{ text_3 }}</p>
      </div>
    </div>
    <!-- <p>{{ rendered_text }}</p> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
let major_text = [
  "from collecteer import CT",
  "CanadianTire = CT()",
  "CanadianTire.fetch_stores()",
  "codes =  ['1', '2', '4']",
];
let minor_text = ref("");

let rendered_text = ref([]);
let text_0 = ref("");
let text_1 = ref("");
let text_2 = ref("");
let text_3 = ref("");
const timer = (ms) =>
  new Promise((res) => setTimeout(res, ms));

async function minor_render(input, time, it) {
  for (let i = 0; i < input.length; i++) {
    eval(
      `text_${it}.value = text_${it}.value.concat(input[i]);`
    );
    console.log(eval(`text_${it}`));
    await timer(time);
  }
}

async function order(main_array) {
  for (let i = 0; i < main_array.length; i++) {
    await minor_render(main_array[i], 25, i);
  }
}
async function delay() {
  await timer(500);
  order(major_text);
}
delay();
</script>

<style scoped>
.test {
  color: #f7e1ff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
    0 0 42px #0fa;
}
</style>
