<template>
    <div class="fundall-main d-flex align-items-center bg-grey-100 w-100">
        <div class="fundall-sub w-95 p-1 m-auto bg-white">
            <div class="fundall-subb bg-grey-200">
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-column w-50">
                        <nav class=" mb-5">
                            <div>
                                <img src="../assets/fundall-logo.svg" alt="">
                            </div>
                            <!--<div>
                                <button type="submit" class="text-sm-2 font-weight-bold bg-transparent">LOG IN</button>
                                <button type="submit" class="text-sm-2 font-weight-bold bg-green-100">SIGN UP</button>
                            </div>-->
                        </nav>
                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <div class="mb-5">
                                <img src="../assets/background-img-two.svg" alt="">
                            </div>
                            <div class="w-75 d-flex justify-content-center">
                                <h2 class="text-md-3 text-left font-weight-bold text-black"><span class="text-green-200">Welcome back!</span><br>We miss you.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="w-50">
                        <div class="form_main bg-white">
                            <div class="mb-5">
                                <h2 class="font-weight-bold text-md-2 text-black-200">Holla</h2>
                                <p class="size-20 text-black-100 font-weight-medium">Sign in to the vibe!</p>
                            </div>
                            <ErrorComponent v-if="error" :error="error"/>
                            <form @submit.prevent="handleSubmit">
                                <div class="mb-4">
                                    <label class="text-black-100 font-weight-bold mb-1" for="email">Email or Username</label>
                                    <input type="text" v-model="email" placeholder="Enter Email" class="w-100">
                                </div>
                                <div class="mb-4">
                                    <label class="text-black-100 font-weight-bold mb-1" for="password">Password</label>
                                    <input type="text" v-model="password" placeholder="Enter Password" class="w-100">
                                </div>
                                <div>
                                    <button type="submit" class="font-weight-bold w-100">LOGIN</button>
                                </div>
                            </form>
                            <div class="mt-4 d-flex flex-column justify-content-center align-items-center">
                                <p class="font-weight-bold text-center">Don't have an account?<router-link to ="/signup" class="link text-green-200"> Register Here</router-link></p>
                                <p class="text-center terms">By clicking on Login, you agree to our <router-link to="" class="text-green-200 link">Terms & Conditions and Privacy Policy</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ErrorComponent from '../components/error'

export default {
    name:"LogIn",
    components:{
        ErrorComponent
    },
    data() {
        return {
            email: "",
            password: "",
            error: ""
        }
    },
    methods: {
     async handleSubmit() {
         try{
             const response = await axios.post('/api/v1/login',{
             email: this.email,
             password: this.password
         });
         localStorage.setItem('token', response.data.token);
         this.$store.dispatch('user', response.data.user);
         this.$router.push('/dashboard');
         }catch (e){
                this.error = "Invalid username and password"
         }
     }
 }
}
</script>

<style lang="scss" scoped>
  .fundall-main{
    padding:80px 50px ;
    .fundall-sub{
        //height:85vh;
        border-radius: 40px;
        .fundall-subb{
            padding:40px 89px 40px 40px;
            border-radius:40px;
            .form_main{
                border-radius: 10px;
                padding: 60px;
                -webkit-box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.0829);
                box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.0829);
                form{
                    input{
                        padding:10px 14px;
                        border: 1px solid #CAD0C9;
                        border-radius:4px;
                        outline: #4DE897;
                        color:#30443C;
                        font-size:18px;     
                        &::placeholder{
                            color:#30443C;
                            font-size: 18px;
                            font-style: italic;
                            opacity:50%;
                        }
                    }
                    button{
                            border:none;
                            background-color: #4DE897;
                            border-radius:3px;
                            padding: 19px 0;
                    }
                }
            }
            .terms{
                color: hsla(156, 17%, 23%, 0.5);
                width:70%;
            } 
        }
    }
  }
</style>

