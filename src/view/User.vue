<template>
  <div class="hello">
    <!--<pull-to :top-load-method="refresh" :bottom-load-method="loadMore">-->
      <ul v-for="user in SubData" v-bind:key="user.id">
        <li class="list">
          <h4 style="font-weight: lighter"><span class="news-list-title">{{user.name}}</span></h4>
          <p></p>
          <div class="news-list-source">
            <span>{{user.id}}</span>
          </div>
          <div class="news-list-date">
            <span class="news-list-date-span">{{user.age}}</span>
          </div>
        </li>
      </ul>
    <!--</pull-to>-->
  </div>
</template>

<script>
import PullTo from 'vue-pull-to'

export default {
  name: 'HelloWorld',
  data () {
    return {
      DataList: [],
      SubData: [],
      curPage: 1
    }
  },
  components: {
    PullTo
  },
  methods: {
    getNewsList () {
      this.$http.get('/api/User').then((response) => {
        this.SubData = response.body
        // this.DataList = response.body
        for (let i in response.body) {
          if (i > 9) {
            break
          }
          this.DataList[i] = response.body[i]
        }
        // console.log(this.DataList)
        // this.SubData = response.body
        console.log(this.SubData)
      })
    },
    refresh (loaded) {
      this.getNewsList()
      loaded('done')
    },
    loadMore (loaded) {
      setTimeout(() => {
        var curPage = this.curPage
        var flag = false
        for (let i = curPage * 10; i < (curPage + 1) * 10; i++) {
          if (this.SubData[i] == null) {
            break
          }
          this.DataList[i] = this.SubData[i]
          flag = true
        }
        if (flag) {
          curPage++
        }
        console.log(this.DataList)
        this.curPage = curPage
        console.log(this.curPage)
        loaded('done')
      }, 500)
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
