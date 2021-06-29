<template>
  <form id="database">
    <fieldset>
      <span>公众号:</span>
      <select v-model="text0">
        <option value="1">丸美</option>
        <option value="2">春纪丸美</option>
        <option value="3">....</option>
      </select>

      <span>活动标题:</span
      ><input type="text" v-model="text1" placeholder="单行输入" />

      <span>礼品类型:</span>
      <select v-model="text2">
        <option value="1">实物</option>
        <option value="2">虚拟</option>
      </select>

      <br />
      <span>礼品名称:</span>
      <select v-model="text3">
        <option value="进行中">进行中</option>
        <option value="未进行">未进行</option>
      </select>

      <button class="create" @click="add">添加</button>
      <button class="reset" @click="reset">重置</button>
    </fieldset>

    <table>
      <tr>
        <td>序号</td>
        <td>公众号</td>
        <td>活动标题</td>
        <td>礼品类型</td>
        <td>礼品名称</td>
        <td>是否主推</td>
        <td>申领总数量</td>
        <td>已申领数量</td>
        <td>所需积分</td>
        <td>所需金额</td>
        <td>等级限制</td>
      </tr>
      <tr>
        <td>{{ x.num }}</td>
        <td>{{ text0 }}</td>
        <td>{{ text1 }}</td>
        <td>{{ text2 }}</td>
        <td>{{ text3 }}</td>
        <td>{{ x.medal }}</td>
        <td>{{ x.claimed }}</td>
        <td>{{ x.costPoint }}</td>
        <td>{{ x.costMoney }}</td>
        <td>{{ x.awardName }}</td>
        <td>{{ x.levels }}</td>
      </tr>
    </table>
  </form>
</template>

<script>
export default {
  name: "Tabulation",

  data: {
    text0: "",
    text1: "",
    text2: "",
    text3: "",
  },
  methods: {
    // add() {
    //   if (this.text0 == "" || this.text1 == "") {
    //     alert("wechatMpId Or activityTitle undefined");
    //   } else {
    //     this.person.push({
    //       wechatMpId: this.text0,
    //       activityTitle: this.text1,
    //       awardType: this.text2,
    //       awardName: this.text3,
    //     });
    //   }
    // },
    // fun() {
    //   this.person.pop();
    // },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
input {
  margin-left: 50px;
}
span {
  margin-left: 50px;
}
select {
  margin-left: 50px;
}
.create {
  margin-left: 150px;
}
</style>


//原本的tabulation文件
 <div class="atable">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="num" label="序号" width="90">
      </el-table-column>

      <el-table-column prop="wechatMpId" label="公众号" width="120">
      </el-table-column>

      <el-table-column prop="activityTitle" label="活动标题" width="110">
      </el-table-column>

      <el-table-column prop="awardType" label="礼品类型" width="100">
      </el-table-column>

      <el-table-column prop="awardName" label="礼品名称" width="100">
      </el-table-column>

      <el-table-column prop="mainProduct" label="是否主推" width="100">
      </el-table-column>

      <el-table-column prop="zip" label="申领总数量" width="120">
      </el-table-column>

      <el-table-column prop="zip" label="已申领数量" width="120">
      </el-table-column>

      <el-table-column prop="costPoint" label="所需积分" width="100">
      </el-table-column>

      <el-table-column prop="costMoney" label="所需金额" width="100">
      </el-table-column>

      <el-table-column prop="levels" label="等级限制" width="100">
      </el-table-column>
    </el-table>
  </div>


  <script>
export default {
  name: "Tabulation",

  data() {
    return {
      tableData: [
        {
          num: 1,
          // name:"丸美MARUBI"
          wechatMpId: "",
          // province: "老带新",活动标题
          activityTitle: "",
          // city: "VIP会员",
          awardType: "",
          // address: "邀请有礼 1518 弄",
          awardName: "",
          // zip: 200333,
          mainProduct: false,
          costPoint: "",
          costMoney: "",
          levels: "",
          zip: "",
        },
      ],
    };
  },
  methods: {
    btn() {
      this.$router.push("/childprofile");
    },
    handleClick(row) {
      this.$router.push("/detail");
    },
    btn() {
      this.$router.push("/childprofile");
    },
    handleClick(row) {
      this.$router.push("/detail");
    },
  },
};
</script>

<style scoped>
.atable {
  text-align: center;
  position: relative;
  top: 370px;
  margin: 30px 20px;
}
/deep/.el-table__header {
  width: 100%;
}
/deep/.el-table__body {
  width: 100%;
}
</style>





  <table>
    <tr>
      <th>序号</th>
      <th>公众号</th>
      <th>活动标题</th>
      <th>礼品类型</th>
      <th>礼品名称</th>
      <th>是否主推</th>
      <th>申领总数量</th>
      <th>已申领数量</th>
      <th>所需积分</th>
      <th>所需金额</th>
      <th>等级限制</th>
    </tr>
    <tr v-for="(item, index) in person" :key="index">
      <td>{{ item.num }}</td>
      <td>{{ item.wechatMpId }}</td>
      <td>{{ item.activityTitle }}</td>
      <td>{{ item.awardType }}</td>
      <td>{{ item.awardName }}</td>
      <td>{{ item.medal }}</td>
      <td>{{ item.claimed }}</td>
      <td>{{ item.costPoint }}</td>
      <td>{{ item.costMoney }}</td>
      <td>{{ item.awardName }}</td>
      <td>{{ item.levels }}</td>
    </tr>
  </table>


<script>
// import { gethome } from "@/network/table.js";
export default {
  name: "Tabulation",

  data() {
    return {
      person: [
        {
          num: 1,
          wechatMpId: "丸美",
          activityTitle: "哈哈",
          awardType: "嘻嘻",
          awardName: "哇哇",
          medal: "呜呜",
          claimed: "哦哦",
          costPoint: "嗯嗯",
          costMoney: "钱钱",
          awardName: "文文",
          levels: "vvip",
        },
        {
          num: 2,
          wechatMpId: "",
          activityTitle: "",
          awardType: "",
          awardName: "",
          medal: "",
          claimed: "",
          costPoint: "",
          costMoney: "",
          awardName: "",
          levels: "",
        },
        {
          num: 3,
          wechatMpId: "",
          activityTitle: "",
          awardType: "",
          awardName: "",
          medal: "",
          claimed: "",
          costPoint: "",
          costMoney: "",
          awardName: "",
          levels: "",
        },
      ],
    };
  },
  // created() {
  //   gethome().then((res) => {
  //     console.log(res);
  //   });
  // },
  methods: {},
};
</script>

<style scoped>
table {
  position: relative;
  top: 400px;
  left: 20px;
  width: 1200px;
  border: 1px solid rgb(232, 232, 232);
  border-collapse: collapse; /*关键代码*/
  /* background-color: rgb(199, 196, 196); */
}
th,
td {
  height: 40px;
  text-align: center;
  border: 1px solid rgb(172, 169, 169);
}
th {
  background-color: rgb(232, 232, 232);
}
</style>