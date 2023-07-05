<template>
    <div>
      <div>
        <div>{{ days+'d'+" "+ hours+'h'+" "+ minutes+'m'+" "+ seconds+'s' }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        countdownDate: new Date("2023-07-25T23:59:59"),
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        countdownInterval: null
      };
    },
  
    mounted() {
      this.startCountdown();
    },
  
    methods: {
      startCountdown() {
        this.updateCountdown();
  
        this.countdownInterval = setInterval(() => {
          this.updateCountdown();
        }, 1000);
      },
  
      updateCountdown() {
        const now = new Date();
        const timeDifference = this.countdownDate - now;
  
        if (timeDifference > 0) {
          this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          this.hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          this.minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        } else {
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          clearInterval(this.countdownInterval);
        }
      }
    },
  
    beforeUnmount() {
      clearInterval(this.countdownInterval);
    }
  };
  </script>
  