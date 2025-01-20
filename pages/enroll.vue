<template>
  <div>
    <div class="bg-black">
      <header>
        <Navbar />
      </header>
    </div>
    <div class="enroll-container">
      <p>
        {{ $t("enroll_msg") }}
        <a href="mailto:someone@example.com"> info@mostarrockschool.org </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.enroll-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  max-width: 74rem;
  min-height: 7rem;
  margin-inline: auto;
}
</style>
