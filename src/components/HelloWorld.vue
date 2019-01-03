<template>
    <div class="test">

    </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
$myColor = #ff29f1
.hello
  width 100px
  height 100px
  position: absolute
  left: 50%
  top: 50%
  background-color $myColor
  margin-left: -(@width/2)
  margin-top:-(@height/2)
  &:hover
    background-color green

border-test($n)
  border-radius $n
  margin $n

.test
  border-test 5px
  background-color pink
  width:100px
  height:100px
</style>
