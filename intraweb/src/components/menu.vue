<template>
  <div>
    <el-menu
    class="el-menu-demo menu justify-content-around"
    mode="horizontal"
  >
  <el-menu-item index="0">
    <div class="d-flex align-items-center">
      <img width="50px" src="https://dosyahastane.saglik.gov.tr/WebFiles/logolar/logo-tr.png" alt="Gop">
      <span class="fs-6 text-danger fw-semibold mx-2">
        <a class="text-decoration-none" href="/">Gaziosmanpaşa Eğitim ve Araştırma Hastanesi</a>
      </span>
    </div>
  </el-menu-item>
  <el-sub-menu index="1">
      <template #title>
        <span class="fs-6 fw-semibold">Eğitim Dokümanları</span>
      </template>
      <el-menu-item index="2-1">
        <div>
          <a href="" class="text-decoration-none text-black">Eğitim Dokümanları</a>
        </div>
      </el-menu-item>
      
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <span class="fs-6 fw-semibold">Önemli Linkler</span>
      </template>
      <el-menu-item index="2-1">
        <a class="text-decoration-none text-black" target="_blank" href="https://dys.saglik.gov.tr/">
          <span>Doküman Yönetim Sistemi</span>
        </a>
      </el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item>
    <div class="d-flex align-items-center">
      <img src="https://www.panates.com/assets/image/panates_yeni_logo.png" alt="Gop"> 
    </div>
  </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>