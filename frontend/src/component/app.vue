<template>
  <transition
    enter-active-class="animated rotateInDownLeft"
    leave-active-class="animated rotateOutDownLeft"
    mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<style lang="scss">
  @import '../../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../../node_modules/animate.css';
  @import '../css/color.scss';
  .u-mrg-bot {
    margin-bottom: 20px;
  }
  .u-mrg-top {
    margin-top: 20px;
  }
  input.ng-invalid{
    border-color: $rosso;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  }
</style>
