<script setup>
const handleSubmit = () => {
  console.log('submit');
}
</script>

<template>
  <div id="auth_page">
    <div class="form_wrapper">
      <div class="login_form_wrapper">
        <div class="logo">GLEB.<span>TEAM</span></div>
        <p>Вход по номеру телефона</p>
        <form class="login_form">
          <input type="text" placeholder="ID">
          <input type="text" placeholder="Пароль">
          <input type="checkbox" name="Запомнить меня" id="" placeholder="Запомнить меня">
          <input type="submit" value="Войти" @click.prevent="handleSubmit">
        </form>
      </div>
      <div class="register_form"></div>
    </div>
    <div class="login_page_text"></div>
  </div>
</template>

<style lang="scss">
#auth_page {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  .form_wrapper {
    // width: 100px;
    // height: 100px;
    box-shadow: 1px 1px 8px -2px black;
    border-radius: 10px;
    padding: 20px 40px;
    .login_form_wrapper {
      display: flex;
      flex-direction: column;
      .logo {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 24px;
        & > span {
          font-weight: normal;
        }
      }
      .login_form{
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
