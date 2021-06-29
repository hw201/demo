<template>
  <show-position>
    <div class="bar">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="(item, index) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          <!-- <tab-component :is="item.content"></tab-component> -->
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div>
    <div style="margin-bottom: 20px">
      <el-button size="small" @click="addTab(editableTabsValue)">
        添加
      </el-button>
    </div>
  </show-position>
</template>
<script>
import ShowPosition from "../../components/ShowPosition.vue";
// import Npros from "@/views/fuyou/child/Npros";
export default {
  name: "Profile ",
  components: {
    ShowPosition,
    // Npros,
  },
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Nproject",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>
<style scoped>
/* .public {
  position: absolute;
  z-index: 999;
  top: 0;
  left: 220px;
} */
.bar {
  border: 1px solid rgb(241, 243, 244);
  width: 100vh;
  height: 50vh;
}
</style>