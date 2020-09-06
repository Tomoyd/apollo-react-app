import echarts from 'echarts';
import React, {useEffect, useRef} from 'react';

const ReactEcharts = ({}) => {
  const echartsRef = useRef();

  useEffect(() => {
    const myChart = echarts.init(echartsRef.current);

    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  });

  return (
    <>
      <div ref={echartsRef} style={{height: '200px'}}>
        hello
      </div>
    </>
  );
};

export default ReactEcharts;
