<template>
    <div class="analytics">
        <div class="focus">
            <div class="listTitle">FOCUS TIME</div>
            <div class="focus-times">
                <div>
                    <p class="focus-times-type">TODAY</p>
                    <i class="focus-times-count">20</i>
                    <i class="focus-times-total">/TOMATO</i>
                </div>
                <div>
                    <p class="focus-times-type">WEEK</p>
                    <i class="focus-times-count">108</i>
                    <i class="focus-times-total">/TOMATO</i>
                </div>
            </div>
        </div>
        <div class="chart">
            <div class="listTitle">
                CHART
                <div class="listTitle-controller">
                    <a href="javascript:;" class="listTitle-controller-btn">
                        <i class="material-icons">keyboard_arrow_left</i>
                    </a>
                    <p class="listTitle-controller-date">2019.7.1 - 2019.7.7</p>
                    <a href="javascript:;" class="listTitle-controller-btn">
                        <i class="material-icons">keyboard_arrow_right</i>
                    </a>
                </div>
            </div>
            <div id="chart"></div>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';
import * as c3 from 'c3';
import _ from 'lodash';

export default {
    data() {
        return {
            chart: null
        }
    },
    computed: {
        chartData() {
            return [16, 12, 16, 8, 12, 4, 18]
        },
        status() {
            return this.$store.state.clock.status;
        },
    },
    watch: {
        status() {
            this.chart.flush();
        }
    },
    methods: {
        initChart() {
            let _this = this;
            _this.chart = c3.generate({
                data: {
                    type: 'bar',
                    columns: [
                        ['data1'].concat(_this.chartData),
                    ],
                    color(color, d) {
                        let max = _.max(_this.chartData);
                        let maxColor = _this.status === 'work' ? '#FF4384' : '#00A7FF';
                        return d.value === max ? maxColor : '#fff';
                    }
                },
                bar: {
                    width: {
                        ratio: 0.5 // this makes bar width 50% of length between ticks
                    }
                },
                legend: {
                    show: false
                },
                tooltip: {
                    show: false
                },
                axis: {
                    x: {
                        type: 'category',
                        categories: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
                    },
                }
            });
        }
    },
    mounted() {
        this.initChart();
    }
}
</script>