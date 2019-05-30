<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要吐槽的内容，最多不超过120个字" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{i+1}} 楼&nbsp; 用户：{{item.user_name}}&nbsp;&nbsp; 发表时间：{{item.add_time| dataFormat}}</div>
        <div class="cmt-content">{{item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: "" //评论输入的内容
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      //获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;

            //每当获取新评论数据的时候，不要把老数据清空覆盖，而是以老数据拼接上新数据
            this.comments = this.comments.concat(result.body.message);
            //   console.log(result.body);
            console.log("获取成功");
          } else {
            alert("获取失败");
          }
        });
    },
    getMore() {
      //加载更多
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return alert("评论内容不能为空");
      }

      //发表评论
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(function(result) {
          if (result.body.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt)
            this.msg="";
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    .cmt-item {
      margin: 5px 0;
      font-size: 14px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-content {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
