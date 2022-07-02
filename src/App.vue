<template>
  <div class="preview">
    <preview title="Button">
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
  </div>
</template>

<script setup lang="ts">
import Preview from '@components/heplers/Preview.vue'
import VmButton from "@components/Button/Base/VmButton.vue";

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
