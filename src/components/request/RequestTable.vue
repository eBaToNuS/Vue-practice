<template>
  <h4 v-if="requests === null" class="text-center">Заявок пока нет</h4>
  <div v-else>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>ФИО</th>
          <th>Телефон</th>
          <th>Сумма</th>
          <th>Статус</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody></tbody>
      <tr v-for="(r, idx) in requests" :key="r.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ r.fio }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ r.amount }}</td>
        <td>{{ r.status }}</td>
        <td>
          <router-link
            v-slot="{ navigate }"
            custom
            :to="{ name: 'request', params: { id: r.id } }"
            ><button class="btn primary" @click="navigate">
              Открыть
            </button></router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["requests"],
};
</script>

<style lang="scss" scoped></style>
