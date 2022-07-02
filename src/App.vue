<template>
  <div class="preview">
    <preview v-if="false" title="Button">
      <VmButton>Normal</VmButton>
      <VmButton active ripple="cut">Active</VmButton>
      <VmButton disabled>Disabled</VmButton>
      <VmButton flat>Flat</VmButton>
      <VmButton flat active success>Flat Active</VmButton>
      <VmButton border danger>Border</VmButton>
      <VmButton gradient>Gradian</VmButton>
      <VmButton relief>Gradian</VmButton>
      <VmButton transparent>Transparent</VmButton>
      <VmButton floating>floating</VmButton>

      <VmButton icon>
        <i class='bx bx-home-alt'></i>
      </VmButton>

      <VmButton square>
        square
      </VmButton>

      <VmButton icon circle danger>
        <i class='bx bx-home-alt'></i>
      </VmButton>

      <VmButton loading>loading</VmButton>


      <VmButton upload>Uploading</VmButton>

      <VmButton block>block</VmButton>


      <div>
        <vm-button
            size="xl"
        >
          XLarge
        </vm-button>
        <vm-button
            size="large"
        >
          Large
        </vm-button>
        <vm-button
        >
          Default
        </vm-button>
        <vm-button
            size="small"
        >
          Small
        </vm-button>
        <vm-button
            size="mini"
        >
          Mini
        </vm-button>
      </div>

    </preview>

    <preview title="Alert">
      <div>
        <vm-alert>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex maxime suscipit ut veritatis. Ab amet culpa doloribus eius ipsam nemo nostrum obcaecati quasi, voluptas voluptatum. Esse explicabo facilis tempore!
        </vm-alert>

        <div style="height: 30px"></div>

        <vm-alert danger v-model:hidden-content="closeAlert">
          <template #title>
            With Title
          </template>
          <template #default>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex maxime suscipit ut veritatis. Ab amet culpa doloribus eius ipsam nemo nostrum obcaecati quasi, voluptas voluptatum. Esse explicabo facilis tempore!
          </template>
        </vm-alert>

        <div style="height: 30px"></div>


        <vm-button flat @click="destroyAlert=!destroyAlert">
          {{ destroyAlert ? 'Close Alert' : 'Open Alert' }}
        </vm-button>

        <vm-alert closable v-model:value="destroyAlert" danger color="danger">
          <template #title>
            Vuesax Framework
          </template>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
          created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
          Unique and pleasant style, Vuesax is created from scratch and designed for all types of
          developed from the frontend lover to the backend that wants to easily create
          your visual approach to the end user
        </vm-alert>


        <div style="height: 30px"></div>

        <vm-alert relief>
          <template #title>
            With Title
          </template>
          <template #default>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex maxime suscipit ut veritatis. Ab amet culpa doloribus eius ipsam nemo nostrum obcaecati quasi, voluptas voluptatum. Esse explicabo facilis tempore!
          </template>
        </vm-alert>

      </div>
    </preview>

  </div>
</template>

<script setup lang="ts">
import Preview from '@components/heplers/Preview.vue'
import VmButton from "@components/Button/Base/VmButton.vue";
import VmAlert from "@components/Alert/Base/VmAlert.vue"
import {ref} from "vue";

const closeAlert = ref(true)
const destroyAlert = ref(true)

</script>

<style>
body, button, input {
  font-family: Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}
.preview {
  min-height: 100vh;
  background: #f5f7f8;
  padding: 30px;
}
</style>
