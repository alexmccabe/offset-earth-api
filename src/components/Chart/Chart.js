import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';

let tmpData = [
  {
    id: 'japan',
    color: 'hsl(74, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 159,
      },
      {
        x: 'helicopter',
        y: 167,
      },
      {
        x: 'boat',
        y: 295,
      },
      {
        x: 'train',
        y: 116,
      },
      {
        x: 'subway',
        y: 92,
      },
      {
        x: 'bus',
        y: 8,
      },
      {
        x: 'car',
        y: 165,
      },
      {
        x: 'moto',
        y: 121,
      },
      {
        x: 'bicycle',
        y: 21,
      },
      {
        x: 'horse',
        y: 186,
      },
      {
        x: 'skateboard',
        y: 71,
      },
      {
        x: 'others',
        y: 125,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(322, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 143,
      },
      {
        x: 'helicopter',
        y: 184,
      },
      {
        x: 'boat',
        y: 160,
      },
      {
        x: 'train',
        y: 30,
      },
      {
        x: 'subway',
        y: 27,
      },
      {
        x: 'bus',
        y: 157,
      },
      {
        x: 'car',
        y: 229,
      },
      {
        x: 'moto',
        y: 275,
      },
      {
        x: 'bicycle',
        y: 177,
      },
      {
        x: 'horse',
        y: 58,
      },
      {
        x: 'skateboard',
        y: 153,
      },
      {
        x: 'others',
        y: 249,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(310, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 61,
      },
      {
        x: 'helicopter',
        y: 226,
      },
      {
        x: 'boat',
        y: 218,
      },
      {
        x: 'train',
        y: 12,
      },
      {
        x: 'subway',
        y: 160,
      },
      {
        x: 'bus',
        y: 48,
      },
      {
        x: 'car',
        y: 70,
      },
      {
        x: 'moto',
        y: 297,
      },
      {
        x: 'bicycle',
        y: 65,
      },
      {
        x: 'horse',
        y: 113,
      },
      {
        x: 'skateboard',
        y: 131,
      },
      {
        x: 'others',
        y: 220,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(31, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 104,
      },
      {
        x: 'helicopter',
        y: 159,
      },
      {
        x: 'boat',
        y: 133,
      },
      {
        x: 'train',
        y: 18,
      },
      {
        x: 'subway',
        y: 225,
      },
      {
        x: 'bus',
        y: 298,
      },
      {
        x: 'car',
        y: 152,
      },
      {
        x: 'moto',
        y: 225,
      },
      {
        x: 'bicycle',
        y: 216,
      },
      {
        x: 'horse',
        y: 186,
      },
      {
        x: 'skateboard',
        y: 291,
      },
      {
        x: 'others',
        y: 149,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(120, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 231,
      },
      {
        x: 'helicopter',
        y: 160,
      },
      {
        x: 'boat',
        y: 118,
      },
      {
        x: 'train',
        y: 73,
      },
      {
        x: 'subway',
        y: 218,
      },
      {
        x: 'bus',
        y: 212,
      },
      {
        x: 'car',
        y: 67,
      },
      {
        x: 'moto',
        y: 180,
      },
      {
        x: 'bicycle',
        y: 148,
      },
      {
        x: 'horse',
        y: 100,
      },
      {
        x: 'skateboard',
        y: 253,
      },
      {
        x: 'others',
        y: 203,
      },
    ],
  },
];

const Chart = props => {
  const { data, ...rest } = props;

  return (
    <div className="container" style={{ height: 700 }}>
      <ResponsiveLine
        curve="linear"
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        enableGridX={false}
        xScale={{
          type: 'point',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickValues: [],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 90,
          legend: 'trees planted by day',
          legendOffset: 36,
          legendPosition: 'middle',
          pointLabel: 'test',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        {...rest}
      />
    </div>
  );
};

Chart.propTypes = {
  ...ResponsiveLine.propTypes,
};

export default Chart;
