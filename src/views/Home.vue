<template>
    <div>
        <el-button type="info" @click="logout">退出登录</el-button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {}
        },
        methods: {
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

</style>
