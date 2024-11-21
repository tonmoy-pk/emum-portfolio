<template>
  <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&display=swap');
/* Global styles can be defined here */
html {
  scroll-behavior: smooth;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: auto;
}
.logo {
  font-family: "Playwrite US Trad", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.toggle-container{
  background: #147CD1;
  border-radius: 999px;
  cursor: pointer;
}
.container .text{
  font-size: 30px;
  color: #000;
  font-weight: bold;
}
.button{
  background: linear-gradient(90deg, darkblue, blue);
  width: 30px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: 0.2s;
}
.span{
  position: absolute;
  background-color: #fff;
  width: 90px;
  height: 90px;
  border-radius: 200px;
  margin: 5px;
  transition: all 0.2s ease-out;
}
input {
  display: none;
}
</style>