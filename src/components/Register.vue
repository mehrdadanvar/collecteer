<template>
  <main class="register">
    <div class="">
      <h1 class="text-2xl mb-6 text-slate-600">Welcome to Zen Crawler</h1>
      <hr class="" />
      <form class="mt-8" @submit.prevent="upload">
        <div class="grid grid-cols-2 gap-6">
          <div class="">
            <div class="flex flex-row rounded-lg w-5/7 gap-3">
              <img src="../../public/user.svg" alt="" class="opacity-40" />
              <input
                type="text"
                v-model="firstname"
                placeholder="First Name"
                class="w-full text-orange-400 pl-3 py-2 border border-1 rounded-lg text-sm"
              />
            </div>
          </div>
          <div class="">
            <div class="flex flex-row rounded-lg w-5/7 gap-3">
              <img src="../../public/user.svg" alt="" class="opacity-40" />
              <input
                type="text"
                v-model="lastname"
                placeholder="Last Name"
                class="w-full text-orange-400 pl-3 py-2 border border-1 rounded-lg text-sm"
              />
            </div>
          </div>
          <div class="">
            <div class="flex flex-row rounded-lg w-5/7 gap-3">
              <img
                src="../../public/email.svg"
                alt=""
                class="opacity-40"
                width="29"
              />
              <input
                type="text"
                v-model="email"
                placeholder="mail@provider.com"
                autocomplete="off"
                class="w-full text-orange-400 pl-3 py-2 border border-1 rounded-lg text-sm"
              />
            </div>
          </div>
          <!-- <div class="">
            <div class="flex flex-row rounded-lg w-5/7 gap-3">
              <input
                type="text"
                v-model="student_id"
                placeholder="Student ID Number"
                class="w-full text-orange-400 pl-3 py-2 border border-1 rounded-lg text-sm"
                autocomplete="off"
              />
            </div>
          </div> -->
          <div class="">
            <div class="flex flex-row rounded-lg w-5/7 gap-3">
              <img
                src="../../public/password2.svg"
                alt=""
                width="25"
                class="opacity-40"
              />
              <input
                type="password"
                placeholder="more than 6 characters"
                v-model="password"
                class="w-full text-orange-400 pl-3 py-2 border border-1 rounded-lg text-sm"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="">
            <div class="flex flex-row rounded-lg w-5/7 gap-3">
              <img
                src="../../public/password2.svg"
                alt=""
                width="25"
                class="opacity-40"
              />
              <input
                type="password"
                placeholder="Confirm Your Password"
                v-model="repeat_password"
                class="w-full text-orange-400 pl-3 py-2 border border-1 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
        <hr class="mt-12" />
        <div class="foot flex flex-row gap-12 mt-16">
          <button
            class="bg-amber-600 text-white rounded-3xl w-3/4 hover:bg-slate-700 hover:text-white p-2"
          >
            Create Account
          </button>
          <button
            class="bg-orange-100 text-black rounded-3xl w-3/4 hover:bg-gray-700 hover:text-white p-2"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
let firstname = ref("");
let lastname = ref("");
let email = ref("");
let student_id = ref("");
let password = ref("");
let repeat_password = ref("");

function validate() {
  if (password.value !== repeat_password.value) {
    console.log("Passwords don't match");
  }
}

let identifier = ref("password");
function toggle() {
  if (identifier.value === "password") {
    identifier.value = "text";
  } else {
    identifier.value = "password";
  }
}

// async function upload() {
//   validate();
//   let body = { first_name: firstname.value };
//   console.log(body);
//   const api_response = await $fetch("http://localhost:8000/students", {
//     method: "POST",
//     body: {
//       firstname: firstname.value,
//       lastname: lastname.value,
//       email: email.value,
//       password: password.value,
//     },
//   });
//   console.log(api_response);
// }
</script>
