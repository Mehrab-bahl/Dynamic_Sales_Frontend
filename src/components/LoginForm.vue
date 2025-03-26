<template>
  <div class="bg-[#838193] p-8 shadow-lg w-[28%] h-full flex flex-col items-center justify-center"
    style="background-color: rgba(131, 129, 147, 0.8)">
    <div class="relative -top-12 mb-10">
      <Logo :main="true" />
    </div>

    <form class="space-y-10 w-full self-stretch">
      <!-- Branch Code Field -->
      <div class="relative animated-underline">
        <font-awesome-icon icon="landmark" class="absolute top-2 left-3 -translate-y-1/2 text-white" />
        <input v-model="form.branchCode" type="text" placeholder="Branch Code"
          class="w-full bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none pl-10 pb-1 text-gray-900 placeholder:text-white"
          @input="handleBranchCodeInput" />
        <font-awesome-icon v-if="showBranchCodeError" icon="circle-exclamation"
          class="absolute top-0 right-3 text-red-500" />
      </div>

      <!-- User ID Field -->
      <div class="relative animated-underline">
        <font-awesome-icon icon="user" class="absolute top-2 left-3 -translate-y-1/2 text-white" />
        <input v-model="form.userId" type="text" placeholder="User ID"
          class="w-full bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none pl-10 pb-1 text-gray-900 placeholder:text-white"
          @input="showUserIdError = false" />
        <font-awesome-icon v-if="showUserIdError" icon="circle-exclamation"
          class="absolute top-0 right-3 text-red-500" />
      </div>

      <!-- Password Field -->
      <div class="relative animated-underline">
        <font-awesome-icon icon="lock" class="absolute top-2 left-3 -translate-y-1/2 text-white" />
        <input v-model="form.password" type="password" placeholder="Password"
          class="w-full bg-transparent border-b-2 border-gray-300 focus:border-primary focus:outline-none pl-10 pb-1 text-gray-900 placeholder:text-white"
          @input="showPasswordError = false" />
        <font-awesome-icon v-if="showPasswordError" icon="circle-exclamation"
          class="absolute top-0 right-3 text-red-500" />
      </div>

      <!-- Login Button -->
      <el-button type="primary" size="large" class="w-full py-2 rounded shadow mt-12 login-button" @click="handleLogin">
        Login
      </el-button>
    </form>

    <div class="mt-4">
      <p>&copy; 2025 Bank AL Habib. All Rights Reserved</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Logo from './Logo.vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()

const form = reactive({
  branchCode: '',
  userId: '',
  password: '',
})

const showBranchCodeError = ref(false)
const showUserIdError = ref(false)
const showPasswordError = ref(false)

const handleBranchCodeInput = () => {
  form.branchCode = form.branchCode.replace(/[^0-9]/g, '').slice(0, 4)
  showBranchCodeError.value = false
}

const handleLogin = () => {
  showBranchCodeError.value = !form.branchCode
  showUserIdError.value = !form.userId
  showPasswordError.value = !form.password

  if (!form.branchCode || !form.userId || !form.password) {
    ElNotification({
      title: 'Error',
      message: 'Please fill in all the fields.',
      type: 'error',
      position: 'top-right',
    })
    return
  }
  // Simulate login logic (replace with your actual API call)
  if (form.branchCode && form.userId && form.password) {
    // Successful login, navigate to dashboard
    router.push('/dashboard')
  } else {
    // Handle login failure (e.g., show error message)
    console.log('Login failed')
  }
}
</script>

<style scoped>
.animated-underline {
  position: relative;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  /* Start from the middle */
  width: 0;
  height: 2px;
  background-color: #117508;
  /* Change to your desired color */
  transition:
    width 0.3s ease-in-out,
    left 0.3s ease-in-out;
}

.animated-underline input {
  transition: border-color 0.3s ease-in-out;
}

/* When the input is in focus */
.animated-underline:focus-within::after {
  width: 100%;
  left: 0;
  /* Expand to the ends */
}

.login-button {
  background-color: #117508;
  border-color: #117508;
  color: white;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.login-button:hover {
  background-color: #0e6007;
  border-color: #0e6007;
}

.login-button:active,
.login-button.is-active {
  background-color: #0b4a05;
  border-color: #0b4a05;
}
</style>
