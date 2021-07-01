<template>
  <el-scrollbar style="height: 690px">
    <el-form ref="form" :model="form" :rules="rules" label-width="150px">
      <el-form-item label="公众号" prop="wechatMpId">
        <el-select
          v-model="form.wechatMpId"
          placeholder="请选择公众号"
          class="input-box"
          style="width: 40%"
        >
          <el-option label="丸美" value="1"></el-option>
          <el-option label="春纪丸美" value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动标题" prop="activityTitle">
        <el-input
          class="input-box"
          v-model="form.activityTitle"
          placeholder="请输入活动标题"
          style="width: 50%"
        ></el-input>
      </el-form-item>

      <!-- <el-form-item label="封面图/列表缩略图">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          class="input-box"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item> -->

      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              class="input-box"
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 90%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2"> -</el-col>
        <el-col :span="11" prop="date2">
          <el-form-item prop="date2">
            <el-date-picker
              class="input-box"
              type="date"
              placeholder="选择日期"
              v-model="form.date2"
              style="width: 90%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="礼品类型" prop="awardType">
        <el-radio-group v-model="form.awardType">
          <el-radio label="实物礼品"></el-radio>
          <el-radio label="虚拟礼品"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否主推商品">
        <el-radio-group v-model="form.mainProduct">
          <el-radio label="true">是</el-radio>
          <el-radio label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="申请总数量">
        <el-input
          class="input-box"
          v-model="form.nums"
          placeholder="请输入数量"
          style="width: 30%"
          value="0"
        ></el-input>
      </el-form-item>

      <el-form-item label="所需积分">
        <el-input
          class="input-box"
          v-model="form.costPoint"
          placeholder="请输入积分"
          style="width: 30%"
          value="0"
        ></el-input>
      </el-form-item>

      <el-form-item label="所需金额">
        <el-input
          class="input-box"
          v-model="form.costMoney"
          placeholder="请输入金额"
          style="width: 30%"
          value="0"
        ></el-input>
      </el-form-item>

      <el-form-item label="适用等级" prop="levels">
        <el-checkbox-group v-model="form.levels">
          <el-checkbox label="体验会员" name="levels"></el-checkbox>
          <el-checkbox label="爱美会员" name="levels"></el-checkbox>
          <el-checkbox label="VIP会员" name="levels"></el-checkbox>
          <el-checkbox label="VVIP会员" name="levels"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="活动标签">
        <el-tag>活动标签</el-tag>
      </el-form-item>

      <el-form-item label="显示状态">
        <el-select
          v-model="form.vip"
          placeholder="会员系统显示"
          class="input-box"
        >
          <el-option label="vip" value="vip"></el-option>
          <el-option label="vvip" value="vvip"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-select
            class="input-box"
            v-model="form.day"
            placeholder="每天"
            style="width: 90%"
          >
            <el-option label="每月" value="month"></el-option>
          </el-select>
        </el-col>
        <el-col class="line" :span="2"> 参与</el-col>
        <el-col :span="11">
          <el-input
            class="input-box"
            v-model="form.part"
            placeholder="0"
            style="width: 70%"
          ></el-input
          ><span>0代表无数次</span>
        </el-col>
      </el-form-item>

      <el-form-item label="注册时间限制">
        <el-col :span="11">
          <el-date-picker
            class="input-box"
            type="date"
            placeholder="选择日期"
            v-model="form.date3"
            style="width: 90%"
          ></el-date-picker>
        </el-col>

        <el-col class="line" :span="2">至</el-col>
        <el-col :span="11">
          <el-date-picker
            type="date"
            class="input-box"
            placeholder="选择日期"
            v-model="form.date4"
            style="width: 90%"
          ></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="发货后赠送优惠券">
        <el-input
          class="input-box"
          v-model="form.coupon"
          placeholder="请输入优惠券ID"
          style="width: 70%"
        ></el-input>
      </el-form-item>

      <el-form-item label="分享活动">
        <el-radio-group v-model="form.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- <el-form-item label="分享图片">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          class="input-box"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-form-item> -->

      <el-form-item label="分享标题">
        <el-input
          class="input-box"
          v-model="form.headline"
          placeholder="请输入数量"
          style="width: 40%"
        ></el-input>
      </el-form-item>

      <el-form-item label="活动描述">
        <el-input
          class="input-box"
          type="textarea"
          v-model="form.desc"
          style="width: 70%"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">保存</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-scrollbar>
</template>
<script>
export default {
  name: "Make",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        // name: "",活动标题
        activityTitle: "",

        // integral: "",所需积分
        costPoint: "",

        // moeny: "",所需金额
        costMoney: "",
        nums: "",
        coupon: "",
        part: "",
        headline: "",
        // region: "",公众号id
        wechatMpId: "",

        vip: "",
        day: "",
        // gift: "",奖品类型
        awardType: "",

        date1: "",
        date2: "",
        date3: "",
        date4: "",
        delivery: false,
        // type: [],限制等级
        levels: [],
        resource: "",
        desc: "",
        // sure: "",是否主推
        mainProduct: "",
        // dialogImageUrl: "",
        // dialogVisible: false,
        // disabled: false,
      },
      rules: {
        wechatMpId: [
          { required: true, message: "请选择公众号", trigger: "change" },
        ],
        activityTitle: [
          { required: true, message: "请输入活动标题", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        awardType: [
          { required: true, message: "请选择奖品类型", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        levels: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
      },
    };
  },

  methods: {
    onSubmit() {
      this.dialogFormVisible = false;
      // let formData = new FormData();
      // for (let key in this.form) {
      //   formData.append(key, this.form[key]);
      //   console.log(formData.get(key));
      // }
      let params = {
        wechatMpId: this.form.wechatMpId,
        activityTitle: this.form.activityTitle,
        awardType: this.form.awardType,
        awardName: this.form.awardName,
        mainProduct: this.form.mainProduct,
        costPoint: this.form.costPoint,
        costMoney: this.form.costMoney,
        // levels: this.form.levels,
      };
      this.axios({
        method: "post",
        url: "http://localhost:8888/postTrial/save",
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: params,
      }).then((response) => {
        console.log(response);
        if (response.code != 200) {
          alert("保存失败");

          // console.log(response);
        } else {
          console.log(response.msg);
          alert("保存成功");
        }
      });
    },
  },

  handleRemove(file) {
    console.log(file);
  },
  handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url;
    this.dialogVisible = true;
  },
  handleDownload(file) {
    console.log(file);
  },
};
</script>

<style>
.bigbox {
  height: 760px;
}
.input-box input {
  height: 30px;
  line-height: 30px;
}
.input-box {
  width: 20%;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>