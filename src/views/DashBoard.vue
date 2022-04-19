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
                        </nav>
                        <div class="d-flex align-items-center">
                            <div class="profile-pics pointer">
                                <img src="../assets/avi.svg" alt="profile pics">
                            </div>
                            <div class="d-flex flex-column justify-content-end">
                                <h4 class="text-md text-black-100 font-weight-bold">Babatunde Fashola</h4>
                                <p class="text-black-100 size-21">baba2@gmail.com</p>
                            </div>
                        </div>
                        <div class="mt-5 line-height-20">
                            <p class="size-21 text-black-100 font-weight-medium">Target Monthly Expenses</p>
                            <p class="font-weight-bold text-black-100 text-md">₦596,000</p>
                        </div>
                        <div class="progress">
                            <div class="progress-inner">
                            
                            </div>
                        </div>
                        <div class="mt-4 bg-white p-3 expenses_summary">
                            <h4 class="text-sm-1 text-black-100 font-weight-medium">Daily Expenses Summary</h4>
                            <table class="mt-4">
                                <thead>
                                    <tr class="">
                                        <div class="d-flex">
                                            <img src="../assets/bullet.svg" alt="" class="head-img">
                                            <div>
                                                <th class="text-black-100 font-weight-medium">Date</th>
                                                <th class="text-black-100 font-weight-medium">Amount</th>
                                            </div>
                                        </div>
                                    </tr>
                                </thead>
                                <tbody v-for="(expense, ix) in expenses" :key="ix">
                                    <tr>
                                        <div class="d-flex">
                                            <img src="../assets/bullet.svg" alt="bullet">
                                            <div>
                                                <td class="text-black-100">{{expense.date}}</td>
                                                <td class="text-green-200">₦{{expense.amount}}</td>
                                            </div>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="d-flex justify-content-center mb-3 pointer">
                                <button class="first-button pointer">1 </button>&nbsp; of 5 &nbsp;&nbsp; <img src="../assets/backward-arrow.svg" alt="backward arrow">&nbsp;<img src="../assets/forward-arrow.svg" alt="forward arrow">
                            </div>
                        </div>
                    </div>
                    <div class="w-50">
                        <div class="form-main bg-grey-300">
                            <div class="month-expense mb-5 d-flex align-items-end justify-content-between bg-white p-3">
                               <div>
                                    <h4 class="font-weight-bold size-22 text-black-100"><span class="text-green-200">Welcome back,</span> Babatunde</h4>
                                    <p class="text-black-100 size-15">Now, let's get your expenses for this month</p>
                               </div>
                               <div class="">
                                    <img src="../assets/background-img-three.svg" alt="">
                               </div>
                            </div>
                            <form>
                                <div class="mb-4">
                                    <label class="text-black font-weight-medium mb-1">Target Monthly Expenses</label><br>
                                    <input type="text" :class="{'input-has-value-style': computedMonthlyExpensesStyleEnable}" v-model="monthly_expenses" class="w-70">
                                </div>
                                <div class="mb-4">
                                    <label class="text-black font-weight-medium mb-1">Date</label><br>
                                    <input type="text" v-model="date" :class="{'input-has-value-style': computedDateStyleEnable}" class="w-70" required>
                                </div>
                                 <div class="mb-4">
                                    <label class="text-black-100 font-weight-medium mb-1">Today's Expenses</label>
                                    <div class="d-flex justify-content-between mt-2">
                                        <input type="text" v-model="first_item" :class="{'input-has-value-style': computedFirstItemStyleEnable}" placeholder="pizza" class="w-55">
                                        <input type="text" v-model="first_item_amount" :class="{'input-has-value-style': computedFirstItemAmountStyleEnable}" placeholder="10,000" class="w-40">
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <input type="text" v-model="second_item" :class="{'input-has-value-style': computedSecondItemStyleEnable}" placeholder="Textbook" class="w-55">
                                        <input type="text" v-model="second_item_amount" :class="{'input-has-value-style': computedSecondItemAmountStyleEnable}" placeholder="10,000" class="w-40">
                                    </div>
                                    <div class="d-flex justify-content-between mt-2">
                                        <input type="text" v-model="third_item" :class="{'input-has-value-style': computedThirdItemStyleEnable}" placeholder="Tuition fee" class="w-55">
                                        <input type="text" v-model="third_item_amount" :class="{'input-has-value-style': computedThirdItemAmountStyleEnable}" placeholder="10,000" class="w-40">
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end align-items-center">
                                    <p class="w-60">
                                        <span class="text-black font-weight-medium">Total Actual Expenses: </span>
                                        <span class="font-weight-bold text-black size-20">₦ </span>   
                                        <input type="text" :class="{'input-has-value-style': computedTotalExpensesStyleEnable}" v-model="amount" class="w-45" required>
                                    </p>
                                </div>
                                <div class="d-flex justify-content-center mt-2">
                                    <button type="submit" @click.prevent="submit" class="font-weight-bold">SAVE TODAY'S EXPENSES</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DashBoard",
    data() {
        return {
                monthly_expenses: "596,000",
                date: "08/08/2019",
                first_item: "",
                first_item_amount: "",
                second_item: "",
                second_item_amount: "",
                third_item: "",
                third_item_amount: "",
                amount: "40,000.00",
            expenses:[
                {
                    date: "30 Nov, 2018",
                    amount: "30,000"
                },
                 {
                    date: "25 Nov, 2018",
                    amount: "30,000"
                },
                 {
                    date: "28 Oct, 2018",
                    amount: "30,000"
                },
            ],
            
        }
    },
    mounted() {
    if (localStorage.getItem("expenses")){
      this.expenses = JSON.parse(localStorage.getItem("expenses"))
    }
  },
    methods: {
       submit() {
            this.expenses.push({
                date:this.date,
                amount:this.amount
            });
            //localStorage.setItem('vue-expense', JSON.stringify(this.expenses));
        }
    },
    watch: {
        expenses: {
      handler() {
        localStorage.setItem('expenses',JSON.stringify(this.expenses))
      },
      deep: true
    }
  },
  
    computed: {
        computedMonthlyExpensesStyleEnable: function () { 
        return this.monthly_expenses && this.monthly_expenses.length > 0;
        },
        computedDateStyleEnable: function () { 
        return this.date && this.date.length > 0;
        },
        computedFirstItemStyleEnable: function () { 
        return this.first_item && this.first_item.length > 0;
        },
        computedFirstItemAmountStyleEnable: function () { 
        return this.first_item_amount && this.first_item_amount.length > 0;
        },
        computedSecondItemStyleEnable: function () { 
        return this.second_item && this.second_item.length > 0;
        },
        computedSecondItemAmountStyleEnable: function () { 
        return this.second_item_amount && this.second_item_amount.length > 0;
        },
        computedThirdItemStyleEnable: function () { 
        return this.third_item && this.third_item.length > 0;
        },
        computedThirdItemAmountStyleEnable: function () { 
        return this.third_item_amount && this.third_item_amount.length > 0;
        },
        computedTotalExpensesStyleEnable: function () { 
        return this.amount && this.amount.length > 0;
        },
  },
}
</script>

<style lang="scss" scoped>
  .fundall-main{
    font-family: 'Circular Std', sans-serif;
    padding:80px 50px ;
    .fundall-sub{
        //height:85vh;
        border-radius: 40px;
        .blue{
            border:4px solid red;
        }
        .fundall-subb{
            padding:40px 60px 40px 60px;
            border-radius:40px;
            .input-has-value-style {
                border: 1px solid #4DE897 !important;
            }
            .progress{
                height:7px;
                width: 57%;
                margin: 5px 0 15px;
                .progress-inner{
                    height:7px;
                    width: 23%;
                    background-color: #4DE897;
                }
            }
            .expenses_summary{
                border-radius:10px;
                -webkit-box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.0829);
                box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.0829);
                width:58%;
                .first-button{
                    border:1px solid #A4B0A3;
                }
                table{
                    .head-img{
                        visibility:hidden;
                    }
                    th{
                        padding: 0px 120px 0px 30px;
                        font-family: 'Nunito Sans', sans-serif;

                    }    
                   td{
                        padding:20px 60px 30px 30px;
                        font-family: 'Nunito Sans', sans-serif;
                   }
                   img{
                        padding-left: 20px;
                        margin-bottom:10px;
                   }
                    
                }
            }
            .profile-pics{
                background-color: #C4C4C4;
                border-radius:20px;
                padding:26px 33px 31px 32px;
                margin-right: 40px;
            }
            .form-main{
                border-radius: 10px;
                padding: 40px 30px;
                -webkit-box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.0829);
                box-shadow: 1px 5px 15px 0px rgba(0, 0, 0, 0.0829);
                .month-expense{
                    border-radius:10px;
                    height:104px;
                }
                form{
                   width:92%;
                   margin:auto;
                    input{
                        padding:10px 14px;
                        border: 1px solid #CAD0C9;
                        border-radius:4px;
                        outline: #4DE897;
                        color:#30443C;
                        font-size:18px;     
                        &::placeholder{
                            color:#30443C;
                            font-family: 'Nunito Sans', sans-serif;
                            font-size: 18px;
                            font-style: italic;
                            opacity:50%;
                        }
                    }
                    button{
                            border:none;
                            background-color: #4DE897;
                            border-radius:15px;
                            padding: 13px;
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