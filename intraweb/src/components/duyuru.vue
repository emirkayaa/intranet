<template>
   <el-row class="row p-3 justify-content-between">
        <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
          <div class="demo-collapse">
            <el-collapse>
              <el-collapse-item name="1">
                <template #title>
                  <span class="fw-bold fs-6">Kalite Dokümanları</span>
                </template>
                <div class="d-flex flex-column">
                  <a
                    href="http://10.211.65.199:8100/KALITE/#/pages/signin"
                    class="text-decoration-none text-black fs-7"
                    target="_blank"
                    >Kalite Dokümanları -></a
                  >
                  <a
                    class="text-decoration-none text-black fs-7"
                    target="_blank"
                    >Dış Kaynaklı Dokümanlar -></a
                  >
                  <a
                    href=""
                    class="text-decoration-none text-black fs-7"
                    target="_blank"
                    >Dış Kaynaklı Laboratuvar Dokümanları -></a
                  >
                  <a
                    class="text-decoration-none text-black fs-7"
                    target="_blank"
                    >Etik Kurulu Retrospektif -></a
                  >
                  <a
                    href=""
                    class="text-decoration-none text-black fs-7"
                    target="_blank"
                    >Etik Kurulu Prospektif -></a
                  >
                </div>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template #title>
                  <span class="fw-bold fs-6">İstenmeyen Olay Bildirimi</span>
                </template>
                <div>
                  <a href="" class="text-decoration-none text-black"
                    >İstenmeyen Olay Bildirim Sistemi -></a
                  >
                </div>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template #title>
                  <span class="fw-bold fs-6">Tıp Kaynakları Erişimi</span>
                </template>
                <div class="d-flex flex-column">
                  <a
                    href="https://www.clinicalkey.com/"
                    class="text-decoration-none text-black"
                    target="_blank"
                    >ClinicalKey</a
                  >
                  <a
                    href="https://www.dynamed.com/"
                    class="text-decoration-none text-black"
                    target="_blank"
                    >Dynamed</a
                  >
                  <a
                    href="https://www.uptodate.com/contents/search"
                    class="text-decoration-none text-black"
                    target="_blank"
                    >Uptodate</a
                  >
                  <a
                    href="https://www.ebscohost.com/"
                    class="text-decoration-none text-black"
                    target="_blank"
                    >EBSCO Health</a
                  >
                </div>
              </el-collapse-item>
              <div class="py-2" name="4">
                <span class="fs-6 fw-bold">
                  <a class="text-black text-decoration-none" href="https://goppacs.istanbulsaglik.gov.tr/auth/Account/Login?ReturnUrl=%2Fauth%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DSPacsViewer%26redirect_uri%3Dhttps%253A%252F%252Fgoppacs.istanbulsaglik.gov.tr%252Fviewer%252Fstatic%252Fcallback.html%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520custom.profile%2520SPacs.Api%2520SPacs.AuthApi%2520offline_access%26state%3Ddee73205a6624d00a5938728fa153b2f%26nonce%3De71287ad929a4e4fab626321f0fd0f7d">
                    PACS Tetkik
                  </a>
                </span>
              </div>
            </el-collapse>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <el-carousel class="px-2">
            <el-carousel-item v-for="item in 4" :key="item">
              <img
                class="w-100"
                src="https://dosyahastane.saglik.gov.tr/Resim/835114/0/yeni-slider-2022jpg.png"
                alt="Gop"
              />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <el-card
            class="mx-2 border-0 text-center overflow-auto"
            style="height: 300px !important"
          >
            <div class="text-black fw-semibold">DUYURULAR</div>
            <el-divider></el-divider>
            <div v-for="o in items" :key="o">
              <div class="duyurular">
                <div class="duyurular-tarih">
                  <span class="fw-semibold">{{ o.date }}</span>
                </div>
                <div>
                  <span class="fw-semibold duyurular-baslik">{{ o.text }}</span>
                </div>
              </div>
            </div>
            <div v-if="items.length > 2">
              <el-divider></el-divider>
              <div class="text-center">
                <el-button class="fw-bold" type="primary" plain
                  >Tüm Duyurular</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
</template>

<script>
export default {

}
</script>

<style>

</style>