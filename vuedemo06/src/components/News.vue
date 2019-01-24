<template>
  <div class="news">
    <ul class='news_content'>
      <li v-for='item in list'>
        <!-- 动态绑定 -->
        <router-link :to="'/newsdetail/'+item.aid">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      msg: '新闻页面',
      list:[]
    }
  },
  methods:{
    requestData(){
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      this.$http.jsonp(api).then((res)=>{
        //console.log(res);
        this.list=res.body.result;
      },(err)=>{
        console.log(err);
      })
    }
  },
  mounted() {
    /*
    var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
      this.$http.get(api).then((res)=>{
      console.log(res.body.result);
      this.list=res.body.result;
    },(err)=>{
      console.log(err);
    })
    */
    //调用方法
    this.requestData();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  div.news{
    ul.news_content{
      li{
        display: block;
        width:100%;
        height:40px;
        font-size:14px;
        line-height:40px;
        cursor: pointer;
      }
    }
  }
</style>

