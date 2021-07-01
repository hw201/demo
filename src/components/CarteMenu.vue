<template>
  <div style="height: 768px" class="outdiv">
    <el-scrollbar style="height: 100%">
      <el-row class="tac">
        <el-col :span="12">
          <div class="bor">
            <h3>MARUBI丸美</h3>
          </div>

          <el-menu
            :default-active="$route.path"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="rgb(49, 49, 44)"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">系统设置</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">会员管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">积分管理</span>
            </el-menu-item>

            <el-submenu index="5">
              <template slot="title">
                <span>营销中心</span>
              </template>

              <el-menu-item-group>
                <el-submenu index="5-1">
                  <template slot="title">付邮试用</template>
                  <el-menu-item index="/fuyou">活动列表</el-menu-item>
                  <el-menu-item index="/record">活动记录</el-menu-item>
                </el-submenu>
              </el-menu-item-group>

              <el-menu-item-group>
                <el-submenu index="5-2">
                  <template slot="title">口碑分享</template>
                  <el-menu-item index="/koubei">档案列表</el-menu-item>
                  <el-menu-item index="5-2-2">活动设置</el-menu-item>
                  <el-menu-item index="5-2-3">口碑记录</el-menu-item>
                  <el-submenu index="5-2-4">
                    <template slot="title">声望礼</template>
                    <el-menu-item index="5-2-4-1">礼品设置</el-menu-item>
                    <el-menu-item index="5-2-4-2">领取记录</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu-item-group>

              <el-menu-item-group>
                <el-submenu index="5-3">
                  <template slot="title">SPA预约</template>
                  <el-menu-item index="5-3-1">活动设置</el-menu-item>
                  <el-menu-item index="5-3-2">预约记录</el-menu-item>
                </el-submenu>
              </el-menu-item-group>

              <el-menu-item-group>
                <el-submenu index="/fuyou">
                  <template slot="title">邀请有礼</template>
                  <el-menu-item index="/yaoqing">邀请有礼</el-menu-item>
                  <el-menu-item index="5-4-1">活动列表</el-menu-item>
                  <el-menu-item index="5-4-2">邀请人列表</el-menu-item>
                  <el-menu-item index="5-4-3">邀请人获奖记录</el-menu-item>
                  <el-menu-item index="5-4-4">受邀人列表</el-menu-item>
                  <el-menu-item index="5-4-5">受请人获奖记录</el-menu-item>
                  <el-menu-item index="5-4-6">限时榜单</el-menu-item>
                </el-submenu>
              </el-menu-item-group>

              <el-menu-item-group>
                <el-submenu index="5-5">
                  <template slot="title">每日任务</template>
                  <el-menu-item index="/meiri">任务规则</el-menu-item>
                  <el-menu-item index="5-5-2">任务流水</el-menu-item>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="7">
              <template slot="title">
                <span>内容管理</span>
              </template>
              <el-menu-item index="6-1">广告位管理</el-menu-item>
            </el-submenu>

            <el-menu-item index="/hufu">
              <span slot="title">基础管理</span>
            </el-menu-item>

            <el-menu-item index="8">
              <span slot="title">微信管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  components: {},
  name: "CarteMenu",
  data() {
    return {
      activeIndex: "1",
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      // this.$router.push(this.path);
    },
    handleSelect2(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
/deep/.el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
.outdiv {
}
.sou {
  position: absolute;
  left: 300px;
  background-color: #fff;
}
.el-col {
  position: absolute;
  background-color: rgb(49, 49, 44);

  width: 220px;
  height: 1000px;
}
.bor {
  border-bottom: 1px solid white;
  height: 50px;
}
h3 {
  color: white;
  text-align: center;

  position: relative;
  bottom: -10px;
}
</style>