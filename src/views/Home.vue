<template>
  <app-loader v-if="loading"></app-loader>
  <app-page v-else title="Список задач">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="requests"></request-table>
    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false"
        ><request-modal @created="modal = false"></request-modal
      ></app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import AppPage from "@/components/ui/AppPage";
import RequestTable from "@/components/request/RequestTable.vue";
import AppModal from "@/components/ui/AppModal.vue";
import RequestModal from "@/components/request/RequestModal.vue";
import { useStore } from "vuex";
import AppLoader from "@/components/ui/AppLoader.vue";

export default {
  setup() {
    const store = useStore();

    const modal = ref(false);

    const requests = computed(() => store.getters["request / requests"]);

    const loading = ref(false);

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/load");
      loading.value = false;
    });
    return {
      modal,
      close: () => (modal.value = false),
      loading,
      requests,
    };
  },
  components: { AppPage, RequestTable, AppModal, RequestModal, AppLoader },
  name: "Home",
};
</script>
