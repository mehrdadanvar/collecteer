<template>
  <div class="bg-gray-500 mx-10 p-4 text-white rounded-lg max-w-3xl">
    <div>hi Vue</div>
    <div class="grid grid-cols-2">
      <div v-for="(item, index) in object_list" :key="index">
        <div class="flex flex-row gap-2 items-start">
          <img
            src="../../public/arrow.svg"
            alt=""
            width="15"
            @click="toggleExpand(index)"
            class="mt-1 transition ease-linear duration-75 text-white"
            :class="{
              'rotate-90': item.expanded,
            }"
          />
          <div class="flex flex-col ml-6">
            <span class="text-violet-300">{{ item.key }} :</span>
            <!-- prettier-ignore -->
            <span
              class="ml-4 text-violet-600 transition-transform ease-linear duration-75"
              :class="{ 'mehrdad': !item.expanded }"
              >{{ item.value }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

let condition = ref(false);
let rec_index_arr = ref([]);
let nums_clicked = 0;
let rotate = ref(false);

let data = {
  storeImages: [],
  inventory: [],
  isExpressDeliveryEligible: false,
  type: "CTR_PROPANEFILL_OR_SWAP,CTR_FISHING",
  baseStoreId: "CTR",
  name: "Cambie & 7th, BC",
  id: 389,
  url: "/en/store-details/bc/cambie-7th-bc-389.html",
  address: {
    cellphone: null,
    city: {
      isocode: "",
      name: "",
      countryIso: "",
      isocodeShort: "",
    },
    cityDistrict: {
      isocode: "",
      name: "",
      countryIso: "",
      isocodeShort: "",
    },
    companyName: null,
    country: {
      isocode: "CA",
      name: "Canada",
      countryIso: null,
      isocodeShort: null,
    },
    defaultAddress: false,
    district: null,
    email: "ct389@canadiantirecares.ca",
    formattedAddress: null,
    id: "8796116025367",
    line1: "2290 Cambie Street",
    line2: null,
    phone: "6047072290",
    phone2: "6047072291",
    postalCode: "V5Z 2T7",
    region: {
      countryIso: null,
      isocode: "CA-BC",
      name: "British Columbia",
      isocodeShort: null,
    },
    shippingAddress: false,
    town: "Vancouver",
    visibleInAddressBook: null,
    lastName: null,
    firstName: "ROSS SAITO",
    fax: "6047072296",
  },
  description: null,
  displayName: "Cambie & 7th, BC",
  distanceKm: null,
  isFreeStorePickup: false,
  services: [
    "Bike Repair Service",
    "Local Delivery",
    "Curbside Pick-Up",
    "Shuttle Service",
    "Skate Sharpening",
    "Key Cutting",
    "Party Supplies from Party City including Balloon Helium Inflation Station",
    "Assembly Service",
    "Propane Swap",
    "Fishing Licences",
  ],
  formattedDistance: null,
  isEligibleForCurbside: true,
  curbsideFee: null,
  geoPoint: {
    latitude: 49.26511,
    longitude: -123.114437,
  },
  storeTimezone: "America/Vancouver",
  mapIcon: {
    altText: "",
    code: "",
    damCreateDate: "",
    damPath: "",
    description: "",
    format: "",
    galleryIndex: 0,
    imageSpinIndicator: false,
    imageType: "",
    isListingThumbnailImage: false,
    isPrimary: false,
    mediaType: "",
    name: "",
    order: "",
    url: "",
    videoImageThumbnailDAMPath: "",
    videoImageThumbnailURL: "",
  },
  storeContent: null,
  fulfillment: {
    shipToHome: {
      etaLatest: "",
      etaEarliest: "",
      enabled: false,
    },
    storePickUp: {
      etaLatest: "",
      etaEarliest: "",
    },
  },
  errorCode: null,
  seoTitle: "Store Hours & Details | Vancouver, Cambie & 7Th, BC V5Z2T7",
  seoTag: "Cambie & 7th, BC",
  seoDescription:
    "Visit our Vancouver, Cambie & 7Th, BC store for auto, tools, household, sports, toys & outdoor products. Stop by at the auto center for repair & maintenance.",
  noIndex: false,
  noFollow: false,
  openingHours: {
    code: "CTR_CTR_389",
    name: null,
    specialDayOpeningList: [],
    weekDayOpeningList: [
      {
        weekDay: "Sunday",
        closed: false,
        closingTime: {
          formattedHour: "9:00 p.m.",
          hour: 21,
          minute: 0,
        },
        openingTime: {
          formattedHour: "9:00 a.m.",
          hour: 9,
          minute: 0,
        },
        storeArea: "GENERAL",
        storeHourPeriodType: "REGULAR",
        comment: null,
        date: null,
        formattedDate: null,
        name: null,
        closesIn: null,
      },
      {
        weekDay: "Monday",
        closed: false,
        closingTime: {
          formattedHour: "9:00 p.m.",
          hour: 21,
          minute: 0,
        },
        openingTime: {
          formattedHour: "9:00 a.m.",
          hour: 9,
          minute: 0,
        },
        storeArea: "GENERAL",
        storeHourPeriodType: "REGULAR",
        comment: null,
        date: null,
        formattedDate: null,
        name: null,
        closesIn: null,
      },
      {
        weekDay: "Tuesday",
        closed: true,
        closingTime: {
          formattedHour: "9:00 p.m.",
          hour: 21,
          minute: 0,
        },
        openingTime: {
          formattedHour: "9:00 a.m.",
          hour: 9,
          minute: 0,
        },
        storeArea: "GENERAL",
        storeHourPeriodType: "REGULAR",
        comment: null,
        date: null,
        formattedDate: null,
        name: null,
        closesIn: 14,
      },
      {
        weekDay: "Wednesday",
        closed: false,
        closingTime: {
          formattedHour: "9:00 p.m.",
          hour: 21,
          minute: 0,
        },
        openingTime: {
          formattedHour: "9:00 a.m.",
          hour: 9,
          minute: 0,
        },
        storeArea: "GENERAL",
        storeHourPeriodType: "REGULAR",
        comment: null,
        date: null,
        formattedDate: null,
        name: null,
        closesIn: null,
      },
      {
        weekDay: "Thursday",
        closed: false,
        closingTime: {
          formattedHour: "9:00 p.m.",
          hour: 21,
          minute: 0,
        },
        openingTime: {
          formattedHour: "9:00 a.m.",
          hour: 9,
          minute: 0,
        },
        storeArea: "GENERAL",
        storeHourPeriodType: "REGULAR",
        comment: null,
        date: null,
        formattedDate: null,
        name: null,
        closesIn: null,
      },
      {
        weekDay: "Friday",
        closed: false,
        closingTime: {
          formattedHour: "9:00 p.m.",
          hour: 21,
          minute: 0,
        },
        openingTime: {
          formattedHour: "9:00 a.m.",
          hour: 9,
          minute: 0,
        },
        storeArea: "GENERAL",
        storeHourPeriodType: "REGULAR",
        comment: null,
        date: null,
        formattedDate: null,
        name: null,
        closesIn: null,
      },
      {
        weekDay: "Saturday",
        closed: false,
        closingTime: {
          formattedHour: "9:00 p.m.",
          hour: 21,
          minute: 0,
        },
        openingTime: {
          formattedHour: "9:00 a.m.",
          hour: 9,
          minute: 0,
        },
        storeArea: "GENERAL",
        storeHourPeriodType: "REGULAR",
        comment: null,
        date: null,
        formattedDate: null,
        name: null,
        closesIn: null,
      },
    ],
  },
  storeServices: [
    {
      id: "AUTO",
      name: "AUTO",
      phone: "6047072291",
      additionalCopy: null,
      specialDayOpeningList: [],
      weekDayOpeningList: [
        {
          weekDay: "Sunday",
          closed: false,
          closingTime: {
            formattedHour: "7:00 p.m.",
            hour: 19,
            minute: 0,
          },
          openingTime: {
            formattedHour: "8:00 a.m.",
            hour: 8,
            minute: 0,
          },
          storeArea: "AUTO",
          storeHourPeriodType: "REGULAR",
          comment: null,
          date: null,
          formattedDate: null,
          name: null,
          closesIn: null,
        },
        {
          weekDay: "Monday",
          closed: false,
          closingTime: {
            formattedHour: "7:00 p.m.",
            hour: 19,
            minute: 0,
          },
          openingTime: {
            formattedHour: "7:00 a.m.",
            hour: 7,
            minute: 0,
          },
          storeArea: "AUTO",
          storeHourPeriodType: "REGULAR",
          comment: null,
          date: null,
          formattedDate: null,
          name: null,
          closesIn: null,
        },
        {
          weekDay: "Tuesday",
          closed: true,
          closingTime: {
            formattedHour: "7:00 p.m.",
            hour: 19,
            minute: 0,
          },
          openingTime: {
            formattedHour: "7:00 a.m.",
            hour: 7,
            minute: 0,
          },
          storeArea: "AUTO",
          storeHourPeriodType: "REGULAR",
          comment: null,
          date: null,
          formattedDate: null,
          name: null,
          closesIn: 12,
        },
        {
          weekDay: "Wednesday",
          closed: false,
          closingTime: {
            formattedHour: "7:00 p.m.",
            hour: 19,
            minute: 0,
          },
          openingTime: {
            formattedHour: "7:00 a.m.",
            hour: 7,
            minute: 0,
          },
          storeArea: "AUTO",
          storeHourPeriodType: "REGULAR",
          comment: null,
          date: null,
          formattedDate: null,
          name: null,
          closesIn: null,
        },
        {
          weekDay: "Thursday",
          closed: false,
          closingTime: {
            formattedHour: "7:00 p.m.",
            hour: 19,
            minute: 0,
          },
          openingTime: {
            formattedHour: "7:00 a.m.",
            hour: 7,
            minute: 0,
          },
          storeArea: "AUTO",
          storeHourPeriodType: "REGULAR",
          comment: null,
          date: null,
          formattedDate: null,
          name: null,
          closesIn: null,
        },
        {
          weekDay: "Friday",
          closed: false,
          closingTime: {
            formattedHour: "7:00 p.m.",
            hour: 19,
            minute: 0,
          },
          openingTime: {
            formattedHour: "7:00 a.m.",
            hour: 7,
            minute: 0,
          },
          storeArea: "AUTO",
          storeHourPeriodType: "REGULAR",
          comment: null,
          date: null,
          formattedDate: null,
          name: null,
          closesIn: null,
        },
        {
          weekDay: "Saturday",
          closed: false,
          closingTime: {
            formattedHour: "7:00 p.m.",
            hour: 19,
            minute: 0,
          },
          openingTime: {
            formattedHour: "8:00 a.m.",
            hour: 8,
            minute: 0,
          },
          storeArea: "AUTO",
          storeHourPeriodType: "REGULAR",
          comment: null,
          date: null,
          formattedDate: null,
          name: null,
          closesIn: null,
        },
      ],
    },
  ],
  onlineOrdering: true,
  fee: null,
  threshold: 0,
  inStorePickUp: true,
  sleConfigurationName: "6-6.5 hour pickup",
  hreflangLinkData: [
    {
      href: "/fr/profil-du-magasin/bc/cambie-7th-bc-389.html",
      hreflang: "fr",
    },
    {
      href: "/en/store-details/bc/cambie-7th-bc-389.html",
      hreflang: "en",
    },
    {
      href: "/en/store-details/bc/cambie-7th-bc-389.html",
      hreflang: "x-default",
    },
  ],
  isAOAFlowEnabled: true,
  estimatedDeliveryDateEnabled: true,
  selfServeLoyaltyEarnEnabled: false,
  selfServeLoyaltyRedirectUrl: "https://triangle.canadiantire.ca/en/account/add-rewards.html",
};

let keys = ref(Object.keys(data));
let values = reactive(Object.values(data));
let object_list = reactive(
  Object.entries(data).map(([key, value]) => {
    return { key, value, expanded: false };
  })
);
function toggleExpand(index) {
  object_list[index].expanded = !object_list[index].expanded;
  rotate.value = !rotate.value;
  console.log("clicked", index);
}
function expandIcon(item) {
  return item.expanded
    ? "https://api.iconify.design/solar:map-arrow-down-bold-duotone.svg"
    : "https://api.iconify.design/solar:map-arrow-right-bold-duotone.svg";
}

// console.log(object_list);
// function handler(rec_index) {
//   console.log(rec_index);
//   rec_index_arr.value.push(rec_index);
//   console.log(rec_index_arr.value);
//   nums_clicked++;
//   condition.value = !condition.value;
// }

// console.log(keys.value);
</script>
<style>
.mehrdad {
  display: none;
  color: blue;
}
</style>
