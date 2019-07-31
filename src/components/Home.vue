<template>
  <div class="hello">
    <h1 @click="show = true">{{result}}</h1>
    <h1 @click="changeType(option.type == 'day' ? true : false)">Change Type ({{option.type}})</h1>
    <v-date-calendar
      v-model="show"
      :date="startTime"
      :option="option"
      :limit="limit"
      @cancel="cancel"
      @confirm="confirm"
      @change="change"
    />
  </div>
</template>

<script>
  import dateCalendar from './vue-date-calendar'

  export default {
    data() {
      return {
        show: false,
        // 默认时间，必填
        startTime: {
          time: '1990-01-01'
        },
        option: {
          type: 'day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January(一月)', 'February(二月)', 'March(三月)', 'April(四月)', 'May(五月)', 'June(六月)', 'July(七月)', 'August(八月)', 'September(九月)', 'October(十月)', 'November(十一月)', 'December(十二月)'],
          format: 'YYYY-MM-DD',
          color: {
            header: '#3f51b5',
            headerText: '#fff'
          },
          buttons: {
            ok: '确认',
            cancel: '取消'
          },
          overlayOpacity: 0.5, // 遮罩层的透明度 0-1
          dismissible: true // 点击遮罩层是否关闭
        },
        // 年份开始 - 结束
        limit: [
          {
            type: 'fromto',
            from: '1900-01-01',
            to: '2019-01-01'
          }
        ],
        result:'待选择'
      }
    },
    methods: {
      // 取消回调
      cancel() {
        console.log('cancel')
      },
      // 确认回调
      confirm(v) {
        alert(`您已选择时间${v}`)
        this.result = v
        this.show = false
      },
      // 切换日期时间回调
      change(v) {
        this.result = v
      },
      changeType(value){
        if (value){
          this.option.type = 'min'
          this.option.format = 'YYYY-MM-DD HH:mm'
        }else {
          this.option.type = 'day'
          this.option.format = 'YYYY-MM-DD'
        }
      }
    },
    components: {
      'v-date-calendar': dateCalendar
    }
  }
</script>

<style scoped>
  .hello {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .hello h1 {
    font-size: 1em;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    border-radius: 10px;
    padding: 10px 50px;
    box-sizing: border-box;
    background: -webkit-linear-gradient(left top, #67c8b7, #3577cd); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #67c8b7, #3577cd); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #67c8b7, #3577cd); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #67c8b7, #3577cd); /* 标准的语法（必须放在最后） */
    position: relative;
    color: #FFF;
  }

  .hello h1::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: 0px;
    border-color: #000;
    background-color: #000;
    border-radius: inherit;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .hello h1:active::before {
    opacity: 0.3;
  }
</style>
