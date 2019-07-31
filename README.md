# vuejs-date-calendar
[![Vue](https://img.shields.io/badge/vue-2.5.2-brightgreen.svg)](https://github.com/vuejs/vue)
[![npm version](https://img.shields.io/npm/v/vuejs-date-calendar)](https://www.npmjs.com/package/vuejs-date-calendar)
[![CircleCI](https://img.shields.io/circleci/build/github/zhangyongwnag/vuejs-date-calendar/master)](https://circleci.com/gh/zhangyongwnag/workflows/vuejs-date-calendar)
[![GitHub](https://img.shields.io/github/license/zhangyongwnag/vuejs-date-calendar)](https://github.com/zhangyongwnag/vuejs-date-calendar/blob/master/LICENSE)

> A date-calendar for mobile (推荐手机浏览器打开)

## Demo
> [https://zhangyongwnag.github.io/vuejs-date-calendar/example/#/Home](https://zhangyongwnag.github.io/vuejs-date-calendar/example/#/Home)

## Installation

```shell
npm install --save vuejs-date-calendar

or

yarn add vuejs-date-calendar
```

```js
import Vue from 'vue'
import DateCalendar from 'vuejs-date-calendar'

Vue.use(DateCalendar)
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-date-calendar
    v-model="show"
    :date="startTime"
    :option="option"
    :limit="limit"
    @cancel="cancel"
    @confirm="confirm"
    @change="change">
</v-date-calendar>
```

## Api

|        Name        |  Type         |    Default Value    |                         Description                                                     |
| ------------------ | ------------- | ------------------- | ----------------------------------------------------------------------------------------|
| show               | Boolean       | false               | date calendar model.                                                                    |
| date               | Object        | require             | startTime = {time : '1990-01-01'}                                                       |
| option             | Object        | option              | option                                                                                  |
| limit              | Object        | limit               | limit                                                                                   |

## Events

|    Name    |    Arguments           |       Description        |
| -----------| -----------------------| ------------------------ |
| cancel     | value (String)         | cancel                    |
| confirm    | value (String)         | confirm                   |
| change     | value (String)         | change                    |

## option

|        Name        |  Type         |    Default Value    |                         Description                                                     |
| ------------------ | ------------- | ------------------- | ----------------------------------------------------------------------------------------|
| type               | String        | 'day'               | 'day' or 'min'                                                                    |
| week               | Array         | ['Mo', 'Tu'...],    | week arr ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],                                                    |
| month              | Array         | ['January',...],    | month arr ['January(一月)', 'February(二月)', 'March(三月)',]                                                                                  |
| format             | String        | 'YYYY-MM-DD'        | type == 'day' ? 'YYYY-MM-DD' : ''YYYY-MM-DD HH:mm''                                                                                 |
| color              | Object        | {...}               | { checked: '#F50057',header: '#3f51b5',headerText: '#fff'}                                                                                |
| buttons            | Object        | {...}               | { ok: 'OK',cancel: 'Cancel' }                                                                         |
| overlayOpacity     | String        | 0.5                 | overlay opacity : 0 - 1                                                                     |
| dismissible        | Boolean       | true                | click close overlay                                                                   |

## limit

|        Name        |  Type         |    Default Value    |                         Description                                                     |
| ------------------ | ------------- | ------------------- | ----------------------------------------------------------------------------------------|
| limit              | Array         | [],                 |  choice date cut {type: 'fromto',from: '1900-01-01',to: '2019-01-01'}                                                                         |
