<template>
  <div class="page">
    <div class="d-flex justify-content-between">
      <div
        class="mx-4 text-center clock my-4 border border-2 border-secondary-subtle rounded"
      >
        {{ this.currentTime }}
      </div>
      <div>
        <div
          class="mx-4 text-center my-4 fs-5 border border-2 p-2 rounded border-secondary-subtle"
        >
          {{ this.currentDate }}
        </div>
      </div>
    </div>
    <div class="bg-white rounded p-3 mx-3">
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
          <div class="demo-collapse px-2">
            <el-collapse>
              
              <el-collapse-item name="2">
                <template #title>
                  <span class="fw-bold fs-6 text-black">Nöbet Çalışma Listesi</span>
                </template>
                <div class="d-flex flex-column">
                  <a href="" class="text-decoration-none text-muted fs-6 fw-semibold"
                    >Doktor Çalışma Listesi -></a
                  >
                  <a href="" class="text-decoration-none text-muted fs-6 fw-semibold"
                    >Hemşire Çalışma Listesi -></a
                  >
                  <a href="" class="text-decoration-none text-muted fs-6 fw-semibold"
                    >İşçi Çalışma Listesi -></a
                  >
                </div>
              </el-collapse-item>
              <div class="py-2" name="4">
                <span class="fs-6 fw-semibold">
                  <router-link class="text-black text-decoration-none" target="_blank" to="/izin">
                    İzinli ve Raporlu Personeller
                  </router-link>
                </span>
              </div>
              <el-divider class="m-0"></el-divider>
              <div class="py-2" name="4">
                <span class="fs-6 fw-semibold">
                  <a class="text-black text-decoration-none" target="_blank" href="https://docs.google.com/spreadsheets/d/10IYiDLbiXMbPsuJUloII6AJzKRUN7db6idyDvxXFBHE/edit#gid=0">
                    Yemek Listesi
                  </a>
                </span>
              </div>
              <el-divider class="m-0"></el-divider>
              <el-collapse-item  name="5">
                <template #title>
                  <span class="fw-bold fs-6 text-black">Doğum Günü Listesi</span>
                </template>
                <div class=" text-center">
                  <div>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-happy-birthday-background_23-2148595649.jpg?t=st=1709639094~exp=1709642694~hmac=6361f58b8eed936ad9e728a09b1194ca6865b315b85903c803c98196be30b6ae&w=740" width="200" alt="Doğum Günü">
                    <p class="fs-5" style="color:#D29235">Doğum Gününüz Kutlu Olsun</p>
                    
                  </div>
                  <el-row>
                      <el-col v-for="name in data.rows" :key="name" :span="12"><div>
                        <span class="fs-6 text-nowrap">{{name[1]}}</span>
                      </div></el-col>
                    </el-row>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <Moduller></Moduller>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Moduller from "@/components/modul.vue";
import Footer from "@/components/footer.vue";
import axios from "axios";
export default {
  components: {
    Moduller,
    Footer,
  },
  data() {
    return {
      currentTime: "",
      currentDate: "",
      data:{}
    };
  },
  methods: {
    start() {
        this.$confetti.start();
      },
    dogumGunu(){
      axios.get('http://10.211.65.196:8080/svc/sbys/sistem/bilgi_servisleri/intranet/DogumgunuListele',{
        headers: {
          'Access-Token': '9747C3235A15402D94CF556B55E9DDFB'
        }
      }).then(res => {
        this.data = res.data
        console.log(res.data.rows)
      }).catch(err =>{
        console.log(err)
      })
    },
    updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    },
    updateDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = this.padZero(now.getMonth() + 1);
      const day = this.padZero(now.getDate());
      this.currentDate = `${day}-${month}-${year}`;
    },
    padZero(v) {
      return v.toString().padStart(2, "0");
    },
  },
  mounted() {
    setInterval(() => this.updateTime(), 1000);
    this.updateDate();
    this.dogumGunu()
  },
};
</script>

<style>
.row {
  --bs-gutter-x: 0 !important;
}
.el-carousel__item h3 {
  color: #475669;
  margin: 0;
  text-align: center;
}
.resim {
  object-fit: cover !important;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-divider{
 color: #EBEEF5 !important;
}
.clock {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.el-card__body {
  padding-right: 5px !important;
  padding-left: 5px !important;
}

.el-card.is-always-shadow {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>
