<template>
  <div>
    <h4 class="mt-3 mb-3 mt-md-4 mb-md-4">
      Основная информация
      <span class="colapse_btn" @click="isMainInfoShow = !isMainInfoShow">
        {{ isMainInfoShow ? 'Скрыть' : 'Развернуть' }}</span
      >
    </h4>
    <!-- ОСНОВНАЯ ИНФОРМАЦИЯ -->
    <div v-show="isMainInfoShow">
      <div class="row mt-4">
        <div class="col-md">
          <g-caption title="ID Партнёра" :text="'1010101'" />
        </div>
        <div class="col-md">
          <g-caption title="ФИО" text="Иванов Иван Иванович" />
        </div>
      </div>
      <div class="row mt-3 mt-md-4">
        <div class="col-md">
          <g-caption title="Пол" text="Муж." />
        </div>
        <div class="col-md">
          <g-caption title="Дата рождения" text="10.10.1990" />
        </div>
      </div>
    </div>
    <!-- ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ -->
    <h4 class="mt-3 mb-3 mt-md-4 mb-md-4">
      Дополнительная информация
      <span class="colapse_btn" @click="isExtraInfoShow = !isExtraInfoShow">
        {{ isExtraInfoShow ? 'Скрыть' : 'Развернуть' }}</span
      >
    </h4>
    <div v-show="isExtraInfoShow">
      <div class="row">
        <div class="col-md">
          <g-caption title="Дата регистрации" text="10.10.2010" />
        </div>
        <div class="col-md">
          <g-caption title="Страна" text="Россия" />
          <span @click="editCountry" class="edit_btn">Редактировать</span>
        </div>
      </div>
      <div class="row mt-3 mt-md-4">
        <div class="col-md">
          <g-caption title="Город" text="Мск" />
          <span @click="editCity" class="edit_btn">Редактировать</span>
        </div>
        <div class="col-md">
          <g-caption title="Телефон" text="8-(888)-888-88-88" />
          <span @click="editPhone" class="edit_btn">Редактировать</span>
        </div>
      </div>
      <div class="row mt-3 mt-md-4">
        <div class="col-md">
          <g-caption title="Электронная почта" text="mail@mail.ru" />
          <span @click="editEmail" class="edit_btn">Редактировать</span>
        </div>
        <div class="col-md">
          <g-caption title="Паспортные данные" text="11 11 111111" />
          <span @click="editPassport" class="edit_btn">Редактировать</span>
        </div>
      </div>
    </div>
    <!-- ДАННЫЕ СПОНСОРА -->
    <h4 class="mt-3 mb-3 mt-md-4 mb-md-4">
      Данные спонсора
      <span class="colapse_btn" @click="isSponsorInfoShow = !isSponsorInfoShow">
        {{ isSponsorInfoShow ? 'Скрыть' : 'Развернуть' }}</span
      >
    </h4>
    <div v-show="isSponsorInfoShow">
      <div class="row mt-4">
        <div class="col-md">
          <g-caption title="ID Партнёра" text="12345" />
        </div>
        <div class="col-md">
          <g-caption title="ФИО" text="Иванов Иван Иванович" />
        </div>
      </div>
      <div class="row mt-3 mt-md-4">
        <div class="col-md">
          <g-caption title="Пол" text="Муж." />
        </div>
        <div class="col-md">
          <g-caption title="Дата рождения" :text="new Date().toLocaleDateString()" />
        </div>
      </div>
      <div class="row mt-3 mt-md-4">
        <div class="col-md">
          <g-caption title="Телефон" text="8-(888)-888-88-88" />
        </div>
        <div class="col-md">
          <g-caption title="Электронная почта" text="someemail@mail.com" />
        </div>
      </div>
      <div class="row mt-3 mt-md-4">
        <div class="col-md">
          <g-caption title="Страна" text="Россия" />
        </div>
        <div class="col-md">
          <g-caption title="Город" text="Москва" />
        </div>
      </div>
    </div>
    <!-- Модальные окна -->
    <!-- Редактирование страны -->
    <g-modal-edit-country
      noCloseByClick
      v-if="isCountryEdit"
      @edit="editCountryAction"
      @close="isCountryEdit = false"
      :size="'sm'"
    />
    <GModalEditCityVue
      v-if="isCityEdit"
      @edit="editCityAction"
      @close="isCityEdit = false"
      :size="'md'"
    />
    <g-modal-edit-email
      v-if="isEmailEdit"
      @edit="editEmailAction"
      @close="isEmailEdit = false"
      :size="'md'"
    />
    <g-modal-edit-passport
      v-if="isPassportEdit"
      @edit="editPassportAction"
      @close="isPassportEdit = false"
      :size="'md'"
    />
    <!-- <g-modal-edit-phone
      v-if="isPhoneEdit"
      @edit="editPhoneAction"
      @close="isPhoneEdit = false"
      :size="'md'"
    /> -->
  </div>
</template>

<script setup>
// import GCaption from '../components/Text/GCaption.vue'
import GModalEditCityVue from '../components/Modals/GModalEditCity.vue';
import GModalEditCountry from '../components/Modals/GModalEditCountry.vue';
import GModalEditEmail from '../components/Modals/GModalEditEmail.vue';
import GModalEditPassport from '../components/Modals/GModalEditPassport.vue';
// import GModalEditPhone from '../components/Modals/GModalEditPhone.vue';
import { ref } from 'vue'

const isMainInfoShow = ref(true)
const isExtraInfoShow = ref(true)
const isSponsorInfoShow = ref(false)
const isCountryEdit = ref(false)
const isCityEdit = ref(false)
const isEmailEdit = ref(false)
const isPassportEdit = ref(false)
// const isPhoneEdit = ref(false)

const editCity = () => {
  isCityEdit.value = true
}
const editEmail = () => {
  isEmailEdit.value = true
}
const editCountry = () => {
  isCountryEdit.value = true
}
const editPassport = () => {
  isPassportEdit.value = true
}
// const editPhone = () => {
//   isPhoneEdit.value = true
// }
const editCountryAction = () => {
  isCountryEdit.value = false
  // this.showToast('Редактирование страны', 'Страна успешно изменена', 'success')
}
const editCityAction = () => {
  isCityEdit.value = false
  // this.showToast('Редактирование города', 'Город успешно изменен', 'success')
}
const editEmailAction = () => {
  isEmailEdit.value = false
  // this.showToast('Редактирование E-mail', 'E-mail успешно изменён', '')
}
const editPassportAction = () => {
  isPassportEdit.value = false
  // this.showToast('Редактирование паспорта', 'Паспортные данные успешно изменены', '')
}
// const editPhoneAction = () => {
//   this.isPhoneEdit = false
//   this.showToast('Редактирование телефона', 'Телефон успешно изменён', '')
// }
// const saveCountry = () => {
//   this.inAction = true
//   setTimeout(() => {
//     this.inAction = false
//     this.isCountryEdit = false
//   }, 2000)
// }
</script>

<style lang="scss" scoped>
.colapse_btn {
  color: var(--main-green);
  font-size: 18px;
  cursor: pointer;
  margin-left: 20px;
}
.edit_btn {
  color: var(--main-green);
  cursor: pointer;
}
</style>
