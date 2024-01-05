<script setup>
import { RouterView } from 'vue-router';
import Menu from '@/components/menu.vue'
</script>

<template>
  <div>
  <Menu/>
    <RouterView/>
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}
body{
  background: #eeeff0;
}
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b4b4b4;
  
  border-radius:10px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.el-menu-demo{
  position: sticky;
  z-index: 999999;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}

</style>
