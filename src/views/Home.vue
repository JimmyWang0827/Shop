<template>
    <el-container>
        <el-header style="height: 100px">
            <div class="logoBox">
                <img :src="logoUrl" alt="">
                <span>某某公司电商后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出系统</el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b" unique-opened :router="true">
                    <el-submenu :index="String(item.id)" v-for="item in menuList" :key="item.id">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.authName}}</span>
                        </template>
                        <el-menu-item-group v-for="subItem in item.children">
                            <el-menu-item :index="subItem.path">{{subItem.authName}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        created() {
            this.getMenuList();
        },
        data() {
            return {
                logoUrl: require('$assets/img/logo.png'),
                menuList: []
            }
        },
        methods: {
            async getMenuList() { //获取菜单栏数据
                const {data: res} = await this.$http.get('menus');
                if (res.meta.status !== 200) return this.$message.error('获取权限列表失败！');
                this.menuList = res.data;
                console.log(this.menuList);
            },
            //退出登录
            logout() {
                this.$store.dispatch('logout').then(() => {
                    this.$message.success('退出成功');
                    this.$router.push('/login');
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .el-container {
        height: 100%;

        .el-header {
            display: flex;
            background: #373d41;
            color: #fff;
            align-items: center;
            justify-content: space-between;

            .logoBox {
                display: flex;
                align-items: center;
                font-size: 22px;

                img {
                    width: 65px;
                    height: 65px;
                    border-radius: 50%;
                    margin: 10px;

                }
            }


        }

        .el-aside {
            .el-menu {
                height: 100%;
            }
        }
    }
</style>
