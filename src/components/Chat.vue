<template>
  <div class="bg-slate-500 mx-10 p-4 text-white rounded-lg">
    <div>hi Vue</div>
    <div class="grid grid-cols-2">
      <div
        v-for="(item, index) in object_list"
        :key="index"
      >
        <div class="flex flex-row gap-2">
          <img
            src="https://api.iconify.design/solar:map-arrow-right-bold-duotone.svg"
            alt=""
            width="15"
            @click="handler(index)"
            :class="{
              'rotate-90': rec_index_arr.includes(index),
            }"
          />
          <span>{{ item.key }}:</span>
          <template v-if="rec_index_arr.includes(index)">
            <template v-if="isObject(item.value)">
              <NestedComponent :data="item.value" />
            </template>
            <template v-else>
              <span>{{ item.value }}</span>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let data = {
  storeImages: [],
  inventory: [],
  isExpressDeliveryEligible: false,
  type: "CTR_PROPANEFILL_OR_SWAP,CTR_FISHING",
  baseStoreId: "CTR",
  name: "Cambie & 7th, BC",
  id: 389,
  url: "/en/store-details/bc/cambie-7th-bc-389.html",
  test: "something",
  address: {
    x: "1",
    y: "2",
  },
};

let rec_index_arr = ref([]);

let object_list = Object.entries(data).map(
  ([key, value]) => {
    return { key, value };
  }
);

function handler(rec_index) {
  const index = rec_index_arr.value.indexOf(rec_index);
  if (index === -1) {
    rec_index_arr.value.push(rec_index);
  } else {
    rec_index_arr.value.splice(index, 1);
  }
}

function isObject(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  );
}
</script>

<script>
// Recursive component for nested objects
const NestedComponent = {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { data } = props;
    const objectList = Object.entries(data).map(
      ([key, value]) => {
        return { key, value };
      }
    );

    return {
      objectList,
      rec_index_arr,
      handler,
      isObject,
    };
  },
  template: `
    <div>
      <div v-for="(item, index) in objectList" :key="index">
        <div class="flex flex-row gap-2 ml-6">
          <img
            src="https://api.iconify.design/solar:map-arrow-right-bold-duotone.svg"
            alt=""
            width="15"
            @click="handler(index)"
            :class="{ 'rotate-90': rec_index_arr.includes(index) }"
          />
          <span>{{ item.key }}:</span>
          <template v-if="rec_index_arr.includes(index)">
            <template v-if="isObject(item.value)">
              <NestedComponent :data="item.value" />
            </template>
            <template v-else>
              <span>{{ item.value }}</span>
            </template>
          </template>
        </div>
      </div>
    </div>
  `,
};
</script>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
