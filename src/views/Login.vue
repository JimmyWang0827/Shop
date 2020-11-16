<template>
    <main>
        <div id="loginBox">
            <div id="logoBox"><img :src="imgUrl"></div>
            <div class="login_form">
                <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
                    <el-form-item prop="username">
                        <el-input prefix-icon="el-icon-user-solid" placeholder="请输入用户名"
                                  v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input prefix-icon="iconfont el-icon-password" placeholder="请输入密码"
                                  v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item class="btns">
                        <el-button type="primary" @click="login">登录</el-button>
                        <el-button type="info" @click="resetLoginForm">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                imgUrl: require('$assets/img/logo.png'),
                loginForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
                    ]

                }
            }
        },
        methods: {
            //重置表单
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields();
            }
            ,
            //登录请求
            login() {
                this.$refs.loginFormRef.validate((valid) => {
                    if (!valid) return;
                    this.$http.post('login', this.loginForm).then((data) => {
                        const {data: res} = data;
                        if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
                        this.$message({
                            message: res.meta.msg,
                            type: 'success'
                        });
                        this.$store.dispatch('login', res.data.token);
                        this.$router.push('/home')
                    }).catch(err => {
                        this.$message.error(err.toString());
                        console.log(err.toString())
                    });
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    main {
        height: 100%;
        width: 100%;
        background: rgb(0, 102, 153, .4);

        #loginBox {
            position: absolute;
            width: 450px;
            height: 300px;
            background: white;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 6px;

            #logoBox {
                position: absolute;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 120px;
                height: 120px;
                border-radius: 50%;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #ccc;
                }
            }

            .login_form {
                position: absolute;
                width: 80%;
                bottom: 0;
                left: 50%;
                transform: translate(-50%);
            }
        }
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }
</style>
