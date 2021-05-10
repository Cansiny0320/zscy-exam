<template>
  <div class="card" :class="{ last: isLast }">
    <div class="time_info">
      <div class="week">
        {{ chineseWeekDate(examInfo.week, examInfo.weekday) }}
      </div>
      <div class="last_day">{{ lastDay(examInfo.date) }}</div>
    </div>
    <div class="content">
      <div class="main">
        <div class="subject">{{ examInfo.course }}</div>
        <div class="type">{{ examInfo.type }}</div>
      </div>
      <div class="info time">
        <div class="icon"></div>
        <div class="text">
          {{ dateString(examInfo.date) }} | {{ examInfo.begin_time }}-{{
            examInfo.end_time
          }}
        </div>
      </div>
      <div class="info place">
        <div class="icon"></div>
        <div class="text">{{ examInfo.classroom }} | {{ examInfo.seat }}号</div>
      </div>
    </div>
  </div>
</template>

<script>
import { now, interval } from '../shared/date'
export default {
  name: "card",
  props: {
    examInfo: Object,
    isLast: Boolean
  },
  methods: {
    chineseWeekDate(week, weekday) {
      const cnWeek = {
        "1": '第一周',
        "2": '第二周',
        "3": '第三周',
        "4": '第四周',
        "5": '第五周',
        "6": '第六周',
        "7": '第七周',
        "8": '第八周',
        "9": '第九周',
        "10": '第十周',
        "11": '第十一周',
        "12": '第十二周',
        "13": '第十三周',
        "14": '第十四周',
        "15": '第十五周',
        "16": '第十六周',
        "17": '第十七周',
        "18": '第十八周',
        "19": '第十九周',
        "20": '第二十周',
        "21": '第二十一周',
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
