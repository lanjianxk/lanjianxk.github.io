<template>
  <div class="bottom">
    <div class="container">
      <!-- <span class="tip">{{ tip }}</span> -->
      <h1 class="title" style="color: #fff; margin-top: 60px">{{ title }}</h1>
      <span class="border"></span>
      <div class="content">
        <img src="../common/images/code.jpg" />
        <dl>
          <dt>Contact By Email</dt>
          <dd>
            Mail: <a :href="mailtoMail">{{ email }}</a>
          </dd>
        </dl>
      </div>
      <p v-text="desc"></p>
    </div>
  </div>
</template>

<script>
import DataInfo from "@/data";
export default {
  name: "bottom",
  data() {
    return DataInfo.bottom;
  },
  computed: {
    mailtoMail() {
      return "mailto:" + this.email;
    },
  },
};
</script>

<style scoped>
.bottom {
  height: auto;
  width: 100%;
  background-color: #333333;
  background: url("../common/images/bg-footer.png") no-repeat center top;
  background-size: cover;
}
.container {
  padding: 2% 0;
}
.content {
  width: 45%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.content img {
  width: 60%;
  height: auto;
  margin: 0;
}
.content dl {
  border-top: 1px solid rgb(214, 212, 212);
  position: relative;
  padding-bottom: 20px;
}
.content dl:after {
  position: absolute;
  top: 4%;
  left: 48%;
  content: "";
  width: 16px;
  height: 16px;
  background: url("../common/images/email.png") no-repeat;
  background-size: 100% auto;
}
.content dt {
  font-size: 16px;
  margin: 30px 0 10px;
  color: #2d405e;
}
.content dd {
  font-size: 18px;
  color: #2d405e;
  margin-top: 10px;
}
.content dd a {
  font-size: 16px;
  color: #03a9f4;
}
.bottom p {
  font-size: 14px;
  color: #fff;
  margin-top: 20px;
}
.border {
  background: #fff;
}

.border:after {
  background: #fff;
}
</style>
