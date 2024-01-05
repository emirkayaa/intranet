<template>
  
  <div >
    <div class="m-4">
        <h3 class="text-center">Modüller</h3>
        <el-divider></el-divider>
    </div>
    <div class="row justify-content-center">
        <div v-for="o in modüller" :key="o" class="card border-0 p-2 rounded col-lg-3 col-md-6 m-1">
        <img width="100%" height="200px" class="rounded" :src="o.photo" alt="">
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title fw-bold">{{ o.name }}</h5>
            <p class="card-text">{{ o.text }}</p>
            <el-button type="primary d-flex">
                <a class="text-decoration-none text-white" :href="o.links">İncele</a>
            </el-button>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            modüller:[
                {
                    id:1,
                    name:"Hasta Kayıt",
                    text:"Hastaneye müracaat eden hastaların ilk kayıtlarının yapıldığı modüldür. Hasta kayıtlarının ilgili birimlere aktarımlarını yaparak otomasyonun başlamasını sağlar. Yapılan kayıtlarla ilgili çeşitli istatistiki raporlar alınabilir.",
                    links:"https://www.panates.com/hasta-kayit-modulu.html",
                    photo:'https://img.freepik.com/free-vector/woman-with-kid-consulting-doctor_74855-4587.jpg?size=626&ext=jpg&ga=GA1.2.1115099784.1666099886&semt=ais'
                },
                {
                    id:2,
                    name:"Poliklinik",
                    text:"Müracaat eden hastaların tıbbi, maddi kayıtlarının tutulduğu tanı, tetkik, tedavi, ilaç ve sarf malzemelerinin kayıt altına alındığı modüldür. Hastaların geçmişlerine ait tüm bilgilere ulaşılabilir, çeşitli istatistik ve sorgulama işlemleri yapılabilir.",
                    links:"https://www.panates.com/poliklinik-modulu.html",
                    photo:'https://img.freepik.com/free-vector/organic-flat-new-normal-hotels_23-2148917600.jpg?w=740&t=st=1704391750~exp=1704392350~hmac=c2625a7d701ad1889f1d0db89abb382081bc31669b023ddcdcc46564ee5150e3'
                },
                {
                    id:3,
                    name:"Kan Alma",
                    icon:"el-icon-user-solid",
                    text:"Hastaya istenen kan, idrar, gaita gibi tüm istekler kan alma modülünde kabul edildikten sonra barkod işlemleri yapılır. Barkod dizaynlarımız mevcut cihazlarda tam uyumlu çalışmaktadır.",
                    links:"https://www.panates.com/kan-alma-modulu.html",
                    photo:'https://img.freepik.com/free-vector/scientific-chemical-researchers-doctors-with-lab-equipment-investigate-coronavirus_90220-180.jpg?w=740&t=st=1704392047~exp=1704392647~hmac=a7189a7e5662c88a4a1534ea16348a36601dfd0eea7b181ec24c4473c6ba455b'
                },
                {
                    id:4,
                    name:"Görüntüleme",
                    text:"Tüm radyolojik işlemlerin gerçekleştirilmesini amaçlar. Anlaşmalı kurum veya kuruluşlardan gelen hastalara ait radyoloji isteklerinin kaydedilmesi, randevu işlemleri, sonuç raporlarının yazdırılması modülde eksiksiz olarak uygulanır.",
                    links:"https://www.panates.com/goruntuleme-modulu.html",
                    photo:'https://img.freepik.com/free-vector/mammography-concept-illustration_114360-9180.jpg?w=740&t=st=1704392092~exp=1704392692~hmac=d73b1d22d2d4924fbc1f4d314f643088d94e93a2064017d4733fa866ec684ae6'
                },
                {
                    id:5,
                    name:"Servis",
                    text:"Yatışına karar verilmiş hastaların tetkik, tedavi, ilaç, sarf malzemesi vb. işlemlerinin yapıldığı modüldür. Hastaların yatış, nakil, taburcu epikriz ve diğer tüm raporları da bu modül üzerinden yapılabilir. Servise ait tüm raporlamalar ve çeşitli istatistikler ise bu modül üzerinden alınabilir.",
                    links:"https://www.panates.com/servis-modulu.html",
                    photo:'https://img.freepik.com/free-vector/online-medical-assistance-illustration_74855-4447.jpg?w=740&t=st=1704392285~exp=1704392885~hmac=7932b08d6609c478e663d9ab63e16dcf941cadf73473b8bd91ccfaf401eab672'
                },
                {
                    id:6,
                    name:"Laboratuvar",
                    text:"Hastalar için poliklinik, servis vb. birimlerden istenen tetkiklerin çalışılması için gerekli kabul işlemleri yapılır. Dijital veri aktarımı yapabilen tüm cihazlarla bağlantı sağlanarak hastadan alınan örneklerin sonuçlarının çıkıp onaylanmasına kadar geçen süreci yönetir.",
                    links:"https://www.panates.com/laboratuvar-modulu.html",
                    photo:'https://img.freepik.com/free-vector/flat-biotechnology-concept-illustration_23-2148892456.jpg?w=740&t=st=1704392321~exp=1704392921~hmac=1da8a2a1b20867e4d4c049f2c6750ffebae56a5b4bfe1d99dc3f98bc666efceb'
                },
                {
                    id:7,
                    name:"Doğumhane",
                    text:"Yapılan doğumlara ait bilgiler kayıt edilir. Bebek ile ilgili boy, kilo, apgar not bilgi girişleri yapılır. Doğum raporu ve istenilen diğer tüm raporlara kolaylıkla ulaşılabilir, istenilen tarih aralığında istatistik bilgileri görüntülenebilir.",
                    links:"https://www.panates.com/dogumhane-modulu.html",
                    photo:'https://img.freepik.com/free-vector/surgery-anesthesia-concept-illustration_114360-14933.jpg?w=740&t=st=1704392384~exp=1704392984~hmac=33f9fba1c7085f2d3f4e604ecb35c930bbacdd770c7d90eed4d922b69011c5df'
                },
                {
                    id:8,
                    name:"Aşı",
                    text:"Panates HBYS modüllerimizden biri olan Aşı modülü ile hastaların aşı planları yapılıyor ve aşılarının yapılması için tüm seçenekleri içerisinde barındırıyor.",
                    links:"https://www.panates.com/asi-modulu.html",
                    photo:'https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?w=740&t=st=1704392475~exp=1704393075~hmac=50ffd818413daa4b25dc40c726d87b0f6c0cd2eeaf7c854c2fd3fc71ace987e0'
                },
                {
                    id:9,
                    name:"Ameliyathane",
                    text:"Hastaya yapılan ameliyatların kayıtlarının tutulduğu modüldür. Ameliyata giren ekip bilgileri tamamlandıktan sonra ameliyatta kullanılan ilaç-sarf malzeme kayıtları yapılır.",
                    links:"https://www.panates.com/ameliyathane-modulu.html",
                    photo:'https://img.freepik.com/free-vector/surgery-anesthesia-concept-illustration_114360-14933.jpg?w=740&t=st=1704392384~exp=1704392984~hmac=33f9fba1c7085f2d3f4e604ecb35c930bbacdd770c7d90eed4d922b69011c5df'
                },
                {
                    id:10,
                    name:"Kan Bankası",
                    text:"Acil, ayaktan ve yatan hastalara ilişkin kan ve kan bileşenleri istekleri yapılmaktadır. Kan bankasında yapılan tüm işlemlerin kayıtları tutulmaktadır. Bu kayıtlara ait istatistik verileri de rapor halinde hazırlayıp verilere kolayca erişebilme kolaylığı da sağlamaktadır. Kızılay ile tam entegre çalışır.",
                    links:"https://www.panates.com/kan-bankasi-modulu.html",
                    photo:'https://img.freepik.com/free-vector/blood-donation-symbol-with-hand-blood-bag_1308-115904.jpg?w=740&t=st=1704392437~exp=1704393037~hmac=7c10b6384000b567b0cc3c001a6012e354fa455bf29bf9a688af5cade3fe9b52'
                },
                {
                    id:11,
                    name:"Sağlık Kurulu",
                    text:"Sağlık kuruluna müracaat eden hastaların hangi heyet raporu için geldiği hasta kayıt aşamasında belirlenerek, sağlık kuruluna otomatik yansıması sağlanır. Geçmişe ait sorgulamalar kolayca yapılabilir.",
                    links:"https://www.panates.com/saglik-kurulu-modulu.html",
                    photo:'https://img.freepik.com/free-vector/doctors-concept-illustration_114360-3426.jpg?w=740&t=st=1704392614~exp=1704393214~hmac=8cc89c5517c91ab93d7bf12e9d44e7a1be709ca806ae80f50f21389576b24ebd'
                },
                {
                    id:12,
                    name:"FTR",
                    text:"Fizik Tedavi ve Rehabilitasyon (FTR) olarak adlandırılmaktadır. Bu modül ile fizik tedavi görülecek hastaların girişleri ve fizik tedavi seansları hazırlanılmaktadır. Bu modül ile Fizik Tedavi Rehabilitasyon hastalarına kolayca ulaşılabilir ve gerekli seans bilgileri ile tedavi notları girilebilir.",
                    links:"https://www.panates.com/ftr-modulu.html",
                    photo:'https://img.freepik.com/free-vector/rehabilitation-hospital-abstract-concept-illustration-rehab-hospital-rehabilitation-center-stabilization-medical-conditions-mental-health-care-medical-facility_335657-551.jpg?w=740&t=st=1704391716~exp=1704392316~hmac=448a3318643785c5d727a1bc6236db30f68a033607263174a827ee23a9b94e22'
                },
            ]
        }
    }
}
</script>

<style>

</style>