<template>
  <el-dialog
    custom-class="following-dialog"
    v-model="visible" 
    :center="true" 
    :width="dialogWidth('35%')"
    :before-close="closeDialog"
    title="关注列表"
  >
    <el-scrollbar max-height="450px">
      <div v-for="(user, index) in userList" :key="index">
        <user-brief-disp v-bind="user" />
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<script>
import { dialogWidth } from '@/utils/utils.js';

import UserBriefDisp from './UserBriefDisp.vue'
import {getFollowingList} from "@/apis/users";
export default {
  components: { UserBriefDisp },
  props: {
    unifiedId: {
      type: Number,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    }
  },
  created: async function() {
    const resp = await getFollowingList({"unifiedId":this.unifiedId});
    const userData = resp.data.data;
    for(let item of userData) {
      this.userList.push({
        unifiedId: item.unifiedId,
        userName: item.trueName || '匿名用户',
        userBriefInfo: item.briefInfo || '',
        userType: item.userType,
        userIconUrl: item.avatar,
        ifFollowing: item.isSubscribed,
        ifShowFollow: true
      });
    }
  },
  data() {
    return {
      userList: []
    }
  },
  methods: {
    dialogWidth: dialogWidth,
    closeDialog: function(done) {
      this.$emit('close');
      done();
    },
  }
}
</script>

<style>
</style>