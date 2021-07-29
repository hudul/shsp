<template>
  <div class="pageBox">
    <PageHeader />
    <router-view/>
    <Footer />
    <Dialog />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, provide } from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import Footer from '@/components/Footer.vue'
import Dialog from '@/components/Dialog.vue'
import { IDialogInfo } from '@/common.d.ts'

export default defineComponent({
  setup () {
    const dialogInfo = reactive<IDialogInfo>({
      isShow: false,
      busType: 0,
      setShow (show, busType) {
        dialogInfo.isShow = show
        dialogInfo.busType = busType
      }
    })
    provide('dialogInfo', dialogInfo)
    return {
      ...toRefs(dialogInfo)
    }
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
