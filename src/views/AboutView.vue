<template>
  <div class="about">
    <h1>This is your page. Your own. So is beer.</h1>
    <div class="card">
      <img :src="this.$store.state.user.data.avatar" alt="avatar">
      <div class="content">
        <div class="item">
          <strong>Name:</strong> {{this.$store.state.user.data.first_name}} {{this.$store.state.user.data.last_name}}
        </div>
        <div class="item">
            <strong>Age:</strong> {{getAge}}
        </div>
        <div class="item">
          <strong>Occupation:</strong> {{this.$store.state.user.data.employment.title}}
        </div>
      </div>
    </div>
    <div class="beer animate__animated animate__fadeInLeft">
      <h2>Here it is, mate. Drink away</h2>
      <div class="title">Your perfect beer: <strong>{{this.$store.state.beer.data.name}}</strong></div>
      <div class="chars">
        <div class="item">
          <strong>Brand: </strong> {{this.$store.state.beer.data.brand}}
        </div>
        <div class="item">
          <strong>Style: </strong> {{this.$store.state.beer.data.style}}
        </div>
        <div class="item">
          <strong>Hop: </strong> {{this.$store.state.beer.data.hop}}
        </div>
        <div class="item">
          <strong>Yeast: </strong> {{this.$store.state.beer.data.yeast}}
        </div>
        <div class="item">
          <strong>Malts: </strong> {{this.$store.state.beer.data.malts}}
        </div>
        <div class="item">
          <strong>Ibu: </strong> {{this.$store.state.beer.data.ibu}}
        </div>
        <div class="item">
          <strong>Alcohol: </strong> {{this.$store.state.beer.data.alcohol}}
        </div>
        <div class="item">
          <strong>Blg: </strong> {{this.$store.state.beer.data.blg}}
        </div>
      </div>
      <div class="footer">
        If you ain't like it - fine! Just come back and choose again. <br>
        And then drink both. <br>
        There's no such thing as too much beer, rly.
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: 'PersonalPage',
  computed:{
    getAge: function (){
      let today = new Date();
      let birthDate = new Date(this.$store.state.user.data.date_of_birth);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
      {
        age--;
      }
      return age;
    }
  }
}
</script>

<style lang="scss" scoped>
  .about{
    margin: 30px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 960px;
    h1{
      margin: 0 auto 30px;
    }
    .card{
      display: flex;
      border-radius: 10px;
      padding: 10px 15px;
      img{
        margin-right: 15px;
      }
      .content{
        text-align: left;
        .item{
          margin-bottom: 10px;
        }
      }
    }
    .beer{
      .title{
        margin-bottom: 20px;
      }
      .chars{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .footer{
      margin-top: 30px;
      padding-bottom: 30px;
    }
  }
  @media(max-width: 768px){
    .about{
      h1{
        margin-bottom: 15px;
      }
      .card{
        flex-direction: column;
        img{
          width: 200px;
          margin-bottom: 15px;
          margin-right: unset;
        }
      }
    }
  }
</style>
