<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="logo-box">
        <img src="~assets/heima.png" alt="logo" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-switch v-model="isCollapse" :active-value="false" :inactive-value="true"></el-switch>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          :collapse="isCollapse"
          :collapse-transition="false"
          unique-opened
          :default-active="$route.path"
          router
        >
          <!-- 一级菜单 -->
          <el-submenu v-for="item in menuList" :key="item.id" :index="String(item.id)">
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.id"
              :index="'/' + subItem.path"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      menuList: [], // 左侧菜单数据
      iconObj: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      isCollapse: false // 是否折叠菜单
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    logout() {
      // 清空token
      sessionStorage.clear()
      // 跳转到登录页
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList() {
      const res = await this.$api.getMenuList()
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .logo-box {
      display: flex;
      align-items: center;
      font-size: 24px;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
  .el-aside {
    background-color: #333744;
    transition: all 0.3s;
    .el-switch {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #000;
    }
    .el-menu {
      border-right: none;
      .iconfont {
        margin-right: 10px;
      }
    }
  }
  .el-main {
    background-color: #eaedf2;
  }
}
</style>
