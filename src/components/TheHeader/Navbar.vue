<template>
  <div class="flex justify-center">
    <nav class="flex items-center gap-x-24 -mr-36">
      <div>
        <!-- Logo -->
        <img src="../../assets/images/zid-logo.svg" alt="" />
      </div>
      <ul class="flex items-center gap-x-24">
        <li class="font-Cairo"><a href="#">الرئيسية</a></li>
        <li>
          <a class="transition hover:text-purple" href="#">التصنيفات</a>
        </li>
        <li><a href="#">التطبيقات</a></li>
        <li><a href="#">طور تطبيق</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
ul {
  li {
    a {
      @apply transition hover:text-purple-500;
    }
  }
}
</style>
