<template>
  <div class="pageBox">
    <PageHeader />
    <router-view/>
    <Footer />
    <Dialog />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import Footer from '@/components/Footer.vue'
import Dialog from '@/components/Dialog.vue'

export default defineComponent({
  setup () {
    return {}
  },
  name: 'LayoutBox',
  components: {
    PageHeader,
    Footer,
    Dialog
  }
})
</script>

<style scoped>

</style>
