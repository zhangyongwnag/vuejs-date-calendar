<template>
  <div class="hello">
    <h1 @click="show">{{ msg }}</h1>
    <component :is="componentPicker" :date="startTime" :option="option" :limit="limit" @change="chooiseDate"></component>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'click me !!!',
        componentPicker:'',
        startTime: {
          time: '1990-01-01'
        },
        option: {
          type: 'day',
          week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          month: ['January(一月)', 'February(二月)', 'March(三月)', 'April(四月)', 'May(五月)', 'June(六月)', 'July(七月)', 'August(八月)', 'September(九月)', 'October(十月)', 'November(十一月)', 'December(十二月)'],
          format: 'YYYY-MM-DD',
          placeholder: 'when?',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#3f51b5',
            headerText: '#fff'
          },
          buttons: {
            ok: '确认',
            cancel: '取消'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        limit: [
          {
          type: 'weekday',
          available: [1, 2, 3, 4, 5 , 6 , 0]
          },
          {
            type: 'fromto',
            from: '1900-01-01',
            to: '2019-01-01'
          }
        ],
      }
    },
    methods:{
      show(){
        this.componentPicker = () => import('./vue-datepicker-es6')
      },
      chooiseDate(value){
        console.log(value)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hello h1 {
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    border-radius: 10px;
    padding: 20px 100px;
    box-sizing: border-box;
    background: -webkit-linear-gradient(left top, #67c8b7, #3577cd); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #67c8b7, #3577cd); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #67c8b7, #3577cd); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #67c8b7, #3577cd); /* 标准的语法（必须放在最后） */
    position: relative;
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
