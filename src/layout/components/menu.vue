<!--
 * @Description: menu
 * @Date: 2022-07-05 17:56:02
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei🐰
 * @LastEditTime: 2023-02-21 13:38:01
-->
<template>
  <ul class="f-menu">
    <div class="logo" @click="goMe">
      <svg-icon icon-class="bug" class="logo-svg" />
    </div>
    <li v-for="(item,index) in data" :index="item.index" :key="item.id" :class="`f-menu-item ${defaultItem==item.index?'actived':''}`" @click="handleClick(item,index)">
      <el-tooltip effect="dark" :content="item.name" placement="right-start">
        <i :class="item.icon" style="font-size:24px"></i>
      </el-tooltip>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      activedIndex: 0,
      defaultItem: ''
    }
  },
  watch: {
    $route: {
      handler (to) {
        this.defaultItem = to.fullPath
        const permission = JSON.parse(window.sessionStorage.getItem('user'))?.permission || ''
        if (permission.includes('admin') || permission.includes('super')) {
          this.controlList('admin')
        } else {
          this.controlList()
        }
      },
      deep: true,
      immediate: true
    }
  },
  created () {

  },
  methods: {
    controlList (type) {
      if (type === 'admin') {
        this.data = [
          {
            id: '0',
            icon: 'el-icon-s-home',
            name: '首页',
            index: '/index'
          },
          {
            id: '1',
            icon: 'el-icon-edit',
            name: '编辑文章',
            index: '/article-edit'
          },
          {
            id: '2',
            icon: 'el-icon-s-grid',
            name: '权限管理',
            index: '/permission'
          },
          {
            id: '5',
            icon: 'el-icon-notebook-1',
            name: '文章管理',
            index: '/catgory'
          },
          {
            id: '4',
            icon: 'el-icon-s-platform',
            name: '监控大屏',
            index: '/echarts'
          },
          {
            id: '3',
            icon: 'el-icon-user',
            name: '个人账号',
            index: '/personal'
          }
        ]
        return
      }
      this.data = [
        {
          id: '0',
          icon: 'el-icon-s-home',
          name: '首页',
          index: '/index'
        },
        {
          id: '1',
          icon: 'el-icon-edit',
          name: '编辑文章',
          index: '/article-edit'
        },
        {
          id: '4',
          icon: 'el-icon-s-platform',
          name: '监控大屏',
          index: '/echarts'
        },
        {
          id: '3',
          icon: 'el-icon-user',
          name: '个人账号',
          index: '/personal'
        }
      ]
    },
    handleClick (item, i) {
      if (item.index === '/echarts') {
        this.$confirm('为获得更好的体验，请您进入大屏页面后按下键盘F11', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push(item.index)
        })
      } else {
        this.$router.push(item.index)
      }
    },
    goMe () {
      // this.$router.push("me")
      this.$router.push('/')
    }
  }
}
</script>
<style lang='scss' scoped>
.f-menu {
  padding: $space_6;
  .logo {
    width: 50px;
    height: 50px;
    padding-top: $space_6;
    text-align: center;
    line-height: 50px;
    background-color: white;
    margin-top: 80px;
    margin-bottom: 50px;
    border-radius: 10px;
    cursor: pointer;
    .logo-svg {
      width: 30px;
      height: 30px;
      color: $main_color;
    }
  }
  .actived {
    background-color: hsla(0, 0%, 100%, 0.2);
  }
  .f-menu-item {
    margin-top: $space_24;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    &:hover {
      transition: all 0.5s;
      background-color: hsla(0, 60%, 6%, 0.2);
    }
  }
}
</style>
