<template>
  <el-main>
    <h1>学校通知</h1>

    <ul>
      <li v-for="news in tableData">
        <router-link :to="'/schoolnotice/' + news.newsID">{{
          news.title
        }}</router-link
        ><span>{{ news.publishTime }}</span>
      </li>
    </ul>

    **分页**

    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="10"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </el-main>
</template>



<script>

export default {

data() {



return {

  newsList:[],

  total:{},

  tableData: [], //表格显示数据

  allData: [], //总数据

}

},



**获取数据**

mounted () {



const that = this;

console.log(that);

this.$http.get(

  that.$interface+'getArticlePages?categoryId=2'

)

  .then(function (response) {

    if(response.data.status === 1){

      response.data.data.list.forEach(function(item){

        that.allData.push({

          title:item.title,

          publishTime:item.publishdate,

          newsID:item.articleid,

        });

        that.total = response.data.data.total;

                    **从allData获取数据到tableData** 

        that.tableData = that.allData.slice(0, 10);

        console.log(that.total);

      });

    }else{

      that.$message({

        message: response.data.msg,

        type: 'warning'

      });

    }

  })

  .catch(function (err) {

    console.log(err);

    that.$message({

      message: '数据 error',

      type: 'warning'

    })

  });

}, 页码点击事件

methods:{



handleCurrentChange(val) {  //当前页

  console.log(val);

  this.tableData = this.allData.slice((val - 1) * 10, 10 * val);

}

}