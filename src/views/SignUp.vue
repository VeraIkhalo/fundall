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
                                <img src="../assets/background-img-one.svg" alt="">
                            </div>
                            <div class="w-75">
                                <h2 class="text-md-3 font-weight-bold text-black mb-4 line-height-40"><span class="text-green-200">Welcome! </span>Let's get to know you.</h2>
                                <p class="size-21 line-height-30 text-black font-weight-medium">Your first step toward a better financial lifestyle starts here.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-50">
                        <div class="form_main bg-white">
                            <ErrorComponent v-if="error" :error="error"/>
                            <form @submit.prevent="handleSubmit">
                                <div class="d-flex justify-content-between">
                                    <div class="mb-4">
                                        <label class="text-black-100 font-weight-bold mb-1">First Name</label><br>
                                        <input type="text" v-model="firstname" placeholder="Enter First Name" required>
                                    </div>
                                    <div class="mb-4">
                                        <label class="text-black-100 font-weight-bold mb-1">Last Name</label><br>
                                        <input type="text" v-model="lastname" placeholder="Enter Last Name" required>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="text-black-100 font-weight-bold mb-1">Email Address</label>
                                    <input type="email" v-model="email" placeholder="Enter Email" class="w-100" required>
                                </div>
                                <div class="mb-4">
                                    <label class="text-black-100 font-weight-bold mb-1">Password</label>
                                    <input type="password" v-model="password" placeholder="Enter Password" class="w-100" required>
                                </div>
                                <div class="mb-4">
                                    <label class="text-black-100 font-weight-bold mb-1">Confirm Password</label>
                                    <input type="password" v-model="password_confirmation" placeholder="Confirm Password" class="w-100" required>
                                </div>
                                <div>
                                    <button type="submit" class="font-weight-bold w-100">SIGN UP</button>
                                </div>
                            </form>
                            <div class="mt-5">
                                <p class="font-weight-bold text-center">Already have an account?<router-link to="login" class="text-green-200 link"> Login Here</router-link></p>
                            </div>
                        </div>
                        <div class=" d-flex justify-content-center text-center mt-4 terms">
                            <p class="text-center w-60">By clicking on Login, you agree to our <router-link to="" class="text-green-200 link">Terms & Conditions and Privacy Policy</router-link></p>
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
    name:"SignUp",
    components: {
        ErrorComponent,
    },
    data() {
        return {
            firstname: '',
            lastname: '',
            email : '',
            password: '',
            password_confirmation: '',
            error: ''
        }
    },
    methods: {
     async handleSubmit() {
         
      try{ 
       const response = await axios.post('/api/v1/register',{
            firstname : this.firstname,
            lastname: this.lastname,
            password: this.password,
            password_confirmation: this.password_confirmation,
            email: this.email
       });
       console.log(response);
       this.$router.push('/login');
      }catch (e) {
          this.error = "Error occured";
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
                padding:70px;
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

            }
            
        }
    }
  }
</style>

