<template>
  <div class="page">
      <div class="d-flex justify-content-between">
        <div class=" mx-4 text-center clock my-4 border border-2 border-secondary-subtle rounded">
        {{ this.currentTime }}
        </div>
    <div>
      <div class=" mx-4 text-center my-4 fs-5 border border-2 p-2 rounded border-secondary-subtle">
        {{ this.currentDate }}
        </div>
    </div>
      </div>
    <div class="bg-white rounded p-3 mx-3">
      <el-row class="row p-3 justify-content-between">
    <el-col :xs="24" :sm="24" :md="24" :lg="4" :xl="4">
      <div class="demo-collapse">
    <el-collapse >
      <el-collapse-item title="Yemek Listesi" name="1">
        
      </el-collapse-item>
      <el-collapse-item title="Kalite Dokümanları" name="2">
       <a href="http://10.211.65.199:8100/KALITE/#/pages/signin" class="text-decoration-none text-danger fs-7 fw-bold" target="_blank">Kalite Dokümanları -></a>
      </el-collapse-item>
      <el-collapse-item title="Yemek Listesi" name="3">
      </el-collapse-item>
      <el-collapse-item title="Nöbet ve Çalışma Listesi" name="4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam dolorum quos nesciunt possimus, quisquam unde earum nulla commodi eaque, totam laboriosam dolor eligendi error non deserunt tempora dolorem, sequi facere.
      </el-collapse-item>
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
        <el-card class="mx-2 border-0 text-center overflow-auto" style="height: 300px !important;">
    <div class=" text-black fw-semibold">
        DUYURULAR
    </div>
    <el-divider></el-divider>
    <div v-for="o in items" :key="o" >
      <div class="duyurular">
        <div class="duyurular-tarih">
          <span class="fw-semibold">{{o.date}}</span>
        </div>
        <div>
          <span class="fw-semibold duyurular-baslik">{{ o.text }}</span>
        </div>
      </div>
    </div>
    <div v-if="items.length > 2">
      <el-divider></el-divider>
      <div class="text-center">
        <el-button class="fw-bold" type="primary" plain>Tüm Duyurular</el-button>
        </div>
    </div>
  
</el-card>
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
export default {
  components: {
    Moduller,
    Footer,
  },
  data() {
  return {
    currentTime:0,
    currentDate:'',
    items:[
      {
        id:1, text:'Duyuru 1', date:'12.12.2021' 
      },
      {id:2 , text:'Duyuru 2', date:'12.12.2021' },
      {id:3 , text:'Duyuru 3', date:'12.12.2021' },
    ]
  }
  },
  methods:{
    updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
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
        return v.toString().padStart(2, '0');
      }
  },
  mounted(){
    setInterval(() =>  this.updateTime(), 1000);
    this.updateDate();
  }
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
.duyurular{
  display: flex;;
  align-items: center;
  margin-bottom: 5px;
  background: #F9F9F9;
  padding: 10px;
  border-radius: 10px;
  
}
.duyurular-tarih{
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #4f79a7;
  display: flex;
  color: #4f79a7;
  justify-content: center;
  align-items: center;
}
.duyurular-baslik:hover{
  color: #E33545;
  cursor: pointer;
  
}
.clock{
      width: 100px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
}
.el-card__body {
    padding-right: 5px !important;
    padding-left: 5px !important; ;
}

.el-card.is-always-shadow {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.card{
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
</style>
