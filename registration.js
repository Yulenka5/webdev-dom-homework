import { regLogin, setToken, setUserName, token, userName } from "./api.js";

import { getDateApi } from "./main.js";
import { renderLogin } from "./renderlogin.js";
//
export const renderRegictration = () => {
  const appElement = document.getElementById("app");
  const regHtml = `<div class="container">
  <div class="add-form add-form-input">
  <h1>Форма регистрации</h1>
  <form class="login-form">
    <input
      value=""
      type="text"
      class="add-form-name input-form"
      id="reg-name"
      placeholder="Введите имя"
      autocomplete="username"
    />
    <input
      id="reg-login"
      type="text"
      value=""
      class="add-form-name input-form"
      placeholder="Введите логин"
      autocomplete="username"
    />
    <input
      id="reg-password"
      type="password"
      value=""
      class="add-form-name input-form"
      placeholder="Введите пароль"
      autocomplete="current-password"
    />
    </form>
    <div class="btn-form">
    <div class="add-form-row">
      <button class="add-form-button" id="return-button">Войти</button>
    </div>
    <div class="add-form-row">
      <button class="add-form-button" id="reg-button">Зарегистрироваться</button>
    </div>
    </div>
    </div>`;

  appElement.innerHTML = regHtml;

  const regButtonElement = document.getElementById("reg-button");
  const regNameInputElement = document.getElementById("reg-name");
  const regLoginInputElement = document.getElementById("reg-login");
  const regPasswordInputElement = document.getElementById("reg-password");
  const returnButtonElement = document.getElementById("return-button");

  regButtonElement.addEventListener("click", () => {
    regLogin({
      name: regNameInputElement.value,
      login: regLoginInputElement.value,
      password: regPasswordInputElement.value,
    }).then((responseData) => {
      setToken(responseData.user.token);
      setUserName(responseData.user.name);
      setTimeout(() => {
        getDateApi();
      }, 2000);
    });
  });

  returnButtonElement.addEventListener("click", () => {
    renderLogin({ getDateApi });
  });
};
