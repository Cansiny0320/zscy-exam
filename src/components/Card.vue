<template>
  <div class="card">
    <div class="time_info">
      <div class="week">{{ chineseWeekDate(week, weekday) }}</div>
      <div class="last_day">{{ lastDay(date) }}</div>
    </div>
    <div class="content">
      <div class="main">
        <div class="subject">{{ course }}</div>
        <div class="type">{{ type }}</div>
      </div>
      <div class="info time">
        <div class="icon"></div>
        <div class="text">
          {{ dateString(date) }} | {{ begin_time }}-{{ end_time }}
        </div>
      </div>
      <div class="info place">
        <div class="icon"></div>
        <div class="text">{{ classroom }} | {{ seat }}号</div>
      </div>
    </div>
  </div>
</template>

<script>
import { now, interval } from '../shared/date'
export default {
  name: "card",
  props: {
    course: String,
    classroom: String,
    seat: String,
    week: String,
    weekday: String,
    begin_time: String,
    end_time: String,
    date: String,
    type: String,
    status: String
  },
  methods: {
    chineseWeekDate(week, weekday) {
      const cnWeek = {
        "1": '一',
        "2": '二',
        "3": '三',
        "4": '四',
        "5": '五',
        "6": '六',
        "7": '七',
        "8": '八',
        "9": '九',
        "10": '十',
        "11": '十一',
        "12": '十二',
        "13": '十三',
        "14": '十四',
        "15": '十五',
        "16": '十六',
        "17": '十七',
        "18": '十八',
        "19": '十九',
        "20": '二十',
        "21": '二十一',
      }
      const cnWeekDay = {
        "1": '周一',
        "2": '周二',
        "3": '周三',
        "4": '周四',
        "5": '周五',
        "6": '周六',
        "7": '周日',
      }
      return cnWeek[week] + cnWeekDay[weekday]
    },
    lastDay(date) {
      const today = now()
      const lastDay = interval(today, date)
      if (lastDay) {
        return `还剩${lastDay}天考试`
      } else if (lastDay === 0) {
        return '今天考试'
      } else {
        return '已结束'
      }
    },
    dateString(date) {
      const time = new Date(date)
      const month = time.getMonth() + 1;
      const day = time.getDate();
      return `${month}月${day}日`
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 303px;
  margin-right: 19px;
  margin-left: 53px;
  position: relative;
  margin-bottom: 25px;
  &.last {
    &::before {
      display: none;
    }
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 166px;
    border-left: 2px dotted rgba(41, 33, 209, 0.5);
    left: -25px;
    top: 7px;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    left: -32px;
    border: 5px solid rgba(41, 33, 209, 1);
    top: 5px;
    width: 5px;
    height: 5px;
    background: rgba(232, 241, 252, 1);
    border-radius: 50%;
  }
}
.time_info {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 7px;
  .week {
    font-size: 15px;
    font-weight: 600;
    color: #15315b;
  }
  .last_day {
    font-size: 13px;
    line-height: 10px;
    color: #3a39d3;
  }
}
.content {
  box-sizing: border-box;
  width: 100%;
  height: 113px;
  padding: 15px 18px 15px 23px;
  background: rgba(232, 241, 252, 0.7);
  border-radius: 8px;
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 10px;
    color: #15315b;
    margin-bottom: 10px;
    .type {
      font-size: 13px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #15315b;
    opacity: 0.59;
    margin-bottom: 16px;

    .icon {
      width: 11px;
      height: 11px;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 10px;
    }

    &.time {
      .icon {
        background-image: url('../assets/images/time.png');
      }
    }
    &.place {
      .icon {
        background-image: url('../assets/images/place.png');
      }
    }
  }
}
</style>
