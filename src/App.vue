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

    <preview v-if="false" title="Alert">
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

    <preview title="Avatar">

      <vm-avatar text="Lily" primary></vm-avatar>
      <vm-avatar text="Evan You"></vm-avatar>

      <vm-avatar>
        <img src="https://vuesax.com/avatars/avatar-5.png" alt="">
      </vm-avatar>

      <vm-avatar loading>
        <img src="https://vuesax.com/avatars/avatar-5.png" alt="">
      </vm-avatar>

      <vm-avatar history success>
        <img src="https://vuesax.com/avatars/avatar-3.png" alt="">
      </vm-avatar>

      <vm-avatar danger square badge writing badge-color="success">
        <img src="https://vuesax.com/avatars/avatar-3.png" alt="">
      </vm-avatar>

      <vm-avatar circle badge badge-color="warn" badge-position="top-right">
        <img src="https://vuesax.com/avatars/avatar-5.png" alt="">
      </vm-avatar>

      <vm-avatar writing primary>
        <img src="https://vuesax.com/avatars/avatar-3.png" alt="">
      </vm-avatar>


      <vm-avatar>
        <img src="https://vuesax.com/avatars/avatar-1.png" alt="">
        <template #icons>
          <i class='bx bxl-facebook-square' ></i>
          <i class='bx bxl-github' ></i>
          <i class='bx bxl-twitter' ></i>
        </template>
      </vm-avatar>

    </preview>

    <preview title="Avatar Group">
      <vm-avatar-group :max="7">
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-1.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-6.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-2.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-7.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-3.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-8.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-4.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-9.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-5.png" alt="">
        </vm-avatar>
        <vm-avatar>
          <img src="https://vuesax.com/avatars/avatar-10.png" alt="">
        </vm-avatar>
      </vm-avatar-group>
    </preview>

  </div>
</template>

<script setup lang="ts">
import Preview from '@components/heplers/Preview.vue'
import VmButton from "@components/Button/Base/VmButton.vue";
import VmAlert from "@components/Alert/Base/VmAlert.vue"
import {ref} from "vue";
import VmAvatar from "@components/Avatar/Base/VmAvatar.vue";
import VmAvatarGroup from "@components/Avatar/Group/VmAvatarGroup.vue";

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
