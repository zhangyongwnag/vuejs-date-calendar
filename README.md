# vuejs-date-calendar
[![Vue](https://img.shields.io/badge/vue-2.5.2-brightgreen.svg)](https://github.com/vuejs/vue)
[![npm version](https://img.shields.io/npm/v/vuejs-date-calendar)](https://www.npmjs.com/package/vuejs-date-calendar)
[![CircleCI](https://img.shields.io/circleci/build/github/zhangyongwnag/vuejs-date-calendar/master)](https://circleci.com/gh/zhangyongwnag/workflows/vuejs-date-calendar)
[![GitHub](https://img.shields.io/github/license/zhangyongwnag/vuejs-date-calendar)](https://github.com/zhangyongwnag/vuejs-date-calendar/blob/master/LICENSE)



## Installation

```shell
npm install --save vuejs-date-calendar

or

yarn add vuejs-date-calendar
```

```js
import Vue from 'vue'
import vuejs-date-calendar from 'vuejs-date-calendar'

Vue.use(vuejs-date-calendar)
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<v-date-calendar
        date="time"
        v-model="show">
</v-date-calendar>
```

## Properties

|        Name        |  Type         |    Default Value    |                         Description                                                    |
| ------------------ | ------------- | ------------------- | -------------------------------------------------------------------------------------- |
| datetime (model)   | Date/String   |                     | Time picker model.                                                                     |
| disabled           | Boolean       | false               | Input is disabled.                                                                     |
| label              | string        |                     | Sets input label.                                                                      |
| width              | Number        | 320                 | The width of the content.                                                              |
| format             | string        | YYYY-MM-DD HH:mm:ss | Defines the format of a datetime displayed in field.                                   |
| timePickerFormat   | string        | 24hr                | Defines the format of a time displayed in picker. Available options are ampm and 24hr. |
| locale             | string        | en-us               | Sets the locale. Accepts a string with a BCP 47 language tag.                          |
| okText             | string        | OK                  | Sets the text of the ok button.                                                        |
| clearText          | string        | CLEAR               | Sets the text of the clear button.                                                     |
| loading            | Boolean | false | see [Vuetify Docs](https://vuetifyjs.com/zh-Hans/components/text-fields "Vuetify Docs") |
| errorMessages      | String/Array | | see [Vuetify Docs](https://vuetifyjs.com/zh-Hans/components/text-fields "Vuetify Docs") |
| errorCount         | Number/String | 1 | see [Vuetify Docs](https://vuetifyjs.com/zh-Hans/components/text-fields "Vuetify Docs") |
| error              | Boolean | false | see [Vuetify Docs](https://vuetifyjs.com/zh-Hans/components/text-fields "Vuetify Docs") |
| hideDetails        | Boolean | false | see [Vuetify Docs](https://vuetifyjs.com/zh-Hans/components/text-fields "Vuetify Docs") |
| appendIcon         | String | | see [Vuetify Docs](https://vuetifyjs.com/zh-Hans/components/text-fields "Vuetify Docs") |
| prependIcon        | String | | see [Vuetify Docs](https://vuetifyjs.com/zh-Hans/components/text-fields "Vuetify Docs") |

## Events

|    Name    |    Arguments           |       Description        |
| -----------| -----------------------| ------------------------ |
| input      | value (Date/String)    | The updated bound model  |

## Slots

|    Name    |       Description                         |
| -----------| ----------------------------------------- |
| dateIcon   | Slot to put custom icon in the date tab.  |
| timeIcon   | Slot to put custom icon in the time tab.  |
| actions    | Slot to put custom buttons in the dialog. |
