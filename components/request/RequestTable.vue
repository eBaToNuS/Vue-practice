<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
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
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
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
