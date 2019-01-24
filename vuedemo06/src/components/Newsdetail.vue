<template>
  <div class="newsdetail">
    <h2>{{ list.title }}</h2>
    <div v-html='list.content'></div>
  </div>
</template>

<script>
export default {
  name: 'Newsdetail',
  data () {
    return {
      msg: '新闻详情页面',
      list:[]
    }
  },
  mounted() {
    // var api= 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
    // this.$http.get(api).then(function(res){
    //   console.log(res);
    // },function(err){
    //   console.log(err);
    // })
    var aid=this.$route.params.aid;
    this.requestData(aid);
  },
  methods:{
    requestData(aid){
      var api= 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
      this.$http.get(api).then((res)=>{
       this.list = res.body.result[0];
       console.log(this.list);
      },(err)=>{
       console.log(err);
     })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  div.newsdetail{
    line-height:2rem;
    padding:1rem;
  }
</style>

