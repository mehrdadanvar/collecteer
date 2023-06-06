<template>
  <div
    class="text-slate-300 bg-slate-900 w-3/5 mx-auto rounded-lg h-48 px-4 shadow-xl shadow-slate-500"
  >
    <div class="flex flex-row gap-1 justify-end pt-2">
      <div class="w-3 h-3 rounded-full bg-red-600"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-600"></div>
      <div class="w-3 h-3 rounded-full bg-blue-600"></div>
    </div>
    <div class="font-body text-lg flex flex-row gap-3">
      <div class="text-slate-600">
        <p v-for="(_, index) in major_text" :key="index">
          {{ index + 1 }}
        </p>
      </div>
      <div>
        <p v-for="(text, index) in textList" :key="index">
          <p v-if='text!==""'>
            {{ text }}
          </p>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const major_text = [
  "from collecteer import CT",
  "CanadianTire = CT()",
  "CanadianTire.fetch_stores()",
  "codes =  ['1', '2', '4']",
];

const textList = major_text.map(() => ref(""));
console.log(textList)

const timer = (ms) =>
  new Promise((res) => setTimeout(res, ms));

async function minor_render(input, time, it) {
  for (let i = 0; i < input.length; i++) {
    textList[it].value = textList[it].value.concat(
      input[i]
    );
    await timer(time);
  }
}

async function order(main_array) {
  for (let i = 0; i < main_array.length; i++) {
    await minor_render(main_array[i], 25, i);
  }
}

order(major_text);
</script>
