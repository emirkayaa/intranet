<template>
  <div>
    asdasd
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            data:{},
        }
    },
    methods:{
        getData(){
            axios.get('http://10.211.65.196:8080/svc/sbys/sistem/bilgi_servisleri/intranet/IzinListele',{
                headers: {
                    'Access-Token': '9747C3235A15402D94CF556B55E9DDFB'
                }
            }).then(response => {
                this.data = response.data;
                console.log(this.data);
            }).catch(error => {
                console.log(error);
            });
        }
    },
    mounted(){
        this.getData();
    }
}
</script>

<style>

</style>