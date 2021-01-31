<template>
  <div class="transactioninfo"> 
    <h1>All Transactions</h1>     
    <div class="form-group">
        <h4>Pending Transactions</h4> 
        <textarea
          class="form-control"
          rows="10"
          cols="100"
          id="pendingTransactions">
        </textarea>
    </div>

     <div class="form-group">
        <h4>In Mining Process Transactions</h4> 
        <textarea
          class="form-control"
          rows="10"
          cols="100"
          id="inProcessTransactions">
        </textarea>
    </div>

    <div class="form-group">
        <h4>Completed Transactions</h4> 
        <textarea
          class="form-control"
          rows="10"
          cols="100"
          id="completedTransactions">
        </textarea>
    </div>

     <div class="form-group">
        <h4>Rejected Transactions</h4> 
        <textarea
          class="form-control"
          rows="10"
          cols="100"
          id="rejectedTransactions">
        </textarea>
    </div>
  </div>
</template>


<script>
export default {
  name: "ForTransactionInfoVue",
  data() {
    return {
      form: {
        from: null, // from opened wallet    
      },
      content: null
    };
  },

  methods: {   

    retrievePendingTransaction() {
      console.log("Requesting for pending transactions..");
      const axios = require("axios").default;

      axios
        .get("http://127.0.0.1:1234/transactions/pending")
        .then(function(response) {                
           document.getElementById("pendingTransactions").value = JSON.stringify(response.data);          
        });      
    },

    retrieveCompletedTransaction() {
      console.log("Requesting for completed transactions..");
      const axios = require("axios").default;

      axios
        .get("http://127.0.0.1:1234/transactions/completed")
        .then(function(response) {                
           document.getElementById("completedTransactions").value = JSON.stringify(response.data);          
        });      
    },

    retrieveInProcessTransaction() {
      console.log("Requesting for in process transactions..");
      const axios = require("axios").default;

      axios
        .get("http://127.0.0.1:1234/transactions/inprocess")
        .then(function(response) {                
           document.getElementById("inProcessTransactions").value = JSON.stringify(response.data);          
        });      
    },

    retrieveRejectedTransaction() {
      console.log("Requesting for rejected transactions..");
      const axios = require("axios").default;

      axios
        .get("http://127.0.0.1:1234/transactions/rejected")
        .then(function(response) {                
           document.getElementById("rejectedTransactions").value = JSON.stringify(response.data);          
        });      
    }

  },

  beforeMount(){
    this.retrievePendingTransaction();
    this.retrieveCompletedTransaction();
    this.retrieveInProcessTransaction();
    this.retrieveRejectedTransaction();
 },
};
</script>