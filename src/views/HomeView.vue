<template>
    <div class="fundall-main d-flex align-items-center bg-grey-100 w-100">
        <div class="fundall-sub w-95 p-1 m-auto bg-white">
            <div class="fundall-subb bg-grey-200">
                <nav class="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <img src="../assets/fundall-logo.svg" alt="">
                    </div>
                    <div>
                        <router-link to="login"><button type="submit" class="text-sm-2 font-weight-bold bg-transparent">LOG IN</button></router-link>
                        <router-link to="signup"><button type="submit" class="text-sm-2 font-weight-bold bg-green-100">SIGN UP</button></router-link>
                    </div>
                </nav>
                <div class="d-flex flex-column justify-content-center align-items-center text-center w-100">
                    <div class="mb-5">
                        <img src="../assets/background-img-one.svg" alt="">
                    </div>
                    <div>
                        <h2 class="text-md-3 font-weight-bold text-black">Fundall Expense Tracker</h2>
                        <h3 class="text-md-3 text-black mb-5">Mini Project Frontend</h3>
                        <p class="text-sm-3 font-weight-bold mt-5 text-black">by Babatunde Fashola</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeView",
}
</script>

<style lang="scss" scoped>
  .fundall-main{
    height:100vh;
    .fundall-sub{
        height:85vh;
        border-radius: 40px;
        .fundall-subb{
            padding:35px 89px;
            border-radius:40px;
            button{
                padding:9px 13px;
                border:none;
                outline: none;
                border-radius: 10px;
            }
        }
    }
  }
</style>

