<template>
  <div class="hello">
    <pull-to :top-load-method="refresh" :bottom-load-method="refresh">
      <ul v-for="item in DataList" v-bind:key="item.id">
        <li class="list">
          <h4 style="font-weight: lighter"><span class="news-list-title">{{item.name}}</span></h4>
          <p></p>
          <div class="news-list-source">
            <span>{{item.id}}</span>
          </div>
          <div class="news-list-date">
            <span class="news-list-date-span">{{item.age}}</span>
          </div>
        </li>
      </ul>
    </pull-to>
  </div>
</template>

<script>
import PullTo from 'vue-pull-to'

export default {
  name: 'HelloWorld',
  data () {
    return {
      DataList: []
    }
  },
  components: {
    PullTo
  },
  methods: {
    getNewsList () {
      this.$http.get('/api/user/getUser').then((response) => {
        this.DataList = response.body
        // console.log(response.body[1].Date.substring(0, 10))
      })
    },
    refresh (loaded) {
      this.getNewsList()
      loaded('done')
    }
  },
  created () {
    this.getNewsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    position:relative;
    width:100%;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 0;
    /*height:4.5em;*/
    /*margin-top:5%;*/
    border-bottom: 1px solid rgba(160, 160, 160, 0.3);
  }
  .el-form-item{
    height: 10px;
  }
  .news-list-title{
    margin-left: 5%;
  }
  .news-list-source{
    float: left;
    width: 30%;
    /*padding-left: 10px;*/
    /*margin-right: -70%;*/
    margin-left:5%;
    font-size: 12px;
    margin-bottom: 1px;
  }
  .news-list-date{
    padding-left: 80%;
    /*float: left;*/
    /*width: 100%;*/
    font-size: 12px;
    margin-bottom: 5px;
  }
  .news-list-date-span{
    margin-right: 0%;
  }
</style>
