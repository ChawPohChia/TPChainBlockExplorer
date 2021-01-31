<template>
  <div class="accountinfo">
    <h1>Account Balance and Transaction History</h1>

    <form v-on:submit.prevent="RetrieveAccountInformation()">      
      <p class="lead">Account To Check:</p>
      <textarea class="form-control" rows="1" cols="40" id="value" v-model="account.address"></textarea>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Retrieve Account Information </button>
      <br />
      <br />
      <div class="form-group">
        <p class="lead">Account Balance</p>
        <textarea
          class="form-control"
          rows="2"
          cols="40"         
          id="AccountBalance"
          v-model="account.balance"
        ></textarea>
        <p class="lead">Account Transactions:</p>
        <textarea
          class="form-control"
          rows="30"
          cols="100"
          id="AccountTransactions"
          v-model="account.transactions"
        ></textarea>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "AccountInformation",
  data() {
    return {
      account: {
        address: null,
        transactions: "all transactions to display",
        balance: null
      }
    };
  },

  methods: {    

    RetrieveAccountInformation() {
      console.log("Retrieving account information now..");
     const axios = require("axios").default;

     axios
        .get("http://127.0.0.1:1234/address/"+this.account.address+"/balance")
        .then(function(response) {
          if(response.status==200){
              if(response.data["balance"]>=0)               
                  document.getElementById("AccountBalance").value = response.data["message"]+":\n"+response.data["balance"];  
              else
                  document.getElementById("AccountBalance").value = response.data["message"];   

          }
          else{
              document.getElementById("AccountBalance").value = "Error(Response not with 200): \n"+response.data;  
          }
        })
        .catch((error) => {
              document.getElementById("AccountBalance").value = "Error(API calling fails): \n"+error; 
        })

//   return {"numberofTransactions":numberofTransactions,"Transactions":relevantTransactionsJson}
        axios
        .get("http://127.0.0.1:1234/address/"+this.account.address+"/transactions")
        .then(function(response) {
          if(response.status==200){
              if(response.data["numberofTransactions"]>=0)               
                  document.getElementById("AccountTransactions").value = response.data["Transactions"];  
              else
                  document.getElementById("AccountTransactions").value = "No transactions found for this account: \n"+response.data["Transactions"];   

          }
          else{
              document.getElementById("AccountTransactions").value = "Error(Response not with 200): \n"+response.data;  
          }
        })
        .catch((error) => {
              document.getElementById("AccountTransactions").value = "Error(API calling fails): \n"+error; 
        })
    }
  }
};
</script>

